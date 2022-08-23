const url = require("url"); // WHILE USING THIS YOU USE
// url.parse();

const myUrl = new URL("https://nodejs.org/docs/latest-v12.x/api/events.html#events_emitter_removelistener_eventname_listener");

const href = myUrl.href;

const hostName = myUrl.hostname;

const pathName = myUrl.pathname;

const searchParams = myUrl.searchParams;

const host = myUrl.host;

console.log(`
    ${href}
    ${hostName}
    ${pathName}
    ${searchParams}
`);

