import { allProductsUrl } from './utils.js';


// grabs json from api
const fetchProducts = async () => {
    const responce =await fetch(allProductsUrl).catch(err => console.log(err))
    if(responce){
        return responce.json();
    }
    return responce;
};

export default fetchProducts;
