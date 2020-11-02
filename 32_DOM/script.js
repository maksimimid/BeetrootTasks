// 1. Создать страницу, которая выводит нумерованный список песен:
const playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];
let ul_item = document.createElement('ul')


playList.forEach(function (value) {
    let element = document.createElement('li')
    element.innerText = `${value['author']} ${value['song']}`
    ul_item.appendChild(element)
})
document.querySelector("div.first").appendChild(ul_item)



// 2. Создать HTML - страницу с кнопкой "Открыть" и модальным окном.На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается.При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
let open_btn = document.querySelector("button.open");

function showWindow() {
    document.querySelector("div.modal-window").style.display = 'flex'
}
function hideWindow() {
    document.querySelector("div.modal-window").style.display = 'none'
}
// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
function changeColor() {
    console.log(document.querySelector("#third"))
    let element = document.getElementById('third')

}