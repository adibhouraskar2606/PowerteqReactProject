export function GetData(userData){
    let baseUrl = "https://jsonplaceholder.typicode.com/users/"
    return new Promise((resolve, reject) => {
        fetch(baseUrl+"?"+"username="+userData.name+"&email="+userData.email)
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)   
        })
    })
}

export default GetData