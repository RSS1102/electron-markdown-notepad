<template>
    <div ref="cherryMarkdown"></div>
</template>

<script setup lang="ts">
import Cherry from 'cherry-markdown';
import Editor from 'cherry-markdown';
import { nextTick } from 'process';
import { ref } from 'vue';
const cherryMarkdown = ref<Editor | null>(null)
const cherryInstance: Editor = new Cherry({
    id: 'cherry-markdown',
    value: 'welcome',
});
nextTick(() => {
    cherryMarkdown.value = cherryInstance
})
</script>

<style scoped>

</style>
