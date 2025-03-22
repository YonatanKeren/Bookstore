'use strict'

function onInit() {
    render(getBooks())
}

function render(books) {
    document.querySelector('.book-table').innerHTML = ''
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
                <td><button onClick="onReadBook('${book.title}')">Read</button>
                    <button onClick="onUpdateBook('${book.title}')">Update</button>
                    <button onClick="onRemoveBook('${book.title}')">Delete</button>
                </td>
            </tr >
            `;
}

function onReadBook(str){
    console.log(str)
}

function onUpdateBook(book){
    console.log('Hi')
}

function onRemoveBook(book){
    removeBook(book)
}



