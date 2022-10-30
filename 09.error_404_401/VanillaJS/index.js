var fetchApi = document.querySelector('#fetch-btn');

var output = document.querySelector('#output');

var url = "https://reqres.in/api/unknown/23"

fetchApi.addEventListener('click', clkfetchApi);



function clkfetchApi() {
    fetch(url).then(error => {
        if (error.status === 404) {
            output.innerText = `${error.status} page not found `

        }
        else if (error.status === 401) { output.innerText = `${error.status} not logged in ` }


    })

    // console.log("fetch")
}