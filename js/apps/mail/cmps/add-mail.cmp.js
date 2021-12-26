export default {
    template: `
        <section class="add-mail">
                <div @click="openNewMail" class="add-mail-btn">
                    <img src="images/addMail.png" >                
                    <button>Add New Mail</button>
                </div>
    </section>
    `,
    methods: {
        openNewMail() {
            this.$emit('new')
        },


    }
}