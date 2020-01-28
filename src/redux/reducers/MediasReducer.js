const videosJson = require('./../../datas/Videos.json');
const PhotosJson = require('./../../datas/Photos.json');

export const initialState = {
    videos: videosJson,
    photos: PhotosJson
}

export function mediasReducer(state = initialState){
    return state;
}

export default {mediasReducer}