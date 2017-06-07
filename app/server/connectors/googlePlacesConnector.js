const request = require('request-promise-native');
const _ = require('lodash');

const { googleMapsBaseUrl, googleMapsKey } = require('../../../config');
const requestBaseSetup = require('./requestBaseSetup');

const requestNearBySearchBaseOptions = requestBaseSetup.withBase(googleMapsBaseUrl);

const getPubs = (lat, lng, meters) => {
  const requestOptions = {
    method: 'GET',
    uri: `/nearbysearch/json?location=${lat},${lng}&radius=${meters}&type=bar&key=${googleMapsKey}`,
  };

  const googleRequestOptions = _.merge(
    requestOptions,
    requestNearBySearchBaseOptions
  );

  return request(googleRequestOptions);
};

const getPubDetails = (pubId) => {
  const requestOptions = {
    method: 'GET',
    uri: `/details/json?placeid=${pubId}&key=${googleMapsKey}`,
  };

  const googleRequestOptions = _.merge(
    requestOptions,
    requestNearBySearchBaseOptions
  );

  return request(googleRequestOptions);
};

module.exports = { getPubs, getPubDetails };
