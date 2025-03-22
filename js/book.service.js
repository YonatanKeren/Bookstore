'use strict'



//add random id function?
const book = {
    id: "aa0000",
    title: 'Book',
    price: 120,
    // imgUrl: 'book.jpg'
}
const booker = {
    id: "aa0001",
    title: 'Booker',
    price: 300,
    // imgUrl: 'booker.jpg'
}
const bookest = {
    id: "aa0002",
    title: 'Bookest',
    price: 999,
    // imgUrl: 'bookest.jpg'
}

const gBooks = [
    book,
    booker,
    bookest
]

function getBooks() {
    return gBooks
}