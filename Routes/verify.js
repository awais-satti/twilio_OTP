const router = require('express').Router()
const client = require('../config/twilio')
const num = "+923475313847";
const code = "041956";

//verify code
router.get('/',async(req,res)=>{
    try{
        const result = await client.verify.services("VA524b46029d4ba85b7366f88bbe8bbdd0").verificationChecks.create({
            to:num,
            code:code
        })
        console.log(result)
        res.json({
            mesaage : 'verified succefully',
            Result : result
        })
    }
    catch(err){
        res.json({
            Error:err
        })
    }
    
    })

    module.exports = router;