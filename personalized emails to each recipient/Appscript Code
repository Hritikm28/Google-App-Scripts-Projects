function sendEmail() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName('Send Email');
  var sheet2 = ss.getSheetByName('Sheet5');
  var subject = sheet2.getRange(2, 2).getValue();
  var n = sheet1.getLastRow();

  for (var i = 2; i <= n; i++) {
    var recipientName = sheet1.getRange(i, 1).getValue();
    var emailAddress  = sheet1.getRange(i, 2).getValue();
    var target        = sheet1.getRange(i, 3).getValue();
    var totalSales    = sheet1.getRange(i, 4).getValue();
    var incentive     = sheet1.getRange(i, 5).getValue();

    // Get template values
    var header1 = sheet2.getRange("A3").getValue();
    var tableValues = sheet2.getRange(6, 1, 7, 2).getDisplayValues();

    // Prepare the HTML template
    var htmlTemplate = HtmlService.createTemplateFromFile('HTML');
    htmlTemplate.recipientName = recipientName;
    htmlTemplate.target = target;
    htmlTemplate.totalSales = totalSales;
    htmlTemplate.incentive = incentive;
    htmlTemplate.header1 = header1;
    htmlTemplate.tableValues = tableValues;

    var htmlForEmail = htmlTemplate.evaluate().getContent();
    GmailApp.sendEmail(emailAddress, subject, "Email Preview", { htmlBody: htmlForEmail });
  }
}
