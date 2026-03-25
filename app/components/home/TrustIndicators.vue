<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'

const sectors = [
  { icon: '🎓', name: 'Formation', color: 'blue' },
  { icon: '💼', name: 'Consulting', color: 'purple' },
  { icon: '🧘', name: 'Coaching', color: 'amber' },
  { icon: '🏥', name: 'Santé', color: 'green' },
  { icon: '🎨', name: 'Créatifs', color: 'pink' },
  { icon: '⚖️', name: 'Juridique', color: 'neutral' }
]
</script>

<template>
  <BaseSection spacing="md" class="bg-neutral-950 border-t border-neutral-800">
    <div class="max-w-6xl mx-auto">
      
      <!-- Titre -->
      <div class="text-center mb-8">
        <p class="text-neutral-400 text-sm uppercase tracking-widest mb-2">
          En développement pour
        </p>
        <h3 class="text-2xl font-bold text-white">
          Les organisations qui valorisent le <span class="text-amber-400">dialogue</span>
        </h3>
      </div>

      <!-- Grid secteurs -->
      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        <div
          v-for="(sector, index) in sectors"
          :key="index"
          class="group flex flex-col items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 hover:bg-neutral-800/50 transition-all duration-300"
        >
          <div class="text-4xl group-hover:scale-110 transition-transform duration-300">
            {{ sector.icon }}
          </div>
          <p class="text-neutral-400 text-sm font-medium group-hover:text-amber-400 transition-colors">
            {{ sector.name }}
          </p>
        </div>
      </div>

      <!-- Note transparence -->
      <div class="mt-8 text-center">
        <p class="text-neutral-500 text-sm">
          💡 <span class="text-neutral-400">Projet en développement</span> — Nous construisons avec les premiers utilisateurs
        </p>
      </div>
    </div>
  </BaseSection>
</template>