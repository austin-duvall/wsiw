export const freezing = (temp) => temp <= 30.00;
export const coldRainWind = (temp, windSpeed, windGusts, probOfPrecip) =>
  temp >= 30.01 &&
  temp <= 50 &&
  (windSpeed > 5 || windGusts > 7 || probOfPrecip > 0.25);
export const cold = (temp) => temp >= 30.01 && temp <= 50.00;
export const mildRainWind = (temp, windSpeed, windGusts, probOfPrecip) =>
  temp >= 50.01 &&
  temp <= 70 &&
  (windSpeed > 10 || windGusts > 15 || probOfPrecip > 0.25);
export const mild = (temp) => temp >= 50.01 && temp <= 70;
export const warmRainWind = (temp, windSpeed, windGusts, probOfPrecip) =>
  temp >= 70.01 &&
  temp <= 85 &&
  (windSpeed > 12 || windGusts > 15 || probOfPrecip > 0.4);
export const warm = (temp) => temp >= 70.01 && temp <= 85;
export const hotRainWind = (temp, windSpeed, windGusts, probOfPrecip) =>
  temp >= 85.01 && (windSpeed > 15 || windGusts > 30 || probOfPrecip > 0.4);
export const hot = (temp) => temp >= 85.01;
export const precip = (probOfPrecip) => probOfPrecip > 0.25;
export const empty = (weather) => Object.values(weather).every(value => value === '')