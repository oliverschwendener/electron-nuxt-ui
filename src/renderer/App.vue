<template>
    <UApp>
        <UHeader>
            <template #title> Electron + Nuxt UI </template>
            <UNavigationMenu content-orientation="vertical" class="w-full justify-center" :items="items" />
            <template #right> <UColorModeSelect variant="ghost" size="sm" /> </template>
        </UHeader>
        <UMain>
            <RouterView />
        </UMain>
    </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: "Home",
        to: "/",
        active: route.path === "/",
    },
    {
        label: "Components",
        to: "/docs/components",
        active: route.path.startsWith("/docs/components"),
    },
]);
</script>
