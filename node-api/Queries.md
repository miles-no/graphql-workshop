# Queries

```graphql
query {
  genres(genreIds: [1, 2]) {
    id
    name
    tracks {
      id
      name
    }
  }
}

mutation {
  saveArtist(artist: {
    name: "Ola"
  }) {
    id
    name
  }
}
```

