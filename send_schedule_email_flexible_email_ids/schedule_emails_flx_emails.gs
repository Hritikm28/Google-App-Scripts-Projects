function sendScheduleEmail() {

const ss = SpreadsheetApp.getActive().getSheetByName('Sheet1');
const ws = SpreadsheetApp.getActive().getSheetByName('Email');

const h1 = ss.getRange("I3").getValue();
const subheader = ss.getRange("I5").getValue();
const subheader2 = ss.getRange("I7").getValue();
const headers = ss.getRange("A1:G1").getValues();
const Name = headers[0][0];
const Manager = headers[0][1];
const Designation = headers[0][2];
const Territory = headers[0][3];
const Area = headers[0][4];
const Limit = headers[0][5];
const Limit2 = headers[0][6];
var lastRow = ss.getRange("H1").getValue();

const tablerangevalues = ss.getRange(2, 1,lastRow,7).getDisplayValues();

const htmlTemplate = HtmlService.createTemplateFromFile('HTML');
htmlTemplate.h1 = h1;
htmlTemplate.subheader = subheader;
htmlTemplate.subheader2 = subheader2;
htmlTemplate.Name = Name;
htmlTemplate.Manager = Manager;
htmlTemplate.Designation = Designation;
htmlTemplate.Territory = Territory;
htmlTemplate.Area = Area;
htmlTemplate.Limit = Limit;
htmlTemplate.Limit2 = Limit2;
htmlTemplate.tablerangevalues = tablerangevalues;

const htmlForEmail = htmlTemplate.evaluate().getContent();

var Email1 = ws.getRange(2,1).getValues();
var Email2 = ws.getRange(3,1).getValues();
var Email3 = ws.getRange(4,1).getValues();
var Email4 = ws.getRange(5,1).getValues();
var Email5 = ws.getRange(6,1).getValues();
var Email6 = ws.getRange(7,1).getValues();
var Email7 = ws.getRange(8,1).getValues();
var Email8 = ws.getRange(9,1).getValues();
var Email9 = ws.getRange(10,1).getValues();
var Email10 = ws.getRange(11,1).getValues();
var Email11 = ws.getRange(12,1).getValues();
var Email12 = ws.getRange(13,1).getValues();
var Email13 = ws.getRange(14,1).getValues();
var Email14 = ws.getRange(15,1).getValues();
var Email15 = ws.getRange(16,1).getValues();
var Email16 = ws.getRange(17,1).getValues();
var Email17 = ws.getRange(18,1).getValues();
var Email18 = ws.getRange(19,1).getValues();
var Email19 = ws.getRange(20,1).getValues();
var Email20 = ws.getRange(21,1).getValues();
var Email21 = ws.getRange(22,1).getValues();
var Email22 = ws.getRange(23,1).getValues();
var Email23 = ws.getRange(24,1).getValues();
var Email24 = ws.getRange(25,1).getValues();
var Email25 = ws.getRange(26,1).getValues();
var Email26 = ws.getRange(27,1).getValues();
var Email27 = ws.getRange(28,1).getValues();
var Email28 = ws.getRange(29,1).getValues();
var Email29 = ws.getRange(30,1).getValues();
var Email30 = ws.getRange(31,1).getValues();
var recipient= [Email1, Email2, Email3, Email4, Email5, Email6, Email7, Email8, Email9, Email10, Email11,Email12, Email13, Email14, Email15, Email16, Email17, Email18, Email19, Email20,Email21, Email22, Email23, Email24, Email25, Email26, Email27, Email28, Email29, Email30];
var subject= ss.getRange("T1").getValue();
var ccmail = "sampleemail1@gmail.com;sampleemail2@gmail.com";
GmailApp.sendEmail(recipient, subject, "Dont Open", { htmlBody: htmlForEmail,
cc:ccmail});
}
