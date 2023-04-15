const express=require('express');
const port=4000;
const db=require('./config/mongoose');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const productRoute=require('./routes/products');
const app=express();


app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
    
});

