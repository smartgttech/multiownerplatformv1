<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

const route = useRoute()

// Ne pas afficher le header sur la page d'accueil (il est intégré dans le Hero)
const showHeader = computed(() => route.path !== '/')
</script>

<template>
  <div class="min-h-screen flex flex-col bg-neutral-50">
    <!-- HEADER (conditionnel - pas sur homepage) -->
    <AppHeader v-if="showHeader" />

    <!-- MAIN CONTENT -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <AppFooter />
  </div>
</template>