export default{
    props:['keep'],
    template:`
   <div class="todos-lists">
       <label class="todos-label" @click="editTxt">
           {{keep.info.headline}}
        </label>
           <form @submit.prevent="editTxt">
               <input v-show="isEdit" v-model="keep.info.headline">
            </form>
            <ul>
                <li v-for="todo in keep.info.todos" class="todos" :key="todo.id">
                    <input type="checkbox" @change="completedTask(todo)" :checked="todo.doneAt"> 
                    <span :class="{done : todo.doneAt}" @click="editTxt">{{todo.txt}} </span>
                    <form @submit.prevent="editTxt">
                        <input  v-show="isEdit" v-model="todo.txt">
                    </form>
                    <!-- <todo-item :txt="todo.txt"/> -->
                </li>
                <input v-if="keep.info.todos.length<6" class="added-todo-input" @change="addTodo" type="text" v-model="todo.txt" placeholder="Forgot something?">
            </ul>
   </div>
   `,
    data(){
        return{
            label:null,
            todos:null,
            todo:{
                txt:'',
                doneAt:null
            },
            isEdit:false,
        }
    },
   methods:{
    editTxt(){
        this.isEdit=!this.isEdit;
        this.$emit('save')
    },
    completedTask: function(todo){
        todo.doneAt=!todo.doneAt
        this.$emit('save')
    },
    addTodo(){
        this.keep.info.todos.push(JSON.parse(JSON.stringify(this.todo)))
        this.todo={
            txt:'',
            doneAt:null
        }
        this.$emit('save')
    }
    
},

}