import { getFirestore } from './services/firebase'

const db = getFirestore();
const itemCollection = db.collection("items");
const categoriesCollection = db.collection("categories");
const brandsCollection = db.collection("brands");

export const getProductsDatabase = () => {
    
    return new Promise((resolve) => {
        resolve(itemCollection.get())
    })
    
}


export const getBrands = () => {
    return new Promise((resolve) => {
        resolve(brandsCollection.get())
    })
}

export const getProductDatabase = (id) => {
    return new Promise((resolve) => {
        const item = itemCollection.doc(id);
        resolve(item.get())
    });
}



export const getByCategory = (category) => {
    return new Promise((res) => {
        let P;
        getProductsDatabase().then((querysnapshot) => {
            P = querysnapshot.docs.map(doc => doc.data())
            const cate = P.filter(p => p.category === category);
            res(cate)
            console.log("cat")
        }).catch((err) =>{
            console.log(err);
        })

        
    })
};

export const getByBrand = (brand) => {
    return new Promise((res) => {
        let P;
        getProductsDatabase().then((querysnapshot) => {
            P = querysnapshot.docs.map(doc => doc.data())
            const cate = P.filter(p => p.brand === brand);
            res(cate)
            console.log("cat")
        }).catch((err) =>{
            console.log(err);
        })

        
    })
};


export const getCategories = () => {
    return new Promise((resolve) => {
        resolve(categoriesCollection.get())
    })
}