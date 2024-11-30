function hideRowsBasedOnValue() {
  // Open the spreadsheet and specify the sheet name
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // Get the number of rows in the sheet
  const lastRow = sheet.getLastRow();

  // Get values from the 23rd column (column W)
  const values = sheet.getRange(1, 24, lastRow, 1).getValues(); // Start from row 1 and column 23

  // Loop through each row and check the value in the 23rd column
  for (let i = 0; i < values.length; i++) {
    const cellValue = values[i][0]; // Value in the 23rd column for the current row

    // If the value is 1 (or any other condition you want), hide the row
    if (cellValue === 1) {
      sheet.hideRows(i);
    } else {
      // If the value is not 1, unhide the row
      sheet.showRows(i);
    }
  }
}

