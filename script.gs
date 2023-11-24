function generate() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rowCount = sheet.getRange('A:A').getValues().filter(String).length;
  const data = sheet.getRange(1,1,rowCount,11).getValues();
  let striker = '';
  let special = '';
  let tmp = '';
  data.forEach(function(row){
    if(row[10] == true){
      tmp = row[0];
      if(row[4] != ''){
        tmp = tmp + '　' + row[4];
      }
      tmp = tmp + '　' + checkLevel(row[5]) + checkLevel(row[6]) + checkLevel(row[7]) + checkLevel(row[8]);
      if(row[9] != ''){
        tmp = tmp + '　絆' + row[9];
      }
      tmp = tmp + '\n';
      if(row[1] == 'STRIKER'){
        striker += tmp;
      }else if(row[1] == 'SPECIAL'){
        special += tmp;
      }
      tmp = '';
    }
  });
  sheet.getRange("M5").setValue(striker);
  sheet.getRange("N5").setValue(special);
}

function checkLevel(level) {
  if(level == ''){
    return '×';
  }
  return level;
}
