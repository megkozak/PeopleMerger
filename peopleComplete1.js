var fs = require('fs');

fs.readFile('people.json','utf-8', function (err, data) {
    if(err){
      console.log(err);
    }else {
      var people = (JSON.parse(data)).people;
      console.log(data);
    }
});
  //
  // fs.writeFile

  // var allCountries  = JSON.parse(data);
  // var targetCountry = process.argv[2];
//
// fs.writeFile(peopleComplete.txt, data[, options], callback)
