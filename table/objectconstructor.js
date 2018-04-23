let data2 = new parseFile.ConfigObj(function(data){
    let good_data = data.filteredData()
    console.log(good_data)
    $('#my-final-table').dynatable({
      dataset: {
      records: good_data
    }
  });     
})

$(function(){
  setTimeout(function(){
    $('td').on('click',function(e){
      window.open('http://localhost:4200/detail.html','_blank')
      console.log('done')
    })
  }, 2000)
})