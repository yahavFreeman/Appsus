import { utilService } from '../../../service/util-service.js';


export default {
    template: `
    <section class="review-add">
        <form @submit.prevent= "save">
            <label>  Name: </label>
            <input  v-model="review.booksReader" type="text" placeholder="Books Reader">
            <label>  Rate: </label>
            <select v-model="review.rate">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label>  Date picker: </label>
            <input v-model="review.date" type="date">
            <label>  Review:</label>
            <textarea  v-model="review.txt" cols="30" rows="10"></textarea>
            <button class="save-btn" >Save</button>
        </form>
    </section>
    `,
    data() {
        return {
            review: {
                id: utilService.makeId(),
                booksReader: 'Books Reader',
                date: '',
                rate: '',
                txt: ''

            }
        }
    },
    methods: {
        save() {
            console.log(this.review);
            this.$emit('review', {...this.review })
            this.review = {
                id: utilService.makeId(),
                booksReader: 'Books Reader',
                date: '',
                rate: '',
                txt: ''
            }

        }
    },
    components: {}
};