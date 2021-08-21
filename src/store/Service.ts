 async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow'
    })
    return await response.json();
}
export default getData