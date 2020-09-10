// from data.js
//naming variable for info in data.js
var tableData = data;
console.log(tableData);

//declaring variable for tbody to append rows to index
var tbody = d3.select("tbody");

//for each loop to append cell into row and update with info from data.js
//using arrow notation 
data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

        