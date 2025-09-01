// Import with import * as Sentry from "@sentry/node" if you are using ESM
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://b277138c6ba61dc39845ccbb1b6c558b@o4509867952373760.ingest.us.sentry.io/4509867977408512",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});