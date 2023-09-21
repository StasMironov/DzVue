import axios from 'axios';

export default async function(url, id) {
    const response = await axios.get(url + '/'+ id)
    return response.data
}