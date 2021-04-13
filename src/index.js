import list from './list.json'

const select = document.getElementById('select')
const listContainer = document.getElementById('list-container')

const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

let selectOptions = []
let item

const getRandom = alphabet => {
    const randomIndex = Math.floor(Math.random() * alphabet.length)
    item = alphabet[randomIndex]
}

while (selectOptions.length < 5) {
    getRandom(alphabet)
    if (!selectOptions.includes(item)) {
        selectOptions.push(item)
    }
}

selectOptions.forEach(optionValue => {
    const option = optionValue
    const element = document.createElement('option')
    element.textContent = option.toUpperCase()
    element.value = option
    select.appendChild(element)
})

const clearList = listContainer => {
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild)
    }
}

const stubText = () => {
    const para = document.createElement('p')
    para.className = 'stub-text'
    para.innerText = 'No matches found'
    document.getElementById('list-container').appendChild(para)
}

select.addEventListener('change', ({ target: { value } }) => {
    clearList(listContainer)

    list
        .filter(({ name }) => name.substring(0, 1).toLowerCase() === value.toLowerCase())
        .forEach(({ name }) => {
            const para = document.createElement('p')
            para.className = 'plain-text'
            para.innerText = name
            document.getElementById('list-container').appendChild(para)
        })

    if (!listContainer.lastChild) {
        stubText()
    }
})


//!!!!!!!!!!!!!!!!!!!!!!!

if (!listContainer.lastChild) {
    stubText()
}
