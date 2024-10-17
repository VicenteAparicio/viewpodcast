export type TPoster = {
    src: string;
    name: string;
    author: string;
    podcastId: string;
}

export type TAlbum = TPoster & {
    description: string;
}

export type TEpisode = {
    id: string;
    title: string;
    date: string;
    duration: number;
    description: string;
}

export type TPodcast = {
    albumData: TAlbum,
    listOfEpisodes: TEpisode[]
}