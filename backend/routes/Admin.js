const express = require("express");
const app = express();
const adminmodel = require("../models/Admin");

app.get("/api/admin", async (req, res)=>{
    try{
        let admins = await adminmodel.find({});
        res.send(admins);
    }
    catch(error){
        console.log(error);
    }
});

app.delete("/api/admin/:id", async(req, res)=>{
    adminmodel.findByIdAndDelete({_id: req.params.id}).then((data)=>res.send(data)).catch((e)=>console.log(e));
})

module.exports = app;