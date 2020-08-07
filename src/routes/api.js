const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
//mongodb+srv://user_liba:<password>@mycluster01.2whql.azure.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongoose.connect('mongodb://localhost:27017/productDb');
mongoose.connect('mongodb://localhost:27017/bloodbankdb');
// const db='mongodb+srv://user_liba:bibinpwd@mycluster01.2whql.azure.mongodb.net/bloodbankdb?retryWrites=true&w=majority';

// mongoose.connect(db,function(err){
//     if(err){
//         console.error('Error!' + err)
//     }else{
//         console.log('Connected to mongodb')
//     }
// });
const donarData = require('../model/donardata');
const recipientData = require('../model/recipientdata');

const User = require('../model/userdata');
//const cors =  require('cors');
//var bodyparser = require('body-parser');

const jwt=require('jsonwebtoken');
//var app = new express();

//app.use(bodyparser.json());
//app.use(cors());

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token ==='null'){
        return res.status(401).send('unauthorized request')
    }
        let payload =jwt.verify(token,'secretkey')
        if(!payload){
            return res.status(401).send('unauthorized request')
        }
        req.userId =payload.subject;
        
  next()
    }
    router.get('/donars',function(req,res){
    res.header("Access-control-Allow-Origin","*")
    res.header("Access-control-Allow-Methods : GET ,POST ,POTCH ,PUT ,DELETE ,OPTIONS");
    donarData.find()
              .then(function(donars){
res.send(donars);
              });

});
router.post('/add-donar',verifyToken, function(req,res){
     res.header("Access-control-Allow-Origin","*")
     res.header("Access-control-Allow-Methods : GET ,POST ,POTCH ,PUT ,DELETE ,OPTIONS");
     console.log(req.body);
            var donar ={

                
                donarName: req.body.donar.donarName,
                
                donarSex: req.body.donar.donarSex,
                donarMobileno: req.body.donar.donarMobileno,
                donarDistrict: req.body.donar.donarDistrict,
                donarEmail: req.body.donar.donarEmail,
                donarWeight: req.body.donar.donarWeight,
                donarHeight: req.body.donar.donarHeight,
                donarBloodGroup: req.body.donar.donarBloodGroup,
                donarBloodDonationHistory: req.body.donar.donarBloodDonationHistory,
                donarDiseaseBackground: req.body.donar.donarDiseaseBackground,
                donarLastDonateDate: req.body.donar.donarLastDonateDate
                
            }
var donar =new donarData(donar);
donar.save();
 });
  router.get('/edit/:id',function(req,res){

    donarData.findById(req.params.id,(err,data)=>{
        if (!err) {return res.send(data)}
        else { console.log('Error in retireiving donar details for updation')}
    });
 
 
 
 router.post('/update/:id',function(req,res){
    donarData.findByIdAndUpdate(req.params.id,
          { $set: req.body },
                 (err,data)=>{
                     if (!err) { res.status(200).send(data);
                                 console.log('Product update successfull')}
                     else { console.log('Error in employee update' + err)}
                 })
 })
     })
 
     router.delete('/delete/:id',(req,res)=>{
        donarData.findByIdAndDelete(req.params.id,(err,doc)=>{
          if(err){
             console.log(err);
             res.send(err);
         }else{
         res.send(doc);
          console.log('deleted donar');
      }
             })
  })
  router.get('/recipients',function(req,res){
    res.header("Access-control-Allow-Origin","*")
    res.header("Access-control-Allow-Methods : GET ,POST ,POTCH ,PUT ,DELETE ,OPTIONS");
    recipientData.find()
              .then(function(recipients){
res.send(recipients);
              });

});
router.post('/add-recipient',verifyToken, function(req,res){
    res.header("Access-control-Allow-Origin","*")
    res.header("Access-control-Allow-Methods : GET ,POST ,POTCH ,PUT ,DELETE ,OPTIONS");
    console.log(req.body);
           var recipient ={


            recipientName: req.body.recipient.recipientName,
            recipientSex: req.body.recipient.recipientSex,
            recipientMobileno: req.body.recipient.recipientMobileno,
            recipientDistrict: req.body.recipient.recipientDistrict,
            recipientEmail: req.body.recipient.recipientEmail,
            recipientBloodGroup: req.body.recipient.recipientBloodGroup
              
               
           }
var recipient =new recipientData(recipient);
recipient.save();
});
router.get('/editing/:id',function(req,res){

    recipientData.findById(req.params.id,(err,data)=>{
        if (!err) {return res.send(data)}
        else { console.log('Error in retireiving recipient details for updation')}
    });
 
 
 
 router.post('/updating/:id',function(req,res){
    recipientData.findByIdAndUpdate(req.params.id,
          { $set: req.body },
                 (err,data)=>{
                     if (!err) { res.status(200).send(data);
                                 console.log('Recipient update successfull')}
                     else { console.log('Error in Recipient update' + err)}
                 })
 })
     })
 
     router.delete('/deleting/:id',(req,res)=>{
        recipientData.findByIdAndDelete(req.params.id,(err,doc)=>{
          if(err){
             console.log(err);
             res.send(err);
         }else{
         res.send(doc);
          console.log('deleted recipient');
      }
             })
  })
 router.post('/register',(req, res) => {
    let userdata =req.body
 let user = new User(userdata)
 user.save((err ,registeredUser) => {
        if(err){
            console.log(err)
        }
        else{
            // res.status(200).send(registeredUser)
            let payload ={subject: user._id}
            let token= jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})
router.post('/login',(req,res)=>{
    let userdata =req.body
    User.findOne({email:userdata.email }, (err,user) =>{
        if(err){
            console.log(err)
        }else{
            if(!user) {
                res.status(401).send('invalid email')
            }
            else
            if(user. password != userdata.password){
               res.status(401).send('invalid password')
            }else{
                // res.status(200).send(user);
               

                let payload ={subject: user._id}
            let token= jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
            }

            }
        
    })
})
module.exports = router;
