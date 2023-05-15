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
        flex-direction: column;
        height: 10rem;
        padding: 10px;
        max-width: 20rem;
        text-align: left;
    }
    .note-text {
        color: var(--main-color-two);
        overflow: hidden;
        padding-left: 15px;
        text-shadow: var(--text-shadow-color-one);
        letter-spacing: 1px;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px;
    }

    .note-title {
        overflow: hidden;
        padding: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 10px;
    }
</style>