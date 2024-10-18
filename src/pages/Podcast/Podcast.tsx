import { useDispatch } from "react-redux";
import Album from "../../components/Album/Album";
import Episodes from "../../components/Episodes/Episodes";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAlbum } from "../../api/podcast.api";
import { converterToPodcast } from "../../utils/converter";
import { addDetails } from "../../Features/podcastDetails.slice";
import { TPodcast } from "../../Models/TPodcast";

const BASE_CLASS = "podcast"

const Podcast = () => {

    const dispatch = useDispatch();
    const { podcastId } = useParams<string>();

    useEffect(() => {
        fetchDetails(String(podcastId))
    },[podcastId])

    const fetchDetails = async (podcastId: string) => {
        const rawAlbum = await fetchAlbum(Number(podcastId));
        const albumFormated: TPodcast = converterToPodcast(rawAlbum);
        dispatch(addDetails(albumFormated));
    }


    return (
        <div className={BASE_CLASS}>
            <div className={BASE_CLASS + '__left__frame'}>
                <Album />
            </div>
            <div className={BASE_CLASS + '__right__frame'}>
                <Episodes />

            </div>
        </div>
    )
}

export default Podcast;