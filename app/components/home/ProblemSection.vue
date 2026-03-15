<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'

const problems = [
  {
    icon: '📧',
    title: 'Emails interminables',
    description: 'Des allers-retours sans fin pour trouver un simple créneau disponible pour tout le monde'
  },
  {
    icon: '📅',
    title: 'Calendriers rigides',
    description: 'Impossible de proposer un créneau en dehors des plages horaires pré-définies'
  },
  {
    icon: '👥',
    title: 'Gestion d\'équipe complexe',
    description: 'Coordonner plusieurs membres internes devient rapidement un cauchemar administratif'
  },
  {
    icon: '⏰',
    title: 'Temps perdu',
    description: 'Des heures perdues chaque semaine en coordination manuelle et relances multiples'
  }
]
</script>

<template>
  <!-- Transition du dark au light -->
  <div class="relative">
    <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-neutral-50 -mt-32"></div>
  </div>

  <BaseSection spacing="xl" class="bg-neutral-50" animation="zoom" direction="up">
    <div class="max-w-6xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6">
          Vous reconnaissez ces frustrations ?
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Les outils actuels ne comprennent pas que la réservation est un <strong>dialogue</strong>, 
          pas un choix unique imposé.
        </p>
      </div>
      
      <!-- Grid des problèmes -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(problem, index) in problems"
          :key="index"
          class="group bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-red-200 hover:shadow-xl transition-all duration-300"
        >
          <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {{ problem.icon }}
          </div>
          <h3 class="text-xl font-bold text-neutral-900 mb-3">
            {{ problem.title }}
          </h3>
          <p class="text-neutral-600 leading-relaxed">
            {{ problem.description }}
          </p>
        </div>
      </div>

      <!-- Citation -->
      <div class="mt-16 text-center">
        <div class="max-w-3xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
          <p class="text-2xl font-bold text-neutral-900 mb-4 italic">
            "On passe plus de temps à organiser qu'à travailler..."
          </p>
          <p class="text-neutral-600">
            — Retour d'organisations interrogées sur leurs processus de réservation
          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>