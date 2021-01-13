import { getStorageItem, setStorageItem } from './utils.js';
let store = [];

// destructuring products from json
const setupStore = (products) => {
    console.log(products)
    store = products.map( (product)=> {
        
        const {id, fields:{featured,name,price,company,colors,image:img}} = product
        // to get info from data.json
        // const image = img[0].thumbnails;
        const image = img[0].thumbnails.large.url;
        return {id, featured,name,price,company,colors,image};
    })
};

// console.log(store)
const findProduct = () => {};

export { store, setupStore, findProduct };
