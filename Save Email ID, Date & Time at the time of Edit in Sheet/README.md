# Google Sheets Auto-Update Script

This Google Apps Script automates the process of recording the date and email address of the user when specific columns are edited in a Google Sheet. The script is designed for use in a sheet named **"New"** and helps maintain a log of user edits efficiently.

---

## **Features**
- Automatically records the **current date and time** when a cell in specified columns is edited.
- Logs the **email address** of the user who made the edit.
- Ensures seamless operation without manual intervention.

---

## **How It Works**
1. The script runs every time a cell is edited in the Google Sheet.
2. If the active sheet is named **"New"**, the script performs the following actions:
   - **Column D**:
     - Adds the current date to Column F.
     - Logs the email address of the editor in Column G.
   - **Column H**:
     - Adds the current date to Column I.
     - Logs the email address of the editor in Column J.

---
