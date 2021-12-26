import { booksService } from '../service/books-service.js';
import reviewAdd from '../cmps/review-add.cmp.js'
import { eventBus } from '../../../service/event-bus-service.js';

export default {
    template: `
        <section v-if="book" class=" main-layout book-details main-height">
        <div class="link-container">
                        <router-link :to="nextBook">Next book</router-link>    
                        <router-link :to="previousBook">Previous book</router-link>    
        </div>
            <div class="details-container" v-if="!openAddReview">
                <div class="img-container">
                <img class="book-img" :src="book.thumbnail" > 
                </div>
                <div class="main-details">
                    <h3>Book Details </h3>
                    <p> Title -  {{book.title}}  </p>
                    <p> Page Count - {{pageCount}} </p>
                    <p> Published Date - {{PublishedDate}}</p>
                    <p> Price -  <span :class="counterStyle"> {{price}} </span> </p>
                    <img class="sale" v-if="book.listPrice.isOnSale" src="../../../../images/sale1.png" >
                    <div> Description -
                        <span>{{txt2}}</span>
                        <a class="a-details" v-if="book.description.length > 100" @click="activateReadMore" > {{readingDisplay}}</a>
                    </div>

                    <div v-if="book.reviews">

                        <label>  Review - </label>
        
                        <table class="reviews-container">
                            <thead>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Rate</th>
                                <th>Review</th>
                            </thead>
                            <tbody>
                                <tr v-for="review in book.reviews">
                                    <td>{{review.booksReader}}</td>
                                    <td>{{review.date}}</td>
                                    <td>{{review.rate}}</td>
                                    <td>{{review.txt}}</td>
                                    <td @click="removeReview(review.id)" class="remove-btn">✖</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
    
    
                    <button class="add-btn" @click="openReview">Add Review</button>

                </div>

            </div>

            <review-add @review="addReview" v-else="openAddReview"></review-add>

        </section>
    `,
    data() {
        return {
            book: null,
            readMoreActivated: false,
            openAddReview: false
        };
    },
    created() {
        const { bookId } = this.$route.params;
        booksService.getById(bookId)
            .then(book => this.book = book);
    },
    methods: {
        activateReadMore() {
            this.readMoreActivated = !this.readMoreActivated;
        },
        addReview(review) {
            this.openAddReview = !this.openAddReview
            const { bookId } = this.$route.params;
            booksService.addReview(bookId, review)
                .then((book) => {
                    this.book = book
                    const msg = {
                        txt: 'you add review succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);

                });

        },
        openReview() {
            this.openAddReview = !this.openAddReview
        },
        removeReview(reviewId) {
            booksService.removeReview(reviewId, this.book.id)
                .then((book) => {
                    this.book = book

                    const msg = {
                        txt: 'you remove review succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });

        }

    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) {
                return this.book.pageCount + ', Long reading'
            } else if (this.book.pageCount > 200) {
                return this.book.pageCount + ', Decent Reading'
            } else if (this.book.pageCount < 100) {
                return this.book.pageCount + ', Light Reading'
            } else return this.book.pageCount
        },
        PublishedDate() {
            var currYear = new Date().getFullYear()
            var PublishedDate = this.book.publishedDate
            var yearsPassed = currYear - PublishedDate
            if (yearsPassed > 10) {
                return this.book.publishedDate + ', Veteran Book'
            } else if (yearsPassed < 1) {
                return this.book.publishedDate + ', New!!!'
            } else return this.book.publishedDate
        },
        price() {
            var price = this.book.listPrice.amount
            var currencyCode = this.book.listPrice.currencyCode

            if (currencyCode === 'ILS') {
                return price + '₪'
            } else if (currencyCode === 'EUR') {
                return price + '€'
            } else return price + '$'

        },
        counterStyle() {
            var price = this.book.listPrice.amount
            return { red: price > 150, green: price < 20 }

        },
        txt2() {
            const txt = this.book.description
            if (txt.length > 100 && !this.readMoreActivated) return txt.substr(0, 100)
            return txt
        },
        readingDisplay() {
            return this.readMoreActivated ? 'Read less...' : 'Read more...'
        }

    },
    watch: {
        "$route.params.bookId": {
            handler() {
                const { bookId } = this.$route.params
                booksService.getById(bookId).then(book => this.book = book);
                booksService.nextBookById(bookId).then(nextBook => this.nextBook = nextBook)
                booksService.previousBookById(bookId).then(previousBook => this.previousBook = previousBook)
            },
            immediate: true
        }
    },
    components: {
        reviewAdd
    }


}