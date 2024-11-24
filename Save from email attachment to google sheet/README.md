## Overview

This Google Apps Script automatically imports a CSV attachment from a specific email in Gmail and pastes the contents into a Google Sheets document. It is designed to fetch CSV reports sent via email, parse them, and update an existing sheet with the new data. The script can be scheduled to run daily, ensuring the sheet is updated with the latest data without manual intervention.

## Workflow

1. **Email Search Query:**
   - The script searches for emails from `noreply@gmail.com` with the subject "INVENTORY - DAILY - Available Stock" and filename `report.csv`.
   - It filters the most recent email containing the CSV file.

2. **CSV Parsing:**
   - The attachment (CSV file) from the email is parsed into a 2D array using `Utilities.parseCsv()`.

3. **Google Sheets Update:**
   - The script checks for a sheet named "Paste" in the active spreadsheet.
   - If the sheet does not exist, it creates a new sheet with that name.
   - It clears any existing contents and pastes the newly parsed CSV data into the sheet.

4. **Scheduling the Script:**
   - The script is scheduled to run daily at 08:30 AM using a time-based trigger.
  
   
### Key Features:
- **Email Fetching:** The script searches for emails with specific criteria (e.g., subject, sender, and filename).
- **Automatic Parsing:** The CSV attachment is automatically parsed and inserted into a Google Sheets document.
- **Scheduled Updates:** The script is set to run automatically every day at 8:30 AM.
- **Google Sheets Integration:** The script ensures the target sheet is updated with the latest data and creates it if necessary.
