<template>
    <UContainer>
        <div class="flex justify-center items-center h-screen flex-col gap-4">
            <h1 class="text-4xl font-bold">Welcome to Electron + Nuxt UI</h1>
            <UButton @click="increment">Click me! {{ count }}</UButton>
            <UColorModeSelect />
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
    count.value++;
};
</script>
