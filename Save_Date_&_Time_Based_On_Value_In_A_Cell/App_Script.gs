function checkForEditsAndTimestamp() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const dataRange = sheet.getRange(1, 2, sheet.getLastRow(), 1); // Range
  const values = dataRange.getValues();
  const timestampColumn = 25; // Column index for timestamp placement

  for (let i = 0; i < values.length; i++) {
    const cell = dataRange.getCell(i + 1, 1); // Column 1 in each row
    const timestampCell = sheet.getRange(i, timestampColumn); // Timestamp column for the current row

    if (cell.getValue() && timestampCell.isBlank()) { // Checks if the cell has content and no timestamp
      timestampCell.setValue(new Date()); // Add the timestamp
    }
  }
}
