import { TPodcast } from "../../Models/TPodcast";

const BASE_CLASS = "poster"

const Poster = (posterInfo: TPodcast) => {
    return (
        <div className={BASE_CLASS}>
            <img src={posterInfo.src} alt={posterInfo.author} title={posterInfo.title} />
            <h1>{posterInfo.title}</h1>
            <span>{posterInfo.author}</span>
        </div>
    )
}

export default Poster;