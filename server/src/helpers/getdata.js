const axios = require('axios');
async function getData(){
    try {
        const {data} = await axios.get('https://api.spacexdata.com/v3/capsules')
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return []
    }
}
module.exports = getData;