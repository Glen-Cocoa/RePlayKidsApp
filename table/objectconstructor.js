let data2 = new parseFile.ConfigObj(function(data){
    let good_data = data.filteredData()
    console.log(good_data)
    $('#my-final-table').dynatable({
      dataset: {
      records: good_data
    }
  });     
})
