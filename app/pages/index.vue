<script setup lang="ts">
import HeroSectionWithHeader from '~/components/home/HeroSection.vue'
</script>

<template>
  <div>
    <!-- Hero Section avec Header intégré -->
    <HeroSectionWithHeader />

    <!-- Contenu principal de la page d'accueil -->
    <div class="container mx-auto px-4 py-12">
      <!-- Section catégories populaires -->
      <section class="mb-16">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-4">
            Catégories populaires
          </h2>
          <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez les services les plus demandés sur notre plateforme
          </p>
        </div>

        <!-- Grille de catégories -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card Formation -->
          <div class="bg-white rounded-xl p-6 border border-neutral-200 hover:border-amber-600 hover:shadow-xl transition-all group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-2">Formation</h3>
            <p class="text-neutral-600 text-sm mb-4">Centres de formation et cours professionnels</p>
            <NuxtLink to="/organizations?category=formation" class="text-amber-600 text-sm font-medium hover:text-amber-700 inline-flex items-center gap-1">
              Explorer
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Card Conseil -->
          <div class="bg-white rounded-xl p-6 border border-neutral-200 hover:border-amber-600 hover:shadow-xl transition-all group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-2">Conseil</h3>
            <p class="text-neutral-600 text-sm mb-4">Cabinets de conseil et consultants experts</p>
            <NuxtLink to="/organizations?category=conseil" class="text-amber-600 text-sm font-medium hover:text-amber-700 inline-flex items-center gap-1">
              Explorer
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Card Santé -->
          <div class="bg-white rounded-xl p-6 border border-neutral-200 hover:border-amber-600 hover:shadow-xl transition-all group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
            <h3 class="text-xl font-semibold text-neutral-900 mb-2">Santé</h3>
            <p class="text-neutral-600 text-sm mb-4">Professionnels de santé et thérapeutes</p>
            <NuxtLink to="/organizations?category=sante" class="text-amber-600 text-sm font-medium hover:text-amber-700 inline-flex items-center gap-1">
              Explorer
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Section comment ça marche -->
      <section class="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-8 md:p-12 text-white">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p class="text-lg text-neutral-400 max-w-2xl mx-auto">
            Réservez en 3 étapes simples
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Étape 1 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-neutral-950 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-amber-500/50">
              1
            </div>
            <h3 class="text-xl font-semibold mb-2">Trouvez votre service</h3>
            <p class="text-neutral-400">
              Parcourez notre catalogue d'organisations et sélectionnez le service qui vous correspond
            </p>
          </div>

          <!-- Étape 2 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-neutral-950 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-amber-500/50">
              2
            </div>
            <h3 class="text-xl font-semibold mb-2">Proposez un créneau</h3>
            <p class="text-neutral-400">
              Choisissez parmi les disponibilités ou proposez votre propre créneau
            </p>
          </div>

          <!-- Étape 3 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-neutral-950 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-amber-500/50">
              3
            </div>
            <h3 class="text-xl font-semibold mb-2">Confirmez votre réservation</h3>
            <p class="text-neutral-400">
              Recevez la confirmation et suivez votre demande en temps réel
            </p>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink 
            to="/how-it-works" 
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-amber-500 text-amber-400 font-semibold hover:bg-amber-500 hover:text-neutral-950 transition-all"
          >
            En savoir plus
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>