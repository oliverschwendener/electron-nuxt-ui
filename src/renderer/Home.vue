<template>
    <UContainer>
        <div class="flex justify-center items-center h-screen flex-col gap-4">
            <h1 class="text-4xl font-bold">Welcome to Electron + Nuxt UI</h1>
            <div class="flex flex-row items-center gap-2">
                <UButton variant="subtle" @click="sendPingToMainProcess">Click here</UButton>
                <p>ping the main process</p>
            </div>
            <UColorModeSelect />
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const sendPingToMainProcess = () => {
    window.ContextBridge.ping();
};
</script>
