"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGoogleCalendarEvent = void 0;
const configs_1 = require("../configs");
const google_auth_library_1 = require("google-auth-library");
const googleapis_1 = require("googleapis");
const oAuth2Client = new googleapis_1.google.auth.OAuth2(configs_1.configs.CLIENT_ID, configs_1.configs.CLIENT_SECRET, configs_1.configs.REDIRECT_URL);
const calendar = googleapis_1.google.calendar({ version: 'v3', auth: oAuth2Client });
const createGoogleCalendarEvent = (userName, userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = {
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
        const client = new google_auth_library_1.JWT({
            email: configs_1.configs.MAIL_USER,
            key: configs_1.configs.MAIL_PASS,
            scopes: [
                'https://www.googleapis.com/auth/calendar',
                'https://www.googleapis.com/auth/calendar.events',
            ],
        });
        const tokens = yield client.getAccessToken();
        console.log('Access token:', tokens);
        // const res = await calendar.events.insert({
        //   calendarId: 'primary',
        //   auth: client,
        //   requestBody: event,
        // });
        console.log('Event created successfully');
        // return res.data.htmlLink;
    }
    catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
});
exports.createGoogleCalendarEvent = createGoogleCalendarEvent;
