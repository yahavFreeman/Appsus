export default{
    props:['keep'],
    template:`
   <div class="note note-video">
    <h3 @click="editTxt">{{keep.info.title}}</h3>
       <div v-show="isEdit" class="text-editor">
            <form @submit.prevent="editTxt">
                <input v-model="keep.info.title">
            </form>
       </div>
    
       <iframe class="youtube-player":src="keep.info.url">

       </iframe>
    </div>
   `,
     data(){
        return{
            isEdit:false,
        }
    },
    methods:{
        editTxt(){
            this.isEdit=!this.isEdit;
            this.$emit('save')
        }
    },
}