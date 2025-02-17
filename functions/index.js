const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { google } = require("googleapis");
const admin = require("firebase-admin");
const serviceAccount = require("./service-account-key.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Google Sheets Setup
const SPREADSHEET_ID = "1af5MEakh4-MOxLYOCtISBZgz6ABp7OLEXVV3td-3v4M"; // Replace with your Google Sheet ID
const SHEET_NAME = "RSVPs"; // Replace with your desired sheet name
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Firestore Trigger for New RSVP
exports.addRSVPToGoogleSheets = onDocumentCreated("rsvp/{docId}", async (event) => {
  console.log("Firestore trigger fired for document creation.");
  const sheets = google.sheets({ version: "v4", auth });

  const rsvp = event.data.data(); // Get Firestore document data
  console.log("RSVP Data:", rsvp);

  const row = [
    rsvp.firstName || "",
    rsvp.lastName || "",
    rsvp.email || "",
    (rsvp.foodRestrictions || []).join(", "),
    (rsvp.alcoholPreferences || []).join(", "),
  ];
  console.log("Prepared Row for Google Sheets:", row);

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: "RAW",
      resource: { values: [row] },
    });
    console.log("Google Sheets Response:", response.data);
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
  }

  console.log("Trigger fired for new Firestore document.");
  console.log("RSVP Data:", rsvp);
  console.log("Prepared Row for Google Sheets:", row);

});
