import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import db from "./config/database.js";


dotenv.config();
const app = express();

app.use(session ({
    secret : process.env.SESSISON_SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        secure : 'auto'
    }
}));




(async()=>{
    await db.sync();
})();


app.use(cors ({
    credentials : true,
    origin : 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);

app.listen(process.env.APP_PORT, (error, result) =>{
    console.log(`Server is running`);
});