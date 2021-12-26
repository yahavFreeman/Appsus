import { storageService } from "../../../service/async-storage-service.js";
import { utilService } from "../../../service/util-service.js";
export const keepService = {
    query,
    keepById,
    saveReview,
    saveSearch,
    addKeep,
    removeKeep,
    pinKeep,
    pinRemove,
    duplicate,
    saveAfterUserInput,
    saveKeeps,
};

const KEEP_KEY = "keepsDB";

var gKeeps = utilService.loadFromStorage(KEEP_KEY) || [{
        id: "n101",
        type: "note-txt",
        label: null,
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" },
        style: {
            backgroundColor: '#1f9f9a',
            fontFamily: 'Arial, Helvetica, sans-serif'
        }
    },
    {
        id: "n111",
        type: "note-img",
        label: 'Family',
        info: {
            url: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-9/15697888_942277775902818_2955368900177542089_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a9b1d2&_nc_ohc=kPnRGVUZ0U8AX8opKnE&_nc_ht=scontent.ftlv5-1.fna&oh=f4de3d77922a71a10ebbad96bdf65d0a&oe=61B3A998",
            title: "latte being latte",
        },
        isPinned: false,
        style: { backgroundColor: "#1f9f9a", fontFamily: 'Arial, Helvetica, sans-serif' },
    },
    {
        id: "n102",
        type: "note-img",
        label: null,
        info: {
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            title: "Bobi",
        },
        isPinned: false,
        style: { backgroundColor: '#1f9f9a', fontFamily: 'Arial, Helvetica, sans-serif' },
    },
    {
        id: "n103",
        type: "note-todos",
        label: "Work",
        info: {
            headline: "Recharge coding power",
            todos: [
                { txt: "Go to the gym", doneAt: true },
                { txt: "Eat a banana", doneAt: true },
                { txt: "Shower", doneAt: true },
                { txt: "Eat some more", doneAt: null },
                { txt: "Go to sleep", doneAt: null },
            ],
        },
        style: {
            backgroundColor: '#1f9f9a',
            fontFamily: 'Arial, Helvetica, sans-serif'
        },
        isPinned: false,
    },
    {
        id: "n104",
        type: "note-vid",
        label: 'Critical',
        info: {
            url: "https://www.youtube.com/embed/MnuwI7G_huw",
            title: "Latte and Me",
        },
        isPinned: false,
        style: { backgroundColor: '#1f9f9a', fontFamily: 'Arial, Helvetica, sans-serif' },
    },
        {id: "n105",
        type: "note-txt",
        label: null,
        isPinned: false,
        info: { txt: "Watch F1 sprint race tonight" },
        style: {
            backgroundColor: '#1f9f9a',
            fontFamily: 'Arial, Helvetica, sans-serif'
        }
    },
    {
        id: "n123",
        type: "note-todos",
        label: "Memories",
        info: {
            headline: "Buy new Parts for the bike",
            todos: [
                { txt: "Maxxis Dh-R 2 tires", doneAt: null },
                { txt: "Sram Axis wireless", doneAt: null },
                { txt: "Garmin fenix6 pro", doneAt: null },
                { txt: "Carbon wheelset", doneAt: true },
            ],
        },
        isPinned: false,
            style: { backgroundColor: '#1f9f9a', fontFamily: 'Arial, Helvetica, sans-serif' },
    },
        {
            id: "n1",
            type: "note-vid",
            label: 'Spam',
            info: {
                url: "https://www.youtube.com/embed/wSA_9pbFT-c",
                title: "חורשן עם חברים",
            },
            isPinned: false,
            style: { backgroundColor: '#1f9f9a', fontFamily: 'Arial, Helvetica, sans-serif' },
        },
        {
            id: "n11",
            type: "note-img",
            label: 'Family',
            info: {
                url: "https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/16487855_970176369779625_5712080584082277425_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=m-_CtkS9cy8AX8LDqaD&_nc_ht=scontent.ftlv5-1.fna&oh=e11ffbd3df899c72e5b67bfd88baf19b&oe=61B52636",
                title: "latte hearing a cat nearby",
            },
            isPinned: false,
            style: { backgroundColor: "#1f9f9a", fontFamily: 'Arial, Helvetica, sans-serif' },
        },
        
];
_save();

function addKeep(keepToAdd) {
  gKeeps.push(keepToAdd);
  _save();
  return Promise.resolve({
    txt: 'Keep added',
    type: 'success'
})
}

function duplicate(id) {
    return storageService.duplicate(KEEP_KEY, id)
}

function removeKeep(id) {
    return storageService.remove(KEEP_KEY, id);
}

function pinRemove(id) {
    return storageService.pinRemove(KEEP_KEY, id)

}

function pinKeep(id) {
    return storageService.pin(KEEP_KEY, id)
}

function saveSearch(key, value) {
    utilService.saveToStorage(key, value);
}

function query() {
    return storageService.query(KEEP_KEY);
}

function saveReview(book) {
    return storageService.put(KEEP_KEY, book);
}

function keepById(id) {
    return storageService.get(KEEP_KEY, id);
}

function saveKeeps(keeps) {
    gKeeps = keeps
    utilService.saveToStorage(KEEP_KEY, gKeeps);
}

function _save() {
    utilService.saveToStorage(KEEP_KEY, gKeeps);
}

function saveAfterUserInput() {
    gKeeps = utilService.loadFromStorage(KEEP_KEY)
}