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
    const res = await fetch(`http://localhost:3210/api/v2/products/${id}`)
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