// Javascript assincrono
// await async

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://zandorduarte:67271746Zd.@projeto-spotify.d8wqs.mongodb.net/?retryWrites=true&w=majority&appName=Projeto-Spotify";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);
