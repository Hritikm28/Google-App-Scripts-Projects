## Overview
This Google Apps Script is designed to send personalized emails to a list of recipients with sales-related details and incentives information, dynamically populated from a Google Sheets spreadsheet. The email content is generated using an HTML template, and the script sends the email to each recipient listed in a specified Google Sheet.

## Workflow
1. **Spreadsheet Setup:**
   - **Send Email Sheet:** This sheet contains a list of recipients and their associated data. Each row represents an individual recipient with the following columns:
     - Column 1: Name
     - Column 2: Email Address
     - Column 3: Target Sales
     - Column 4: Total Sales
     - Column 5: KPI
     - Column 6: Sales Incentive
     - Column 7: New Customers
     - Column 8: Focus Products
     - Column 9: Marketing Incentive
     - Column 10: Total Incentive
     
   - **Details Sheet:** This sheet contains template content for email subject, details, and messages. The relevant data for email generation is pulled from this sheet.

2. **HTML Email Template:**
   The email body is dynamically created by merging data from the sheets with a predefined HTML template. The template includes placeholders for the values such as:
   - Recipient's name
   - Target sales, total sales, KPIs, and other relevant details
   - Incentives and marketing information
   - Additional custom messages

3. **Email Sending Logic:**
   - The script loops through the rows of the `Send Email` sheet to retrieve each recipient's data.
   - The script substitutes placeholders in the HTML template with the recipient's data.
   - The personalized HTML email is then sent to each recipient using Gmail.

4. **Personalization:**
   Each email is customized based on the recipient's data, ensuring that each email contains unique information relevant to the individual.

## Code Breakdown

### Script Components:
1. **Spreadsheet Access:**
   The script first accesses two sheets:
   - **Send Email:** Contains the email addresses and the sales-related data for each recipient.
   - **Details:** Contains the static content such as subject, messages, and incentive details.

2. **Data Retrieval:**
   The script extracts necessary data from the `Send Email` and `Details` sheets to fill the email template:
   - Recipient Name, Email Address, Sales, KPI, Incentives, etc.
   - Static content like email subject, introductory messages, and incentive details.

3. **HTML Template Creation:**
   - A dynamic HTML template is created using the `HtmlService.createTemplateFromFile('HTML')` method.
   - Variables are passed into the template, and the HTML is generated with personalized values.

4. **Email Sending:**
   The email is sent using the `GmailApp.sendEmail()` function, with the generated HTML content as the email body.
