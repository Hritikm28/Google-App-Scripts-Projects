# Google-App-Scripts-Projects
Collection of Google Apps Script projects for automating tasks in Google Workspace.

## Projects
1. **Remove Duplicates, Keep Last, and Sort**
- [Code](Google_Sheet_Pdf_Report_Email/App_Script.gs) | [HTML_File](Google_Sheet_Pdf_Report_Email/HTML.html) | [Documentation](Google_Sheet_Pdf_Report_Email/README.md)
- Description: This script automates generating a PDF report from a Google Sheet and sending it via email. It extracts data from a specified sheet, formats it into an HTML table, converts it to a PDF, and sends it as an email attachment. Ideal for automating daily, weekly, or periodic reports.
   #### Key Features:
   - **PDF Report Generation:** Converts Google Sheet data into a well-structured PDF.
   - **Email Automation:**      Sends the generated PDF as an attachment to specified recipients.
   - **Customizable Data:**     Adjust the report content by modifying your Google Sheet.
   - **Recipient Management:**  Supports adding primary and CC email recipients.

2. **Remove Duplicates, Keep Last Occurrence, and Sort Script**
   - [Code](Remove_Duplicate_Rows_And_Sort_Final_Result_Based_On_Column_Value/App_Script.gs) | [Documentation](Remove_Duplicate_Rows_And_Sort_Final_Result_Based_On_Column_Value/README.md)
   - Description: This Google Apps Script automates data cleaning and organization in Google Sheets by:  
      - **Removing duplicate rows** while retaining the **last occurrence** of each unique key.  
      - **Sorting the remaining rows** based on a specified column.  
   #### Key Features:  
   - **Remove Duplicates:** Ensures only the most recent instance of duplicate rows is kept.  
   - **Sort Data:** Organizes rows based on a customizable column.  
   - **Range Flexibility:** Allows defining the data range, key column for duplicates, and sort column.  

3. **Automatically Copy & Paste Data**
   - [Code](Automatically_Paste_Data_From_1_Place_To_Another/App_Script.gs) | [Documentation](Automatically_Paste_Data_From_1_Place_To_Another/README.md)
   - Description: This Google Apps Script automates the process of copying data from a specified range, filtering out empty rows, and appending the cleaned data to a chosen destination. It supports appending within the same sheet or across different tabs.  
   #### Key Features: 
   - **User-Defined Source Range**: Copies data from a specified range in the sheet.  
   - **Data Cleaning**: Filters out rows with no data to ensure clean appending.  
   - **Automatic Detection**: Identifies the first empty row in the destination range.  
   - **Flexible Destination**: Allows appending within the same sheet or to a different tab.

4. **Personalized Emails To Each Recipient**
   - [Code](Personalized_Emails_To_Each_Recipient/App_Script.gs) | [HTML](Personalized_Emails_To_Each_Recipient/HTML.html) | [Documentation](Personalized_Emails_To_Each_Recipient/README.md)
   - Description: This Google Apps Script automates sending personalized emails to recipients listed in a Google Sheet. The emails include sales details and incentives, dynamically generated using an HTML template and data from the sheet. Each recipient receives a customized email based on their individual sales performance and incentives.
   #### Key Features:
   - **Dynamic Email Content:** Personalized emails with sales and incentive details.
   - **HTML Template:** Customizable email layout and content.
   - **Spreadsheet Integration:** Easily manage recipient data and email content in Google Sheets.
   - **Automated Email Sending:** Sends personalized emails via Gmail.

5. **Email With Flexible Email Ids**
   - [Code](send_schedule_email_flexible_email_ids/schedule_emails_flx_emails.gs) | [HTML](send_schedule_email_flexible_email_ids/HTML.html) | [Documentation](send_schedule_email_flexible_email_ids/README.md)
   - Description: This Google Apps Script automates sending customized schedule emails to recipients listed in a Google Sheet. It dynamically retrieves email addresses and schedule data, populates an HTML email template, and sends personalized emails using Gmail.
   #### Key Features:
   - **Dynamic Email Recipients:** Sends emails to recipients listed in the "Email" sheet (A2 to A31) without manual updates.
   - **Data Retrieval:** Fetches details like Name, Manager, Designation, and schedule data from "Sheet1."
   - **HTML Template:** Customizes email content with dynamic schedule data.
   - **Email Customization:** Subject and CC email addresses are pulled directly from the sheet.
   - **Gmail Integration:** Sends the emails with HTML content using GmailApp.sendEmail().

