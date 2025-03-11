const apiKey = "oaYKxOcZGSOFnkfg6AXbkpNBhsGsDfv9"
const API = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`


function getStories() {
    // if (!e.target.matches("button")) return
    fetch(API)
        .then((response) => response.json())
        .then((data) => showData(data.results))
        
}

function showData(stories) {
    console.log(stories)
    let looped = ""
    for (let story of stories) {
        looped += `
            <div class='item'>
                <picture>
                    <img src="${story.multimedia[2].url}" alt="">
                    <caption>${story.multimedia[2].caption}</caption>
                </picture>
                <h3> <a href="${story.url}">${story.title}</a> </h3>
                <p>${story.abstract}</p>
            </div>`
    }

    document.querySelector('.stories').innerHTML = looped
}
if (document.querySelector(".p-home")) getStories()