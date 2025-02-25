import { createClient } from "@libsql/client";

export const turso = createClient({
    url: 'libsql://usuarios-lukodo.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDA1MTU0MTYsImlkIjoiNzZiNmVlN2UtZjdhZC00YjllLWE5NDgtZDY2Yjk2YjYyNmMxIn0.3sFSDnPOrf3tsZc_o7St42v5NWpw4ape7ob-jEzWwbZdPYkiGpByX8YCefR7CAWMYPcxjVh29gHUhDVM5D52BQ',
})