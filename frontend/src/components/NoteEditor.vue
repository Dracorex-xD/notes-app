<template>
  <div class="NoteEditor">
    <input class="NoteEditorTitle" v-model="title" placeholder="Title" />
    <textarea class="NoteEditorText" v-model="text" placeholder="Text"></textarea>
    <div class="NoteEditorButtons">
      <button class="SaveBtn" @click="handleSaveClick">Save</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, watchEffect } from "vue";

export default {
  props: {
    note: String,
  },
  setup(props) {
    const URL = "http://localhost:5000/Notes-app/";
    const title = ref("");
    const text = ref("");
    let isFirstTime = true;

    watchEffect(async () => {
      if (props.note) {
        try {
          const response = await axios.put(`${URL}${props.note}`);
          title.value = response.data.title;
          text.value = response.data.text;
        } catch (err) {
          console.error(`ERRORS: ${err}`);
        }
      }
    });

    const handleSaveClick = async () => {
      if (isFirstTime) {
        isFirstTime = false;
        return;
      }

      if (!title.value || !text.value) {
        alert("Both title and text are required");
        return;
      }

      try {
        if (props.note) {
          await axios.put(`${URL}${props.note}`, { title: title.value, text: text.value });
        } else {
          await axios.post(`${URL}`, { title: title.value, text: text.value });
        }

        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    return {
      title,
      text,
      handleSaveClick,
    };
  },
};
</script>

<style scoped>

.NoteEditor input, textarea {
  outline: none;
  background: var(--background-color-one);
  border-radius: 0.5rem;
  margin: 0.5rem;
  caret-color: var(--main-color-one);
  color: var(--main-color-two);
  font-weight: 700;
  font-size: 1.7rem;
  font-family: 'Bruno Ace', cursive;
  padding: 1rem;
  resize: none;
  text-shadow: var(--text-shadow-color-one);
  border-image: linear-gradient(to right, var(--main-color-one), var(--shadow-color-one)) 1;
  border-top: none;
  border-left: none;
  border-right: none;

}

.NoteEditor input:hover, textarea:hover {
  transition: 0.88s;
  border-image: linear-gradient(to left, var(--main-color-one), var(--shadow-color-one)) 1;
}

.NoteEditor input::placeholder, textarea::placeholder {
  text-align: left;
  padding: 1rem;
  color: var(--main-color-two);
  font-weight: 700;
  font-size: 1.7rem;
  font-family: 'Bruno Ace', cursive;
  align-items: center;
  text-shadow: var(--text-shadow-color-one);

}

.NoteEditor textarea::placeholder {
  padding: 0;
  padding-left: 1rem;
  overflow: visible;

}

.NoteEditor input::placeholder {
  color: var(--main-color-one);
  text-shadow: none;


}

.NoteEditor input {
  color: var(--main-color-one);
  text-shadow: none;
}

.NoteEditor textarea {
  height: 25rem;
  padding: 30px;
}

.NoteEditor button {
  outline: none;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0.5rem;
  transition: 0.88s;
  border-image: linear-gradient(to right, var(--main-color-one), var(--shadow-color-one)) 1;

}

.NoteEditorButtons {
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: center;
  height: 5rem;
  margin: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  height: 30%;
  border-image: linear-gradient(to right, var(--main-color-one), var(--shadow-color-one)) 1;
  transition: 0.88s;
  width: 5rem;
  height: 5rem;

}

.NoteEditor button:hover {
  transition: 0.88s;
  border-image: linear-gradient(to left, var(--main-color-one), var(--shadow-color-one)) 1;
}

.SaveBtn {
  color: var(--main-color-two);
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Bruno Ace', cursive;
  text-shadow: var(--text-shadow-color-one);
}
</style>