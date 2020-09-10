// from data.js
var tableData = data;
console.log(tableData);

data.forEach(function(sighting) {
  console.log(sighting);
});

data.forEach(function(sighting) {
      console.log(sighting);
      var row = tbody.append("tr");
    });
    
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});

data.forEach(function(sighting) {
      console.log(sighting);
      var row = tbody.append("tr");
    
      Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
      });
    });
    

    data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
