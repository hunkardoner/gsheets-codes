function saveRowsAsFiles() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Sayfa3"); // SAYFA_ADINIZ yerine sayfanızın adını girin
    var dataRange = sheet.getDataRange();
    var dataValues = dataRange.getValues();
  
    for (var i = 1; i < dataValues.length; i++) {
      var row = dataValues[i];
      var fileName = row[1] + '.html'; // B sütunundaki değeri dosya adı olarak kullanıyoruz
      var fileContent = row[0]; // B sütunundaki değeri dosya içeriği olarak kullanıyoruz
  
      var folder = DriveApp.getFolderById("1D56Wx3Pm53IkSnETeWYEzgjsUd3nDSTa"); // KLASOR_ID yerine dosyaların kaydedileceği klasörün ID'sini girin
      var file = folder.createFile(fileName, fileContent);
    }
  }
  