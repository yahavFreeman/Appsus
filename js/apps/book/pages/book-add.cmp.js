import { booksService } from '../service/books-service.js';
import googleList from '../cmps/google-list.cmp.js'
import { eventBus } from '../../../service/event-bus-service.js';


export default {
    template: `
        <div class="  main-layout book-add main-height">
        
        <form @submit.prevent= "search">
            <h3>Search for a new book</h3>
            <label> 
                <input v-model.lazy="searchVal" type="search" placeholder="Search...">
            </label>
            <button>search</button>
        </form>
        <google-list  @add="addBook" v-if="googleBooks.length" :searches="googleBooks"></google-list>

        </div>
    `,
    data() {
        return {
            searchVal: ' ',
            googleBooks: []

        };
    },
    methods: {
        search() {
            booksService.getGoogleBooks(this.searchVal)
                .then((res) => {
                    return this.googleBooks = res.data.items
                })
        },
        addBook(book) {
            console.log(book)
            const bookToAdd = {
                title: book.volumeInfo.title,
                id: book.id,
                subtitles: book.volumeInfo.subtitle,
                authors: book.volumeInfo.authors[0],
                Categories: book.volumeInfo.categories[0] || "",
                language: book.volumeInfo.language,
                pageCount: book.volumeInfo.pageCount,
                date: Number(book.volumeInfo.publishedDate),
                thumbnail: book.volumeInfo.imageLinks.thumbnail,
                listPrice: {
                    amount: 120,
                    currencyCode: "ILS"
                },
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat voluptas illum cum soluta deleniti! Reprehenderit accusamus atque ratione incidunt recusandae illo, perspiciatis nemo corrupti, animi architecto ipsum! Voluptatibus, ad.',
            }
            booksService.addBook(bookToAdd)
            const msg = {
                txt: 'book added. find it at:',
                type: 'success',
                page: "/book"
            };
            eventBus.$emit('showMsg', msg)

            this.$router.push('/book')



        }
    },
    components: {
        googleList
    }
}