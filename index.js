class ProductManager {
    constructor(){
        this.products = []
    }


static id = 0;

addProduct(title, description, price, thumbnail, code, stock){

for (let p of this.products){
      if (p.code === code){
        return "Code already exists"
        }
    
    } 
    const ProductValidation = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    }

    if(!Object.values(ProductValidation).includes(undefined)){
        ProductManager.id++

        this.products.push({
            id: ProductManager.id,
            ...ProductValidation
        })
    } else {
        return "Missing fields"
    }
        
    
}

getProducts(){
    return this.products
}

getProductById(id){
    if(this.products.find((p)=> p.id === id)){
        return this.products.find((p)=> p.id === id)
    } else {
        return "Not found"
    }
    
}

}

const products = new ProductManager()
console.log(products);
products.addProduct("producto prueba", "descripcion prueba", 100, "url", "code", 10)
products.addProduct("producto prueba2", "descripcion prueba2", 200, "url", "code2", 20)

console.log(products);

