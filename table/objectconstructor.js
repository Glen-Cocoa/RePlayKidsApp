var constructTableData =(function(){
   

function renameRecords(singleRecord){
  this.toyName = singleRecord['Toy name'],
  this.toyType = singleRecord[" Toy Type"],
  this.instructions = singleRecord[" Instruction "],
  this.sensoryOutput = singleRecord['Sensory output type']
}

//new renameRecords()

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