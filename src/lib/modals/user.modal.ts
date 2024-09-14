import { Schema, model, models } from "mongoose";


const JobOfferSchema = new Schema({
   companyName: {
       type: String,
       required: true
   },
   location: {
       type: String,
       required: true
   },
   baseSalary: {
       type: Number,
       required: true
   },
   bonus: {
       type: Number,
       default: 0
   },
   signOnBonus: {
       type: Number,
       default: 0
   },
   relocationAmount: {
       type: Number,
       default: 0
   },
   otherExpenses: {
       type: Number,
       default: 0
   },
   equityDetails: {
       type: String,
       default: ''
   },
});


const UserSchema = new Schema({
   clerkID: {
       type: String,
       required: true,
       unique: true,
   },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   username: {
       type: String,
       unique: true,
   },
   photo: {
       type: String,
       required: true,
   },
   firstname: {
       type: String,
   },
   lastName: {
       type: String,
   },
   jobOffers: [JobOfferSchema],
});


const User = models?.User || model("User", UserSchema);


export default User;

