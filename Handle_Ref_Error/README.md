# Overview

This repository contains a Google Apps Script function, `handleRefError1`, designed to handle and resolve `#REF!` errors in Google Sheets. The script checks for reference errors in a specified sheet, attempts to fix them by adding rows, and sends an email notification if the issue persists after multiple attempts.

---

## Features
- **Automatic Detection**: Scans the sheet for `#REF!` errors.
- **Dynamic Row Addition**: Adds rows to resolve potential reference issues.
- **Retry Mechanism**: Attempts to resolve errors multiple times (configurable).
- **Email Notification**: Sends an alert if the issue remains unresolved.

---

## Use Case

### Scenario:
In Google Sheets, `#REF!` errors often occur when data exceeds from the current tab size. These errors can disrupt workflows and calculations. This script provides a proactive way to detect and address such issues by:
1. Adding rows dynamically to mitigate the error.
2. Alerting the user via email if the problem persists.

### Example:
Imagine a shared Google Sheet used for real-time data entry. Due to frequent edits, `#REF!` errors arise, causing formulas to break. Instead of manually inspecting and fixing the sheet, this script automates the process, saving time and ensuring smooth operations.

---

## Setup Instructions

### 1. Open Script Editor
1. Open your Google Sheet.
2. Navigate to `Extensions > Apps Script`.

### 2. Paste the Code
Copy and paste the `handleRefError1` function into the Apps Script editor.

### 3. Update Configuration
Modify the following variables in the script as per your requirements:
- **Sheet Name**: Replace `"sheet1"` with the name of your target sheet.
- **Email Address**: Replace `"sampleemail@email.com"` with your email address.
- **Max Attempts**: Set the maximum number of retry attempts (`maxAttempts`).
- **Rows to Add**: Specify the number of rows to add per attempt (`rowsToAdd`).

### 4. Save and Authorize
1. Save the script (`File > Save`).
2. Authorize the script by clicking `Run > handleRefError1` for the first time and following the prompts.

### 5. Schedule the Script (Optional)
To automate periodic checks:
1. Go to `Triggers` (clock icon in the Apps Script editor).
2. Click `+ Add Trigger`.
3. Set the function to `handleRefError1` and configure the frequency (e.g., daily).

---
