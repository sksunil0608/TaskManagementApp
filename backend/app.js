import express from 'express';
import cors from "cors";
import connect from './database/connection.js';
import bodyParser from 'body-parser';

import taskRoute from './routes/tasks.js';

const app = express();

/** middlewares */
app.use(cors({ origin: ['http://localhost:3000',"http://127.0.0.1:3000'"] }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** HTTP Requests */
app.use(taskRoute)



const port = process.env.PORT || 4000;
/** start server */
const startServer = async ()=>{
    try{
        await connect();
        app.listen(port);
        console.log(`Server Connected  to http://localhost:${port}`)
    }
    catch(error){
        console.log("An error occured during starting of server",error)
    }
}
startServer()
