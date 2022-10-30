var apiBtn = document.querySelector("#api-btn")
var output = document.querySelector("#output")
// var url = "https://reqres.in/api/users/23";
var url = 'https://datausa.io/api/data'

apiBtn.addEventListener('click', fetchApi)

function fetchApi() {

    fetch(url)
        .then(resp => {
            console.log(resp)
            if (resp.status === 404) {
                throw Error(`there is 404 error in api`)
            } else {
                return resp.json()
            }
        })
        // .then(data => console.log(data))
        .catch(error => output.innerText = error)


}

// Here' an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message