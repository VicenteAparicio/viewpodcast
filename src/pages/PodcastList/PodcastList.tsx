import { useEffect, useState } from "react";
import Poster from "../../components/Poster/Poster";
import { useAppDispatch } from "../../Store/store.hooks";
import { fetchAllPodcasts } from "../../api/podcast.api";
import { addPodcasts } from "../../Features/podcast.slice";

import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import Search from "../../components/Search/Search";
import { TPoster } from "../../Models/TPodcast";
import { converterToPosterModel } from "../../utils/converter";

const BASE_CLASS = "listing"

const PodcastList = () => {

    const { podcastsList } = useSelector(
        (state: RootState) => state.podcasts
    );

    const { searchFilter } = useSelector(
        (state: RootState) => state.filter
    )

    const [filteredPodcasts, setFilteredPodcasts] = useState<TPoster[]>(podcastsList);

    const dispatch = useAppDispatch();

    useEffect(()=> {
        fetchPodcastList();
    },[])
    
    useEffect(()=> {
        filterPodcasts();
    },[searchFilter])


    const filterPodcasts = () => {
        const filteredPodcasts = podcastsList.filter(podcast => 
            podcast.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
            podcast.author.toLowerCase().includes(searchFilter.toLowerCase())
        )

        setFilteredPodcasts(filteredPodcasts)
    }
    
    const fetchPodcastList = async () => {
        const rawPodcastList = await fetchAllPodcasts();

        console.log(rawPodcastList)

        const podcastFormated = converterToPosterModel(rawPodcastList);
        if(searchFilter === '') setFilteredPodcasts(podcastFormated)

        dispatch(addPodcasts(podcastFormated))
    }
 

    return (
        <div className={BASE_CLASS}>
            <Search />
            <div className={BASE_CLASS + '__list__container'}>
            {filteredPodcasts?.map((podcast: TPoster) => 
                Poster(podcast)
            )}
            </div>
            
        </div>
    )
}

export default PodcastList;