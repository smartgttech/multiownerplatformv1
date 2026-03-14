<script lang="ts" setup>
import { ref } from 'vue'
import MiniHero from '~/components/layout/MiniHero.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseCard from '~/components/ui/base/BaseCard.vue'
import BaseInput from '~/components/ui/base/BaseInput.vue'
import BaseTextarea from '~/components/ui/base/BaseTextarea.vue'
import BaseSection from '~/components/ui/common/BaseSection.vue'

useHead({
  title: 'Devenir Partenaire - Booking Land'
})

definePageMeta({
  layout: 'secondary'
})

// ============================================
// STATE DU FORMULAIRE
// ============================================
const formData = ref({
  organizationName: '',
  contactName: '',
  email: '',
  phone: '',
  category: '',
  website: '',
  description: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

// ============================================
// METHODS
// ============================================
const submitForm = async () => {
  isSubmitting.value = true
  
  // Simuler un appel API
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  isSuccess.value = true
  
  // Reset form après succès
  setTimeout(() => {
    isSuccess.value = false
    formData.value = {
      organizationName: '',
      contactName: '',
      email: '',
      phone: '',
      category: '',
      website: '',
      description: ''
    }
  }, 5000)
}

// ============================================
// DATA
// ============================================
const mainBenefits = [
  {
    icon: '🎯',
    badge: 'Killer Feature',
    title: 'Workflow de négociation unique',
    description: 'Le seul outil qui permet un vrai dialogue. Proposez, contre-proposez, validez. Plus de créneaux rigides, juste de la flexibilité humaine.',
    features: ['Proposition en 1 clic', 'Historique complet des échanges', 'Notifications temps réel', 'Validation instantanée'],
    gradient: 'from-amber-500 to-amber-600',
    highlight: 'La seule plateforme avec négociation native'
  },
  {
    icon: '👥',
    badge: 'Multi-équipe',
    title: 'Gestion multi-utilisateurs native',
    description: 'Admin, Managers, Opérateurs : des rôles granulaires pour chaque membre. Centralisez la gestion de toute votre équipe sur une seule plateforme synchronisée.',
    features: ['Permissions avancées par rôle', 'Workflows d\'équipe configurables', 'Synchronisation temps réel', 'Gestion centralisée'],
    gradient: 'from-blue-500 to-blue-600',
    highlight: 'Architecture pensée pour les organisations'
  },
  {
    icon: '📊',
    badge: 'Analytics',
    title: 'Dashboard unifié intelligent',
    description: 'Toutes vos réservations, stats, analytics en un seul endroit. Filtrez, triez, exportez. Prenez des décisions éclairées grâce aux données temps réel.',
    features: ['Vue calendrier & liste unifiée', 'Filtres avancés multi-critères', 'Export Excel/PDF/CSV', 'Statistiques en temps réel'],
    gradient: 'from-purple-500 to-purple-600',
    highlight: 'Visibilité totale sur votre activité'
  }
]

const secondaryBenefits = [
  { icon: '🔔', title: 'Notifications intelligentes', description: 'Email, SMS, Push configurables selon vos préférences' },
  { icon: '🌐', title: 'Visibilité marketplace', description: 'Profitez de notre audience pour attirer de nouveaux clients' },
  { icon: '⚡', title: 'Intégrations natives', description: 'Google Calendar, Outlook, votre CRM et plus encore' }
]

const features = [
  {
    icon: '✓',
    title: 'Essai gratuit 30 jours',
    description: 'Testez toutes les fonctionnalités sans engagement',
    color: 'green'
  },
  {
    icon: '💬',
    title: 'Support prioritaire',
    description: 'Équipe dédiée par chat, email et téléphone',
    color: 'blue'
  },
  {
    icon: '🎓',
    title: 'Onboarding personnalisé',
    description: 'Formation et configuration avec un expert',
    color: 'purple'
  },
  {
    icon: '🛡️',
    title: 'Sans engagement',
    description: 'Annulez à tout moment, transparence totale',
    color: 'amber'
  }
]

const pricing = [
  {
    name: 'Starter',
    price: '49',
    description: 'Pour les petites structures',
    popular: false,
    features: [
      'Jusqu\'à 50 réservations/mois',
      '3 membres de l\'équipe',
      'Support email',
      'Workflow de négociation',
      'Dashboard basique',
      'Intégrations standards'
    ]
  },
  {
    name: 'Professional',
    price: '129',
    description: 'Le plus populaire',
    popular: true,
    features: [
      'Réservations illimitées',
      '10 membres de l\'équipe',
      'Support prioritaire',
      'Toutes les intégrations',
      'Analytics avancés',
      'API accès complet',
      'Onboarding dédié',
      'Marketplace premium'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    description: 'Pour les grandes organisations',
    popular: false,
    features: [
      'Tout de Professional',
      'Membres illimités',
      'SLA garanti 99.9%',
      'Développements custom',
      'Account manager dédié',
      'Formation sur site',
      'White label (option)',
      'Infrastructure dédiée'
    ]
  }
]
</script>

<template>
  <div>
    <!-- ========================================== -->
    <!-- HERO -->
    <!-- ========================================== -->
    <MiniHero
      title="Rejoignez Booking Land"
      description="La première marketplace adaptative qui respecte vos règles, simplifie vos échanges et place l'humain au cœur de chaque réservation."
      :breadcrumbs="[
        { label: 'Accueil', to: '/' },
        { label: 'Devenir Partenaire' }
      ]"
      variant="gradient"
      align="center"
    >
      <template #actions>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <BaseButton size="lg" @click="document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })">
            Démarrer gratuitement
          </BaseButton>
          <BaseButton variant="outline" size="lg" to="/organizations">
            Voir les organisations
          </BaseButton>
        </div>
      </template>
    </MiniHero>

    <!-- ========================================== -->
    <!-- DIFFÉRENCIATION vs CONCURRENCE -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="gray">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <BaseBadge variant="primary" size="sm" class="mb-4">Notre différence</BaseBadge>
          <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
            Ce qui nous rend uniques
          </h2>
          <p class="text-xl text-neutral-600">
            Comparaison avec les outils traditionnels de réservation
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Calendly, Doodle -->
          <BaseCard variant="bordered">
            <template #body>
              <div class="text-center mb-4">
                <p class="text-2xl font-bold text-neutral-400">Calendly, Doodle</p>
                <p class="text-sm text-neutral-500">Outils classiques</p>
              </div>
              <ul class="space-y-3 text-left">
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Créneaux fixes imposés</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Aucune négociation possible</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Pensé pour individus seuls</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Pas de marketplace</span>
                </li>
              </ul>
            </template>
          </BaseCard>

          <!-- VOUS (highlight au centre) -->
          <BaseCard class="ring-4 ring-primary-500 scale-105 shadow-2xl bg-gradient-to-br from-primary-50 to-white">
            <template #body>
              <div class="text-center mb-4">
                <p class="text-3xl font-bold text-primary-600">Booking Land</p>
                <BaseBadge variant="primary" size="sm" class="mt-2">Nouvelle génération</BaseBadge>
              </div>
              <ul class="space-y-3 text-left">
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <span class="text-neutral-900 font-semibold">Workflow de négociation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <span class="text-neutral-900 font-semibold">Proposition/contre-proposition</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <span class="text-neutral-900 font-semibold">Multi-organisations natif</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-600 text-2xl flex-shrink-0">✓</span>
                  <span class="text-neutral-900 font-semibold">Marketplace intégrée</span>
                </li>
              </ul>
            </template>
          </BaseCard>

          <!-- Autres outils -->
          <BaseCard variant="bordered">
            <template #body>
              <div class="text-center mb-4">
                <p class="text-2xl font-bold text-neutral-400">Autres outils</p>
                <p class="text-sm text-neutral-500">Solutions B2C</p>
              </div>
              <ul class="space-y-3 text-left">
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Gestion basique</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Pas de workflow avancé</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Support limité</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span class="text-neutral-600">Pas de vision marketplace</span>
                </li>
              </ul>
            </template>
          </BaseCard>
        </div>

        <!-- Call-out en bas -->
        <div class="mt-12 text-center">
          <p class="text-lg text-neutral-700 font-semibold">
            🚀 Rejoignez les pionniers d'une nouvelle façon de gérer les réservations
          </p>
        </div>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- BÉNÉFICES PRINCIPAUX (Split Screen) -->
    <!-- ========================================== -->
    <BaseSection spacing="none" variant="default" width="full">
      <div class="text-center py-16 px-4 bg-white">
        <BaseBadge variant="primary" size="sm" class="mb-4">Nos avantages</BaseBadge>
        <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          Pourquoi nous rejoindre ?
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Des fonctionnalités pensées pour les organisations, pas pour les individus
        </p>
      </div>

      <!-- Bénéfices en Split Screen -->
      <div v-for="(benefit, index) in mainBenefits" :key="benefit.title">
        <div 
          class="grid md:grid-cols-2 items-center min-h-[600px]"
          :class="index % 2 === 0 ? '' : 'bg-neutral-50'"
        >
          <!-- Image/Icône -->
          <div 
            :class="[
              `bg-gradient-to-br ${benefit.gradient}`,
              'h-full flex items-center justify-center p-16',
              index % 2 === 0 ? 'order-1' : 'order-2'
            ]"
          >
            <div class="text-center">
              <div class="text-9xl md:text-[12rem] mb-6">{{ benefit.icon }}</div>
              <div class="text-white text-xl md:text-2xl font-bold opacity-90 px-6">
                {{ benefit.highlight }}
              </div>
            </div>
          </div>

          <!-- Contenu -->
          <div 
            :class="[
              'p-8 md:p-16',
              index % 2 === 0 ? 'order-2' : 'order-1'
            ]"
          >
            <BaseBadge :variant="index === 0 ? 'primary' : index === 1 ? 'info' : 'purple'" size="sm" class="mb-4">
              {{ benefit.badge }}
            </BaseBadge>
            <h3 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              {{ benefit.title }}
            </h3>
            <p class="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
              {{ benefit.description }}
            </p>
            <ul class="space-y-4">
              <li v-for="feature in benefit.features" :key="feature" class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700 text-lg">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- BÉNÉFICES SECONDAIRES (Bento Grid) -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="gray" width="wide">
      <div class="grid md:grid-cols-3 gap-6">
        <BaseCard
          v-for="benefit in secondaryBenefits"
          :key="benefit.title"
          hoverable
          padding="lg"
          class="group cursor-pointer"
        >
          <template #body>
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ benefit.icon }}
            </div>
            <h3 class="text-xl font-bold text-neutral-900 mb-3">{{ benefit.title }}</h3>
            <p class="text-neutral-600">{{ benefit.description }}</p>
          </template>
        </BaseCard>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- FEATURES (Cards avec icônes) -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="default" width="wide">
      <div class="text-center mb-12">
        <BaseBadge variant="success" size="sm" class="mb-4">Ce qui est inclus</BaseBadge>
        <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          Tout pour réussir dès le jour 1
        </h2>
        <p class="text-xl text-neutral-600 max-w-2xl mx-auto">
          Des garanties pensées pour vous faciliter la vie
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BaseCard
          v-for="feature in features"
          :key="feature.title"
          variant="bordered"
          hoverable
          padding="lg"
          class="group"
        >
          <template #body>
            <div class="text-center">
              <div 
                :class="[
                  'w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-4xl',
                  'group-hover:scale-110 transition-all duration-300',
                  feature.color === 'green' ? 'bg-green-100 group-hover:bg-green-500' :
                  feature.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-500' :
                  feature.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-500' :
                  'bg-amber-100 group-hover:bg-amber-500'
                ]"
              >
                {{ feature.icon }}
              </div>
              <h4 class="font-bold text-lg text-neutral-900 mb-2">{{ feature.title }}</h4>
              <p class="text-neutral-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </template>
        </BaseCard>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- TARIFS -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="gradient" width="wide">
      <div class="text-center mb-12">
        <BaseBadge variant="amber" size="sm" class="mb-4">Tarifs transparents</BaseBadge>
        <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          Choisissez votre plan
        </h2>
        <p class="text-xl text-neutral-600 max-w-2xl mx-auto">
          Essai gratuit de 30 jours sur tous les plans. Sans carte bancaire.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <BaseCard
          v-for="plan in pricing"
          :key="plan.name"
          :variant="plan.popular ? 'default' : 'bordered'"
          :class="plan.popular ? 'ring-4 ring-primary-600 shadow-2xl scale-105' : ''"
          padding="lg"
          class="relative"
        >
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <BaseBadge variant="primary" size="md" class="shadow-lg">
              ⭐ Le plus populaire
            </BaseBadge>
          </div>

          <template #header>
            <div class="text-center pt-4">
              <h3 class="text-2xl font-bold text-neutral-900 mb-2">{{ plan.name }}</h3>
              <p class="text-neutral-600">{{ plan.description }}</p>
              <div class="mt-6 mb-6">
                <div v-if="plan.price === 'Sur mesure'" class="text-4xl font-bold text-neutral-900">
                  Sur mesure
                </div>
                <div v-else>
                  <span class="text-6xl font-bold text-neutral-900">{{ plan.price }}€</span>
                  <span class="text-neutral-600 text-xl">/mois</span>
                </div>
              </div>
            </div>
          </template>

          <template #body>
            <ul class="space-y-4">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-neutral-700">{{ feature }}</span>
              </li>
            </ul>
          </template>

          <template #footer>
            <BaseButton
              :variant="plan.popular ? 'primary' : 'outline'"
              full-width
              size="lg"
            >
              {{ plan.price === 'Sur mesure' ? 'Nous contacter' : 'Commencer gratuitement' }}
            </BaseButton>
          </template>
        </BaseCard>
      </div>

      <div class="mt-12 text-center">
        <p class="text-neutral-600 text-lg">
          💳 Aucune carte bancaire requise • ⚡ Activation instantanée • 🔒 Données sécurisées
        </p>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- FORMULAIRE DE CONTACT -->
    <!-- ========================================== -->
    <BaseSection id="contact-form" spacing="xl" variant="default" width="narrow">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          Prêt à commencer ?
        </h2>
        <p class="text-xl text-neutral-600 max-w-2xl mx-auto">
          Remplissez ce formulaire et notre équipe vous contactera sous 24h
        </p>
      </div>

      <BaseCard v-if="isSuccess" variant="success" class="mb-8">
        <template #body>
          <div class="flex items-center gap-4">
            <div class="text-5xl">🎉</div>
            <div>
              <p class="font-bold text-xl text-green-900 mb-1">Demande envoyée avec succès !</p>
              <p class="text-green-700">Notre équipe vous contactera très bientôt.</p>
            </div>
          </div>
        </template>
      </BaseCard>

      <BaseCard shadow="xl">
        <template #body>
          <form @submit.prevent="submitForm" class="space-y-6">
            <BaseInput
              v-model="formData.organizationName"
              label="Nom de l'organisation"
              placeholder="Ex: Centre de Formation ABC"
              required
              full-width
              size="lg"
            />

            <BaseInput
              v-model="formData.contactName"
              label="Votre nom complet"
              placeholder="Jean Dupont"
              required
              full-width
              size="lg"
            />

            <div class="grid md:grid-cols-2 gap-6">
              <BaseInput
                v-model="formData.email"
                type="email"
                label="Email professionnel"
                placeholder="jean@organisation.com"
                required
                full-width
                size="lg"
              >
                <template #icon-left>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </template>
              </BaseInput>

              <BaseInput
                v-model="formData.phone"
                type="tel"
                label="Téléphone"
                placeholder="+33 6 12 34 56 78"
                full-width
                size="lg"
              >
                <template #icon-left>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </template>
              </BaseInput>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <BaseInput
                v-model="formData.category"
                label="Secteur d'activité"
                placeholder="Formation, Coaching, Conseil..."
                full-width
                size="lg"
              />

              <BaseInput
                v-model="formData.website"
                type="url"
                label="Site web (optionnel)"
                placeholder="https://votre-site.com"
                full-width
                size="lg"
              />
            </div>

            <BaseTextarea
              v-model="formData.description"
              label="Parlez-nous de votre activité et de vos besoins"
              placeholder="Décrivez brièvement vos services, le volume de réservations attendu, vos besoins spécifiques..."
              :rows="5"
              :max-length="1000"
              full-width
            />

            <BaseButton
              type="submit"
              :loading="isSubmitting"
              size="xl"
              full-width
            >
              {{ isSubmitting ? 'Envoi en cours...' : '🚀 Envoyer ma demande' }}
            </BaseButton>

            <p class="text-sm text-neutral-500 text-center">
              🔒 Vos données sont sécurisées et ne seront jamais partagées.
            </p>
          </form>
        </template>
      </BaseCard>
    </BaseSection>

    <!-- ========================================== -->
    <!-- CTA FINAL -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="dark" centered>
      <div class="max-w-4xl mx-auto">
        <div class="text-7xl mb-8">🚀</div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Prêt à transformer votre gestion de réservations ?
        </h2>
        <p class="text-xl md:text-2xl text-neutral-300 mb-10">
          Rejoignez les pionniers d'une nouvelle façon de gérer les réservations
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <BaseButton size="xl" @click="document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })">
            Commencer maintenant
          </BaseButton>
          <BaseButton variant="outline" size="xl" to="/contact">
            Poser une question
          </BaseButton>
        </div>
        <div class="flex items-center justify-center gap-8 text-neutral-400 text-sm">
          <span>✓ Sans engagement</span>
          <span>✓ 30 jours gratuits</span>
          <span>✓ Support dédié</span>
        </div>
      </div>
    </BaseSection>
  </div>
</template>