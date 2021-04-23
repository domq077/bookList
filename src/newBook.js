const newBook = (title, author, priority, category) => {
    const books = document.querySelector('tbody');
    const book = document.createElement('tr');
    book.setAttribute('class', 'book');
    book.setAttribute('id', `${Date.now()}`);
    const bookProps = [title, author, priority, category];
    let items = bookProps.map((prop) => {
        const div = document.createElement('td');
        div.setAttribute('class', `book__prop`);
        div.innerHTML = `${prop}`;
        return div;
    });

    items.forEach((item) => {
        book.appendChild(item);
    });

    books.appendChild(book);
}

export default newBook;