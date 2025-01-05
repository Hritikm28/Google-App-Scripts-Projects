# Google Sheets Script: Remove Duplicates, Keep Last Occurrence, and Sort

This Google Apps Script processes data in a specified range of a Google Sheet by:

1. Removing duplicate rows while keeping the **last occurrence** of each unique value in a key column.
2. Sorting the remaining rows based on a specified column.

The script simplifies data cleaning and organization by automating these tedious tasks.

---

## Functionality

### **Key Features**
1. **Remove Duplicates**: 
   - Identifies and removes duplicate rows based on the last occurrence of a value in the key column.
   - Ensures that only one instance of a duplicate row (the most recent) remains in the dataset.
2. **Sort Data**: 
   - Sorts the resulting unique rows based on a specified column.
3. **Range Flexibility**:
   - Allows you to define the start and end columns for the data range to be processed.
   - The key column for duplicates and the sort column can also be customized.

---

## Script Usage

### **How to Use**
1. **Add the Script**:
   - Open your Google Sheet.
   - Navigate to `Extensions > Apps Script`.
   - Paste the script into the editor and save it.

2. **Configuration**:
   - Update the `sheetName` variable to the name of your sheet (default: `"Sheet1"`).
   - Set the `startColumn`, `endColumn`, `keyColumn`, and `sortColumn` variables:
     - `startColumn` and `endColumn`: Define the range of columns to process.
     - `keyColumn`: The column used to identify duplicates.
     - `sortColumn`: The column used to sort the rows.

3. **Run the Script**:
   - Click the play button in the Apps Script editor to execute the script.
   - The script will process the data in the specified sheet and range.

4. **View Results**:
   - Duplicate rows (except the last occurrence) will be removed.
   - The remaining rows will be sorted based on the specified sort column.

---

### **When to Use**

This script is particularly useful in the following scenarios:
- **Data Cleanup**:
  - When you need to remove duplicate entries from a dataset while retaining the most recent instance.
- **Sorting and Organizing**:
  - After cleaning the data, sorting by a specific column helps organize it for easier analysis.
- **Dynamic Datasets**:
  - For datasets that are updated frequently and where manual de-duplication is impractical.
- **Performance Tracking**:
  - If the key column contains timestamps or unique IDs, the script ensures you retain the latest record for each key.

---

## Script Explanation

### **Core Variables**
- `sheetName`: Name of the target sheet (default: `"Sheet1"`).
- `startColumn`: First column index of the range to process (default: `9`).
- `endColumn`: Last column index of the range to process (default: `15`).
- `keyColumn`: Column index to check for duplicates (default: `16`).
- `sortColumn`: Column index to sort the data (default: `15`).

### **Workflow**
1. **Read Data**:
   - Retrieves data from the defined range and flattens the key column values.
2. **Identify Unique Rows**:
   - Uses a `Map` to track the last occurrence of each unique value in the key column.
3. **Filter and Sort**:
   - Filters the dataset to keep only unique rows based on the last occurrence of each key.
   - Sorts the resulting data by the specified sort column.
4. **Write Processed Data**:
   - Clears the original range and writes the processed, sorted data back to the sheet.
