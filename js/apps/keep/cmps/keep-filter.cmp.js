export default {
    template: `
    <div class="keep-filter">
    <label>
        <input @input="filter" list="tags" type="text" v-model="filterBy.name" placeholder="Filter by type">
        <input @input="filter" type="text" v-model="filterBy.txt" placeholder="Find text">
    </label>

    <datalist id="tags">
            <option>txt</option>
            <option>img</option>
            <option>todos</option>
            <option>vid</option>
        </datalist>
    </div>
    `,
    data() {
        return {
            filterBy: {
                name: '',
                txt: ''
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy })
        }
    }
}