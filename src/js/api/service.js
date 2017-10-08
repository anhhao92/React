import products from './data.json'

export default {
  getNewProducts: (cb) => 
    setTimeout(() => {
        cb(products)
    }, 500),
  getProductsByCategoryId: (id, cb) => 
    setTimeout(() => {
        const filterItems= products.filter(m => m.categoryId == id)
        cb(filterItems)
    }, 250),
  getProductById: (id, cb) => 
    setTimeout(() => {
        const item = products.filter(m => m.id == id);
        cb(item[0]);
    }, 600)
}