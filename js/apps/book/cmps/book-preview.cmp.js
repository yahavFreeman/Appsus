export default {
    props: ['book'],
    template: `
        <div class="book-preview">
            <p class="book-title"> {{book.title}}  </p>
            <img class="book-img" :src="book.thumbnail" > 
            <p class="price"> Price: <span :class="counterStyle"> {{price}} </span> </p>   
        </div>
    `,
    computed: {
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

        }

    },
}