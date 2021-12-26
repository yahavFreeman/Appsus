export default {
    template: `
    <section  class="new-mail">
        <form @submit="saveNewMail">
            <h3>New Massage</h3>
            <label >To 
                <input  type="mail" >
            </label>
            <label >Subject 
                <input v-model="newMail.subject" type="text" >
            </label>
            <textarea v-model="newMail.body" cols="30" rows="20"></textarea>

            <div class="new-mail-btn">
                <svg @click="deletDraft" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                <button class="send" type="submit">Send</button>

            </div>
    
        </form>
    </section>
    `,
    data() {
        return {
            newMail: {
                subject: null,
                body: null,
                isRead: false,
                date: Date.now(),
                sentAt: new Date().toString().slice(4, 10),
                to: 'You',
                isRemoved: false,
                isSent: true
            }
        }
    },
    created() {

    },
    methods: {
        saveNewMail() {
            this.$emit('addNewMail', {...this.newMail });
            // this.$router.push('/mail')
            this.newMail = {
                subject: null,
                body: null
            }
        },
        deletDraft() {
            var sure = confirm('Are you sure?')
            console.log(sure);
            if (sure) this.$emit('deletDraft')
            else return
        }



    },
    computed: {

    },
    components: {

    }
};