<template>
    <div style="height: 100vh" class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-3xl">Welcome to Electron + Nuxt UI</h1>
        <UColorModeSelect />
        <UButton color="primary" @click="increment"> Click me! {{ count }} </UButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
    count.value++;
    window.ContextBridge.ping();
};
</script>
