var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to AminitiesList table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var accessibilitiesData = 
  JSON.parse(fs.readFileSync('../components/data/aminities_list.json', 'utf8'));
  // landon\src\components\data\aminities_list.json
accessibilitiesData.forEach(function(accessibililty) {
  var params = {
    TableName: "AminitiesList",
    Item: {
      "text": accessibililty.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for AminitiesList",
                    accessibililty.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", accessibililty.text, "to table.")
  })
});