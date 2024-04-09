import { configs } from "../configs";
import { JWT } from 'google-auth-library';
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  configs.CLIENT_ID,
  configs.CLIENT_SECRET,
  configs.REDIRECT_URL
);

type GEvent = {
  summary: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: [{ email: string }];
};


const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
export const createGoogleCalendarEvent = async (userName: string, userEmail: string) => {
  try {
    const event: GEvent = {
      summary: `${userName} Login Event`,
      start: {
        dateTime: new Date().toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: new Date(new Date().getTime() + 10 * 60000).toISOString(), 
        timeZone: 'Asia/Kolkata',
      },
      attendees: [{ email: userEmail }],
    };
 const client = new JWT({
    email:   configs.MAIL_USER,
    key:   configs.MAIL_PASS,
    scopes: [ // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
  });
   
  const res = await calendar.events.insert({
    calendarId: 'primary',
    auth: client,
    requestBody: event,
  });
  console.log('Event created successfully');
  return res.data.htmlLink;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};