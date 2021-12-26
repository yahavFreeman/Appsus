import { keepService } from "../service/keep-service.js";
import { utilService } from "../../../service/util-service.js";
export default {
    template: `
<div class="add-keep-container">
    <div class="add-keep">
        <form @submit.prevent="addKeep" @click="on">

                <svg @click="setTxt" aria-hidden="true" focusable="true" data-prefix="far" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
                <svg @click="setImg" aria-hidden="true" focusable="true" data-prefix="far" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
                <svg @click="setVideo" aria-hidden="true" focusable="true" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                <svg @click="setTodos" aria-hidden="true" focusable="true" data-prefix="fas" data-icon="list" class="svg-inline--fa fa-list fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
        
        </form>
    </div>
    <form v-if="isText" @submit.prevent="addKeep">
        <input class="add-input upper" type="text" placeholder="Add a note" v-model="keep.info.txt">
        <br>
        <div class="label-container flex center">
      <button type="button" @click="setLabel('Critical')" class="Critical">Critical</button><button type="button" @click="setLabel('Family')" class="Family">Family</button><button type="button" @click="setLabel('Work')" class="Work">Work</button><button type="button" @click="setLabel('Friends')" class="Friends">Friends</button> 
      <button type="button" @click="setLabel('Spam')" class="Spam">Spam</button> <button type="button" @click="setLabel('Memories')" class="Memories">Memories</button> <button type="button" @click="setLabel('Romantic')" class="Romantic">Romantic</button> 
    </div>
    <br>
    <button class="add-keep-btn">Add</button>
</form>        

    <form v-if="isImg" @submit.prevent="addKeep">
    <input class="add-input upper" type="text" placeholder="title" v-model="keep.info.title">
    <br>
    <input class="add-input" type="text" placeholder="image url" v-model="keep.info.url">
    <br>
    <div class="label-container flex center">
      <button type="button" @click="setLabel('Critical')" class="Critical">Critical</button><button type="button" @click="setLabel('Family')" class="Family">Family</button><button type="button" @click="setLabel('Work')" class="Work">Work</button><button type="button" @click="setLabel('Friends')" class="Friends">Friends</button> 
      <button type="button" @click="setLabel('Spam')" class="Spam">Spam</button> <button type="button" @click="setLabel('Memories')" class="Memories">Memories</button> <button type="button" @click="setLabel('Romantic')" class="Romantic">Romantic</button> 
    </div>
    <br>
    <button class="add-keep-btn">Add</button>        
    </form> 
        <form v-if="isVideo" @submit.prevent="addKeep">
            <input class="add-input upper" type="text" placeholder="title" v-model="keep.info.title">
            <br>
            <input class="add-input" type="text" placeholder="video url" v-model="keep.info.url"> 
            <br>
            <div class="label-container flex center">
      <button type="button" @click="setLabel('Critical')" class="Critical">Critical</button><button type="button" @click="setLabel('Family')" class="Family">Family</button><button type="button" @click="setLabel('Work')" class="Work">Work</button><button type="button" @click="setLabel('Friends')" class="Friends">Friends</button> 
      <button type="button" @click="setLabel('Spam')" class="Spam">Spam</button> <button type="button" @click="setLabel('Memories')" class="Memories">Memories</button> <button type="button" @click="setLabel('Romantic')" class="Romantic">Romantic</button> 
    </div>
            <br>
            <button class="add-keep-btn">Add</button>                        
        </form> 
        <form v-if="isTodos" @submit.prevent="addKeep">
            <input class="add-input upper" type="text" placeholder="list label" v-model="keep.info.headline">
            <br>
            <!-- <input type='text' v-model="keep.info.todos" placeholder="Enter comma separated list"> -->
            <textarea class="add-input" v-model="keep.info.todos" placeholder="Enter comma separated list"></textarea>
            <br>
            <div class="label-container flex center">
      <button type="button" @click="setLabel('Critical')" class="Critical">Critical</button><button type="button" @click="setLabel('Family')" class="Family">Family</button><button type="button" @click="setLabel('Work')" class="Work">Work</button><button type="button" @click="setLabel('Friends')" class="Friends">Friends</button> 
      <button type="button" @click="setLabel('Spam')" class="Spam">Spam</button> <button type="button" @click="setLabel('Memories')" class="Memories">Memories</button> <button type="button" @click="setLabel('Romantic')" class="Romantic">Romantic</button> 
    </div>
            <br>
            <button class="add-keep-btn">Add</button>                        
        </form> 
</div>

`,
    data() {
        return {
            isOn: false,
            isText: true,
            isTodos: false,
            isVideo: false,
            isImg: false,
            todos: null,
            label: null,
            keep: {
                info: {},
                isPinned: false,
                style: {
                    backgroundColor: "#32dce6",
                    fontFamily: 'Arial, Helvetica, sans-serif'
                }
            },
        };
    },
    methods: {
        addKeep() {
            this.keep.id = utilService.makeId();
            this.keep.label = this.label;
            if (this.isText) {
                this.keep.type = "note-txt";
            } else if (this.isTodos) {
                this.keep.type = "note-todos";
                if (this.keep.info.todos.indexOf(",") !== -1) {
                    this.keep.info.todos = this.keep.info.todos.split(",");
                    this.keep.info.todos = this.keep.info.todos.map((todo) => {
                        var txt = {
                            txt: todo,
                            doneAt: null,
                        };
                        return txt;
                    });
                } else {
                    const str = this.keep.info.todos;
                    this.keep.info.todos = [];
                    this.keep.info.todos.push({
                        txt: str,
                        doneAt: null,
                    });
                }
            } else if (this.isImg) {
                this.keep.type = "note-img";
            } else {
                this.keep.type = "note-vid";
            }
            this.$emit("added", this.keep);
            this.clear();
        },
        on() {
            this.isOn = !this.isOn;
        },
        setFalse() {
            this.isText = false;
            this.isTodos = false;
            this.isVideo = false;
            this.isImg = false;
        },
        clear() {
            this.keep = {
                info: {
                    todos: "",
                },
                isPinned: false,
                style: {
                    backgroundColor: "#32dce6",
                    fontFamily: 'Arial, Helvetica, sans-serif'
                }
            };
        },

        setTxt() {
            this.setFalse();
            this.isText = true;
        },
        setImg() {
            this.setFalse();
            this.isImg = true;
        },
        setVideo() {
            this.setFalse();
            this.isVideo = true;
        },
        setTodos() {
            this.setFalse();
            this.isTodos = true;
        },
        setLabel(label) {
            this.label = null;
            this.label = label;
        },
    },
    components: {
        keepService,
        utilService,
    },
};