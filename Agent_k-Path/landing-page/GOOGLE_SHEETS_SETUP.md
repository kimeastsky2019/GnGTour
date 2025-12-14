# Google Sheets Connection Setup

To connect the CTS Form to your Google Sheet, follow these steps:

## 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it "GnG Tour Leads" (or whatever you prefer).

## 2. Open Apps Script
1. In the spreadsheet, go to **Extensions** > **Apps Script**.
2. This will open a new tab with a code editor.

## 3. Add the Script
1. Delete any code in the `Code.gs` file.
2. Copy and paste the following code:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the request body
    // The frontend sends data as a JSON string stringified in the body
    var data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    // Order must match the headers you set up
    var rowData = [
      new Date(), // Timestamp
      data.name || '',
      data.contact || '',
      data.country || '',
      data.language || '',
      data.program || '',
      data.budgetStart || '',
      data.visa || '',
      data.notes || '',
      data.owner || '',
      data.createdAt || ''
    ];
    
    // Append the row
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    'Timestamp', 
    'Name', 
    'Contact', 
    'Country', 
    'Language', 
    'Program', 
    'Budget/Start', 
    'Visa', 
    'Notes', 
    'Owner', 
    'Created At'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}
```

## 4. Setup Headers (Optional but recommended)
1. In the Apps Script editor, select `setupSheet` from the function dropdown (top toolbar).
2. Click **Run**.
3. Grant permissions if asked.
4. Go back to your Google Sheet and verify the headers are created.

## 5. Deploy as Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Click the **Select type** gear icon > **Web app**.
3. Fill in the details:
   - **Description**: CTS Form Endpoint
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (This is important so the form can submit without login)
4. Click **Deploy**.
5. Copy the **Web app URL**.

## 6. Update the Frontend Code
1. Open `src/components/CTSForm.tsx`.
2. Replace the `ENDPOINT` variable value with your new Web app URL.

```typescript
const ENDPOINT = 'YOUR_NEW_WEB_APP_URL_HERE';
```
