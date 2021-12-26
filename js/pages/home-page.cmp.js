export default {
    template: `
        <section class="home-page main-layout main-height">
            <h3>Welcome to Appsus</h3>
            <div class="home-container">
                
                <div class="books"> 
                    <img src="./images/books.svg.png" > 
                    <button @click="openBook">Go to Books ➡</button>
                </div>
                <div class="books"> 
                    <img src="./images/Gmail.svg.png" > 
                    <button @click="openMail">Go to Mail ➡</button>
                </div>
                <div class="books"> 
                    <img src="./images/keeps.svg.png" > 
                    <button @click="openKeep">Go to Keeps ➡</button>
                </div>

            </div>
            
        </section>
    `,
    methods: {
        openMail() {
            this.$router.push('/mail')
        },
        openKeep() {
            this.$router.push('/keep')
        },
        openBook() {
            this.$router.push('/book')
        }
    }
}