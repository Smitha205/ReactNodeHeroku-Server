const express = require ('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use("/",postRouter);


db.sequelize.sync().then(()=>{
    app.listen(9000, ()=>{
        console.log("Server Running on port 9000");
    });
});
