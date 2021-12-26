import { mailsService } from '../apps/mail/service/mail-service.js';
import mailList from '../apps/mail/cmps/mail-list.cmp.js'
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'
import mailSideBar from '../apps/mail/cmps/mail-side-bar.cmp.js'
import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import { eventBus } from '../service/event-bus-service.js';
import mailSort from '../apps/mail/cmps/mail-sort.cmp.js'
import addMail from '../apps/mail/cmps/add-mail.cmp.js'



export default {
    template: `
    <section class="mail-app main-layout main-height">
        <div class="filters-container">
            <add-mail @new="open"></add-mail>
            <div class="filters">
                <mail-filter  @filtered="setFilter" />
                <mail-sort @sort="sorting"></mail-sort>
            </div>
        </div>
        <div class="mail-app-container">
            <mail-side-bar :counter="counterMail"  @sideBar="search" ></mail-side-bar>
            <new-mail v-if="isNewMail" @deletDraft="open" @addNewMail="addMail"></new-mail>
            <mail-list @staredMail="setMailStared" @removeMail="moveToRecycleBin" @read="updateMail" v-if="!isNewMail" :mails="mailsToShow"/>

        </div>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
            isNewMail: false,
            sideBar: null,
            taggedMails: null,
            counterMail: 0

        }
    },
    created() {
        this.loadMails();
        eventBus.$on('deletedMail', this.loadMails());

    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => {
                    this.mails = mails
                    var inboxMails = this.mails.filter(mail => {
                        return !mail.isRemoved
                    })
                    this.taggedMails = inboxMails
                    var countUnreadMails = this.taggedMails.filter(mail => {
                        return !mail.isRead
                    })
                    this.counterMail = countUnreadMails.length
                    if (!countUnreadMails.length) this.counterMail = ' '
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        open() {
            this.isNewMail = !this.isNewMail
        },
        addMail(newMail) {
            console.log(newMail);
            this.isNewMail = !this.isNewMail
            mailsService.addNewMail(newMail)
                .then(() => {
                    this.loadMails()
                    const msg = {
                        txt: 'your mail was sent succesfully',
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
        moveToRecycleBin(mailId) {
            mailsService.moveToRecycleBin(mailId)
                .then((mail) => {
                    console.log(mail);
                    this.loadMails()
                    const msg = {
                        txt: 'Mail moved to Trash',
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
        setMailStared(mailId) {
            mailsService.setMailStared(mailId)
                .then((mail) => {
                    this.loadMails()
                    if (!mail.isStared) return
                    const msg = {
                        txt: 'Mail starred',
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
        updateMail(mailId) {
            mailsService.updateMail(mailId)
                .then(() => {
                    this.loadMails()
                })

        },
        search(filter) {
            if (this.isNewMail) this.isNewMail = !this.isNewMail
            this.sideBar = filter;


            if (this.sideBar === 'inbox') {
                this.taggedMails = this.mails.filter(mail => {
                    return !mail.isRemoved
                })
            } else if (this.sideBar === 'starred') {
                this.taggedMails = this.mails.filter(mail => {
                    return mail.isStared
                })
            } else if (this.sideBar === 'trash') {
                this.taggedMails = this.mails.filter(mail => {
                    return mail.isRemoved
                })
            } else if (this.sideBar === 'sent') {
                this.taggedMails = this.mails.filter(mail => {
                    return mail.isSent
                })
            }


        },
        sorting(sortingBy) {
            if (sortingBy === 'date') {
                console.log('hi');
                this.taggedMails.sort(function(a, b) {
                    return b.date - a.date
                })
            }
            if (sortingBy === 'subject') {
                this.taggedMails.sort(function(a, b) {
                    var subjectA = a.subject.toUpperCase();
                    var subjectB = b.subject.toUpperCase();
                    if (subjectA < subjectB) {
                        return -1;
                    }
                    if (subjectA > subjectB) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }

        }


    },
    computed: {

        mailsToShow() {
            var sideBar = this.sideBar

            if (!this.filterBy) return this.taggedMails;

            const searchStr = this.filterBy.subject.toLowerCase();
            var read = this.filterBy.isRead


            const filterMail = this.taggedMails.filter(mail => {
                return mail.subject.toLowerCase().includes(searchStr)

            })

            if (!read) read = 'all'
            const filterByRead = filterMail.filter(mail => {
                if (read === 'all') return mail
                return mail.isRead.toString() === read
            })


            return filterByRead;
        },



    },
    components: {
        mailList,
        mailFilter,
        mailSideBar,
        newMail,
        mailSort,
        addMail
    }
};