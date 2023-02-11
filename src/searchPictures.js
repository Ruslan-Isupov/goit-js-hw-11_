import axios from 'axios'
import {page} from "./index.js"
const API_KEY = "33479097-88c47756c31564dcc5bcf6c8f"
// const defaultSettings = "image_type=photo$orientation=horizontal$safesearch=true"


async function searchPictures (query){
    
    const data = await axios.get(
        ` https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo$orientation=horizontal$safesearch=true&page=${page}&per_page=40`)
    
    const images = await data.data
    
    return images;
   
}

export { searchPictures };

