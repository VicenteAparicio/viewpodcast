import Poster from "../../components/Poster/Poster";
import { TPodcast } from "../../Models/TPodcast";

const BASE_CLASS = "listing"

const Listing = () => {

    const arrayPodcast: TPodcast[] = [
        {
            src: '/assets/image1.jpg',
            title: 'ALL SONGS CONSIDERED',
            author: 'NPR'
        },
        {
            src: '/assets/image2.jpg',
            title: 'KEXP SONG OF THE DAY',
            author: 'KEXP'
        },
        {
            src: '/assets/image3.jpg',
            title: 'SONG EXPLODER',
            author: 'Song Exploder'
        },
        {
            src: '/assets/image4.jpg',
            title: 'MUSIC ON FIRE PODCAST',
            author: 'Georges Dagher'
        },
        {
            src: '/assets/image5.jpg',
            title: 'SOUNDS OPINIONS',
            author: 'WBEZ Chicago'
        },
        {
            src: '/assets/image6.jpg',
            title: 'TINY DESK CONCERTS - VIDEO',
            author: 'NPR'
        },
        {
            src: '/assets/image7.jpg',
            title: 'CLUBLIFE BY TIËSTO',
            author: 'Tiësto'
        },
        {
            src: '/assets/image8.jpg',
            title: 'ABOVE & BEYOND: GROUP THERAPY',
            author: 'Above & Beyond'
        },
    ]


    return (
        <div className={BASE_CLASS}>
            <div className={BASE_CLASS + '__filter'}>
            </div>
            <div className={BASE_CLASS + '__list__container'}>
            {arrayPodcast?.map((podcast: TPodcast) => 
                Poster(podcast)
            )}
            </div>
            
        </div>
    )
}

export default Listing;