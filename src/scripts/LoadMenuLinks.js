var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to MenuLinks table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var menulinkData = 
  JSON.parse(fs.readFileSync('../components/data/menu_links.json', 'utf8'));
  // landon\src\components\data\menu_links.json
menulinkData.forEach(function(menulink) {
  var params = {
    TableName: "MenuLinks",
    Item: {
      "class": menulink.class,
      "href": menulink.href,
      "text": menulink.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for MenuLinks",
                    menulink.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", menulink.text, "to table.")
  })
});