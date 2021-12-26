export default {
    props: ['mail'],
    template: `
    <section  class="mail-preview">
        <div class="mail-preview-container" :class="counterStyle" @click="openModal(mail.id)">
            <div @click.stop="staredMail(mail.id)"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  :class="star" fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> </div>
            <div class="mail-to">{{mail.to}}</div>
            <div class="mail-subject">{{mail.subject}} - {{txt(20)}}</div>
            <div class="mail-date">{{mail.sentAt}}</div>
        </div>

        <div class="mail-open-container" v-if="isOpen">
            
            <div class="open-mail">
                    <strong>{{mail.subject}} </strong>
                    <div class="options">
                        <svg @click="openFullMail" title="Open mail" aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>
                        <svg title="Save as a note" aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg>
                        <svg @click="removeMail(mail.id)" title="Delet mail" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                    </div>
    
            </div>
            <div>< {{mail.to}} ></div>
            <div class="mail-body">{{txt(100)}}</div>
            </div>
            
        </div>

    </section>
    `,
    data() {
        return {
            isOpen: false,
            activeColor: false,
            color: 'black'

        }
    },
    methods: {
        openFullMail() {
            this.$router.push('/mail/' + this.mail.id)
        },
        openModal(mailId) {
            this.isOpen = !this.isOpen
            this.$emit('read', mailId)
        },
        txt(limit) {
            const txt = this.mail.body
            if (!txt.length) return
            if (txt.length > limit) return txt.substr(0, limit) + '...'
            return txt
        },
        removeMail(mailId) {
            this.$emit('removeMail', mailId)
        },
        staredMail(mailId) {
            // this.activeColor = !this.activeColor
            // if (this.activeColor) {
            //     this.color = 'gold'
            // } else {
            //     this.color = 'black'

            // }
            this.$emit('staredMail', mailId)
        }
    },
    computed: {
        counterStyle() {
            return { bold: !this.mail.isRead, 'open-preview': this.isOpen }

        },
        star() {
            return { starred: this.mail.isStared }
        }


    },
}