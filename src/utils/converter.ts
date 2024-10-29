import { TPodcast, TPoster } from "../Models/TPodcast";


export const converterToPosterModel = (rawArray: any[]): TPoster[] => {

    return rawArray.map((podcast) => ({
        src: podcast['im:image'][2].label,
        name: podcast["im:name"].label,
        author: podcast['im:artist'].label,
        podcastId: podcast.id.attributes['im:id']
    }))
}

export const converterToPodcast = (rawModel: any[]): TPodcast => {
    return {
        albumData: {
            name: rawModel[0].collectionCensoredName,
            src: rawModel[0].artworkUrl600,
            author: rawModel[0].artistName,
            description: rawModel[0].trackName,
            podcastId: rawModel[0].collectionId,
        },
        listOfEpisodes: rawModel.slice(1,).map((rawEpisode) => ({
            id: rawEpisode.trackId,
            title: rawEpisode.trackName,
            duration: rawEpisode.trackTimeMillis,
            date: rawEpisode.releaseDate,
            description: rawEpisode.shortDescription,
            url: rawEpisode.episodeUrl
        }))
    }
}

