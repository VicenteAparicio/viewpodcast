import Album from "../../components/Album/Album";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useState } from "react";
import { TEpisode } from "../../Models/TPodcast";
import EpisodeDetails from "../../components/EpisodeDetails/EpisodeDetails";

const BASE_CLASS = "episode"

const Episode = () => {

    const { episodeId } = useParams<string>();

    const { detailsAlbum } = useSelector(
        (state: RootState) => state.details
    );
    
    const [episodeDetails, setEpisodeDetails] = useState<TEpisode | undefined>(detailsAlbum.listOfEpisodes.find(episode => String(episode.id) === episodeId));
    
    return (
        <div className={BASE_CLASS}>
            <div className={BASE_CLASS + '__left__frame'}>
                <Album />
            </div>
            <div className={BASE_CLASS + '__right__frame'}>
                <EpisodeDetails title={episodeDetails?.title} description={episodeDetails?.description} url={episodeDetails?.url} />

            </div>
        </div>
    )
}

export default Episode;