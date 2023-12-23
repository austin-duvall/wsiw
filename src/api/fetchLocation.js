const REACT_APP_GEO_KEY = process.env.REACT_APP_GEO_KEY

export const fetchLocation = (zipcode, setLocationCoord, setLocationCity, setLocationState) => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${REACT_APP_GEO_KEY}&components=postal_code:${zipcode}|country:US`)
    .then(response => response.json())
    .then(data => {
      if (data.status !== 'OK') {
        console.error('Not a valid zip code')
      } else {
        setLocationCoord(data.results[0].geometry.location)
        setLocationCity(data.results[0].address_components[1])
        setLocationState(data.results[0].address_components[2])
    }
    })
    .catch(error => console.error('Error fetching location', error))
}