<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseCard from '../ui/base/BaseCard.vue'

interface WorkflowStep {
  number: string
  icon: string
  title: string
  description: string
  features: string[]
  colorGradient: string
  textAccent: string
  highlight?: boolean
}

const steps: WorkflowStep[] = [
  {
    number: '01',
    icon: '🎯',
    title: 'Sélection',
    description: "Les services proches de moi me sont proposés ou je recherche ce dont j'ai besoin.",
    colorGradient: 'linear-gradient(to top right, rgba(59, 130, 246, 0.4), rgba(79, 70, 229, 0.4))',
    textAccent: 'text-blue-400',
    features: ['Choix flexible', 'Interface intuitive', 'Profils vérifiés']
  },
  {
    number: '02',
    icon: '📅',
    title: 'Proposition',
    description: 'Il propose un créneau ou suggère son propre horaire.',
    colorGradient: 'linear-gradient(to top right, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))',
    textAccent: 'text-purple-400',
    features: ['Proposition libre', 'Flexibilité totale', 'Zéro friction']
  },
  {
    number: '03',
    icon: '💬',
    title: 'Négociation',
    description: "L'organisation peut accepter ou proposer une alternative.",
    colorGradient: 'linear-gradient(to top right, rgba(245, 158, 11, 0.4), rgba(234, 179, 8, 0.4))',
    textAccent: 'text-amber-400',
    highlight: true,
    features: ['Dialogue continu', 'Accord mutuel', 'Transparence']
  },
  {
    number: '04',
    icon: '✅',
    title: 'Validation',
    description: "Une fois d'accord, la réservation est confirmée.",
    colorGradient: 'linear-gradient(to top right, rgba(34, 197, 94, 0.4), rgba(20, 184, 166, 0.4))',
    textAccent: 'text-green-400',
    features: ['Sync Agenda', 'Rappels SMS', 'Suivi automatisé']
  }
]
</script>

<template>
  <BaseSection spacing="xl" class="bg-white relative overflow-hidden" animation="fade" direction="up">
    <div class="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      
      <header class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest">
            Notre solution
          </span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
          Un workflow qui change tout
        </h2>
        <p class="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          La <span class="text-neutral-900 font-semibold italic">négociation de créneaux</span> est notre cœur technologique. 
          Fini la rigidité, place à l'accord mutuel.
        </p>
      </header>

      <div class="relative">
        <div class="hidden lg:block absolute top-24 left-10 right-10 h-0.5 bg-neutral-100" aria-hidden="true">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 opacity-30"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div
            variant="gradient"
            v-for="step in steps"
            :key="step.number"
            class="group relative bg-neutral-900 rounded-[2rem] p-8 border border-neutral-800 transition-all duration-500 overflow-hidden h-[400px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-neutral-900/40"
          >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none">
              <div 
                class="absolute bottom-0 left-0 w-full h-2/3 blur-[40px] transform translate-y-10 -translate-x-10 rotate-12 transition-transform duration-700 group-hover:translate-y-0 group-hover:scale-110"
                :style="{ background: step.colorGradient }"
              ></div>
            </div>

            <div class="relative z-10 h-full flex flex-col justify-between">
                <div v-if="step.highlight" class="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                   <span class="flex h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
                   <span class="text-[10px] font-black text-amber-500 uppercase tracking-widest">Killer Feature</span>
                </div>
              <div class="flex justify-between items-start">
                <span class="text-6xl font-black transition-all duration-700 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1" :class="step.textAccent">
                  {{ step.number }}
                </span>
                <span class="text-4xl transform group-hover:scale-110 transition-transform duration-500">{{ step.icon }}</span>
              </div>

              <div>
                <h3 :class="['text-xl font-bold mb-3 transition-colors duration-300', step.textAccent, 'group-hover:text-white']">
                  {{ step.title }}
                </h3>
                <p class="w-full text-neutral-400 group-hover:text-neutral-100 leading-relaxed text-sm transition-colors duration-300">
                  {{ step.description }}
                </p>

                <div class="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span 
                    v-for="feat in step.features" 
                    :key="feat" 
                    class="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-neutral-300 whitespace-nowrap"
                  >
                    {{ feat }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="mt-20 text-center">
        <div class="max-w-4xl mx-auto bg-neutral-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-4">Envie de voir ça en action ?</h3>
            <p class="text-neutral-400 mb-8 max-w-lg mx-auto">Découvrez en détail comment fonctionne notre workflow de négociation.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <BaseButton to="/how-it-works" variant="secondary" size="lg">Voir la démo complète</BaseButton>
              <BaseButton to="/register" variant="outline" size="lg" class="text-white border-neutral-700 hover:bg-white/5">Créer un compte</BaseButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </BaseSection>
</template>