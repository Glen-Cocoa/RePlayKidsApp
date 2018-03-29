function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dtMUq0qZvXBkplP2w-zleMOYxjyY6M7YcDwlz8uZS1k/edit?ts=5ab98793#gid=0',
                   callback: test ,
                   simpleSheet: true } )
}
function test(data){
  console.log('this is a test function',data)
}
window.addEventListener('DOMContentLoaded', init)