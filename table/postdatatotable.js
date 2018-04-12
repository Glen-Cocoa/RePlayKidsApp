var records = updatedList
    myRecords = JSON.parse($records.text());
$('#my-final-table').dynatable({
  dataset: {
    records: myRecords
  }
});   