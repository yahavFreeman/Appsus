export default {
    template: `
        <div class="mail-filter">
            
             <input @input="filter" v-model="filterBy.subject" type="search" placeholder=" 🔍 Search mail" >
           
            <select @change="filter" v-model="filterBy.isRead">
                <option value= "all" >All</option>
                <option value= "true" >Read</option>
                <option value= "false" >Unread</option>
            </select>
        </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                isRead: ''
            }
        };
    },
    methods: {
        filter() {
            console.log(this.filterBy);
            this.$emit('filtered', {...this.filterBy });

        }
    }
}