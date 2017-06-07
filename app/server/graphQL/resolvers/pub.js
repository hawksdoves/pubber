const pub = require('../models/pub');

module.exports = (obj, { pubId }) => {
    return pub.getDetails(pubId);
};
