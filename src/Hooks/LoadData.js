
export const LoadData = async () => {
    const res = await fetch(`http://localhost:2100/catagories`)
    const data = await res.json()
    return data.data
};

