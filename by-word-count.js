// With this code, you can find Long Tail SEO words. You can color the line containing these words you find. To change the color codes according to your mind, simply change the hexes.

function colorRows() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();
    var color;
    
    for (var i=1; i<values.length; i++) {
      if (values[i][0].split(" ").length >= 5) {
        color = "#b7e1cd"; // yeşil
      } else if (values[i][0].split(" ").length == 4) {
        color = "#fcd5b4"; // turuncu
      } else if (values[i][0].split(" ").length == 3) {
        color = "#fff2cc"; // sarı
      } else {
        color = "#ffffff"; // beyaz
      }
      sheet.getRange(i+1,1).setBackground(color);
    }
  }
  
// If you want it to include a certain long tail range and a word you specify (like example), you can use it.
  
function colorRows() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getDataRange();
  //   var range = sheet.getRange("A1:A500");
    var values = range.getValues();
    var color;
    
    for (var i=1; i<values.length; i++) {
      if (values[i][0].toLowerCase().includes("example")) {
        color = "#ff0000"; // kırmızı
      } else if (values[i][0].split(" ").length >= 5) {
        color = "#b7e1cd"; // yeşil
      } else if (values[i][0].split(" ").length == 4) {
        color = "#fcd5b4"; // turuncu
      } else if (values[i][0].split(" ").length == 3) {
        color = "#fff2cc"; // sarı
      } else {
        color = "#ffffff"; // beyaz
      }
      sheet.getRange(i+1,1).setBackground(color);
    }
  }