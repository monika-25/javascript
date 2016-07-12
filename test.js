var fs = require("fs");

var data = fs.readFileSync('Indicators.csv');
var stringData=data.toString();

console.log(stringData);
var arrayOne= stringData.split('\r\n');
console.log(arrayOne);

var header=arrayOne[0].split(',');

var cnt;
for(var i=0;i<header.length;i++)
{
 if(header[i]=='IndicatorName')
 {
   cnt=i;
 }
}
console.log(header[cnt]);

var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jArray=[];

var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {

   for (j = 0; j< noOfCol; j++) {

       var myNewLine=arrayOne[i].split(',');

       //jArray.push( '{'+header[j]+':'+myNewLine[j]+'}');
   };
   jArray.push( '{'+header[cnt]+':'+myNewLine[cnt]+'}');
};

console.log( jArray);
