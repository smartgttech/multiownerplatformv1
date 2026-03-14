<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <!-- HERO WITH INTEGRATED HEADER -->
  <section class="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Floating Orbs -->
    <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-amber-400/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <!-- INTEGRATED HEADER -->
    <header class="relative z-50 w-full px-4 pt-4 md:px-6 md:pt-6">
      <div class="container mx-auto">
        <nav class="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800/50 rounded-2xl px-4 py-3 md:px-6 md:py-1">
          <div class="flex items-center justify-between">
            <!-- Logo -->
            <NuxtLink 
              to="/" 
              class="font-display text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 transition-all"
            >
              BOOKING LAND
            </NuxtLink>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
              <NuxtLink 
                to="/organizations" 
                class="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Explorer
              </NuxtLink>
              <NuxtLink 
                to="/how-it-works" 
                class="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Comment ça marche
              </NuxtLink>
              <NuxtLink 
                to="/become-partner" 
                class="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Devenir partenaire
              </NuxtLink>
            </div>

            <!-- Desktop Auth Buttons -->
            <div class="hidden md:flex items-center gap-3">
              <NuxtLink 
                to="/login" 
                class="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
              >
                Se connecter
              </NuxtLink>
              <NuxtLink 
                to="/register" 
                class="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 text-sm font-semibold hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
              >
                S'inscrire
              </NuxtLink>
            </div>

            <!-- Mobile Menu Button -->
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="md:hidden p-2 text-neutral-300 hover:text-amber-400 transition-colors"
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
            <div v-if="isMobileMenuOpen" class="md:hidden pt-4 pb-2 border-t border-neutral-800 mt-4">
              <div class="flex flex-col gap-2">
                <NuxtLink 
                  to="/organizations" 
                  @click="closeMobileMenu"
                  class="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/50 rounded-lg transition-colors"
                >
                  Explorer
                </NuxtLink>
                <NuxtLink 
                  to="/how-it-works" 
                  @click="closeMobileMenu"
                  class="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/50 rounded-lg transition-colors"
                >
                  Comment ça marche
                </NuxtLink>
                <NuxtLink 
                  to="/become-partner" 
                  @click="closeMobileMenu"
                  class="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/50 rounded-lg transition-colors"
                >
                  Devenir partenaire
                </NuxtLink>
                <div class="h-px bg-neutral-800 my-2"></div>
                <NuxtLink 
                  to="/login" 
                  @click="closeMobileMenu"
                  class="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/50 rounded-lg transition-colors"
                >
                  Se connecter
                </NuxtLink>
                <NuxtLink 
                  to="/register" 
                  @click="closeMobileMenu"
                  class="px-3 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 text-sm font-semibold text-center hover:from-amber-400 hover:to-amber-500 transition-colors"
                >
                  S'inscrire
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </header>

    <!-- HERO CONTENT -->
    <div class="flex-1 flex items-center">
      <div class="container mx-auto px-4 py-10 md:py-2 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div :class="['space-y-8 transition-all duration-1000', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20']">
            

            <!-- Title -->
            <h1 class="text-5xl md:text-6xl font-bold leading-tight -mt-8">
              <span class="text-white font-display">Réinventez</span>
              <br />
              <span class="font-heading text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 animate-gradient">
                vos réservations
              </span>
            </h1>

            <!-- Description -->
            <p class="text-lg text-neutral-400 leading-relaxed max-w-xl">
              La plateforme de réservation avec négociation intelligente. 
              Proposez, contre-proposez, confirmez. En temps réel.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/organizations"
                class="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold text-neutral-950 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  Découvrir la magie
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </NuxtLink>

              <NuxtLink
                to="/how-it-works"
                class="px-8 py-4 rounded-xl border-2 border-neutral-700 text-white font-semibold hover:border-amber-500 hover:bg-amber-500/10 transition-all backdrop-blur-sm"
              >
                Voir la démo
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 pt-2 border-t border-neutral-800">
              <div>
                <div class="text-3xl font-bold text-amber-400">24/7</div>
                <div class="text-sm text-neutral-500">Disponibilité</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-amber-400">100%</div>
                <div class="text-sm text-neutral-500">Sécurisé</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-amber-400">&lt;2min</div>
                <div class="text-sm text-neutral-500">Réservation</div>
              </div>
            </div>
          </div>

          <!-- Right Visual - 3D Card Stack -->
          <div :class="['relative transition-all duration-1000 delay-300', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20']">
            <!-- Floating Cards -->
            <div class="relative h-[500px] md:h-[600px]">
              <!-- Card 1 -->
              <div class="absolute top-7 right-0 w-full max-w-[320px] p-6 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-700 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <div class="text-white font-semibold">Proposition envoyée</div>
                    <div class="text-neutral-400 text-sm">Il y a 2 min</div>
                  </div>
                </div>
                <div class="text-neutral-300 text-sm">
                  Votre créneau du <span class="text-amber-400 font-semibold">15 mars à 14h</span> est en cours de validation
                </div>
              </div>

              <!-- Card 2 -->
              <div class="absolute top-24 md:top-40 left-0 w-full max-w-[320px] p-6 bg-gradient-to-br from-blue-900/80 to-blue-950/80 backdrop-blur-xl rounded-2xl border border-blue-700 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <div>
                    <div class="text-white font-semibold">Confirmé !</div>
                    <div class="text-neutral-400 text-sm">À l'instant</div>
                  </div>
                </div>
                <div class="text-neutral-300 text-sm">
                  Formation UX Design - <span class="text-blue-400 font-semibold">Paris, 20 mars</span>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="absolute bottom-35 right-0 md:right-10 w-full max-w-[320px] p-6 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-xl rounded-2xl border border-neutral-700 shadow-2xl">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <div class="text-white font-semibold">Contre-proposition</div>
                    <div class="text-neutral-400 text-sm">Il y a 5 min</div>
                  </div>
                </div>
                <div class="text-neutral-300 text-sm">
                  Alternative suggérée: <span class="text-purple-400 font-semibold">22 mars à 10h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Gradient Transition -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none"></div>
  </section>
</template>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s ease infinite;
}
</style>