const mockGoogleMapsBaseUrl = 'http://google.mock';

jest.mock('../requestBaseSetup', () => {
    return {
        withBase: () => {
        return {
            baseUrl: mockGoogleMapsBaseUrl,
            json: true
        }
    }}
})
const { getPubs, getPubDetails } = require('../googlePlacesConnector');
const nock = require('nock');

const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;

const mockBars = [
    { rating: 4 },
    { rating: 4.2 },
    { rating: 4.1 },
];

const mockPubDetails = { test: 'test' };

describe('googlePlacesConnector', () => {

    describe('getPubs', () => {
        it('makes a get request for nearbysearch of pubs', () => {
            nock(`${mockGoogleMapsBaseUrl}`) 
                .get(`/nearbysearch/json?location=22,22&radius=800&type=bar&key=${googleMapsKey}`)
                .reply(200, { results: mockBars });

            return getPubs('22', '22', '800')
                .then((res) => {
                    expect(res.results).toEqual(mockBars);
                });
        });
    })

    describe('getPubDetails', () => {
        it('makes a get request for details of a specific pub', () => {
            nock(mockGoogleMapsBaseUrl) 
                .get(`/details/json?placeid=123&key=${googleMapsKey}`)
                .reply(200, { results: mockPubDetails });

            return getPubDetails('123')
                .then((res) => {
                    expect(res.results).toEqual(mockPubDetails);
                });
        });
    })

});