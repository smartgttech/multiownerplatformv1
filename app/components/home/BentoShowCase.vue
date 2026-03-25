<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'
</script>

<template>
  <BaseSection spacing="xl" class="bg-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <BaseBadge variant="purple" styleType="subtle" class="mb-4">Interface</BaseBadge>
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6">
          Une expérience pensée pour l'efficacité
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Chaque écran est conçu pour vous faire gagner du temps, pas en perdre.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
        
        <!-- Card 1: Dashboard (8 cols, 2 rows) -->
        <div class="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-700 bg-gradient-to-br from-amber-600/40 to-transparent blur-3xl"></div>
          
          <div class="relative h-full p-10 flex flex-col justify-between z-10">
            <div>
              <BaseBadge variant="warning" class="bg-amber-500 text-white border-none mb-4">
                Dashboard
              </BaseBadge>
              <h3 class="text-3xl font-black mb-4">Vue d'ensemble complète</h3>
              <p class="text-neutral-300 text-lg leading-relaxed max-w-xl">
                Toutes vos réservations en un coup d'œil : en attente, confirmées, passées. 
                Filtres puissants et recherche instantanée.
              </p>
            </div>
            
            <!-- Mock dashboard visual -->
            <div class="space-y-3 opacity-60">
              <div class="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur">
                <div class="w-12 h-12 bg-amber-500/20 rounded-lg"></div>
                <div class="flex-1 space-y-1">
                  <div class="h-3 bg-white/20 rounded w-2/3"></div>
                  <div class="h-2 bg-white/10 rounded w-1/2"></div>
                </div>
                <div class="w-16 h-6 bg-green-500/20 rounded-full"></div>
              </div>
              <div class="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur">
                <div class="w-12 h-12 bg-blue-500/20 rounded-lg"></div>
                <div class="flex-1 space-y-1">
                  <div class="h-3 bg-white/20 rounded w-3/4"></div>
                  <div class="h-2 bg-white/10 rounded w-1/3"></div>
                </div>
                <div class="w-16 h-6 bg-amber-500/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Mobile (4 cols) -->
        <div class="md:col-span-4 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div class="relative h-full p-8 flex flex-col justify-between z-10">
            <div class="text-5xl group-hover:scale-110 transition-transform duration-300">📱</div>
            <div>
              <h3 class="text-2xl font-black mb-3">Mobile-first</h3>
              <p class="text-blue-100 leading-relaxed">
                Gérez vos réservations en déplacement. App responsive et rapide.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Notifications (4 cols) -->
        <div class="md:col-span-4 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div class="relative h-full p-8 flex flex-col justify-between z-10">
            <div class="text-5xl group-hover:scale-110 transition-transform duration-300">🔔</div>
            <div>
              <h3 class="text-2xl font-black mb-3">Notifications</h3>
              <p class="text-purple-100 leading-relaxed">
                Restez informé en temps réel de chaque nouvelle demande ou changement.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Calendar (6 cols) -->
        <div class="md:col-span-6 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div class="relative h-full p-8 flex flex-col justify-between z-10">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-black">Calendrier intelligent</h3>
              <div class="text-4xl group-hover:rotate-12 transition-transform duration-300">📅</div>
            </div>
            <div class="space-y-2">
              <div class="flex gap-2">
                <div class="w-8 h-8 bg-white/20 rounded"></div>
                <div class="w-8 h-8 bg-white/20 rounded"></div>
                <div class="w-8 h-8 bg-white/40 rounded"></div>
                <div class="w-8 h-8 bg-white/60 rounded"></div>
                <div class="w-8 h-8 bg-white/20 rounded"></div>
              </div>
              <p class="text-green-100 text-sm">
                Visualisez vos disponibilités et créneaux réservés
              </p>
            </div>
          </div>
        </div>

        <!-- Card 5: Messaging (6 cols) -->
        <div class="md:col-span-6 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <div class="relative h-full p-8 flex flex-col justify-between z-10">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-black">Messagerie</h3>
              <div class="text-4xl group-hover:scale-110 transition-transform duration-300">💬</div>
            </div>
            <div class="space-y-2">
              <div class="flex gap-2 items-center">
                <div class="w-8 h-8 bg-white/30 rounded-full"></div>
                <div class="flex-1 h-10 bg-white/20 rounded-xl backdrop-blur"></div>
              </div>
              <p class="text-pink-100 text-sm">
                Communiquez directement sans quitter la plateforme
              </p>
            </div>
          </div>
        </div>

        <!-- Card 6: Analytics (12 cols) -->
        <div class="md:col-span-12 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <div class="relative h-full p-8 md:p-10 flex items-center justify-between gap-8 z-10">
            <div class="flex-1">
              <h3 class="text-3xl font-black mb-4">Statistiques & Rapports</h3>
              <p class="text-white/90 text-lg leading-relaxed max-w-2xl">
                Analysez vos performances : taux de confirmation, créneaux les plus demandés, 
                temps de réponse moyen. Prenez des décisions éclairées.
              </p>
            </div>
            <div class="hidden md:flex items-end gap-2 opacity-60">
              <div class="w-12 h-24 bg-white/20 rounded-lg"></div>
              <div class="w-12 h-32 bg-white/30 rounded-lg"></div>
              <div class="w-12 h-20 bg-white/20 rounded-lg"></div>
              <div class="w-12 h-40 bg-white/40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Note -->
      <div class="mt-12 text-center">
        <p class="text-neutral-500 text-sm">
          🎨 <span class="text-neutral-600">Design en cours de finalisation</span> — Les captures d'écran finales seront ajoutées prochainement
        </p>
      </div>
    </div>
  </BaseSection>
</template>