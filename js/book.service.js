'use strict'



//add random id function?
const book = {
    id: 'aa0000',
    title: 'Book',
    price: 120,
    imgUrl: 'book.jpg'
}

const booker = {
    id: 'aa0001',
    title: 'Booker',
    price: 300,
    imgUrl: 'booker.jpg'
}

const bookest = {
    id: 'aa0002',
    title: 'Bookest',
    price: 999,
    imgUrl: 'bookest.jpg'
}

const gBooks = [
    book,
    booker,
    bookest
]

function getBooks() {
    return gBooks
}

function generateId() {
    var id = ''
    for (var i = 0; i < 2; i++) {
        id += getRandomLetter()
    }
    for (var i = 0; i < 4; i++) {
        id += getRndIntIncMax(0, 9)
    }
    var idx = gBooks.findIndex((book) => book.id === id)
    if (idx === -1) return id
    else generateId()
}

function removeBook(title) {
    var idx = gBooks.findIndex((book) => book.title === title)
    gBooks.splice(idx, 1)
    render(getBooks())
}

function updatePrice(title) {
    var idx = gBooks.findIndex((book) => book.title === title)
    var price = +prompt("Edit price");
    if (typeof price === "number" && price > 0) {
        gBooks[idx].price = price
    } else {
        alert('Please enter a positive number')
    }
    render(getBooks())
}

function addBook() {
    const title = prompt('What is the title of the book?')
    const price = +prompt("What is the book's price")
    const newBook = {
        // id: add random id,
        title: title,
        price: price
    }
    gBooks.push(newBook)
    console.log(gBooks)
    render(getBooks())
}

function bookDetails(title) {
    var idx = gBooks.findIndex((book) => book.title === title)
    document.querySelector('.details-title').textContent = title
    document.querySelector('.details-price').textContent = `Price: ${gBooks[idx].price}`
    const elImg = document.querySelector('.details-img')
    elImg.src = `img/${gBooks[idx].imgUrl}`
    elImg.alt = `${title}`
    toggleModal()
}

function toggleModal() {
    const elModal = document.querySelector('.modal')
    if (elModal.style.display === 'flex') elModal.style.display = 'none'
    else {
        elModal.style.display = 'flex'
    }
}
