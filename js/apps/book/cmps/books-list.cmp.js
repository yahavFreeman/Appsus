import bookPreview from '../cmps/book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
        <ul class="books-list">
            <li  v-for="book in books" :key="book.id" class="book-preview-container" >
                <book-preview :book="book" />
                <router-link :to="'/book/'+book.id" >Details</router-link>
            </li>
        </ul>
    `,
    methods: {

    },
    components: {
        bookPreview
    }
};