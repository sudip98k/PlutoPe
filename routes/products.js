const router = require('express').Router();
const Product=require('../models/Product');

//Create 

router.post('/create-new',async (req, res)=>{
    const newProduct= new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})
//GET ALL PRODUCT

router.get('/', async (req, res)=>{
    const qNew=req.query.new;
    const qCatagory=req.query.catagory;
    try {
        let products;
        if(qNew){
            products=await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCatagory){
            products=await Product.find({
                categories:{
                    $in:[qCatagory]
                },
            })
        }else{
            products = Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports =router;