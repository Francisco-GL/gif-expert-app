
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=h0aqh8LO5nWw659LfZG3u7a1vmD5a4QK&q=${category}&limit=10`;

    const resp = await fetch(url);

    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}