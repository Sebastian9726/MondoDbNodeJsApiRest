import { Router } from 'express'
import { ObjectID } from 'mongodb'
import { connectDBA } from '../databaseAtlas'
import { donationS } from '../../models/donation'

import InsertList from '../controlller/donationController'
const router = Router();
const donationm = new donationS();
// toda la lista
router.get('/', async (req, res) => {
    const { id } = req.params
    console.log(id);
    const db = await connectDBA();
    // consultar todos los datos de la base de datos
    const result = await db.collection('donation').find({}).toArray();
    res.json(result);
});

// lita con limite de la primera cantidad de datos dados por c
router.get('/limit/:a', async (req, res) => {
    const { a } = req.params
       const db = await connectDBA();
   
   // ordenar la base de datos con limite 10
   const  limitd = await db.collection('donation').find({}).limit(parseInt(a)).toArray();

    res.json(limitd);
});

// lita ordenada asecendente id = 1  o decendente = cualquier otro valor
router.get('/sort/:a', async (req, res) => {
    const { a } = req.params
    var b;
    if (a == "1"){ 
        b =1} else{b = -1} 
    console.log(b);
    const db = await connectDBA();
   
   const  orderd = await db.collection('donation').find({}).sort({_id:b}).toArray();
  
  
    res.json(orderd);
});

// saltar datos de la lista cantidad dada por a
router.get('/skip/:a', async (req, res) => {
    const { a } = req.params
    console.log(a);
    const db = await connectDBA();
   
// ordenar la base de datos con saltar a
const  skipd = await db.collection('donation').find({}).skip(parseInt(a)).toArray();

    res.json(skipd);
});

router.post('/',InsertList );

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
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