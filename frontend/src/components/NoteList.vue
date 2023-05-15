<template>
  <div class="NoteList">
    <ul>
      <li v-for="note in listOfNotes" :key="note._id" :id="note._id">
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
  created () {
    this.fetchNotes()
  }
}
</script>

<style scoped>

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
  background: var(--background-color-one);
  border-radius: 0.5rem;
  min-height: 8.5rem;
  max-width: 40rem;
  max-height: 17rem;
  border-image: linear-gradient(to right, var(--main-color-one), var(--shadow-color-one)) 1;

  transition: 0.89s;

}

.NoteList li:hover {
  transition: 0.88s;
  border-image: linear-gradient(to left, var(--main-color-one), var(--shadow-color-one)) 1;

}

.deleteBtn {
  width: 1rem;
  height: 1rem;
  background: none;
  border: none;
  margin: 5px;
  align-self: flex-end;
  transition: 1s;
}

.deleteBtn:hover {
  transition: 0.5s;
  font-size: larger;
}

</style>
  