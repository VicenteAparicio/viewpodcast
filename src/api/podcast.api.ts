
import axios from 'axios';

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/'
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
        return (await axios.get(URL_ALBUM + podcastId
             + '&media=podcast&entity=podcastEpisode'
            )).data.results;

    } catch (err) {
        console.error(err);
    };
}
