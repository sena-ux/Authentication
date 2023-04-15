import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import db from "./config/database.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize";


dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});


app.use(session ({
    secret : process.env.SESSISON_SECRET,
    resave : false,
    saveUninitialized : true,
    store: store,
    cookie : {
        secure : 'auto'
    }
}));


// (async()=>{
//     await db.sync();
// })();


app.use(cors ({
    credentials : true,
    origin : 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, (error, result) =>{
    console.log(`Server is running port ${process.env.APP_PORT}`);
});

