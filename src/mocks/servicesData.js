import { productListData } from "./data"

export const getall = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(productListData)
        }, 5000)
    })
}

export const getById = (productId) => {
    return new Promise((resolve, reject) => {
        resolve(productListData.find(product => product.id === productId))
    }, 5000)
}

export const getByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productListData.filter(product => product.category === categoryId))
        }, 5000)
    })
}