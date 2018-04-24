let data2 = new parseFile.ConfigObj(function(data){
    let good_data = data.filteredData();
    $('#my-final-table').dynatable({
      dataset: {
        records: good_data
      }
    });
    $('#my-final-table tr').on('click', function(e) {
      var uid = $(this).find('td:first').text();
      var obj;
      for(var i = 0; i < good_data.length; i++) {
        if(good_data[i]['uniqueId'] == uid) {
          obj = good_data[i];
          break;
        }
      }
      var $modal = $('.detail-page');
      
      // Update modal content
      $modal.find('h2').text(obj.name);
      
      $('.detail-page').modal('show');
    });
  
    console.log(data.recordArray[0].Photo)
})

