import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { TEpisode } from "../../Models/TPodcast";

const BASE_CLASS = "episodes"

const Episode = () => {

    const { detailsAlbum } = useSelector(
        (state: RootState) => state.details
    );

    return (
        <div className={BASE_CLASS}>
            <div className={BASE_CLASS + '__episodes__number'}>
                Episodes: {detailsAlbum.listOfEpisodes.length}
            </div>
            <div className={BASE_CLASS + '__episodes__container'}>
                <table>
                    <thead>
                        <tr>
                            <th className={BASE_CLASS + '__episodes__title'}>Title</th>
                            <th className={BASE_CLASS + '__episodes__date'}>Date</th>
                            <th className={BASE_CLASS + '__episodes__duration'}>Duration</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {detailsAlbum.listOfEpisodes && detailsAlbum.listOfEpisodes.map((episode: TEpisode) =>
                            <tr key={episode.title} className={BASE_CLASS + '__rows'}>
                                <td>
                                    <Link 
                                        to={`/podcast/${detailsAlbum.albumData.podcastId}/episode/${episode.title.match(/\d+/)}`}>
                                        {(episode.title).toUpperCase()}
                                    </Link>
                                </td>
                                <td>{episode.date}</td>
                                <td>{new Date(episode.duration*1000).getMinutes()}:{new Date(episode.duration*1000).getSeconds()}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Episode;