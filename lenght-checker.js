// With this code, if the total length of cell A is 4 and below, it will completely delete the row it is in. In this way, you will get rid of unnecessary words that cannot be contested.

function deleteRows() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
  
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i][0].length == 1 || data[i][0].length == 2 || data[i][0].length == 3 || data[i][0].length == 4) { // A sütununda belirlenen karaktere sahip hücreleri kontrol et
        sheet.deleteRow(i + 1); // belirlenen karaktere sahip hücrenin bulunduğu satırı sil
      }
     }
  }