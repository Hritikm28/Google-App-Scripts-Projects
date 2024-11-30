# Check for Edits and Add Timestamp in Google Sheets

This Google Apps Script checks if a specific column in a Google Sheets document has been edited (i.e., the cell contains a value) and automatically adds a timestamp in a designated column if the timestamp is missing. This can be particularly useful in scenarios where the built-in `onEdit()` trigger may not work as expected.

## Functionality

The `checkForEditsAndTimestamp()` function performs the following tasks:

1. **Target Sheet**: It operates on a sheet named `Sheet1`. You can modify the sheet name within the script if you'd like to use it on a different sheet.
2. **Range Selection**: The function checks all cells in the second column (B) of the sheet.
3. **Timestamp Addition**: If a cell in the second column is edited (i.e., it contains a value) and the corresponding timestamp cell in the 25th column (Y) is blank, the script adds a timestamp of the current date and time to that cell.

## When to Use This Script

This script is particularly useful when:

- **`onEdit()` Trigger Doesn't Work Properly**: In certain cases, the `onEdit()` trigger may fail to respond correctly, especially with large data sets or specific types of edits (like changes made via forms or API). In such cases, this script can be used to ensure that a timestamp is added whenever a cell is edited.
  
- **Tracking Edits**: If you need to keep track of when each entry was modified in a sheet, this script automates the process by adding timestamps in a dedicated column whenever a change is made.

- **Automation**: This function can run periodically (e.g., once every minute or hour) to ensure that timestamps are added correctly and to fill in any missing timestamps for cells that were modified but didn't have one assigned due to `onEdit()` failure.

## Script Details

### **Function: `checkForEditsAndTimestamp()`**

This function performs the following tasks:
1. **Access the Spreadsheet**: It accesses the active spreadsheet and specifically the `Sheet1` sheet.
2. **Check for Edits**: It checks if any cells in the second column (B) contain values.
3. **Add Timestamp**: If a value is found in the cell and the timestamp column (Y) is blank, it adds a timestamp in the corresponding row of the 25th column.
