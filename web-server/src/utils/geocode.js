const axios = require('axios');

const GEO_API_KEY = 'pk.eyJ1IjoicGl0dXNzIiwiYSI6ImNsNmRxeXY3cjE0djczYnFsb256NHRuaDMifQ.HQg_9QkXobu7kEqDG_f1bg';

const getGeoCode = async place => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${GEO_API_KEY}`;

    const response = await axios.get(url).catch(err => {return err})

    console.log(response.data)

    if(response.data.features.length){
        return {err: undefined, latitude: response.data.features[0].center[1], longitude: response.data.features[0].center[0]};
    }
    
    return {err: 'check if the adress provided is the correct one', latitude: undefined, longitude: undefined};
}

module.exports = getGeoCode;