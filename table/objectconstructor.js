var constructTableData =(function(){
   
//Takes imported data and renames headers to integrate properly with Dyna Table
function renameRecords(singleRecord){
  this.toyName = singleRecord['Toy name'],
  this.toyType = singleRecord[" Toy Type"],
  this.instructions = singleRecord[" Instruction "],
  this.sensoryOutput = singleRecord['Sensory output type']
}

//new renameRecords()

  // Goes through list renames keys using prior function
function makeList(list){
  var newList=[]
for (var i = 0; i < list.length; i++){
  let nRec = new renameRecords(list[i])
  newList.push(nRec)
}
  console.log(newList)
  return newList
}

console.log(resultArray)
let updatedList = makeList(resultArray)
console.log(updatedList)

  var module = {
    'renameRecords': renameRecords,
    'makeList': makeList
  }
  
  return module
  console.log(module)
  
  
})();

var records = updatedList
    myRecords = JSON.parse($records.text());
$('#my-final-table').dynatable({
  dataset: {
    records: myRecords
  }
});   