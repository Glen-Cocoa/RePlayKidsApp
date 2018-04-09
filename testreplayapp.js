function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0',
                   callback: test ,
                   simpleSheet: true } )
}
function test(data){
  var database=data
  console.log('this is a test function',data)
  $('#target').append(data)
  // after one works.  the for loop will be record[i]=createRecord[i]
  var record = createRecord(database[0])  
  
}
function createRecord(tableRow){
  var newRecord = {}
  // this gets ride of any white spaces
  //str = str.replace(/\s+/g, '');
  createObjectKeys(tableRow)
  }
  // this function will take a tableRow and return that row with propeties that have _ instead of spacess
function createObjectKeys(tableRow)
{
  var keyArray = Object.keys(tableRow)
  for (var i = 0 ; i< keyArray.length-1;i++){
   while(keyArray[i].endsWith(" ")||keyArray[i].startsWith(" ")){
       keyArray[i]= keyArray[i].replace(/^\s+|\s+$/gm,'')
       console.log('this entered the loop')
        }
  keyArray[i]=keyArray[i].replace(/ /g,"_")
  console.log(keyArray[i])
   
  }
 }
window.addEventListener('DOMContentLoaded', init)