var KEY = 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0'
var parseFile =(function(){
 // function init() {
    //Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0',
      //             callback: test ,
        //           simpleSheet: true } )
  //}

  //function test(data){
    //var arrayOfRecords=data
  

    //  var configObj= function(){
    // this.arrayOfRecords = arrayOfRecords
   // console.log('this is the data',arrayOfRecords)
   // return arrayOfRecords
  //}
  var ConfigObj = function(callback){
    var _this = this;
    
    this.getData = function (file,callback){
      Tabletop.init( { key: KEY,
      callback: callback,
      simpleSheet: true } )
    }
    
    this.storeData = function(data) {  
      console.log("this is the data",data)
      _this.recordArray = []
      _this.recordArray = data
      console.log("this is in the loop",this)
      console.log(_this.recordArray)
      callback(_this)
    }
    
    this.filteredData = function() {
      var arr = [];
      for(var i = 0; i < _this.recordArray.length; i++) {
        var originalObj = _this.recordArray[i];
        arr.push({
          'Toy name': originalObj['Toy name'],
          'Toy type': originalObj['Toy type'],
          'Instructions': originalObj['Instructions'],
          'Sensory output': originalObj['Sensory output']
        });
      }
      return arr;
    }
    
    this.getData(KEY,this.storeData)
  }
  
  
  /* function getSpecs(array){
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
   }  */
// window.addEventListener('DOMContentLoaded', init)

 
  var module = {
 'ConfigObj':ConfigObj
 }
  
  return module
  console.log(module)

})();


