import '../css/common.css';

// navigator.geolocation.getCurrentPosition(
//   result => {
//     const { coords } = result;
//     const { latitude, longitude } = coords;

//     const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
//     console.log(googleMapsLink);
//   },
//   () => {
//     console.log('Rejected');
//   },
// );

//* промисификация

const getUserGeoLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      geoCode => {
        resolve(geoCode);
      },
      error => {
        reject(error);
      },
    );
  });
};

getUserGeoLocation()
  .then(geoCode => {
    const { coords } = geoCode;
    const { latitude, longitude } = coords;

    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
    console.log(googleMapsLink);
  })
  .catch(error => console.warn(error));
