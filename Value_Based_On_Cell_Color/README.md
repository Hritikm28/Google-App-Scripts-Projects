# Overview
This Google Apps Script function marks rows in a Google Sheets document based on the background color of cells in the second column. If a cell in the second column has a specific background color (blue, `#008080`), the corresponding row in the 23rd column is marked with a `1`. Otherwise, it is marked with a `0`.

## Functionality

- **Target Sheet**: The script operates on a sheet named `Sheet1`. You can modify this sheet name in the code if you want to run it on a different sheet.
- **Color Check**: It checks the background color of each cell in the second column (B) from row 1 to the last row of data.
- **Conditional Marking**: If the color is blue (`#008080`), it sets the value `1` in the 23rd column (W). For any other color, it sets the value `0` in the same column.

## Script Details

### **Function: `markRowsBasedOnColor()`**

This function performs the following tasks:
1. Opens the active spreadsheet and fetches `Sheet1`.
2. Gets the background color of each cell in the second column (B).
3. Checks if the color of the cell is blue (`#008080`).
4. Based on the color check, it sets either `1` or `0` in the 23rd column (W) for the corresponding row.
