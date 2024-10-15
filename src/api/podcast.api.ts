
import axios from 'axios';

const URL_LIST = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
const URL_ALBUM = 'https://itunes.apple.com/lookup?id=';

export const fetchAllPodcasts = async () => {

    try {
        return (await axios.get(URL_LIST)).data.feed.entry;

    } catch (err) {
        console.error(err);
    };
}

export const fetchAlbum = async (podcastId: number) => {

    try {
        return (await axios.get(`${URL_ALBUM}${podcastId}`)).data.results[0];

    } catch (err) {
        console.error(err);
    };
}
