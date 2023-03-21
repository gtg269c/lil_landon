var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to WelcomeLinks table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var welcomelinkData = 
  JSON.parse(fs.readFileSync('../components/data/welcome_links.json', 'utf8'));
  // landon\src\components\data\menu_links.json
welcomelinkData.forEach(function(welcomelink) {

  var params = {
    TableName: "WelcomeLinks",
    Item: {
      "class": welcomelink.class,
      "src": welcomelink.src,
      "alt": welcomelink.alt
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for WelcomeLinks",
                    welcomelink.alt, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", welcomelink.alt, "to table.")
  })
});