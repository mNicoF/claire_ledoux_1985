const VideosJson = require('./../../datas/Videos.json');
const PhotosJson = require('./../../datas/Photos.json');

export const initialState = {
    videos: VideosJson,
    photos: PhotosJson
}

export function mediasReducer(state = initialState){
    return state;
}

export default {mediasReducer}