function handleRefError() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet1"); // Change to your sheet name
  const email = "sampleemail@email.com"; // Set the email address for notifications
  const maxAttempts = 5;
  const rowsToAdd = 1000;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const data = sheet.getDataRange().getValues();

    // Check for any #REF! errors in the sheet
    const refErrorFound = data.some(row => row.some(cell => cell === "#REF!"));

    if (!refErrorFound) {
      break; // Exit if no #REF! error is found
    }

    // If a #REF! error is found, add rows and increase the attempt count
    sheet.insertRowsAfter(sheet.getLastRow(), rowsToAdd);
    attempts++;
  }

  // After maxAttempts, check if #REF! error still exists
  if (attempts === maxAttempts) {
    const finalCheck = sheet.getDataRange().getValues();
    const refErrorStillPresent = finalCheck.some(row => row.some(cell => cell === "#REF!"));

    if (refErrorStillPresent) {
      MailApp.sendEmail({
        to: email,
        subject: "Google Sheet Reference Error Alert",
        body: "The sheet 'Sheet1' still has #REF! errors after adding rows multiple times."
      });
    }
  }
}
