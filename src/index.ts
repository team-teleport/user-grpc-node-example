import express from 'express';
import { getUserInfoByUserId } from './controller/userController';
const app = express();
const port = 8000;

app.use(express.urlencoded());
app.use(express.json());

app.post("/user", getUserInfoByUserId);

app.listen(port, () => { console.log(`app listening on port ${port}`); });