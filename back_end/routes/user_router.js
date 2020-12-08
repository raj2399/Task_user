var user=require('../model/user_models');
var express = require('express');
var router = express.Router();

router.post('/login',function(req,res,next){
    user.login(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
})

router.post('/signup',function(req,res,next){
    user.signup(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
})

router.post('/addDetails',function(req,res,next){
    user.addDetails(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
})

router.get('/:email_id?',function(req,res,next){
    if(req.params.email_id)
    {
        user.getUserById(req.params.email_id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
    else
    {
        user.getAll(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
    
})
module.exports=router;