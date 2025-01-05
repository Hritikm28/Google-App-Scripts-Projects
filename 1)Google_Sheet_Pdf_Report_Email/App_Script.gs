function sendpdf() {
  const ss = SpreadsheetApp.getActive().getSheetByName('Daily Report_Email');

  const heading   = ss.getRange("H2").getValue();
  const subheader = ss.getRange("H4").getValue();
  const headers   = ss.getRange("A1:F1").getValues();
  const Date      = headers[0][0];
  const Code      = headers[0][1];
  const Amount    = headers[0][2];
  const Payment   = headers[0][3];
  const Person    = headers[0][4];
  const Category  = headers[0][5];
  var lastRow     = ss.getLastRow();

  const tablerangevalues = ss.getRange(2, 1, lastRow, 6).getDisplayValues();

  const htmlTemplate     = HtmlService.createTemplateFromFile('HTML');
  htmlTemplate.heading   = heading;
  htmlTemplate.subheader = subheader;
  htmlTemplate.Date      = Date;
  htmlTemplate.Code      = Code;
  htmlTemplate.Amount    = Amount;
  htmlTemplate.Payment   = Payment;
  htmlTemplate.Person    = Person;
  htmlTemplate.Category  = Category;
  htmlTemplate.tablerangevalues = tablerangevalues;

  const htmlForEmail = htmlTemplate.evaluate().getContent();
  var recipient      = 'sampleemail@gmail.com';
  var subject        = ss.getRange("H1").getValue();
  var ccmail         = "sampleemail@gmail.com";
  const blob         = Utilities.newBlob(htmlForEmail, MimeType.HTML);
  blob.setName("Report.pdf");
  
  GmailApp.sendEmail(recipient, subject, "Please find the attached report.", {
    htmlBody: htmlForEmail,
    attachments: [blob.getAs(MimeType.PDF)],
    cc: ccmail
  });
}
