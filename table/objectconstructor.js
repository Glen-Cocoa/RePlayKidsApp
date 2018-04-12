function renameRecords(singleRecord){
  this.toyName = singleRecord['Toy name'],
  this.toyType = singleRecord[" Toy Type"],
  this.instructions = singleRecord[" Instruction "],
  this.sensoryOutput = singleRecord['Sensory output type']
}

//new renameRecords()

function makeList(list){
  newList=[]
for (var i = 0; i < list.length; i++){
  let nRec = new renameRecords(list[i])
  newList.push(nRec)
}
  return newList
}

makeList(arrayOfRecords)
console.log(newList)


let updatedList = makeList(arrayOfRecords)
console.log(updatedList)


