/*
Temporal is the new standard for date and time in JavaScript.
New Temporal objects are designed to replace the old Date object.
Unlike legacy Date, Temporal objects are immutable and provide first-class support for time zones and non-Gregorian calendars.

Temporal separates date and time into distinct classes to prevent "wall-clock" errors.

Main Temporal Objects
Temporal.Now	         -> The current time
Temporal.ZonedDateTime	 -> Date and time in a specific time zone
Temporal.Instant	     -> A fixed point in time, independent of time zone
*/

//Temporal.now
const { Temporal } = require("@js-temporal/polyfill");

let today = Temporal.Now.plainDateISO();
console.log(today.toString())