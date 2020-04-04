import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Connection, createConnection } from 'typeorm'

const app = express()
const port: string | number = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create DB connection
// (async () => {
//     const connection: Connection = await createConnection()
//     if (connection.isConnected) {
//         console.log(`Connection to ${connection.name} is succesfull`)
//     }    
// })()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(' / API is working')
})

app.listen(port, () => {
    console.log(`server started, listening on port ${port}`)
})
