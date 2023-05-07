<template>
  <div class="container">
    <div class="sub-container" v-bind:class="{ 'Note': true }">
      <NoteList v-on:click="handleNoteClick" />
    </div>
    <div class="sub-container" v-bind:class="{ 'NoteEditor': true }">
      <NoteEditor v-bind:note="selectedNote" />
    </div>
    <div class="sub-container" v-bind:class="{ 'title': true }">
      <h1>Notes App</h1>
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
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap');

:root {
  --main-color-one: #0fbe0f;
  --main-color-two: #168b7e;
  --shadow-color-one: #030b349b;
  --background-color-one: #02023a4d;
  --text-shadow-color-one: #0fbe0fc5 5px 5px 10px;
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Bruno Ace', cursive;
    background: url("./assets/Temp_wallpaper.jpg") no-repeat center center/ cover;
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
    margin: 2rem;
    overflow: hidden;

    transition: 1s;
}

.sub-container {
  min-width: 10rem;
  min-height: 13rem;
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

.Note,
.NoteEditor,
.NoteList,
.title,
.AddNoteBtn {
  padding: 10px;
}

.sub-container:nth-child(1) {
  grid-column: 1;
  grid-row: 1/4;
  margin-bottom: 0px;
  margin-top: 0px;
}

.sub-container:nth-child(2) {
  justify-self: left;
}

.sub-container:nth-child(2) * {
  padding: 0.5rem;
}

.title {
  grid-row: 1;
  display: flex;
  grid-column: 2/4;
  padding: 1rem;
  margin-left: 4rem;
  color:  var(--main-color-one);
  font-size: 3rem;
  letter-spacing: 10px;
}

::-webkit-scrollbar {
  display: none;
}
</style>
