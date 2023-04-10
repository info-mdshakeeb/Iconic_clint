
export const SandData = (url, method, body) => {
    fetch(url, {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
        })
}