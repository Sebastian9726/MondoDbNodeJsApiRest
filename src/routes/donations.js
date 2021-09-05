import { Router } from 'express'
import { ObjectID } from 'mongodb'
import { connectDBA } from '../databaseAtlas'
import { donationS } from '../../models/donation'

import InsertList from '../controlller/donationController'
const router = Router();

router.get('/', async (req, res) => {
    const db = await connectDBA();
    const result = await db.collection('donation').find({}).toArray();
    res.json(result);
});

router.post('/',InsertList );

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connectDBA();
    const result = await db.collection('donation').findOne({ _id: ObjectID(id) });
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connectDBA();
    const result = await db.collection('donation').remove({ _id: ObjectID(id) });
    res.json({
        message: `Donation ${id} Deleted`,
        result
    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const donationm = new donationS();
       
    const errors = [];
       if (!element[i].id) {
       errors.push({ text: "Please Write a id." });
       }
       if (!element[i].first_name) {
       errors.push({ text: "Please Write a first name" });
       }
       if (!element[i].last_name) {
       errors.push({ text: "Please Write a last name" });
       }
       if (!element[i].donations) {
       errors.push({ text: "Please Write a donation" });
       }
       if (!element[i].total) {
       errors.push({ text: "Please Write a total" });
       }
       if (!element[i].image) {
       errors.push({ text: "Please Write a url image" });
       }
       if (!element[i].description) {
       errors.push({ text: "Please Write a description" });
       }
       if (errors.length > 0) {
        listerror.push(errors);
       } else {
       }
    
    const donation = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        donations: req.body.donations,
        total: req.body.total,
        image: req.body.image,
        desciption: req.body.description
        
    };
    const db = await connectDBA();
    const result = await db.collection('donation').updateOne({ _id: ObjectID(id) }, {$set: donation });
    res.json({
        message: `Donation ${id} Updated`
    });
});

export default router;