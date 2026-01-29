<script lang="ts" setup>
import { ref } from 'vue'

// État du menu mobile
const isMobileMenuOpen = ref(false)

// Fermer le menu lors de la navigation
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <!-- Container avec marges -->
  <div class="w-full mb-2 px-2 pt-2 md:px-2 md:pt-2">
    <!-- Header avec backdrop blur et bordure -->
    <header class=" backdrop-blur-md border border-neutral-100 rounded-2xl shadow-xl">
      <!-- Navigation -->
      <div class="px-3 py-1 md:px-6 md:py-1">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink 
              to="/" 
              class="font-display text-xl md:text-2xl font-bold text-neutral-900 hover:text-primary-600 transition-colors"
            >
              BOOKING LAND
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink 
              to="/organizations" 
              class="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Explorer
            </NuxtLink>
            <NuxtLink 
              to="/how-it-works" 
              class="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Comment ça marche
            </NuxtLink>
            <NuxtLink 
              to="/become-partner" 
              class="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Devenir partenaire
            </NuxtLink>
          </nav>

          <!-- Desktop Auth Buttons -->
          <div class="hidden md:flex items-center gap-3">
            <NuxtLink 
              to="/login" 
              class="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Se connecter
            </NuxtLink>
            <NuxtLink 
              to="/register" 
              class="px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
            >
              S'inscrire
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              v-if="!isMobileMenuOpen"
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <nav v-if="isMobileMenuOpen" class="md:hidden pt-4 pb-2 border-t border-neutral-200 mt-4">
            <div class="flex flex-col gap-2">
              <NuxtLink 
                to="/organizations" 
                @click="closeMobileMenu"
                class="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Explorer
              </NuxtLink>
              <NuxtLink 
                to="/how-it-works" 
                @click="closeMobileMenu"
                class="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Comment ça marche
              </NuxtLink>
              <NuxtLink 
                to="/become-partner" 
                @click="closeMobileMenu"
                class="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Devenir partenaire
              </NuxtLink>
              <div class="h-px bg-neutral-200 my-2"></div>
              <NuxtLink 
                to="/login" 
                @click="closeMobileMenu"
                class="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                Se connecter
              </NuxtLink>
              <NuxtLink 
                to="/register" 
                @click="closeMobileMenu"
                class="px-3 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium text-center hover:bg-primary-700 transition-colors"
              >
                S'inscrire
              </NuxtLink>
            </div>
          </nav>
        </Transition>
      </div>
    </header>
  </div>
</template>