function copyAndAppendWithinSheet() {
  const sheetName = "Sheet1"; // Replace with your sheet name
  const sourceRange = "A2:G"; // Replace with your source columns (e.g., Columns A to G)
  const destinationStartColumn = 9; // Starting column index for destination (e.g., Column I is 9) (You can paste it in another tab also)

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  // Get the data from the source range
  const sourceData = sheet.getRange(sourceRange).getValues();

  // Filter out empty rows from the source data
  const filteredSourceData = sourceData.filter(row => row.some(cell => cell !== ""));

  // Check if there's any data left after filtering
  if (filteredSourceData.length === 0) {
    Logger.log("No data to append after filtering empty rows.");
    return;
  }

  // Find the first empty row in the destination column
  const destinationColumn = sheet.getRange(1, destinationStartColumn, sheet.getLastRow()).getValues();
  let firstEmptyRow = destinationColumn.findIndex(row => row[0] === "") + 1; // Add 1 for 1-based index

  // If no empty row is found, start appending after the last row with data
  if (firstEmptyRow === 0) {
    firstEmptyRow = sheet.getLastRow() + 1;
  }

  // Paste the filtered source data at the first empty row in the destination columns
  sheet.getRange(firstEmptyRow, destinationStartColumn, filteredSourceData.length, filteredSourceData[0].length).setValues(filteredSourceData);
}
