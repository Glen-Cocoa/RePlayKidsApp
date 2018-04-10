function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0',
                   callback: test ,
                   simpleSheet: true } )
}

function test(data){
  var arrayOfRecords=data
  var configObj={arrayOfRecords}
  console.log('this is the data',configObj)
    return arrayOfRecords
}
 
window.addEventListener('DOMContentLoaded', init)

