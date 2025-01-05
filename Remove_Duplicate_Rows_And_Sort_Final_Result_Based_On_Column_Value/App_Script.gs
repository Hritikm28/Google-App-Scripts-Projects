function removeDuplicatesKeepLastAndSort() {
  const sheetName = "Sheet1"; // Replace with your sheet name
  const startColumn = 9; // Start column index
  const endColumn = 15; // End column index
  const keyColumn = 16; // The column to check for duplicates
  const sortColumn = 15; // The column to sort by

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    Logger.log("No data to process.");
    return; // Exit if there are no rows to process
  }

  // Get the data for the key column and the range to clear
  const keyValues = sheet.getRange(2, keyColumn, lastRow - 1, 1).getValues().flat();
  const dataRange = sheet.getRange(2, startColumn, lastRow - 1, endColumn - startColumn + 1);
  const data = dataRange.getValues();

  // Track the rows to keep (last occurrence of each key)
  const seenKeys = new Map(); // Map to store the last row for each key
  for (let i = keyValues.length - 1; i >= 0; i--) {
    const key = keyValues[i];
    if (key !== "" && !seenKeys.has(key)) {
      seenKeys.set(key, i + 2); // Store the row number (1-based index) of the last occurrence
    }
  }

  // Filter data to keep only the unique rows (based on last occurrence)
  const uniqueData = [];
  for (let i = 0; i < data.length; i++) {
    const rowIndex = i + 2; // Adjust for 1-based row index
    if (seenKeys.has(keyValues[i]) && seenKeys.get(keyValues[i]) === rowIndex) {
      uniqueData.push(data[i]);
    }
  }

  // Sort the unique data based on column 15 (adjust for zero-based index)
  uniqueData.sort((a, b) => {
    if (a[sortColumn - startColumn] < b[sortColumn - startColumn]) return -1;
    if (a[sortColumn - startColumn] > b[sortColumn - startColumn]) return 1;
    return 0;
  });

  // Clear the destination range and write back the sorted unique data
  dataRange.clearContent();
  sheet.getRange(2, startColumn, uniqueData.length, uniqueData[0].length).setValues(uniqueData);

  Logger.log(`Cleared duplicates and sorted ${uniqueData.length} rows by column ${sortColumn}.`);
}
