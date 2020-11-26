import axios from 'axios'

const KEY='AIzaSyDrXHKsCQ5JqZtbxyHINRKvcRqsM3ayd6c'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});