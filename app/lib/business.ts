// Verified business facts for Lincoln Unisex Barber Shop.
// Source: Google listing (cid 3717212052147294373) + Birdeye (5.0 stars, 14 reviews).
// Phone is the assignment-verified contact line. Do not invent facts.

import { formatPhone, e164, telHref, smsHref } from "./phone";

// PHONE DOCTRINE: one digits-only constant. Display and hrefs are both derived
// from it, so the shape on screen and the shape in the dialer can never drift.
const PHONE = "8623399926";

// Short, on-brand, and it invites the thing a barber actually wants first:
// a picture of the cut you're after and a day.
const SMS_BODY = "Hey Lincoln — looking to book a chair. ";

export const BUSINESS = {
  name: "Lincoln Unisex Barber Shop",
  shortName: "Lincoln",
  tagline: "Sharp lines. Clean fades. East Orange.",
  address: "11 N Harrison St",
  city: "East Orange",
  state: "NJ",
  zip: "07017",
  phoneDigits: PHONE,
  phoneDisplay: formatPhone(PHONE), // "(862) 339-9926"
  phoneE164: e164(PHONE), // "+18623399926"
  phoneHref: telHref(PHONE), // "tel:+18623399926"
  smsHref: smsHref(PHONE, SMS_BODY),
  smsBody: SMS_BODY,
  rating: "5.0",
  reviewCount: 14,
  hours: [
    { day: "Mon", open: "9:00 AM", close: "6:00 PM" },
    { day: "Tue", open: "9:00 AM", close: "6:00 PM" },
    { day: "Wed", open: "9:00 AM", close: "6:00 PM" },
    { day: "Thu", open: "9:00 AM", close: "6:00 PM" },
    { day: "Fri", open: "9:00 AM", close: "6:00 PM" },
    { day: "Sat", open: "Closed", close: "" },
    { day: "Sun", open: "Closed", close: "" },
  ],
  mapsCid: "https://maps.google.com/?cid=3717212052147294373",
  // Keyless Google Maps embed (Ramos pattern, output=embed).
  mapEmbed:
    "https://www.google.com/maps?q=11+N+Harrison+St,+East+Orange,+NJ+07017&output=embed",
};

// Verified customer review excerpts (Birdeye). Used verbatim, lightly trimmed.
export const REVIEWS = [
  {
    quote: "Ask for Alex, he's the best barber.",
    name: "Verified visit",
  },
  {
    quote:
      "Check Alex out. Good service and good prices, young barber killing it.",
    name: "Verified visit",
  },
  {
    quote: "Great experience over here at Lincoln Unisex. Young talented barber.",
    name: "Verified visit",
  },
];
