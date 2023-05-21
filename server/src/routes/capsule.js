const router = require('express').Router();
const Capsule = require('../models/Capsule');
const getData = require('../helpers/getdata');
const fetchUser = require('../middlewares/fetchUser')

//Route-1: To load the data into database just hit once when initializing the application from postman or any other tool to store the data into data base
router.post('/load-data', async(req, res)=>{
    try {
        const data = await getData();
        const capsules = Capsule.create(data);
        return res.status(201).json({
            status: 'success',
            message: 'data loaded successfully'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: error.message
        })
    }
})

//Route: 2 to get all the capsules with search functionality
router.get('/', fetchUser, async(req, res)=>{
    try {
        const {search = false, capsule_id, status, details} = req.query;
        let data;
        let conditions = [];
        if(search){
            if(capsule_id){
                conditions.push({capsule_id});
            }

            if(status){
                conditions.push({status});
            }
            if(details){
                conditions.push({details: {'$regex': details, '$options': 'i'}});
            } 
        }
        //check if we have any condition
        if(conditions.length > 0){
            data = await Capsule.find({$and: conditions});
        }else{
            data = await Capsule.find();
        }
        return res.status(200).json({
            status: 'success',
            length: data.length,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: error.message
        })
    }
})

module.exports = router;