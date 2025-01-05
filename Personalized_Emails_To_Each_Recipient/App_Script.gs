function sendEmail() {

var ss = SpreadsheetApp.getActiveSpreadsheet()
var sheet1=ss.getSheetByName('Send Email');
var sheet2=ss.getSheetByName('Details');
var subject = sheet2.getRange(2,2).getValue();
var n=sheet1.getLastRow();
for (var i = 2; i < n+1 ; i++ ) {
var Name               = sheet1.getRange(i,1).getValue();
var EmailAddress       = sheet1.getRange(i,2).getValue();
var Target             = sheet1.getRange(i,3).getValue();
var TotalSales         = sheet1.getRange(i,4).getValue();
var KPI                = sheet1.getRange(i,5).getValue();
var SalesIncentive     = sheet1.getRange(i,6).getValue();
var Newcustomers       = sheet1.getRange(i,7).getValue();
var Focusproducts      = sheet1.getRange(i,8).getValue();
var MarketingIncentive = sheet1.getRange(i,9).getValue();
var TotalIncentive     = sheet1.getRange(i,10).getValue();
var line1              = sheet2.getRange("A3").getValue();
var incentive1         = sheet2.getRange("A5").getValue();
var incentive2         = sheet2.getRange("A11").getValue();
var message1           = sheet2.getRange("A16").getValue();
var message2           = sheet2.getRange("A19").getValue();
var detail1            = sheet2.getRange("A6").getValue();
var Value1             = sheet2.getRange("B6").getValue();
var detail2            = sheet2.getRange("A7").getValue();
var Value2             = sheet2.getRange("B7").getValue();
var detail3            = sheet2.getRange("A8").getValue();
var Value3             = sheet2.getRange("B8").getValue();
var detail4            = sheet2.getRange("A9").getValue();
var Value4             = sheet2.getRange("B9").getValue();
var detail5            = sheet2.getRange("A12").getValue();
var Value5             = sheet2.getRange("B12").getValue();
var detail6            = sheet2.getRange("A13").getValue();
var Value6             = sheet2.getRange("B13").getValue();
var detail7            = sheet2.getRange("A14").getValue();
var Value7             = sheet2.getRange("B14").getValue();
var detail8            = sheet2.getRange("A17").getValue();
var Value8             = sheet2.getRange("B17").getValue();

var tablerangevalues1 = sheet2.getRange(6, 1,4,2).getDisplayValues();
var tablerangevalues2 = sheet2.getRange(12, 1,3,2).getDisplayValues();


var htmlTemplate        = HtmlService.createTemplateFromFile('HTML');
htmlTemplate.Name       = Name;
htmlTemplate.line1      = line1;
htmlTemplate.incentive1 = incentive1;
htmlTemplate.incentive2 = incentive2;
htmlTemplate.message1   = message1;
htmlTemplate.message2   = message2;
htmlTemplate.detail1    = detail1;
htmlTemplate.Value1     = Value1;
htmlTemplate.detail2    = detail2;
htmlTemplate.Value2     = Value2;
htmlTemplate.detail3    = detail3;
htmlTemplate.Value3     = Value3;
htmlTemplate.detail4    = detail4;
htmlTemplate.Value4     = Value4;
htmlTemplate.detail5    = detail5;
htmlTemplate.Value5     = Value5;
htmlTemplate.detail6    = detail6;
htmlTemplate.Value6     = Value6;
htmlTemplate.detail7    = detail7;
htmlTemplate.Value7     = Value7;
htmlTemplate.detail8    = detail8;
htmlTemplate.Value8     = Value8;
htmlTemplate.tablerangevalues1 = tablerangevalues1;
htmlTemplate.tablerangevalues2 = tablerangevalues2;

var htmlForEmail = htmlTemplate.evaluate().getContent();


htmlForEmail=htmlForEmail.replace("<VR>",Name).replace("Value1",Target).replace("Value2",TotalSales).replace("Value3",KPI).replace("Value4",SalesIncentive).replace("Value5",Newcustomers).replace("Value6",Focusproducts).replace("Value7",MarketingIncentive).replace("Value8",TotalIncentive);

GmailApp.sendEmail(EmailAddress, subject, "Dont Open", { htmlBody: htmlForEmail});
}
}
