import gPreview from '../cmps/google-preview.cmp.js'

export default {
    props: ['searches'],
    template: `
        <ul class="google-list">
            <li  v-for="search in searches" :key="search.id" >
                <g-preview  @add="add" :search="search" />
            </li>
            
        </ul>
    `,
    methods: {
        add(search) {
            this.$emit('add', search)
        }
    },
    components: {
        gPreview
    }
};