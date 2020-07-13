var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*
  This is the cleaning script. 
  I didn't know where to put it within the Express files, but it is in index for ease of running/checking.
  Let me know where it should be moved. :-)

  Also, does the process.env file have to be in the same folder as the file where we need the api key?
*/
require('dotenv').config();

var Airtable = require('airtable');

// something is wrong lolll
var base = new Airtable({apiKey: 'process.env.REACT_APP_API_KEY'}).base('apph04l0UExzLb3mQ');

// >> Get records from old table 
base('HS').select({view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
  // This function ('page') will get called for each page of records.
  var currentID;
  var city;
  var collegeCity;
  records.forEach(function(record) {
    if(!(record.get('CityHS') === "") || !(record.get('CollegeCity') === "")){
      if(record.get('CityHS') != 'Washington, D.C.'){
        city = record.get('CityHS').split(',')[0]
      }
      else {
        city = record.get('CityHS');
      }
      if(record.get('CollegeCity') != 'Washington, D.C.'){
        collegeCity = record.get('CollegeCity').split(',')[0];
      }
      else {
        collegeCity = record.get('CollegeCity');
      }
      currentID = record.id;
     // console.log('CLEANING:', record.id, record.get('UniqueID')); // NOTE: trying to see how the code will grab the records
      base('HS').update([
        {
          "id": currentID,
          "fields": {
            "CollegeCity": collegeCity,
            "CityHS": city,
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('UniqueID'), 'is from', record.get('CityHS'), 'and goes to college in', record.get('CollegeCity'));
        });
      });
    }
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});
// >> End

/* 
1. pull all the Airtable records of fields CollegeCity and CityHS 
2. go through each 
    2.1. if any have "," splice the string and only keep the stuff before the comma UNLESS its Washington, D.C.
    2.2. Change "Hts" to "Heights"
    2.3. Change "NYC" to "New York"
    2.4. If any have "/", splice string and delete everything before "/"
3. Some unique cases to look at: Granville OH, cells with "(" or ")", South San Francisco
*/