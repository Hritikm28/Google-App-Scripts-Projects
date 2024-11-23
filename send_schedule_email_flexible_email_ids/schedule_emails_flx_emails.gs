function sendScheduleEmail2() {

const ss = SpreadsheetApp.getActive().getSheetByName('Sheet1');
const ws = ss.getSheetByName('Email_ids');

const h1 = ws.getRange("T3").getValue();
const subheader = ws.getRange("T5").getValue();
const subheader2 = ws.getRange("T7").getValue();
const headers = ws.getRange("C1:R1").getValues();
const Name = headers[0][0];
const Manager = headers[0][1];
const Designation = headers[0][2];
const Territory = headers[0][3];
const Area = headers[0][4];
const Limit = headers[0][5];
const Limit2 = headers[0][6];
const Limit3 = headers[0][7];
const Limit4 = headers[0][8];
const Limit5 = headers[0][9];
const Limit6 = headers[0][10];
const Limit7 = headers[0][11];
const Limit8 = headers[0][12];
const Limit9 = headers[0][13];
const Limit10 = headers[0][14];
const Limit11 = headers[0][15];
var lastRow = ws.getRange("U1").getValue();

const tablerangevalues = ws.getRange(2, 3,lastRow,16).getDisplayValues();

const htmlTemplate = HtmlService.createTemplateFromFile('HTML2');
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
htmlTemplate.Limit3 = Limit3;
htmlTemplate.Limit4 = Limit4;
htmlTemplate.Limit5 = Limit5;
htmlTemplate.Limit6 = Limit6;
htmlTemplate.Limit7 = Limit7;
htmlTemplate.Limit8 = Limit8;
htmlTemplate.Limit9 = Limit9;
htmlTemplate.Limit10 = Limit10;
htmlTemplate.Limit11 = Limit11;
htmlTemplate.tablerangevalues = tablerangevalues;

const htmlForEmail = htmlTemplate.evaluate().getContent();

console.log(htmlForEmail);

var Email1 = ws.getRange(2,21).getValues();
var Email2 = ws.getRange(3,21).getValues();
var Email3 = ws.getRange(4,21).getValues();
var Email4 = ws.getRange(5,21).getValues();
var Email5 = ws.getRange(6,21).getValues();
var Email6 = ws.getRange(7,21).getValues();
var Email7 = ws.getRange(8,21).getValues();
var Email8 = ws.getRange(9,21).getValues();
var Email9 = ws.getRange(10,21).getValues();
var Email10 = ws.getRange(11,21).getValues();
var Email11 = ws.getRange(12,21).getValues();
var Email12 = ws.getRange(13,21).getValues();
var Email13 = ws.getRange(14,21).getValues();
var Email14 = ws.getRange(15,21).getValues();
var Email15 = ws.getRange(16,21).getValues();
var Email16 = ws.getRange(17,21).getValues();
var Email17 = ws.getRange(18,21).getValues();
var Email18 = ws.getRange(19,21).getValues();
var Email19 = ws.getRange(20,21).getValues();
var Email20 = ws.getRange(21,21).getValues();
var Email21 = ws.getRange(22,21).getValues();
var Email22 = ws.getRange(23,21).getValues();
var Email23 = ws.getRange(24,21).getValues();
var Email24 = ws.getRange(25,21).getValues();
var Email25 = ws.getRange(26,21).getValues();
var Email26 = ws.getRange(27,21).getValues();
var Email27 = ws.getRange(28,21).getValues();
var Email28 = ws.getRange(29,21).getValues();
var Email29 = ws.getRange(30,21).getValues();
var Email30 = ws.getRange(31,21).getValues();
var recipient= [Email1, Email2, Email3, Email4, Email5, Email6, Email7, Email8, Email9, Email10, Email11,
Email12, Email13, Email14, Email15, Email16, Email17, Email18, Email19, Email20,
Email21, Email22, Email23, Email24, Email25, Email26, Email27, Email28, Email29, Email30];
var subject= ws.getRange("T1").getValue();
var ccmail = "emaild1@gmail.com;emailid2@gmail.com";
GmailApp.sendEmail(recipient, subject, "Dont Open", { htmlBody: htmlForEmail,
cc:ccmail});
}
