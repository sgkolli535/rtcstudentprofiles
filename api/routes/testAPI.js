var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json(students);
});

module.exports = router;


require('dotenv').config();
var Bottleneck = require("bottleneck")
var Airtable = require('airtable');

var base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base(process.env.REACT_APP_BASE); 

const limiter = new Bottleneck({minTime: 1000/5}); // 5 requests per second
var students = [];
base('CLEAN').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.
  var name, email, college, collegeCity, collegeState, collegeCountry, gradPd, prevInternship, spons, hometown, 
  hsName, hsGrad, cityHS, stateHS, countryHS, prevCourse;

  records.forEach(function(record) {
  
    name = record.get('Name');
    email = record.get('Email');
    college = record.get('College');
    collegeCity = record.get('CollegeCity');
    collegeState = record.get('CollegeState');
    collegeCountry = record.get('CollegeCountry');
    collegeGrad = record.get('GradPd') + " " + record.get('GradYear');
    prevInternship = record.get('PrevIntern');
    spons = record.get('Spons');
    hometown = record.get('Hometown')
    hsName = record.get('HSName');
    hsGrad = record.get('HighSchoolGraduationYear');
    cityHS = record.get('CityHS');
    stateHS = record.get('StateHS');
    countryHS = record.get('CountryHS');
    prevCourse = record.get('PreCollegeCourses');

    var student = {
      "name": name,
      "email": email,
      "college": college,
      "collegeCity": collegeCity,
      "collegeState": collegeState,
      "collegeCountry": collegeCountry,
      "collegeGrad": collegeGrad,
      "prevInternship": prevInternship,
      "spons": spons,
      "hometown": hometown,
      "hsName": hsName,
      "hsGrad": hsGrad,
      "cityHS": cityHS,
      "stateHS": stateHS,
      "countryHS": countryHS,
      "prevCourse": prevCourse,
    };
    students.push(student);
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});
