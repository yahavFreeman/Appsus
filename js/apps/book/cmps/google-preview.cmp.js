export default {
    props: ['search'],
    template: `
        <div class="google-preview">
            <h3 class="book-title"> {{search.volumeInfo.title}}  </h3>
            <button @click="add">+</button>

        </div>
    `,
    created() {
        console.log(this.search);
    },
    methods: {
        add() {
            console.log(this.search);
            this.$emit('add', this.search)
        }
    }
}