<template>
    <div class="Note">
        <h1 class="note-title">{{ title }}</h1>
        <p class="note-text">{{ text }}</p>
        <div class="timestamp">{{ time }}</div>
    </div>
    </template>

    <script>
    export default {
    // eslint-disable-next-line
    name: 'Note',
    props: {
        title: {
        type: String,
        required: true
        },
        text: {
        type: String,
        required: true
        },
        time: {
        type: String,
        required: true
        }
    }
    }
</script>
<style scoped>
    .Note {
        display: flex;
        color: var(--main-color-one);
        padding: 15px;
        flex-direction: column;
        height: 15rem;
        max-width: 27rem;
    }
    .note-text {
        color: var(--main-color-two);
        overflow: hidden;
        padding: 5px;
        text-shadow: var(--text-shadow-color-one);
        letter-spacing: 1px;
        margin: 10px;
    }

    .note-title {
        overflow: visible;
        padding: 5px;
        height: 30rem;
        width: 25rem;
    }
</style>