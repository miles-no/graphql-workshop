# Oppgåver

Lag eit GraphQL-API som lever data til Jukebox-appen. database.db inneheld data om artistar, sjangerar og låtar o.l.

Du veljer sjølv kva språk du vil bruke. Om du vil bruka Node kan du t.d. bruka følgjande pakkar:
`npm install better-sqlite3 express express-graphql graphql sqlite3 --save`

Web-appen er bygd i React og satt opp til å bruke Apollo (https://www.apollographql.com/docs/react/get-started/) for å integrera med API-et.

Ressursar:
- https://graphql.org/
- https://www.apollographql.com/
- https://www.howtographql.com/

Lag API for å:
- Hente alle sjangerar
- Hente alle låtar (Tracks) for ein gitt sjanger
- Hente eit gitt album, med låtar og reviews
- Hente ein gitt artist
