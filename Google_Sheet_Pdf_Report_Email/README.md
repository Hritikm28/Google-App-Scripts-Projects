## Overview

This Google Apps Script project automates the process of generating a PDF report from a Google Sheet and sending it via email. It pulls data from a specified Google Sheet, formats it into an HTML table, converts it to a PDF, and emails it as an attachment. This can be used for daily, weekly, or any regularly scheduled reports from a Google Sheet.

## Features

- **Generate PDF Report**: Converts data from a Google Sheet into a well-structured PDF.
- **Email Automation**: Sends the generated PDF as an email attachment.
- **Customizable Data**: You can customize the data in your Google Sheet (such as Date, Code, Amount, etc.).
- **Email Recipients**: Allows you to send the report to specified recipients and optionally CC others.

## Setup Instructions

1. **Google Sheet Setup**:
   - Create a Google Sheet with a sheet named `Daily Report_Email` or similar.
   - Set the subject of the email in cell `H1`.
   - Set the main heading of the report in cell `H2`.
   - Set the subheading of the report in cell `H4`.
   - In row `1`, columns `A` to `F`, add the headers for your data (`Date`, `Code`, `Amount`, `Payment`, `Person`, `Category`).
   - The script will use the data from rows 2 onwards in the range `A2:F` for the report.

2. **Script Setup**:
   - Open the Google Sheet linked to this project.
   - Go to `Extensions > Apps Script` to open the Apps Script editor.
   - Copy and paste the script into the editor.
   - Save and authorize the script to access your Gmail and Google Sheets.

3. **Configure Email Recipients**:
   - Modify the `recipient` variable with the email addresses where you want the report sent.
   - Modify the `ccmail` variable with any CC email addresses.

4. **Run the Script**:
   - You can run the script manually by executing the `sendpdf()` function from the Apps Script editor for testing.
   - To automate the report sending, set up a time-based trigger to run the `sendpdf()` function at a specific time each day using `ScriptApp.newTrigger()`.

5. **Email Customization**:
   - The subject of the email is pulled from cell `H1` in your Google Sheet.
   - The body of the email includes the main heading (`H2`), subheading (`H4`), and the table data in the PDF.

## Customization

- **Table Columns**: The columns (`Date`, `Code`, `Amount`, `Payment`, `Person`, `Category`) can be adjusted by updating the values in row `1` of the Google Sheet.
- **HTML Template**: The HTML email template can be customized in the Apps Script file if you want to change the appearance of the email or PDF.
- **Scheduled Triggers**: Use Google Apps Script's `ScriptApp.newTrigger()` to schedule daily or periodic email sends based on your requirements.
