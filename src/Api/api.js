export const getUser = async (email) => {
    const res = await fetch(`http://localhost:3210/api/v2/users?email=${email}`)
    const data = await res.json()
    return data.data[0]
}
//Category functions :
export const getCatagories = async () => {
    const res = await fetch(`http://localhost:3210/api/v2/catagories`)
    const data = await res.json()
    return data.data
}
export const getShopByCategory = async (id) => {
    const res = await fetch(`http://localhost:3210/api/v2/catagories/${id}`)
    const data = await res.json()
    return data.data
}

//: shops functions :
export const getUserShops = async (email) => {
    const res = await fetch(`http://localhost:3210/api/v2/shops/${email}`)
    const data = await res.json()
    return data.data
}
export const pendingShops = async () => {
    const res = await fetch(`http://localhost:3210/api/v2/shops/type/pending`)
    const data = await res.json()
    return data.data
}
export const verifiedShopsAPI = async (limit) => {
    if (limit) {
        const res = await fetch(`http://localhost:3210/api/v2/shops/type/verified?limit=${limit}`)
        const data = await res.json()
        return data.data
    } else {
        const res = await fetch(`http://localhost:3210/api/v2/shops/type/verified`)
        const data = await res.json()
        return data.data
    }
}
export const getShopById = async (id) => {
    const res = await fetch(`http://localhost:3210/api/v2/shops/id/${id}`)
    const data = await res.json()
    return data.data[0]
}

//product functions :
//add product :
export const addProductApi = async (product) => {
    const res = await fetch(`http://localhost:3210/api/v2/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const data = await res.json()
    return data
}
// update product :
export const updateProductApi = async (id, product) => {
    const res = await fetch(`http://localhost:3210/api/v2/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const data = await res.json()
    return data
}
//get all products:
export const getProductsApi = async () => {
    const res = await fetch(`http://localhost:3210/api/v2/products`)
    const data = await res.json()
    return data.data
}
// get limit products:
export const getLimitProductsApi = async (limit) => {
    const res = await fetch(`http://localhost:3210/api/v2/products?limit=${limit}`)
    const data = await res.json()
    return data.data
}
//get product by id:
export const getProductByIdApi = async (id) => {
    const res = await fetch(`http://localhost:3210/api/v2/products/id/${id}`)
    const data = await res.json()
    return data.data
}

//get all products by user:
export const getProductsByUserApi = async (email) => {
    const res = await fetch(`http://localhost:3210/api/v2/products/user/${email}`)
    const data = await res.json()
    return data.data
}

//get all products by shop:
export const getProductsByShopApi = async (id) => {
    const res = await fetch(`http://localhost:3210/api/v2/products/shop/${id}`)
    const data = await res.json()
    return data.data
}
