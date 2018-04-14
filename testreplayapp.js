var KEY = 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0'
var parseFile =(function(){
  function init() {
    Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0',
                   callback: test ,
                   simpleSheet: true } )
  }

  function test(data){
    var arrayOfRecords=data
  

    //  var configObj= function(){
    // this.arrayOfRecords = arrayOfRecords
    console.log('this is the data',arrayOfRecords)
    return arrayOfRecords
  }
  var ConfigObj = function(callback){
    this.getData = function (file,callback){
      Tabletop.init( { key: file,
      callback: callback,
      simpleSheet: true } )
    }
    this.storeData= function(data){
      this.recordArray=data
      callback(this)
      }
    this.getData(KEY,this.storeData)
    
  }

   function getSpecs(array){
     var arrayOfRecords = arrayOfRecords
     
     var teamObj = {}
          
     for (var i = 0; i< array.length; i++){
       for( var j = 0; j < Object.keys.length; j++)
       if (array === Object.keys[j] )
        var newKeyValue = {}
       Object.assign(teamObj,newKeyValue)
     console.log(teamObj+":"+Object.values[i])
     }
     return teamObj
   }
// window.addEventListener('DOMContentLoaded', init)

 
  var module = {
    'init':init,
    'test':test,
    'getSpecs':getSpecs,
    'configObj':configObj
 }
  
  return module
  console.log(module)

})();


