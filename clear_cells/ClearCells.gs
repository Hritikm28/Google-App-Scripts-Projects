function ClearCells() {
var sheet1 = SpreadsheetApp.getActive().getSheetByName('Morning Follow-up');
sheet1.getRange('U2:Y100').clearContent();
var sheet2 = SpreadsheetApp.getActive().getSheetByName('Evening Follow-up');
sheet2.getRange('U2:Y100').clearContent();
var sheet3 = SpreadsheetApp.getActive().getSheetByName('Retailer_Data');
sheet2.getRange('Q2:U150').clearContent();
}
