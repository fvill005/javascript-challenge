// from data.js
//naming variable for info in data.js
var tableData = data;
console.log(tableData);

//declaring variable for tbody to append rows to index
var tbody = d3.select("tbody");

//for each loop to append cell into row and update with info from data.js
//using arrow notation 
function inserttable(data){
  tbody.html("");
  data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
}
//builds table on index.html
inserttable(tableData)

//filters data fot input date
function filterData() {
  var date = d3.select("#datetime").property("value");
  //console.log(date)
  var filteredData = tableData;
  //console.log(filteredData)
  if (date){
      filteredData = filteredData.filter(row => row.datetime=== date);
      console.log(filteredData)
  }
  //builds new table based on date input 
inserttable(filteredData)
}
d3.selectAll("#filter-btn").on("click",filterData)