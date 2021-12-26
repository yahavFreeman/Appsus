export default {
    template: `
        <div class="mail-sort">
            <label>sort by: 
                <select @change="sort" v-model="sortingBy">
                    <option value= "date" >Date</option>
                    <option value= "subject" >Subject Mail</option>
                </select>
            </label>
        </div>
    `,
    data() {
        return {
            sortingBy: null
        };
    },
    methods: {
        sort() {
            this.$emit('sort', this.sortingBy);

        }
    }
}