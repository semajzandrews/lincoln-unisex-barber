// Verified business facts for Lincoln Unisex Barber Shop.
// Source: Google listing (cid 3717212052147294373), re-verified 10-16-2026: 5.0 stars, 19 reviews, open 7 days.
// Phone is the assignment-verified contact line. Do not invent facts.

import { formatPhone, e164, telHref, smsHref } from "./phone";

// PHONE DOCTRINE: one digits-only constant. Display and hrefs are both derived
// from it, so the shape on screen and the shape in the dialer can never drift.
const PHONE = "8623399926";

// Short, on-brand, and it invites the thing a barber actually wants first:
// a picture of the cut you're after and a day.
const SMS_BODY = "Hey Lincoln, looking to book a chair. ";

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
  reviewCount: 19,
  hours: [
    { day: "Mon", open: "8:00 AM", close: "11:00 PM" },
    { day: "Tue", open: "8:00 AM", close: "11:00 PM" },
    { day: "Wed", open: "8:00 AM", close: "11:00 PM" },
    { day: "Thu", open: "8:00 AM", close: "11:00 PM" },
    { day: "Fri", open: "8:00 AM", close: "11:00 PM" },
    { day: "Sat", open: "8:00 AM", close: "11:30 PM" },
    { day: "Sun", open: "8:00 AM", close: "11:30 PM" },
  ],
  mapsCid: "https://maps.google.com/?cid=3717212052147294373",
  // Keyless Google Maps embed (Ramos pattern, output=embed).
  mapEmbed:
    "https://www.google.com/maps?q=11+N+Harrison+St,+East+Orange,+NJ+07017&output=embed",
};

// Verified customer review excerpts (Google, re-read 10-16-2026). Used verbatim, lightly trimmed.
export const REVIEWS = [
  {
    quote: "I came in for a walk in and Alex attended to me ASAP.",
    name: "Google review",
  },
  {
    quote:
      "Check Alex out. Good service and good prices, young barber killing it.",
    name: "Google review",
  },
  {
    quote: "Great music, and you'll look like a movie star when you're done.",
    name: "Google review",
  },
];
