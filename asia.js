var fs = require("fs");
// Function to read the input file (.CSV)
//var csv2array = require('csv2array');
//var data = fs.readFileSync('Indicators.csv','utf8').split('\n');

var data = fs.readFileSync('Indicators.csv');


//Converting the whole data into string formate
var stringData=data.toString();

//Spliting the data row wise
var arrayOne= stringData.split('\r\n');

//To get the header portion ["A","B","C"] and it will make array of header
var header=arrayOne[0].split(',');


//For finding the index of perticular column (dynamic aproch)
var index_countryname,index_indicatorname,index_year,index_value;
index_countryname = header.indexOf('CountryName');
index_indicatorname = header.indexOf('IndicatorName');
index_year = header.indexOf('Year');
index_value = header.indexOf('Value');


var noOfRow = arrayOne.length;
var noOfCol = header.length;

var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++)
{

 for (j = 0; j< noOfCol; j++)
 {
    var myNewLine=arrayOne[i].split(',');
    //Code for comma seprated values
    //var myNewLine=csv2array(arrayOne[i])[0];
 };
 if((myNewLine[index_countryname] == 'India') && (myNewLine[index_indicatorname] == 'Urban population (% of total)' || myNewLine[index_indicatorname] == 'Rural population (% of total population)'))
 {
   final_obj[header[index_value]]=myNewLine[index_value];
   final_obj[header[index_year]]=myNewLine[index_year];
   jArray.push(final_obj);
 }
 final_obj={};
};
console.log("=== Data For India ===\n");
console.log(jArray);
console.log("=== Data For India Ends Here ===\n\n");


//Write the data into JSON file


var file = 'India.json';

var obj = JSON.stringify(jArray);

fs.writeFileSync(file, obj);


// Code 2 :- For all ASIAN Country --------------------------------------------------------------------------


//Asia
var Asian_Country = ["Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei Darussalam","Cambodia","China",
"Georgia","Indonesia","Iran, Islamic Rep.","Iraq","Israel","Japan","Jordan","India","Japan","Jordan"];
//console.log(Asian_Country);
var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++)
{
 for (j = 0; j< noOfCol; j++)
 {
     var myNewLine=arrayOne[i].split(',');
 };
 if(Asian_Country.indexOf(myNewLine[index_countryname]) != -1
  && (myNewLine[index_indicatorname] == 'Urban population (% of total)' || myNewLine[index_indicatorname] == 'Rural population (% of total)'))
 {
   final_obj[header[index_value]]=myNewLine[index_value];
   final_obj[header[index_year]]=myNewLine[index_year];
   jArray.push(final_obj);
   jArray.sort(function(a,b)
   {
        return b['Value']-a['Value'];
   })
 }
 final_obj={};
};

console.log("=== Data For Asian Country ===\n");
console.log(jArray);
console.log("=== Data For Asian Country Ends Here ===\n\n");


//Write


var file = 'Asia.json';
// console.log("Printignn final object",);
var obj = JSON.stringify(jArray);

fs.writeFileSync(file, obj);
