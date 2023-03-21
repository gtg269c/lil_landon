var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to ArrivalList table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var arrivalData = 
  JSON.parse(fs.readFileSync('../components/data/arrival_list.json', 'utf8'));
  // landon\src\components\data\arrival_list.json
arrivalData.forEach(function(arrivallist) {
  var params = {
    TableName: "ArrivalList",
    Item: {
      "strong": arrivallist.strong,
      "text": arrivallist.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for ArrivalList",
                    arrivallist.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", arrivallist.text, "to table.")
  })
});