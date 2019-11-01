var divs = document.querySelectorAll('div')
var link = document.querySelector('a')
var par = document.querySelectorAll('p')

//Элементы списка при клике красятся в зеленый цвет
document.querySelector('.wrapper').addEventListener('click', function (event) {
    var tagName = event.target.tagName.toLowerCase()

    if (tagName === 'li') {
        event.target.style.color = 'green'
    }
})

//При клике на текст параграфа он красится в синий цвет 
for (var i = 0; i < par.length; i++) {
    par[i].addEventListener('click', function (event) {
        event.target.style.color = 'blue'
    })
}

//Вывод в консоль ID блока по которому кликнул
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function (event) {
        event.stopPropagation();
        console.log(this.getAttribute('id'))
    })
}

// Тогл линк => хайд элемента на странице по клику, divs[0] = первый внешний блок
function handleLinkClick(event) {
    event.preventDefault()

    var div = divs[0]

    div.style.display = div.style.display === 'none'
        ? 'flex'
        : 'none'

    /* The same as above
    if (div.style.display === 'none') {
        div.style.display = 'flex'
    } else {
        div.style.display = 'none'
    } */
}

link.addEventListener('click', handleLinkClick)

