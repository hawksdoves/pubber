const goodBarsMock = [{ place_id: 'test', rating: 4 }, { place_id: 'test', rating: 4 }];
const pubDetailsMock = {
        place_id: 'String',
        name: 'String',
        formatted_address: 'String',
        formatted_phone_number: 'String',
        geometry: {
            location: {
                lat: 'String',
                lng: 'String',
            }
        }
}
const mockGooglePlacesConnector = jest.mock('../../../connectors/googlePlacesConnector', () =>{
    return {
            getPubs: jest.fn(() => Promise.resolve({ results: goodBarsMock })),
            getPubDetails: jest.fn(() => Promise.resolve({ result: pubDetailsMock }))
    }
});
const { getPubsNearLocation, getDetails } = require('../pub');

describe('Pub', () => {
    it('getPubNearLocation return an array of pubs', () => {
        return getPubsNearLocation('test', 'test', '800')
            .then((results) => {
                expect(results).toEqual(goodBarsMock);
            });
    });

    it('getDetails returns an object ', () => {
      const expectedResults = {
            pubId: "String",
            name: "String",
            address: "String",
            telephoneNum: "String",
            lat: "String",
            lng: "String" 
        };

        return getDetails('placeId')
            .then((results) => {
                expect(results).toEqual(expectedResults);
            });
    });
});