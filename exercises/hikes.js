// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/hikes');

// let hikeSchema = new mongoose.Schema ({
//   name: String,
//   phone: String,
//   closes: String
// });
// let Hike = mongoose.model('HikingTrail', hikeSchema);

// let newHike = new Hike ({
//   name: 'Charles River Res',
//   closes: '6:30pm',
//   phone: '617-727-4700'
// });
// // newHike.save((err, hike) => {
// //   if(err){
// //     console.log('SOMETHING WENT WRONG');
// //   }else {
// //     console.log('I SAVED MY FIRST HIKE TO THE DATABASE: ');
// //     console.log(hike);
// //   }
// // });
// Hike.find({}, (err, hike) =>{
//   if(err) throw err;
//   console.log(hike);
// });