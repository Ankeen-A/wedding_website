import { google } from "googleapis";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import serviceAccountKey from "./service-account-key.json"; // Path to your JSON key

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID"; // Replace with your Google Sheet ID
const SHEET_NAME = "RSVPs"; // Name of the sheet tab

const exportToGoogleSheets = async () => {
  try {
    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // Fetch Firestore data
    const querySnapshot = await getDocs(collection(db, "rsvp"));
    const rsvps = querySnapshot.docs.map((doc) => doc.data());

    // Prepare data for Sheets
    const sheetData = [["First Name", "Last Name", "Email", "Food Restrictions", "Alcohol Preferences"]]; // Header row
    rsvps.forEach((rsvp) => {
      sheetData.push([
        rsvp.firstName || "",
        rsvp.lastName || "",
        rsvp.email || "",
        (rsvp.foodRestrictions || []).join(", "),
        (rsvp.alcoholPreferences || []).join(", "),
      ]);
    });

    // Write to Google Sheets
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      resource: { values: sheetData },
    });

    console.log("Data exported to Google Sheets successfully!");
  } catch (error) {
    console.error("Error exporting data to Google Sheets:", error);
  }
};

export default exportToGoogleSheets;
