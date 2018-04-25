var KEY = 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0'

var parseFile =(function(){
  var ConfigObj = function(callback){
    var _this = this;
    
    this.getData = function (file,callback){
      Tabletop.init( { key: KEY,
      callback: callback,
      simpleSheet: true } )
    }
    
    this.storeData = function(data) {  
      data=cleanData(data)
      _this.recordArray = []
      _this.recordArray = data
      callback(_this)
    }
    
    this.filteredData = function() {
      var arr = [];
      for(var i = 0; i < _this.recordArray.length; i++) {
        var originalObj = _this.recordArray[i];
        arr.push({
          "toyName": originalObj["Toy name"],
          "name": originalObj["Toy name"],
          "type": originalObj["Toy Type"],
          "instructions": originalObj["Instructions"],
          "sensoryType": originalObj["Sensory output type"],
          "manufacturer": originalObj["Manufacturer"],
          "photo": originalObj["Photo"],
          "instructionType": originalObj["Instruction Format"],
          "toyType": originalObj["Toy Type"],
          "switchConnectionLocation": originalObj["Switch connection location"],
          "adaptingGroup": originalObj["Adapting Group or Person"],
          "keywords": originalObj["Keywords"],
          "summary": originalObj["Summary"],
          "difficultyLevel": originalObj["Difficulty Level"],
          "comments": originalObj["Comments"],
          "uniqueId": originalObj["unique id"]      
        });
      }
      return arr;
    }
    
    this.getData(KEY,this.storeData)
  }
  var cleanData= function(data){
    var goodArray=[]
    for (var i = 0;i<data.length;i++){
    var good_obj={}
    var key_value=Object.keys(data[i])
    for (var j= 0;j<key_value.length;j++){
    good_obj[key_value[j].trim()]=data[i][key_value[j]].trim()
    }
   goodArray.push(good_obj)
    }
    return goodArray
  }

  var module = {
 'ConfigObj':ConfigObj
 }
  
  return module
  console.log(module)

})();


