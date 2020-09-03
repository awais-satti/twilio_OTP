const router = require('express').Router()
const client = require('../config/twilio')
const num = "+92*********";
const channel = 'sms';

//send code to phone
router.get('/',async(req,res)=>{
    try{
        const result = await client.verify.services(SERVICE_ID).verifications.create({
            to:num,
            channel:channel
        })
        console.log(result)
        res.json({
            mesaage : 'send succefully',
            Result : result
        })
    }
    catch(err){
        res.json({
            Error:err
        })
    }
    
    })

module.exports = router