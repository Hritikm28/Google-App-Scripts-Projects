function importCsvFromEmail() {
  var searchQuery = "from:noreply@gmail.com subject:INVENTORY - DAILY - Available Stock filename:report.csv";
  var threads = GmailApp.search(searchQuery, 0, 2);
  var sortedMessages = threads[0].getMessages().sort(function(a, b) {
    return b.getDate().getTime() - a.getDate().getTime();
  });
  var message = sortedMessages[0];
  var attachments = message.getAttachments();
  var attachment = attachments[0];
  var csvData = Utilities.parseCsv(attachment.getDataAsString(), ",");

  var sheetName = "Paste"; // Replace with the name of the existing sheet where you want to paste the new data
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  sheet.clearContents();
  sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
}

function setTrigger() {
  var trigger = ScriptApp.newTrigger('importCsvFromEmail')
    .timeBased()
    .atHour(08)
    .nearMinute(30)
    .everyDays(1)
    .create();
}
