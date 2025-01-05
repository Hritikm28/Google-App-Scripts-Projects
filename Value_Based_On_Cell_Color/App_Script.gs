function markRowsBasedOnColor() {
  // Open the spreadsheet and specify the sheet name
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // Get the number of rows in the sheet
  const lastRow = sheet.getLastRow();

  // Get background colors of cells in the 2nd column
  const colorRange = sheet.getRange(1, 2, lastRow, 1);
  const colors = colorRange.getBackgrounds();

  // Loop through each row to check the color in the 2nd column
  for (let i = 0; i < colors.length; i++) {
    const cellColor = colors[i][0]; // Color of the cell in the 2nd column for the current row

    // Check if the cell color is blue
    if (cellColor === "#008080") {
      sheet.getRange(i , 23).setValue(1); // Set 1 in the 23rd column if the cell is blue
    } else {
      sheet.getRange(i , 23).setValue(0); // Set 0 in the 23rd column if the cell is any other color
    }
  }
}
