import { FC, useEffect, useRef } from "react";
import { TEpisodeDetailsProps } from "../../Models/TComponentsProps";
import { useAppDispatch } from "../../Store/store.hooks";
import { setLoading } from "../../Features/loader.slice";

const BASE_CLASS = "episodeDetails"

const EpisodeDetails: FC<TEpisodeDetailsProps> = ({ title, description, url }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(false));
    }, [title, description])
    

    return (
        <div className={BASE_CLASS}>
            <h1>{title}</h1>
            <p>{description}</p>
            <audio ref={audioRef} src={url!} controls />
            
        </div>
    )
}

export default EpisodeDetails;