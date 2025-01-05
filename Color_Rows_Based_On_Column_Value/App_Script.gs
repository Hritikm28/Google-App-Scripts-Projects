function colorRowsBasedOnColumnvalue() {
  // Open the active spreadsheet and the desired sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // Get the last row and the column to check
  const lastRow = sheet.getLastRow();
  const columnToCheck = 22; // Column index on which we want to update the sheet

  // Get all values in the specified column
  const values = sheet.getRange(1, columnToCheck, lastRow, 1).getValues();

  // Loop through each row and apply color based on the value
  for (let i = 0; i < values.length; i++) {
    const rowValue = values[i][0]; // Get the value in the current row
    const rowRange = sheet.getRange(i, 1, 1, sheet.getLastColumn()); // Entire row range

    // Apply color based on the value
    if (rowValue === 1) {
      rowRange.setBackground("#90EE90"); // Green for value 1
    } else if (rowValue === 2) {
      rowRange.setBackground("#FFCCCB"); // Red for value 2
    }
  }
}
