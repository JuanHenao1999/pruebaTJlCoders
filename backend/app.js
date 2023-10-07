import express from "express";
import cors from 'cors'

import db from "./database/db.js";
import userRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/login', userRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a mysql');
} catch (error) {
    console.log(`El error de la conexion es: ${error}`);
}

app.listen(4000, () => {
    console.log('server Up running in http://localhost:4000');
})