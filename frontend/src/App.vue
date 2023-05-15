<template>
  <div class="container">
    <div class="sub-container" v-bind:class="{ 'Note': true }">
      <NoteList v-on:click="handleNoteClick" />
    </div>
    <div class="sub-container" v-bind:class="{ 'NoteEditor': true }">
      <NoteEditor v-bind:note="selectedNote" />
    </div>
    <div class="sub-container" v-bind:class="{ 'title': true }">
      <h1><a href="https://github.com/Dracorex-xD/notes-app" class="title">Notes App</a></h1>
    </div>
  </div>
</template>

<script>
import NoteEditor from './components/NoteEditor.vue'
import NoteList from './components/NoteList.vue'

export default {
  name: 'App',
  components: {
    NoteEditor,
    NoteList,
  },
  data() {
    return {
      selectedNote: '',
    };
  },
  methods: {
    handleNoteClick(note) {
      this.selectedNote = note.target.id;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');


:root {
  --main-color-one: rgb(213, 155, 37);
  --main-color-two: #c91974;
  --shadow-color-one: #030b349b;
  --background-color-one: #1d1702ca;
  
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Kanit', sans-serif;
    background: url("./assets/Temp_wallpaper.png") no-repeat center center/ cover;
    overflow: hidden;
    padding: 2rem;
    height: 100vh;
  }

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    height: 100vh;
    overflow: hidden;
    transition: 1s;
}

.sub-container {
  min-width: 10rem;
  min-height: 15rem;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
}

button {
  color: var(--main-color-one);
}

.NoteEditor {
  grid-row: 2/4;
  grid-column: 2/4;
  display: flex;
  justify-self: center;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  height: 50rem;

}

.sub-container:nth-child(1) {
  grid-column: 1;
  grid-row: 1/4;
  margin-bottom: 0px;
  margin-top: 0px;
}

.title {
  grid-row: 1;
  display: flex;
  grid-column: 2/4;
  padding: 1rem;
  margin-left: 4rem;
  color:  var(--main-color-one);
  font-size: 3rem;
  letter-spacing: 7px;
  text-decoration: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>
