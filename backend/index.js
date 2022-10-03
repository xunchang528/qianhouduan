import express  from "express";
import cors from "cors"
import 'dotenv/config'
import bodyParser  from "body-parser";
import { login, register } from "./src/api/index.js";


const app =express()
app.use(cors())


const jsonParser = bodyParser.json()

app.post('/api/register',jsonParser,register)
app.post('/api/login', jsonParser,login )

const port = process.env.PORT || 9090

app.listen(port, ()=> {
  console.log(`http://localhost:${port}`);
})