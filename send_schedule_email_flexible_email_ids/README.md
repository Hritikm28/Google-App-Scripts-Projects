Overview
The sendScheduleEmail function is a Google Apps Script that automates sending customized schedule emails using data from a Google Sheet. The biggest advantage of this script is its ability to send emails dynamically to a list of email addresses retrieved from the sheet. This eliminates the need to manually update recipient lists, streamlining the communication process.

Key Features
Dynamic Email Recipients: Sends emails to dynamic email addresses listed in the Email sheet (from A2 to A31), allowing flexibility without needing to hard-code or manually update the recipients.
Data Retrieval: Fetches various details from Sheet1, such as Name, Manager, Designation, and the schedule data.
HTML Template: Populates an HTML email template (HTML2.html) with the retrieved data, including a schedule table.
Email Customization: The subject and CC email address are pulled from the sheet, ensuring personalized and relevant communication.
Gmail Integration: Uses GmailApp.sendEmail() to send the email with HTML content.
Prerequisites
Google Sheet Structure:
Sheet1: Contains the data for headers, schedule, and the email subject.
Email: Contains email addresses (from A2 to A31).
Workflow
Retrieve Data: Fetches header and schedule data from Sheet1.
Populate Template: Fills in the HTML email template with the retrieved data.
Send Email: Automatically sends the email to dynamically retrieved recipients, with the subject and CC email address sourced from the sheet.
