import keepPreview from "./keep-preview.cmp.js"
export default {
    props:['keeps'],
    template:`
    <section class="keep-list">                           
        <ul class="main-layout keeps-grid">
                
            <li v-for="keep in keeps" :key="keep.id" :class="{'keep-img': keep.type==='note-img','keep-txt':keep.type==='note-txt','keep-vid':keep.type==='note-vid','keep-todos':keep.type==='note-todos'}" class="keep-preview-container">
                <keep-preview :keep="keep" @save="saveKeeps" @remove="removeKeep" @pin="pinKeep" @unpin="removePin" @duplicate="duplicatePin"/>
            </li>
        </ul>

    </section>
    `,
    methods:{
        saveKeeps(keep){
            this.$emit('save',keep)
        },
        addKeep(keep){
            this.$emit('added',keep)
        },
        removeKeep(id){
            this.$emit('remove',id)
        },
        pinKeep(id){
            this.$emit('pin',id)
        },
        removePin(id){
            this.$emit('unpin',id)
        },
        duplicatePin(id){
            this.$emit('duplicate',id)
        }

    },
    computed:{
        keepType: function(keep){
            return{
                'keep-img': keep.type==="note-img",'keep-txt':keep.type==="note-txt",'keep-vid':keep.type==="note-vid",'keep-todos':keep.type==="note-todos"
            }
        } 
    },

    components:{
        keepPreview,
    }
}