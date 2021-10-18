var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var {buildSchema} = require('graphql');
const sqlite3 = require('better-sqlite3');

let db = sqlite3('../data/database.db', {});

var schema = buildSchema(`
  type Query {
    hello(id: String): String
    allArtists: [Artist]
    allGenres: [Genre]
    genres(genreIds: [Int]): [Genre]
  }
  type Artist {
    id: Int
    name: String
  }
  type Genre {
    id: Int
    name: String
  }
`);

var root = {
    hello: ({id}) => {
        return 'Hello ' + id;
    },
    allArtists: () => {
        return db.prepare('SELECT * FROM Artist')
            .all()
            .map((record) => {
                return {
                    id: record.ArtistId,
                    name: record.Name
                };
            });
    },
    allGenres: () => {
        return db.prepare('SELECT * FROM Genre')
            .all()
            .map((record) => {
                return {
                    id: record.GenreId,
                    name: record.Name
                };
            });
    },
    genres: ({genreIds = []}) => {
        // const results = genreIds.length > 0 ?
        //   db.prepare('SELECT * FROM Genre WHERE genreId IN (?)').all(genreIds) :
        //   db.prepare('SELECT * FROM Genre').all();
        return db.prepare('SELECT * FROM Genre')
          .all()
          .filter((record) => genreIds.includes(record.GenreId))
          .map((record) => {
              return {
                  id: record.GenreId,
                  name: record.Name
              };
          });
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(5000);
console.log('Running a GraphQL API server at http://localhost:5000/graphql');
