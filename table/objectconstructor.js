let data2 = new parseFile.ConfigObj(function(data){
    let good_data = data.filteredData()
    $('#my-final-table').dynatable({
      dataset: {
      records: good_data
    }
  });
  for(let i=0;i<good_data;i++){
    console.log(good_data[i])
  }
})

$(function(){
  setTimeout(function(){
    $('td').on('hover',function(e){
      console.log('done')
    })
  }, 2000)
})