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

console.log(selectOptions)





