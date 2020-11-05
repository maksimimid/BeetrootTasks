const APIKEY = "1cf5e431c5575d1e7a316419b4be971d"
const generalURL = "https://api.themoviedb.org/3/"

const button = document.getElementById("search-btn")
const search = document.getElementById("search-data")
const items_on_page = 10

// # Pagination functions 
function pagination(event) {
    let e = event || window.event;
    let target = e.target;
    let pageNumber = target.innerHTML;

    if (target.tagName.toLowerCase() != "span") return;

    let paginators_active = document.getElementsByClassName("paginator_active");

    [].forEach.call(paginators_active, element => { element.classList.remove("paginator_active") })

    target.classList.add("paginator_active");

    let films = document.querySelectorAll(".film-element");

    films.forEach(function (film, ind) {
        film.style.display = "none"
        if (pageNumber * items_on_page >= ind + 1 && ind + 1 > (pageNumber - 1) * items_on_page) {
            film.style.display = "block";
        }
    })
}

function createPagesNumbers(cnt_page, items_on_page) {
    let pageText = ''
    for (var i = 0; i < cnt_page; i++) {
        pageText += "<span data-page=" + i * items_on_page + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
    }
    return pageText
}

function seeInfo(event) {
    event.preventDefault()
    console.log(event)
    console.log(event['srcElement'].getAttribute('ids'))
    fetch(generalURL + `list/${event['srcElement'].getAttribute('ids')}?api_key=${APIKEY}`
    ).then(response => response.json()
    ).then(response => {
        console.log(event['target']['nextSibling'])

        if (!event['target']['nextSibling']) {
            let desc = document.createElement("p");
            desc.setAttribute('class', 'desc')
            desc.innerText = response['description']
            event['path'][1].appendChild(desc)
        }

    })
}
// MAIN
button.addEventListener('click', function (e) {
    e.preventDefault()
    //Cleaning up previous search
    if (document.getElementById('films')) {
        document.getElementById('films').remove()
        document.getElementById('paginator').remove()
    }

    fetch(generalURL + `search/movie?api_key=${APIKEY}&query=${search.value.replace(' ', '+')}`
    ).then(response => {
        return response.json()
    }
    ).then(response => {

        let count = response['results'].length
        if (count == 0) {
            const errorDiv = document.createElement("div")
            errorDiv.setAttribute('class', 'error')
            errorDiv.innerHTML = 'There are no films'
        }
        // Add image, button
        console.log(response['results'])
        const ul = document.createElement("ul");
        ul.setAttribute('id', 'films')
        response['results'].forEach(function (element, index) {
            let li = document.createElement("li");
            li.setAttribute('class', 'film-element')
            let img = document.createElement("img");
            img.src = 'https://image.tmdb.org/t/p/w500' + element['poster_path']
            img.setAttribute('class', 'film-image')
            let buttonInfo = document.createElement("button");
            buttonInfo.classList.add('info-button')
            buttonInfo.setAttribute('ids', `${element['id']}`)
            buttonInfo.innerHTML = "Show info"
            li.appendChild(img)
            li.appendChild(buttonInfo)
            ul.appendChild(li)
        });
        document.body.appendChild(ul)

        // Add paginator to queried data
        let cnt_page = Math.ceil(count / items_on_page)
        let paginator = document.createElement("div")
        paginator.setAttribute('id', 'paginator')
        paginator.setAttribute('onclick', 'pagination(event)')
        document.body.appendChild(paginator)
        paginator.innerHTML = createPagesNumbers(cnt_page, items_on_page);
        let films = document.querySelectorAll(".film-element");
        films.forEach(function (film, ind) {
            if (items_on_page >= ind + 1) {
                film.style.display = "block";
            }
        })
        let main_page = document.getElementById("page1");
        main_page.classList.add("paginator_active");

        // Add event to our buttons
        const allInfoBtn = document.getElementsByClassName('info-button');
        console.log(allInfoBtn);

        [].forEach.call(allInfoBtn, function (element) {
            console.log(element)
            element.addEventListener('click', seeInfo)


        }
        )
    })
})
