export default {
    props: ['counter'],
    template: `
        <section class="mail-side-bar">

            <div class="hamburg" v-if="isSideBarOpen" @click="toggleSideBar"> ☰ </div>

            <div @click="toggleSideBar" class="side-bar"  v-if="!isHamburg">
                <div @click="openInbox" class="mail-side-bar-btn">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="inbox" class="svg-inline--fa fa-inbox fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>                               
                    <button>Inbox</button> <span class="counter">{{counter}}</span>
                </div>
                <div @click="openStared" class="mail-side-bar-btn">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>                
                    <button>Starred</button>
                </div>
                <div @click="openSent" class="mail-side-bar-btn">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-square" class="svg-inline--fa fa-share-square fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg>                
                    <button>Sent</button>
                </div>
                <div @click="openDrafts" class="mail-side-bar-btn">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sticky-note" class="svg-inline--fa fa-sticky-note fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"></path></svg>               
                    <button>Drafts</button>
                </div>
                <div @click="openTrash" class="mail-side-bar-btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>                
                        <button>Trash</button>
                </div>

                
            </div>
            
           
    </section>
    `,
    data() {
        return {

            isInbox: false,
            isStared: false,
            isSent: false,
            isDreafts: false,
            isTrash: false,
            isHamburg: false,
            isSideBarOpen: false


        };
    },
    created() {
        window.addEventListener('resize', this.openHamburg)


    },
    methods: {
        openNewMail() {
            this.$emit('new')
        },
        openInbox() {
            this.isInbox = true
            this.$emit('sideBar', 'inbox')
        },
        openStared() {
            this.isStared = true
            this.$emit('sideBar', 'starred')

        },
        openSent() {
            this.isSent = true
            this.$emit('sideBar', 'sent')

        },
        openDrafts() {
            this.isDreafts = true
            this.$emit('sideBar', 'drafts')

        },
        openTrash() {
            this.isTrash = true
            this.$emit('sideBar', 'trash')

        },
        openHamburg() {
            var windowWidth = window.innerWidth
            if (windowWidth < 600) {
                this.isHamburg = true
                this.isSideBarOpen = true
            } else {
                this.isHamburg = false
                this.isSideBarOpen = false
            }
        },
        toggleSideBar() {
            var windowWidth = window.innerWidth
            if (windowWidth < 600) this.isHamburg = !this.isHamburg

        }

    },
}