6. **Import CSV Data From Gmail Attachment to Google Sheets**
   - [Code](Save_From_Email_Attachment_To_Google_Sheet/App_Script.gs) | [Documentation](Save_From_Email_Attachment_To_Google_Sheet/README.md)
   - Description: This Google Apps Script automatically imports a CSV attachment from a specific email in Gmail and pastes the contents into a Google Sheets document. The script is designed to fetch daily inventory reports, parse the CSV data, and update the sheet without manual intervention.
   #### Key Features:
   - **Email Fetching:** Automatically searches for emails with specific criteria (e.g., subject, sender, and filename).
   - **CSV Parsing:** Parses the CSV attachment and updates the Google Sheets document.
   - **Scheduled Updates:** Runs daily at 08:30 AM to keep the sheet updated.
   - **Google Sheets Integration:** Ensures the target sheet is created and updated with the latest data.

7. **Handle Reference Error**
   - [Code](Handle_Ref_Error/App_Script.gs) | [Documentation](Handle_Ref_Error/README.md)
   - Description: This Google Apps Script automates the detection and resolution of `#REF!` errors in Google Sheets. It checks for reference errors, adds rows to resolve them, and sends an email notification if the issue persists after multiple attempts.
   #### Key Features:
   - **Automatic Detection**: Scans for `#REF!` errors in the sheet.
   - **Dynamic Row Addition**: Adds rows to fix reference errors.
   - **Retry Mechanism**: Configurable number of attempts to resolve errors.
   - **Email Notification**: Alerts the user if the issue remains unresolved.

8. **Auto Timestamp for Edits**
   - [Code](Save_Date_&_Time_Based_On_Value_In_A_Cell/App_Script.gs) | [Documentation](Save_Date_&_Time_Based_On_Value_In_A_Cell/README.md)
   - Description: This Google Apps Script automatically adds a timestamp in a designated column whenever a specific cell is edited in Google Sheets. It ensures that timestamps are added even when the `onEdit()` trigger doesn't work as expected, particularly in large datasets or edits made via forms or APIs.
   #### Key Features:
   - **Automatic Timestamping:** Adds timestamps when cells are edited in a specific column.
   - **Fallback for `onEdit()` Trigger:** Ensures timestamps are added even if `onEdit()` fails.
   - **Customizable:** Works on any sheet and can be adapted to different columns.
   - **Tracking Edits:** Helps track when each entry was modified.

9. **Auto-Update Email Id & Timestamp**
   - [Code](Save_EmailId_Timestamp_At_The_Time_Of_Edit_In_Sheet/App_Script.gs) | [Documentation](Save_EmailId_Timestamp_At_The_Time_Of_Edit_In_Sheet/README.md)
   - Description: This Google Apps Script automatically records the date and email address of the user when specific columns are edited in a Google Sheet. It is designed for a sheet named **"New"** to maintain a log of user edits without manual intervention.
   #### Key Features:
   - **Automatic Date Logging:** Records the current date and time when specified columns are edited.
   - **User Email Logging:** Logs the email address of the user who made the edit.
   - **Seamless Operation:** Runs automatically without manual input.

10. **Color Rows Based on Column Values**
   - [Code](Color_Rows_Based_On_Column_Value/App_Script.gs) | [Documentation](Color_Rows_Based_On_Column_Value/README.md)
   - Description: This Google Apps Script colors entire rows in a Google Sheet based on the values in a specified column, making it easier to visually categorize or highlight data.
   #### Key Features:
   - **Dynamic Row Coloring:** Apply custom colors based on cell values in a specific column.
   - **Customizable Conditions:** Set different colors for different values (e.g., green for completed, red for urgent).
   - **Easy Integration:** Works with any Google Sheet and can be adapted for various use cases.


## How to Use
- Open the script in Google Apps Script editor.
- Follow the individual project instructions provided in the respective folders.

