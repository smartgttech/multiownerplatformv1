<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'

const organizations = [
  {
    icon: '🎓',
    title: 'Centres de formation',
    description: 'Gérez vos sessions inter/intra-entreprises avec des créneaux négociables selon les disponibilités des groupes.',
    examples: ['Formations professionnelles', 'Écoles de langues', 'Organismes certifiants']
  },
  {
    icon: '💼',
    title: 'Cabinets de conseil',
    description: 'Coordonnez vos interventions avec vos clients et consultants en proposant des créneaux flexibles.',
    examples: ['Consulting stratégique', 'Audit', 'Accompagnement']
  },
  {
    icon: '🧘',
    title: 'Coachs & thérapeutes',
    description: 'Proposez des séances individuelles ou de groupe avec la liberté de négocier les horaires.',
    examples: ['Coaching personnel', 'Thérapie', 'Développement personnel']
  },
  {
    icon: '🏥',
    title: 'Praticiens santé',
    description: 'Simplifiez la prise de rendez-vous médical avec flexibilité selon l\'urgence et disponibilités.',
    examples: ['Médecins spécialistes', 'Kinés', 'Ostéopathes']
  },
  {
    icon: '🎨',
    title: 'Freelances & créatifs',
    description: 'Organisez vos briefs clients, validations et présentations avec une gestion d\'agenda intelligente.',
    examples: ['Designers', 'Développeurs', 'Photographes']
  },
  {
    icon: '⚖️',
    title: 'Services juridiques',
    description: 'Planifiez consultations et rendez-vous avec vos clients en tenant compte des contraintes de chacun.',
    examples: ['Avocats', 'Notaires', 'Experts comptables']
  }
]

const requesters = [
  {
    icon: '🏢',
    title: 'Entreprises',
    description: 'Réservez des formations, consultations ou services pour vos équipes en proposant vos créneaux.',
    highlight: false
  },
  {
    icon: '👤',
    title: 'Particuliers',
    description: 'Trouvez le bon moment pour vos coaching, thérapies ou consultations sans contrainte d\'agenda.',
    highlight: false
  },
  {
    icon: '🤝',
    title: 'Organisations',
    description: 'Coordonnez des prestations inter-organisations avec flexibilité et dialogue.',
    highlight: true
  }
]
</script>

<template>
  <BaseSection spacing="xl" variant="gray">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-black text-neutral-900 mb-6">
          Pour qui avons-nous créé Booking Land ?
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Deux profils, un même besoin : <strong>simplifier la coordination</strong> 
          sans sacrifier la flexibilité.
        </p>
      </div>

      <!-- Two columns -->
      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        
        <!-- Organizations -->
        <div>
          <div class="mb-8">
            <div class="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span class="text-amber-700 font-bold text-sm uppercase tracking-wide">
                🏢 Pour les organisations
              </span>
            </div>
            <h3 class="text-3xl font-black text-neutral-900 mb-4">
              Vous proposez des services sur rendez-vous
            </h3>
            <p class="text-lg text-neutral-600 leading-relaxed">
              Booking Land vous permet de gérer vos réservations avec une équipe, 
              d'accepter des propositions de créneaux et de centraliser toutes vos demandes.
            </p>
          </div>

          <!-- Grid organizations -->
          <div class="space-y-4">
            <div
              v-for="(org, index) in organizations"
              :key="index"
              class="bg-white rounded-xl p-6 border-2 border-neutral-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="text-4xl flex-shrink-0">{{ org.icon }}</div>
                <div>
                  <h4 class="text-lg font-bold text-neutral-900 mb-2">{{ org.title }}</h4>
                  <p class="text-neutral-600 text-sm mb-3 leading-relaxed">{{ org.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(example, idx) in org.examples"
                      :key="idx"
                      class="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-lg"
                    >
                      {{ example }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Requesters -->
        <div>
          <div class="mb-8">
            <div class="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span class="text-blue-700 font-bold text-sm uppercase tracking-wide">
                👥 Pour les clients
              </span>
            </div>
            <h3 class="text-3xl font-black text-neutral-900 mb-4">
              Vous cherchez des services
            </h3>
            <p class="text-lg text-neutral-600 leading-relaxed">
              Trouvez les bonnes organisations, proposez vos créneaux préférés, 
              et obtenez confirmation rapidement. Simple et transparent.
            </p>
          </div>

          <!-- Requesters cards -->
          <div class="space-y-6">
            <div
              v-for="(requester, index) in requesters"
              :key="index"
              :class="[
                'bg-white rounded-2xl p-8 border-2 transition-all duration-300',
                requester.highlight 
                  ? 'border-blue-300 shadow-xl shadow-blue-500/10' 
                  : 'border-neutral-100 hover:border-blue-200 hover:shadow-lg'
              ]"
            >
              <div class="text-5xl mb-4">{{ requester.icon }}</div>
              <h4 class="text-xl font-bold text-neutral-900 mb-3">{{ requester.title }}</h4>
              <p class="text-neutral-600 leading-relaxed">{{ requester.description }}</p>
            </div>

            <!-- Benefits list -->
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
              <p class="font-bold text-neutral-900 mb-3">✨ Ce que vous gagnez :</p>
              <ul class="space-y-2 text-sm text-neutral-700">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">✓</span>
                  <span>Plus besoin d'envoyer 10 emails pour trouver un créneau</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">✓</span>
                  <span>Proposez VOTRE disponibilité, pas l'inverse</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">✓</span>
                  <span>Suivi en temps réel de l'état de vos demandes</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600">✓</span>
                  <span>Découverte d'organisations de qualité (future marketplace)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <div class="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-10 text-white max-w-3xl mx-auto">
          <h3 class="text-3xl font-black mb-4">Vous vous reconnaissez ?</h3>
          <p class="text-neutral-300 mb-8 text-lg">
            Rejoignez le mouvement des organisations et utilisateurs qui veulent 
            réinventer la réservation.
          </p>
          <BaseButton variant="secondary" size="lg" to="/become-partner">
            Devenir organisation pilote
          </BaseButton>
        </div>
      </div>
    </div>
  </BaseSection>
</template>