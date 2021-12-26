export default{
    props:['keep'],
    template:`
   <div class="note note-img">
    <h3 @click="editTxt">{{keep.info.title}}</h3>
       <div v-show="isEdit" class="text-editor">
            <form @submit.prevent="editTxt">
                <input v-model="keep.info.title">
            </form>
       </div>
    
       <img :src="info.url">
    </div>
   `,
     data(){
        return{
            info:null,
            isEdit:false,
        }
    },
    created(){
        this.info={
            title:this.keep.info.title,
            url: this.keep.info.url
        }
    },
    methods:{
        editTxt(){
            this.$emit('save')
            this.isEdit=!this.isEdit;
        },
        

    },
}