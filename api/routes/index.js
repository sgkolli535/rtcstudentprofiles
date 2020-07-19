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
*/

require('dotenv').config();
var Bottleneck = require("bottleneck")
var Airtable = require('airtable')

var base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base(process.env.REACT_APP_BASE); 
const limiter = new Bottleneck({minTime: 1000/5}) // 5 requests per second

base('HS').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.
  var name, email, college, collegeCity, collegeState, collegeCountry, gradPd, prevInternship, spons, hometown, 
  hsName, hsGrad, cityHS, stateHS, countryHS, prevCourse;

  records.forEach(function(record) {
    name = record.get('UniqueID').split('(')[0]; // only keep name
    name = name.replace(/([a-z])([A-Z])/g, '$1 $2');; // add space btwn lower case and upper case letters
    email = record.get('UniqueID').split('(')[1].split(')')[0];// remove parantheses from email
    college = record.get('College');
    collegeCity = record.get('CollegeCity');
    collegeState = record.get('CollegeState');
    collegeCountry = record.get('CollegeCountry');
    gradPd = record.get('GRADPERIOD')
    prevInternship = record.get('Previous Internship (Members+Fellow App)');
    spons = record.get('SponsorshipNeeded');
    hometown = record.get('Hometown')
    hsName = record.get('HighSchoolName');
    hsGrad = record.get('HighSchoolGraduationYear');
    cityHS = record.get('CityHS');
    stateHS = record.get('StateHS');
    countryHS = record.get('CountryHS');
    prevCourse = record.get('PreCollegeCourses');

    // clean city data 
    if(cityHS == undefined){

    }
    else if(cityHS !== undefined){
      if(cityHS != 'Washington, D.C.'){
        cityHS = cityHS.split(',')[0];
      }
      else if(cityHS == 'NYC'){
        cityHS = 'New York';
      }
      else {
        cityHS = cityHS;
      }
    }
    if(collegeCity == undefined){

    }
    else if(collegeCity !== undefined){
      if(collegeCity != 'Washington, D.C.'){
        collegeCity = collegeCity.split(',')[0];
      }
      else if(collegeCity == 'NYC'){
        collegeCity = 'New York City';
      }
      else {
        collegeCity = collegeCity;
      }
    }

    // create records in clean table
  const limitedAirTableSiteCreate = limiter.wrap(base('Clean').create([
      {
        "fields": {
          "Name": name,
          "Email": email,
          "College": college,
          "CollegeCity": collegeCity,
          "CollegeState": collegeState,
          "CollegeCountry": collegeCountry,
          "GradPd": gradPd,
          "PrevIntern": prevInternship,
          "Spons": spons,
          "HSName": hsName,
          "HSGrad": hsGrad,
          "Hometown": hometown,
          "CityHS": cityHS,
          "StateHS": stateHS,
          "CountryHS": countryHS,
          "PreCollegeCourses": prevCourse
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }));
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

/*
1. pull all the Airtable records of fields CollegeCity and CityHS 
2. go through each 
    2.1. if any have "," splice the string and only keep the stuff before the comma UNLESS its Washington, D.C.
    2.2. Change "Hts" to "Heights"
    2.3. Change "NYC" to "New York"
    2.4. If any have "/", splice string and delete everything before "/"
3. Some unique cases to look at: Granville OH, cells with "(" or ")", South San Francisco
*/