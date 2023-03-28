const express= require("express");
const res = require("express/lib/response");
const app= require('fs');
const winston= require('winston');
const logger = winston.createLogger({
    level:'info',
    format: winston.format.json(),
    defaultMeta: {service: 'calculate-service'},
    transport: [
        new winston.transport.File({ filename: 'error.log', level: 'error'}),
        new winston.transport.File({ filename: 'combined.log'}),
    ],
});

if(ProcessingInstruction.enc,NODE_ENV !=='production'){
    logger.add(new winston,transport.Console({
        format:winston.format.simple(),
    }))
}


const express= require("express")
const res = require("express/lib/response");
const app= express();
const add=(n1,n2) => {
    return n1+n2;
}

app.get("/add" , (req,res) => {
    try{
        const n1= parseFloat(req.query.n1);
        const n2= parseFloat(req.query.n2);
        if(isNaN(n1)){
            logger.error('"n1 is incorrectly defined');
            throw new Error("n1 incorrectyl defined");

        }
        if(isNaN(n2)){
            logger.error('"n2 is incorrectly defined');
            throw new Error("n2 incorrectly defined");
        }

        
        logger.info('Parameters '+n1+ 'and ' + n2+ 'receiverd for addition');
        const result = add(n1,n2);
        res.status(200).json({statuscocde:200, data:result});        
    } catch(error) {
        console.error(error)
        res.statue(500).json({statuscocde:500,msg:error.toString() })
    }
});

const port=3040;
app.listen(port,() =>{
    console.log("hello i'm listening to port" + port);
});