const search = document.getElementById("search__input")
const btn = document.getElementById("search__button")
const results = document.getElementById("results")


btn.addEventListener("click", populate)
search.addEventListener("keydown", populatekey)

function populatekey(e){
    
    if(e.keyCode === 13){
        populate()
    }
}

function populate(){

    results.innerHTML=""

    fetch(`http://api.serpstack.com/search?access_key=f7f76cef7dd16b2a3dedc87601759e2f&query=${search.value}`)
    .then(data=> data.json())
    .then(data=>{
        
        data.organic_results.forEach(item => {

            let card = `<div class="card">
                            <p>${item.displayed_url}</p>
                            <h1><a href="${item.url}">${item.title}</a></h1>
                            <p>${item.snippet}</p>
                        </div>`
           
            results.innerHTML += card
            
        });
    })

}

