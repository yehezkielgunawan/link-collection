import { google } from "googleapis";
import { KEY, SPREADSHEET_ID } from "$env/static/private";

export const load = async () => {
  const sheet = google.sheets({
    version: "v4",
    auth: KEY,
  });
  const links = await sheet.spreadsheets.values
    .get({
      spreadsheetId: SPREADSHEET_ID,
      range: "links",
    })
    .then((res) => {
      // remove the first index of the array
      // then map the result into array of objects
      return res.data.values?.slice(1).map((row) => {
        return {
          name: row[1],
          url: row[0],
        };
      });
    });

  const socialMedias = await sheet.spreadsheets.values
    .get({
      spreadsheetId: SPREADSHEET_ID,
      range: "social_media",
    })
    .then((res) => {
      return res.data.values?.slice(1).map((row) => {
        return {
          social_media_name: row[0],
          url: row[1],
        };
      });
    });

  return {
    links,
    socialMedias,
  };
};
