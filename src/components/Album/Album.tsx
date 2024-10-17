import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { Link } from "react-router-dom";

const BASE_CLASS = "album"

const Album: React.FC = () => {

    const { detailsAlbum } = useSelector(
        (state: RootState) => state.details
    );

    return (
        <div className={BASE_CLASS}>
            <div className={BASE_CLASS + '__image'}>
                <img src={detailsAlbum.albumData.src} alt={detailsAlbum.albumData.name} title={detailsAlbum.albumData.name} />
            </div>
            <div className={BASE_CLASS + '__info__box'}>
                <Link 
                    to={`/podcast/${detailsAlbum.albumData.podcastId}`}>
                        {(detailsAlbum.albumData.name)}
                </Link>
                <span>by {detailsAlbum.albumData.author}</span>
            </div>
            
            <div className={BASE_CLASS + '__info__box'}>
                <h4 className={BASE_CLASS + '__description__title'}>Description:</h4>
                <p>{detailsAlbum.albumData.author}</p>
            </div>
        </div>
    )
}

export default Album;
