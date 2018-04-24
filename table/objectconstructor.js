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
      $modal.find('#manufacturer').text(obj.manufacturer);
      $modal.find('#sensoryOutput').text(obj.sensory); 
      $modal.find('#toyType').text(obj.toyType);
      $modal.find('#instructions').text(obj.instructions);
      $modal.find('#difficultyLevel').text(obj.difficultyLevel);
      $modal.find('#keywords').text(obj.keywords);    
      $modal.find('#Adapting Group').text(obj.adaptingGrouporPerson);    
      
      $('.detail-page').modal('show');
    });
  
    console.log(data.recordArray[0].Photo)
})

