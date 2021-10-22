# Oppgåver

Lag eit GraphQL-API som lever data til Jukebox-appen. Fila data/database.db inneheld data om artistar, sjangerar, låtar, reviews o.l. Bruk denne om du vil ha mykje data, men ingen kjem til å drepa deg om du vil bruka statiske data i hashmaps runtime. :)

Du veljer sjølv kva språk du vil bruke. Om du vil bruka Node (https://graphql.org/code/#javascript) kan du t.d. bruka følgjande oppsett:
[Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/) (kanskje enklast å koma i gong med): `npm install better-sqlite3 express apollo-server-express graphql sqlite3 --save`
Eller GraphQL.js: `npm install better-sqlite3 express express-graphql graphql sqlite3 --save`

Web-appen er bygd i React og satt opp til å bruke Apollo (https://www.apollographql.com/docs/react/get-started/) for å integrera med API-et. Avhengig av kor ram du er på React kan det vera lurt å starta med APIet før du ser på korleis.

Ressursar:
- https://graphql.org/
- https://www.apollographql.com/
- https://www.howtographql.com/

Lag API for å:
- Hente alle sjangerar
- Hente alle låtar (Tracks) for ein gitt sjanger
- Hente eit gitt album, med låtar og reviews
- Hente ein gitt artist
- Lagre review
