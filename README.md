# Run WSIW

This project relies on two different APIs to function properly, with both keys stored in a .env file in the root directory.

For security purposes, these keys are not provided.

You can retrieve your own keys from these two places:

* [Google Maps Geocode API ](https://developers.google.com/maps/documentation/geocoding/get-api-key)
* [Open Weather API]()

Once you have your two API keys, please create a .env file in the root directory and copy and paste this code:

```
REACT_APP_GEO_KEY={YOUR_GOOGLE_MAPS_KEY}
REACT_APP_WEA_KEY={YOUR_OPEN_WEATHER_KEY}
```


Following this, you can run:

npm install

npm start


Good to go!
