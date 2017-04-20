var fs = require('fs');

// var people1 = people1;
// var people2 = people2;
var people = [];

fs.readFile('people1.json','utf-8', function (err, data) {
    if(err){
      console.log(err);
    } else {
      for (person of JSON.parse(data)) {
        people.push(person)
      }
    }
    fs.readFile('people2.json','utf-8', function (err, data) {
          if(err){
            console.log(err);
          } else {
            for (person of JSON.parse(data)) {
              people.push(person)
            }
          }
          console.log(people)
          people.sort(function (first, second) {
            return first < second
          })

          fs.writeFile('peopleComplete.txt', people, 'utf8', function (err, data) {
              if (err){
                console.log(err);
              }
              console.log(err, data)
              console.log('people > peopleComplete.txt');
          });
    });
});




// + data.toString());
