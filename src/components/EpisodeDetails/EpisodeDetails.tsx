import { FC, useRef } from "react";
import { TEpisodeDetailsProps } from "../../Models/TComponentsProps";

const BASE_CLASS = "episodeDetails"

const EpisodeDetails: FC<TEpisodeDetailsProps> = ({ title, description, url }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
   

    return (
        <div className={BASE_CLASS}>
            <h1>{title}</h1>
            <p>{description}</p>
            <audio ref={audioRef} src={url!} controls />
            
        </div>
    )
}

export default EpisodeDetails;