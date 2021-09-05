import { donationS } from '../../models/donation'
import { connectDBA } from '../databaseAtlas'
 async function InsertList (req, res) {
  
    const db = await connectDBA();
    const donationm = new donationS();
    const element  = req.body
    const listdonation =[]
    const listerror =[]
   for(var i = 0; i<element.length;i++ ){
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
        donationm.id = element[i].id;
        donationm.first_name= element[i].first_name,
        donationm.last_name = element[i].last_name,
        donationm.donations= element[i].donations,
        donationm.total= element[i].total,
        donationm.image= element[i].image,
        donationm. desciption= element[i].description
        listdonation.push(donationm)
        }
   };
   
  
   if (listerror.length > 0) {
    res.json(listerror)
     }
   else{
    const result = await db.collection('donation').insertMany(listdonation);
    res.json(result.ops[0])
   }
   
   
}

export default InsertList;