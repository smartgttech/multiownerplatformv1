<script lang="ts" setup>
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseBadge from '../ui/base/BaseBadge.vue';
import BaseSection from '../ui/common/BaseSection.vue';

const isVisible = ref(false)
onMounted(() => isVisible.value = true)
</script>

<template>
  <BaseSection width="full" class="relative min-h-screen flex flex-col overflow-hidden" variant="dark" spacing="sm" direction="up" animation="fade">
    <!-- Grille de fond -->
    <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, rgba(251,191,36,0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <!-- Glow effect -->
    <div class="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>

    <main class="flex-1 flex items-center relative z-10 container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center w-full py-12">
        
        <!-- Left: Text content -->
        <div :class="['transition-all duration-1000', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']">
          <BaseBadge variant="amber" class="mb-4">En dev - MVP</BaseBadge>
          <h1 class="text-6xl md:text-7xl font-bold text-white font-heading leading-[1.1] mb-6">
            Réinventez vos <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              réservations
            </span>
          </h1>
          
          <p class="text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed">
            La première plateforme où le créneau n'est pas une fatalité, mais une conversation. 
            Proposez, négociez, confirmez.
          </p>

          <div class="flex flex-wrap gap-4">
            <BaseButton to="/become-partner" variant="secondary" size="md" class="shadow-amber-500/20 shadow-xl">
              Devenir partenaire pilote
            </BaseButton>
            <BaseButton to="/how-it-works" variant="outline" size="sm" class="text-white border-neutral-700 hover:border-amber-500">
              Voir comment ça marche
            </BaseButton>
          </div>

          <!-- Stats - Adaptées pour MVP -->
          <div class="flex gap-10 mt-12 pt-8 border-t border-neutral-800">
            <div>
              <p class="text-2xl font-bold text-amber-400">MVP</p>
              <p class="text-xs text-neutral-500 uppercase tracking-widest">En dev</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-amber-400">100%</p>
              <p class="text-xs text-neutral-500 uppercase tracking-widest">Gratuit</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-amber-400">2025</p>
              <p class="text-xs text-neutral-500 uppercase tracking-widest">Launch</p>
            </div>
          </div>
        </div>

        <!-- Right: Visual cards -->
        <div :class="['transition-all duration-1000 delay-300', isVisible ? 'opacity-100' : 'opacity-0 translate-x-10']">
          <div class="relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            <!-- Card 1: Proposition envoyée -->
            <div class="absolute top-10 right-0 w-72 p-5 bg-neutral-800/80 backdrop-blur-xl rounded-2xl border border-neutral-700 shadow-2xl rotate-6 hover:rotate-2 transition-transform duration-500">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xl">🎯</span>
                <p class="text-white font-semibold text-sm">Proposition envoyée</p>
              </div>
              <p class="text-neutral-400 text-xs">
                15 mars à 14h — <span class="text-amber-400 italic">En attente</span>
              </p>
            </div>

            <!-- Card 2: Confirmé -->
            <div class="absolute top-40 left-0 w-72 p-5 bg-blue-900/80 backdrop-blur-xl rounded-2xl border border-blue-700 shadow-2xl -rotate-6 hover:-rotate-2 transition-transform duration-500">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xl">✅</span>
                <p class="text-white font-semibold text-sm">Confirmé !</p>
              </div>
              <p class="text-blue-200 text-xs font-medium text-pretty italic">
                Formation UX Design le 20 mars
              </p>
            </div>

            <!-- Card 3: Alternative suggérée -->
            <div class="absolute bottom-20 right-10 w-72 p-5 bg-neutral-900/90 backdrop-blur-xl rounded-2xl border border-neutral-700 shadow-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xl">💬</span>
                <p class="text-white font-semibold text-sm">Alternative ?</p>
              </div>
              <p class="text-purple-400 text-xs font-bold">Suggéré : 22 mars à 10h</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Gradient fade bottom -->
    <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent"></div>
  </BaseSection>
</template>