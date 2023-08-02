const Model = require('./../models/models');
const CatchErr =require('./../utils/catchErr')
const errorHandler = require('./../utils/errorHandler');


exports.getAllModels = CatchErr(async(req,res,next) =>{
    // try{
         const models = await Model.find();
         res.status(200).json({
            status:'success',
            total: models.length,
            data:{
                models
            }
         })
    // }
    
    // catch(err){
    //     res.status(500).json({
    //         status:'fail',
    //         message:err
    //     });
    // }
})


exports.getAllMaleModels= async(req,res) =>{
    try{
        const maleModels = await Model.find({gender:"male"});
        res.status(200).json({
           status:'success',
           total: maleModels.length,
           data:{
               maleModels
           }
        })
   }catch(err){
       res.status(500).json({
           status:'fail',
           message:err
       });
   }
}

exports.getAllFemaleModels = async(req,res) =>{
    try{
        const femaleModels = await Model.find({gender:"female"});
        res.status(200).json({
            status:"success",
            total: femaleModels.length,
            data:{
                femaleModels
            }
        })

    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err
        })
    }
}

exports.getModel = async(req,res) =>{
    try{
        const model = await Model.findById(req.params.id);
        res.status(200).json({
            status:'success',
            data:{
                model
            }
        })

    }catch(err){
       res.status(500).json({
        status:"fail",
        meessage:err
       })
    }
}