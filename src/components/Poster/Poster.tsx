import { Link } from "react-router-dom";
import { TPoster } from "../../Models/TPodcast";

const BASE_CLASS = "poster"

const Poster = (posterInfo: TPoster) => {

    return (
        <div className={BASE_CLASS} key={posterInfo.podcastId}>
            <div className={BASE_CLASS + '__image'}>
                <img src={posterInfo.src} alt={posterInfo.author} title={posterInfo.name} />
            </div>
            <Link 
                to={`/podcast/${posterInfo.podcastId}`}>
                    {(posterInfo.name).toUpperCase()}
            </Link>
            <span>Author: {posterInfo.author}</span>
        </div>
    )
}

export default Poster;