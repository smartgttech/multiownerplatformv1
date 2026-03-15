<script lang="ts" setup>
const isMobileMenuOpen = ref(false)

const links = [
  { name: 'Comment ça marche', to: '/how-it-works' },
  { name: 'Devenir partenaire', to: '/become-partner' },
  { name: 'À propos', to: '/about' },
  { name: 'Contact', to: '/contact' }
]
</script>

<template>
  <header class="relative z-50 bg-neutral-950 w-full px-4 pt-4 md:px-6 md:pt-6">
    <nav class="container mx-auto bg-transparent backdrop-blur-xl border border-neutral-950/50 rounded-2xl px-4 py-2">
      <div class="flex items-center justify-between">
        
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
          BOOKING LAND
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to" 
            :to="link.to" 
            class="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink 
            to="/login" 
            class="px-4 py-2 text-sm text-neutral-300 hover:text-amber-400 transition-colors"
          >
            Se connecter
          </NuxtLink>
          <NuxtLink 
            to="/become-partner" 
            class="px-5 py-2.5 rounded-lg bg-amber-500 text-neutral-950 text-sm font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
          >
            Rejoindre
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden p-2 text-neutral-300"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Menu</span>
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span :class="['w-full h-0.5 bg-current transition-all', isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['w-full h-0.5 bg-current transition-all', isMobileMenuOpen ? 'opacity-0' : '']"></span>
            <span :class="['w-full h-0.5 bg-current transition-all', isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden py-4 space-y-2 border-t border-neutral-800 mt-4 overflow-hidden">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to" 
            :to="link.to" 
            class="block px-3 py-2 text-neutral-300 hover:text-amber-400 transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="block px-3 py-2 text-amber-400"
            @click="isMobileMenuOpen = false"
          >
            Se connecter
          </NuxtLink>
          <NuxtLink 
            to="/become-partner" 
            class="block mx-3 mt-2 px-4 py-2 text-center rounded-lg bg-amber-500 text-neutral-950 font-semibold"
            @click="isMobileMenuOpen = false"
          >
            Rejoindre
          </NuxtLink>
        </div>
      </transition>
    </nav>
  </header>
</template>