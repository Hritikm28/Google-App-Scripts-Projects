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

## How to Use
- Open the script in Google Apps Script editor.
- Follow the individual project instructions provided in the respective folders.

