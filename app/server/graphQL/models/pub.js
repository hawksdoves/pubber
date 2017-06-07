const { getPubs, getPubDetails } = require('../../connectors/googlePlacesConnector');

const getPubsNearLocation = (lat, lng, meters) => {
  return getPubs(lat, lng, meters)
    .then((resp) => {
      const bars = resp.results;
      const goodBars = bars.filter(bar => bar.rating > 3.5);
      return goodBars.sort((barA, barB) => barB.rating - barA.rating);
    })
    .catch((err) => console.log('err', err));
};

const getDetails = (pub) => {
  return getPubDetails(pub)
    .then((resp) => {
      const location = resp.result.geometry.location;
      const pubDetails = {
        pubId: resp.result.place_id,
        name: resp.result.name,
        address: resp.result.formatted_address,
        telephoneNum: resp.result.formatted_phone_number,
        lat: location.lat.toFixed(6),
        lng: location.lng.toFixed(6),
      };
      return pubDetails;
    })
    .catch((err) => console.log('err', err));
};

module.exports = { getDetails, getPubsNearLocation };
