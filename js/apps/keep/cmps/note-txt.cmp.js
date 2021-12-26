export default{
    props:['keep'],
    template:`
   <div class="note note-txt">
    <p @click="editTxt">{{keep.info.txt}}</p>
        <form @submit.prevent="editTxt">
            <input v-show="isEdit" v-model="keep.info.txt">
        </form>
   </div>
   `,
   data(){
       return{
           isEdit:false,
       }
   },
   created(){
   },
   methods:{
    editTxt(){
        this.isEdit=!this.isEdit;
        this.$emit('save')
    }
   },
}