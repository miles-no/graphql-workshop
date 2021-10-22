// import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const sqlite3 = require('better-sqlite3');

let db = sqlite3('../data/database.db', {});

const typeDefs = gql`
    type Query {
        hello: String
        artists: [Artist]
        genres(genreIds: [Int]): [Genre]
    }
    type Artist {
        id: Int
        name: String
    }
    type Genre {
        id: Int
        name: String
        tracks: [Track]
    }
    type Track {
        id: Int
        name: String
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    artists: () => {
      return db.prepare('SELECT * FROM Artist')
        .all()
        .map((record) => {
          return {
            id: record.ArtistId,
            name: record.Name,
          };
        });
    },
    genres: (parent, { genreIds }, context, info) => {
      return db.prepare('SELECT * FROM Genre')
        .all()
        .filter((record) => genreIds === undefined || genreIds.includes(record.GenreId))
        .map((record) => {
          return {
            id: record.GenreId,
            name: record.Name,
          };
        });
    },
  },
  Genre: {
    tracks: ({ id: genreId }, args, context, info) => {
      return db.prepare('SELECT * FROM Track WHERE GenreId = ?')
        .all(genreId)
        .map((record) => {
          return {
            id: record.TrackId,
            name: record.Name,
          };
        });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 5000 }, () =>
    console.log('Now browse to http://localhost:5000' + server.graphqlPath),
  );
});


