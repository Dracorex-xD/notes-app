<template>
  <div class="NoteList">
    <ul>
      <li v-for="note in listOfNotes" 
          :key="note._id" 
          :id="note._id" 
          @click="addAnimationClass(note._id)" 
          :class="{ animation: note.animate }">
        <Note :title="note.title" :text="note.text" :time="note.time" />
        <button @dblclick="deleteNote(note._id)" class="deleteBtn">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Note from './Note.vue'
import axios from 'axios'

export default {
  name: 'NoteList',
  components: {
    Note
  },
  data() {
    return {
      URL: 'http://localhost:5000/Notes-app/',
      listOfNotes: []
    }
  },
  methods: {

    addAnimationClass(id) {
    // Find the note by ID
    const note = this.listOfNotes.find((note) => note._id === id);
    if (note) {
      // Add the 'animate' property to the note
      note.animate = true;

      setTimeout(() => {
        note.animate = false;
      }, 5100);
      }
    },
    async deleteNote (id) {
      try {
        await axios.delete(`${this.URL}${id}`)
        this.listOfNotes = this.listOfNotes.filter(note => note._id !== id)
      } catch (err) {
        console.error(err)
      }
    },
    async fetchNotes () {
      try {
        const response = await axios.get(this.URL)
        this.listOfNotes = response.data
      } catch (err) {
        console.error(err)
      }
    }
  },
  created() {
    this.fetchNotes()
  },

}
</script>

<style scoped>

.animation {
  animation: hoverLinearGradient 5s 0.88s forwards linear;
  transition: 0.5s;

}

.NoteList {
  grid-column: 1;
  grid-row: 1/4;
  justify-self: center;
  align-self: center;
  overflow: scroll;
  height: 99vh;

}

.NoteList li {
  display: flex;
  flex-direction: column;
  border-width: 3px;
  border-style: solid;
  margin: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  background: var(--Secondary);
  border-radius: 0.5rem;
  min-height: 8.5rem;
  max-width: 40rem;
  max-height: 17rem;
  border-image: linear-gradient(to right, var(--Primary), var(--Secondary-Button)) 1;
  box-shadow: 10px 10px 10px var(--Accent);

  transition: 0.88s;

}

.NoteList li:hover {
  transition: 0.88s;
  border-image: linear-gradient(to left, var(--Primary), var(--Secondary-Button)) 1;

}

.deleteBtn {
  width: 1rem;
  height: 1rem;
  background: none;
  border: none;
  margin: 5px;
  padding: 3px;
  align-self: flex-end;
  transition: 1s;
  color: var(--Primary-Button);

}

.deleteBtn:hover {
  transition: 0.5s;
  font-size: larger;
  color: var(--Secondary-Button);
}

@keyframes hoverLinearGradient {
  0%, 18%, 20%, 50.1%, 60.1%, 80%, 90.1%, 92% {
    background: var(--Secondary);
  }

  18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
    background: var(--Primary-Button);
   
  }
}

</style>
  