import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVid from "./note-video.cmp.js"

export default {
    props: ['keep'],
    template:`
    <section :style="keep.style" :class="keepLabel">
    <button class="remove-btn" @click="removeKeep">X</button>
        <component :is="keep.type" :keep="keep" @save="saveKeeps"></component>
        <div class="funcs-container">
            <input @change="saveKeeps" class="color-changer" type="color" v-model=keep.style.backgroundColor>
            <input @change="saveKeeps" class="font-changer" list="fonts" type='text' v-model=keep.style.fontFamily placeholder="Fonts">
            <svg @click="setPinned" aria-hidden="true" focusable="true" data-prefix="fas" data-icon="thumbtack" :class="pinned" class="svg-inline--fa fa-thumbtack fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path :class="{ylw:keep.isPinned}" fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"></path></svg>
            <svg @click="duplicate" aria-hidden="true" focusable="true" data-prefix="far" data-icon="clone" class="svg-inline--fa fa-clone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>

        </div>

        <datalist id="fonts">
            <option>Impact,Charcoal,sans-serif</option>
            <option>Arial, Helvetica, sans-serif</option>
            <option>Verdana, Tahoma, sans-serif</option>
            <option>Georgia, Times New Roman, Times, serif</option>
        </datalist>
    </section>
    `,
    created(){
        this.cmpType=this.keep.type        
        if(this.keep.label){
            if(this.keep.label==='Critical'){
                this.keep.style.backgroundColor='#f5b9b9' 
                this.$emit('save')
            }else if(this.keep.label==='Family'){
                this.keep.style.backgroundColor='#8cc2f8' 
                this.$emit('save')

            }else if(this.keep.label==='Work'){
                this.keep.style.backgroundColor='#93e493' 
                this.$emit('save')

            }else if(this.keep.label==='Friends'){
                this.keep.style.backgroundColor='#fffdb5' 
                this.$emit('save')

            }else if(this.keep.label==='Spam'){
                this.keep.style.backgroundColor='#fde3b1' 
                this.$emit('save')

            }else if(this.keep.label==='Memories'){
                this.keep.style.backgroundColor='#f8c6e9' 
                this.$emit('save')

            }else if(this.keep.label==='Romantic'){
                this.keep.style.backgroundColor='#8ae7f0' 
                this.$emit('save')

            }
        }
    },
    methods:{
        saveKeeps(keep){
            this.$emit("save",keep)
        },
        removeKeep(){
            this.$emit('remove',this.keep.id);
        },
        setPinned(){
            this.keep.isPinned=!this.keep.isPinned
            if(this.keep.isPinned) {
                this.$emit('pin',this.keep.id);
        }else{
            this.$emit('unpin',this.keep.id);
        }
        },
        duplicate(){
            this.$emit('duplicate',this.keep.id)
        }
        
        },
        components:{
            noteTxt,
            noteImg,
            noteTodos,
            noteVid
        },
        computed:{
            pinned(){
                if(this.keep.isPinned===true){
                    return 'ylw'
                }
            },
            keepLabel: function(){
                return{
                    Critical: this.keep.label && this.keep.label==='Critical',
                    Family: this.keep.label && this.keep.label==='Family',
                    Work: this.keep.label && this.keep.label==='Work',
                    Friends: this.keep.label && this.keep.label==='Friends',
                    Spam: this.keep.label && this.keep.label==='Spam',
                    Memories: this.keep.label && this.keep.label==='Memories',
                    Romantic: this.keep.label && this.keep.label==='Romantic',
                }
            },
            // labelColor(){
            //     return{

            //     }
            // }
            
               
        }
}