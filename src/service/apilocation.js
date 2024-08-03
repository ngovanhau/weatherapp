// service/apilocation.js
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            resolve(data.city || data.locality);
          })
          .catch(error => {
            reject('Error:', error);
          });
      }, error => {
        reject('Error getting geolocation:', error);
      });
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};
