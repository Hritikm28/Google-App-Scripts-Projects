# Google Sheets Copy and Append Script

This Google Apps Script automates the process of copying data from a specified range within a Google Sheet, filtering out empty rows, and appending the cleaned data to a new location. It is designed for flexible use cases, including pasting the data within the same sheet or another tab.

---

## **Features**
- Copies data from a user-defined source range.
- Filters out empty rows from the source data to ensure clean appending.
- Automatically identifies the first empty row in the destination range.
- Flexible destination options:
- Append within the same sheet or paste into a different tab.
---

## **How It Works**
1. Source Range: The script extracts data from a user-defined range (e.g., columns A2:G) in the specified sheet.
2. Filtering:    Rows with no data in all cells are filtered out.
3. Destination Logic: The script calculates the first available empty row in the destination range. If no empty rows are found, the data is appended after the last row with existing data.
4. Appending: Filtered data is pasted starting from the first empty row in the destination range.
---
