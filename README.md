# Google Apps Script Projects
A collection of innovative Google Apps Script projects designed to automate tasks and enhance productivity within Google Workspace. These projects cover a variety of use cases, from data cleaning and report generation to email automation and error handling.

## Featured Projects

### 1. **Remove Duplicates, Keep Last, and Sort**
- [Code](Google_Sheet_Pdf_Report_Email/App_Script.gs) | [HTML File](Google_Sheet_Pdf_Report_Email/HTML.html) | [Documentation](Google_Sheet_Pdf_Report_Email/README.md)
- **Description**: Automates the generation of a PDF report from Google Sheets, formats it into an HTML table, and sends it as an email attachment.
- **Key Features**:
  - **PDF Report Generation**: Converts Google Sheets data into structured PDFs.
  - **Email Automation**: Sends the generated PDF as an attachment.
  - **Customizable Content**: Adjust report data and recipient list.

### 2. **Remove Duplicates, Keep Last Occurrence, and Sort Script**
- [Code](Remove_Duplicate_Rows_And_Sort_Final_Result_Based_On_Column_Value/App_Script.gs) | [Documentation](Remove_Duplicate_Rows_And_Sort_Final_Result_Based_On_Column_Value/README.md)
- **Description**: Automates data cleaning by removing duplicates while keeping the last occurrence and sorting the remaining rows.
- **Key Features**:
  - **Remove Duplicates**: Retains only the latest entry.
  - **Sort Data**: Organizes rows based on a chosen column.
  - **Flexible Range & Column Selection**: Customizable for various datasets.

### 3. **Automatically Copy & Paste Data**
- [Code](Automatically_Paste_Data_From_1_Place_To_Another/App_Script.gs) | [Documentation](Automatically_Paste_Data_From_1_Place_To_Another/README.md)
- **Description**: Automates copying data from a specified range, cleaning it, and appending it to a destination sheet or tab.
- **Key Features**:
  - **User-Defined Source Range**: Flexible data copying.
  - **Data Cleaning**: Removes empty rows.
  - **Automatic Destination Detection**: Appends to the next available row.

### 4. **Personalized Emails To Each Recipient**
- [Code](Personalized_Emails_To_Each_Recipient/App_Script.gs) | [HTML](Personalized_Emails_To_Each_Recipient/HTML.html) | [Documentation](Personalized_Emails_To_Each_Recipient/README.md)
- **Description**: Sends personalized emails to recipients listed in a Google Sheet, using HTML templates to include dynamic content like sales data.
- **Key Features**:
  - **Dynamic Email Content**: Customizes email content based on sheet data.
  - **HTML Template**: Easily customizable email design.
  - **Spreadsheet Integration**: Manage recipients and content directly from Google Sheets.

### 5. **Email With Flexible Email IDs**
- [Code](send_schedule_email_flexible_email_ids/schedule_emails_flx_emails.gs) | [HTML](send_schedule_email_flexible_email_ids/HTML.html) | [Documentation](send_schedule_email_flexible_email_ids/README.md)
- **Description**: Automates sending customized schedule emails to recipients, dynamically pulling email addresses and schedule data from Google Sheets.
- **Key Features**:
  - **Dynamic Recipients**: Sends emails to recipients listed in the sheet.
  - **Data Retrieval**: Fetches personalized data for each recipient.
  - **Customizable Email Content**: Subject, CC, and content can be dynamically pulled from the sheet.

### 6. **Import CSV Data From Gmail Attachment to Google Sheets**
- [Code](Save_From_Email_Attachment_To_Google_Sheet/App_Script.gs) | [Documentation](Save_From_Email_Attachment_To_Google_Sheet/README.md)
- **Description**: Imports CSV attachments from Gmail into Google Sheets, automating the process of updating data from email reports.
- **Key Features**:
  - **Email Fetching**: Automatically searches for specific emails.
  - **CSV Parsing**: Imports CSV data into Google Sheets.
  - **Scheduled Updates**: Runs automatically at a set time.

### 7. **Handle Reference Error**
- [Code](Handle_Ref_Error/App_Script.gs) | [Documentation](Handle_Ref_Error/README.md)
- **Description**: Detects and resolves `#REF!` errors in Google Sheets, with automatic row additions and email notifications.
- **Key Features**:
  - **Automatic Error Detection**: Identifies `#REF!` errors.
  - **Retry Mechanism**: Configurable error resolution attempts.
  - **Email Alerts**: Notifies users if the issue persists.

### 8. **Auto Timestamp for Edits**
- [Code](Save_Date_&_Time_Based_On_Value_In_A_Cell/App_Script.gs) | [Documentation](Save_Date_&_Time_Based_On_Value_In_A_Cell/README.md)
- **Description**: Automatically adds timestamps when specific cells are edited, ensuring accurate tracking of changes.
- **Key Features**:
  - **Automatic Timestamping**: Adds timestamps on cell edits.
  - **Fallback for `onEdit()`**: Ensures timestamps even if `onEdit()` fails.
  - **Customizable**: Works on any sheet or column.

### 9. **Auto-Update Email Id & Timestamp**
- [Code](Save_EmailId_Timestamp_At_The_Time_Of_Edit_In_Sheet/App_Script.gs) | [Documentation](Save_EmailId_Timestamp_At_The_Time_Of_Edit_In_Sheet/README.md)
- **Description**: Records the date and email address of users when specific columns are edited in Google Sheets.
- **Key Features**:
  - **Automatic Date Logging**: Logs date and time of edits.
  - **User Email Logging**: Tracks the email of the editor.
  - **Seamless Operation**: Runs without manual input.

### 10. **Color Rows Based on Column Values**
- [Code](Color_Rows_Based_On_Column_Value/App_Script.gs) | [Documentation](Color_Rows_Based_On_Column_Value/README.md)
- **Description**: Colors rows based on the values in a specific column to visually categorize data.
- **Key Features**:
  - **Dynamic Row Coloring**: Apply colors based on cell values.
  - **Customizable Conditions**: Set colors for specific values.
  - **Easy Integration**: Works with any Google Sheet.

### 11. **Hide/Show Rows Based on Column Value**
- [Code](Hide_Rows_Based_On_Column_Value/App_Script.gs) | [Documentation](Hide_Rows_Based_On_Column_Value/README.md)
- **Description**: Automatically hides or shows rows based on the values in a designated column.
- **Key Features**:
  - **Conditional Row Visibility**: Hides rows based on specific values.
  - **Customizable**: Can be adapted to different sheets and conditions.

### 12. **Mark Rows Based on Cell Color**
- [Code](Value_Based_On_Cell_Color/App_Script.gs) | [Documentation](Value_Based_On_Cell_Color/README.md)
- **Description**: Marks rows based on the background color of cells, helping to categorize or highlight data visually.
- **Key Features**:
  - **Target Sheet**: Operates on `Sheet1` (modifiable).
  - **Color Check**: Evaluates cell colors to mark rows.
  - **Conditional Marking**: Marks rows with `1` or `0` based on color.

### 13. **Automated Cell Clearing Script**
- [Code](clear_cells/ClearCells.gs) | [Documentation](clear_cells/README.md)
- **Description**: Clears specific cell ranges across multiple sheets, streamlining daily data cleaning tasks.
- **Key Features**:
  - Clears specified ranges in multiple sheets.
  - Ideal for daily data reset tasks.

## How to Use
- Open the script in the Google Apps Script editor.
- Follow the individual project instructions provided in each folder for setup and customization.
