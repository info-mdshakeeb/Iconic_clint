export const getUser = async (email) => {
    const res = await fetch(`http://localhost:3210/api/v2/users?email=${email}`)
    const data = await res.json()
    return data.data[0]
}

export const getCatagories = async () => {
    const res = await fetch(`http://localhost:3210/api/v2/catagories`)
    const data = await res.json()
    return data.data
}

export const getUserShops = async (email) => {
    const res = await fetch(`http://localhost:3210/api/v2/shops/${email}`)
    const data = await res.json()
    return data.data
}

