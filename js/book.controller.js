'use strict'

function onInit() {
    const books = getBooks()
    console.log(books)
    render(books)
}

function render(books) {
    var strHTML = ''
    strHTML +=
        `<thead>
    <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    `;
    books.forEach(item => strHTML += renderRow(item))
    strHTML += `</tbody>`;
    document.querySelector('.book-table').innerHTML += strHTML
}

function renderRow(book) {
    return `
    <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td><button>Read</button>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr >
            `;
}