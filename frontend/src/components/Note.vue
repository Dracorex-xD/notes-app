<template>
    <div class="Note">
        <h1 class="note-title">{{ title }}</h1>
        <p class="note-text">{{ text }}</p>
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
        }
    }
    }
</script>
<style scoped>
    .Note {
        display: flex;
        color: var(--Primary);
        flex-direction: column;
        height: 10rem;
        padding: 10px;
        max-width: 20rem;
        text-align: left;
    }
    .note-text {
        color: var(--Secondary-Button);
        overflow: hidden;
        padding-left: 15px;
        text-shadow: var(--Accent);
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