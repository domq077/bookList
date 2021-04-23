import newBook from './newBook.js'

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const priority = document.querySelector('#priority');
const category = document.querySelector('#category');
let booksArray = localStorage.getItem('books')
? JSON.parse(localStorage.getItem('books'))
: [
    {id: 1, title: 'Metro 2033', author: 'Glukhovsky Dmitry', priority: '5', category: 'science fiction'},
    {id: 2, title: 'Lśnienie', author: 'Stephen King', priority: '3', category: 'horror'},
    {id: 3, title: 'Kasacja', author: 'Remigiusz Mróz', priority: '1', category: 'thriller'}
];

localStorage.setItem('books', JSON.stringify(booksArray));
const data = JSON.parse(localStorage.getItem('books'));

const initializeStorage = () => {
    data.forEach((item) => {
        newBook(item.title, item.author, item.priority, item.category);
    });
}

initializeStorage();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    booksArray.push({id: Date.now(), title: title.value, author: author.value, priority: priority.value, category: category.value})
    localStorage.setItem('books', JSON.stringify(booksArray));
    newBook(title.value, author.value, priority.value, category.value);
    [title, author, priority, category].map((item) => {
        item.value = '';
    })
});
