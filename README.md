# User Insight Express App

Welcome to User Insight Express App, a simple Express.js application that provides insights into user IP addresses, geolocation, and user agents.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `yarn` to install dependencies.
4. Run `yarn start` or `node index.js` to start the server.

## Usage

Once the server is running, send GET requests to the root URL (`/`) to retrieve information about the client's IP address, country based on geolocation, whether the client is using a mobile device, and the user agent details.

## Dependencies

This project uses the following npm packages:
- [express](https://www.npmjs.com/package/express) (v4.19.2): Fast, unopinionated, minimalist web framework for Node.js.
- [express-useragent](https://www.npmjs.com/package/express-useragent) (v1.0.15): Middleware for parsing user agent strings in Express.
- [geoip-lite](https://www.npmjs.com/package/geoip-lite) (v1.4.10): A native Node.js module for GeoIP lookup.
- [ua-parser-js](https://www.npmjs.com/package/ua-parser-js) (v1.0.37): JavaScript library for parsing user agent strings.

## Endpoints

### GET /

Returns JSON containing the following information:
- `ip`: The client's IP address.
- `country`: The country derived from the client's IP address (if available).
- `isMobile`: Indicates whether the client is using a mobile device.
- `userAgent`: Object containing parsed user agent details.

## Project Information

- **Name:** user-insight
- **Version:** 1.0.0
- **Author:** [Paul Thiberville](mailto:paul.thiberville@gmail.com)
- **License:** MIT
- **Repository:** [GitHub](https://github.com/PaulThiberville/user-insight.git)

## Notes

- This application utilizes the `trust proxy` setting in Express to ensure that the `req.ip` property contains the correct client IP address when deployed behind a proxy.
- Geolocation data may not always be accurate and can vary based on the IP address lookup database used by `geoip-lite`.
