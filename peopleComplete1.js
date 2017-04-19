var fs = require('fs');

var people1 = people1;
var people2 = people2;
var people =


fs.readFile('people1.json','utf-8', function (err, data) {
    if(err){
      console.log(err);
    }else {
      var people1 = (JSON.parse(data)).people1;
      console.log(data);
    }

});

fs.readFile('people2.json','utf-8', function (err, data) {
        if(err){
          console.log(err);
        }else {
          var people2 = (JSON.parse(data)).people2;
          console.log(data);
        }
});

fs.writeFileSynch('peopleComplete.txt', people, 'utf8', callback); {
    if (err){
      console.log(err);
    }
    return console.log(err);
    console.log('people > peopleComplete.txt');
}
// + data.toString());
