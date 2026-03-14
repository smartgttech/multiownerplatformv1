<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import MiniHero from '~/components/layout/MiniHero.vue'
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseCard from '~/components/ui/base/BaseCard.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

useHead({
  title: 'Comment ça marche - L\'expérience Booking Land'
})

definePageMeta({
  layout: 'secondary'
})

// Gestion de l'apparition progressive de la timeline au scroll
const showWorkflow = ref(false)
const workflowContainer = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      showWorkflow.value = true
    }
  }, { threshold: 0.3 })
  
  if (workflowContainer.value) {
    observer.observe(workflowContainer.value)
  }
})

// DATA enrichie pour le visuel
const mainSteps = [
  {
    number: '01',
    icon: '✨',
    title: 'Explorez sans limites',
    description: 'Accédez à un écosystème d\'organisations vérifiées. Filtrez par expertise, et non juste par disponibilité.',
    features: ['Recherche sémantique', 'Profils certifiés', 'Avis authentiques'],
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'hover:border-blue-400'
  },
  {
    number: '02',
    icon: '🤝',
    title: 'La Négociation Live',
    description: 'Proposez votre créneau idéal. L\'organisation ajuste avec vous. C\'est l\'humain qui reprend le dessus sur l\'algorithme.',
    features: ['Dialogue bidirectionnel', 'Flexibilité totale', 'Zéro friction'],
    highlight: true,
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-400'
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Validation Éclair',
    description: 'Une fois d\'accord, tout est automatisé : calendrier, rappels, et paiement sécurisé si nécessaire.',
    features: ['Sync Agenda Google/iCal', 'Rappels SMS', 'Tableau de bord'],
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'hover:border-green-400'
  }
]

const workflowSteps = [
  { actor: 'requester', action: 'Proposition', text: 'Bonjour ! Serait-il possible de se voir le 15 mars à 14h ?', delay: '0ms' },
  { actor: 'org', action: 'Contre-proposition', text: 'Le 15 est complet, mais je peux vous libérer le 16 à 10h. Ça vous irait ?', delay: '800ms' },
  { actor: 'requester', action: 'Ajustement', text: 'Vendu pour le 16, mais décalons à 11h si possible !', delay: '1600ms' },
  { actor: 'org', action: 'Validation', text: 'C\'est parfait. C\'est noté pour le 16 mars à 11h ! ✅', delay: '2400ms' }
]

const openFaqIndex = ref<number | null>(null)

// FAQ
const faqs = [
  {
    question: 'Combien coûte l\'utilisation pour les clients ?',
    answer: 'L\'utilisation de Booking Land est 100% gratuite pour les clients (requesters). Vous pouvez chercher, réserver et gérer vos réservations sans aucun frais.'
  },
  {
    question: 'Que se passe-t-il si l\'organisation refuse ma proposition ?',
    answer: 'Aucun problème ! L\'organisation peut soit refuser (avec explication), soit proposer un créneau alternatif. Vous pouvez alors accepter, refuser, ou proposer un autre créneau. Le dialogue continue jusqu\'à trouver un accord.'
  },
  {
    question: 'Puis-je annuler une réservation ?',
    answer: 'Oui, vous pouvez annuler une réservation depuis votre tableau de bord. Les conditions d\'annulation dépendent de chaque organisation (généralement indiquées dans les détails du service).'
  },
  {
    question: 'Comment suis-je notifié des changements ?',
    answer: 'Vous recevez des notifications par email à chaque étape : nouvelle proposition, contre-proposition, validation, rappels. Vous pouvez configurer vos préférences de notification dans votre profil.'
  },
  {
    question: 'Les organisations sont-elles vérifiées ?',
    answer: 'Oui, toutes les organisations sur Booking Land sont vérifiées. Nous contrôlons leur identité, leurs informations légales et la validité de leurs services avant de les lister sur la plateforme.'
  },
  {
    question: 'Puis-je réserver pour quelqu\'un d\'autre ?',
    answer: 'Absolument. Lors de la réservation, vous pouvez indiquer les coordonnées de la personne qui bénéficiera du service. Vous recevrez les notifications mais la réservation sera au nom du bénéficiaire.'
  }
]
 
const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>

<template>
  <div class="overflow-hidden bg-white">
    <div class="relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <MiniHero
        title="Oubliez la rigidité des agendas classiques."
        description="Booking Land introduit la négociation de créneaux. Ne subissez plus les calendriers, créez votre propre rendez-vous."
        variant="gradient"
        :breadcrumbs="[{ label: 'Accueil', to: '/' }, { label: 'Comment ça marche' }]"
      >
        <template #actions>
          <div class="flex flex-wrap justify-center gap-4 mt-10">
            <BaseButton size="md" shadow="lg" variant="danger" to="/organizations" class="group">
              Commencer l'expérience
              <template #icon-right>
                <span class="group-hover:translate-x-1 transition-transform">😉</span>
              </template>
            </BaseButton>
            <BaseButton variant="outline" size="sm" class="backdrop-blur-sm bg-white/5">
              Voir la démo vidéo
            </BaseButton>
          </div>
        </template>
      </MiniHero>
    </div>


    <BaseSection width="wide" spacing="sm" class="relative overflow-hidden">
        <div class="mb-20">
            <BaseBadge variant="primary" styleType="outline" class="mb-4">Le Parcours</BaseBadge>
            <h2 class="text-5xl md:text-7xl font-black text-neutral-900 leading-none">
                Trois temps.<br>
                <span class="text-neutral-400">Une nouvelle liberté.</span>
            </h2>
        </div>

  <div class="grid lg:grid-cols-12 gap-8 items-start">
  <div class="lg:col-span-7 group">
    <BaseCard 
      padding="none" 
      class="overflow-hidden border-none bg-neutral-800 text-white h-[450px] relative group group-hover:shadow-2xl transition-shadow duration-500 border-blue"
    >
      <template #body>
        <div class="absolute inset-0 opacity-0 group-hover:opacity-70 transition-all duration-700 ease-out">
          <div class="absolute bottom-15 left-0 w-full h-2/3 bg-blue-900 blur-[40px] transform translate-y-10 -translate-x-10 rotate-12"></div>
        </div>
        
        <div class="relative h-full p-10 flex flex-col justify-between z-10">
          <span class="text-8xl font-black text-blue-500 opacity-50 transition-transform duration-700 group-hover:-translate-y-2 group-hover:opacity-100">01</span>
          <div>
            <BaseBadge variant="primary" size="sm" class="mb-4">Exploration</BaseBadge>
            <h3 class="text-3xl font-bold text-blue-400 mb-4 transition-colors group-hover:text-white">Trouvez l'expert, <br/>pas juste l'horaire.</h3>
            <p class="text-neutral-400 max-w-md group-hover:text-neutral-100 transition-colors">
              Notre algorithme ne cherche pas des trous dans un calendrier, il cherche la meilleure correspondance pour votre projet.
            </p>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>

  <div class="lg:col-span-5 lg:mt-20">
    <BaseCard 
      variant="gradient"
      class="h-[550px] border-none bg-neutral-500 shadow-2xl relative overflow-hidden group group-hover:shadow-2xl transition-shadow duration-500"
    >
      <template #body>
        <div class="absolute inset-0 opacity-15 group-hover:opacity-80 transition-all duration-700 ease-out">
          <div class="absolute bottom-30 right-0 w-[200%] h-2/3 bg-amber-800 blur-[40px] transform translate-y-20 rotate-6"></div>
        </div>

        <div class="relative h-full flex flex-col z-10">
          <span class="text-7xl font-black text-amber-700/30 mb-4 text-right group-hover:text-amber-700">02</span>
          <div class="mt-auto">
            <div class="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg rotate-15 group-hover:rotate-0 transition-transform duration-500">
              🤝
            </div>
            <BaseBadge variant="warning" size="sm" class="mb-4">Conversation</BaseBadge>
            <h3 class="text-3xl font-bold mb-4 text-amber-700 group-hover:text-white transition-colors">Proposez. Ajustez. Validez.</h3>
            <p class="text-neutral-600 mb-6 group-hover:text-neutral-100 transition-colors">
              Vous reprenez la main sur votre temps.
            </p>
            <ul class="space-y-3">
              <li v-for="i in ['Flexibilité totale', 'Accord mutuel', 'Zéro frustration']" :key="i" class="flex items-center gap-2 font-bold text-sm text-neutral-700 group-hover:text-white transition-colors">
                <span class="text-amber-500 group-hover:text-amber-200">✦</span> {{ i }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>

  <div class="lg:col-span-12 lg:-ml-160">
    <div class="lg:flex justify-end">
      <div class="lg:w-2/3 group">
        <BaseCard 
          padding="none" 
          class="overflow-hidden border-none bg-neutral-800 text-white h-[350px] relative group group-hover:shadow-2xl transition-shadow duration-500 border-green"
        >
          <template #body>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-80 transition-all duration-700 ease-out">
              <div class="absolute top-15 bottom-0 left-0 w-3/3 h-full bg-green-600 blur-[40px] transform -translate-x-20 -rotate-12"></div>
            </div>
            
            <div class="relative h-full p-10 flex flex-col justify-between z-10">
              <span class="text-8xl font-black text-green-500 opacity-50">03</span>
              
              <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div class="max-w-md">
                  <BaseBadge variant="success" size="sm" class="mb-4">Automatisation</BaseBadge>
                  <h3 class="text-3xl font-bold text-green-400 mb-4 transition-colors group-hover:text-white">Ayez l'esprit libre.</h3>
                  <p class="text-neutral-400 group-hover:text-neutral-100 transition-colors">
                    Une fois l'accord trouvé, nous gérons tout : synchronisation, rappels intelligents et suivi. Vous n'avez qu'à vous présenter.
                  </p>
                </div>
                
                <div class="text-6xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                  🚀
                </div>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</div>
    </BaseSection>
    <BaseSection variant="gray" spacing="xl" class="relative">
      <div class="text-center mb-16">
        <BaseBadge variant="amber" styleType="subtle" pulse dot class="mb-4">Live Expérience</BaseBadge>
        <h2 class="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Visualisez la <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">fluidité.</span>
        </h2>
      </div>

      <div ref="workflowContainer" class="max-w-2xl mx-auto space-y-6 relative">
        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 -z-0"></div>

        <transition-group name="chat-fade">
          <div 
            v-if="showWorkflow"
            v-for="(msg, index) in workflowSteps" 
            :key="index"
            :style="{ transitionDelay: msg.delay }"
            class="flex items-start gap-4 relative z-10"
            :class="msg.actor === 'requester' ? 'flex-row' : 'flex-row-reverse'"
          >
            <div :class="['w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white flex-shrink-0', 
              msg.actor === 'requester' ? 'bg-blue-500' : 'bg-amber-500']">
              {{ msg.actor === 'requester' ? '👤' : '🏢' }}
            </div>

            <div :class="['max-w-[80%] p-5 rounded-2xl shadow-sm border', 
              msg.actor === 'requester' ? 'bg-white border-neutral-100 rounded-tl-none' : 'bg-neutral-900 text-white border-neutral-800 rounded-tr-none']">
              <div class="flex items-center gap-2 mb-1 text-[10px] uppercase tracking-widest font-bold opacity-60">
                {{ msg.action }}
              </div>
              <p class="text-sm md:text-base">{{ msg.text }}</p>
            </div>
          </div>
        </transition-group>
        
        <transition name="scale">
          <div v-if="showWorkflow" style="transition-delay: 3200ms" class="flex justify-center pt-8">
            <div class="bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-3 animate-bounce">
              <span>✨ Réservation conclue !</span>
            </div>
          </div>
        </transition>
      </div>
    </BaseSection>

    <BaseSection spacing="xl">
      <div class="flex flex-col lg:flex-row gap-8 items-stretch">
        <div class="flex-1 p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
          <h4 class="text-xl font-bold mb-6 flex items-center gap-2 text-neutral-400">
            <span>❌</span> L'ancien monde
          </h4>
          <ul class="space-y-6">
            <li v-for="i in 3" :key="i" class="flex gap-4 opacity-50 grayscale">
              <div class="w-10 h-10 rounded bg-white shadow-sm flex-shrink-0"></div>
              <div class="flex-1 space-y-2">
                <div class="h-2 w-1/3 bg-neutral-300 rounded"></div>
                <div class="h-2 w-full bg-neutral-200 rounded"></div>
              </div>
            </li>
          </ul>
          <p class="mt-8 text-neutral-500 text-sm italic">Emails perdus, appels sans réponse, frustration.</p>
        </div>

        <div class="flex-1 p-1 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-2xl transform lg:-rotate-1">
          <div class="bg-white h-full w-full rounded-[calc(1.5rem-1px)] p-8">
            <h4 class="text-xl font-bold mb-6 flex items-center gap-2 text-orange-600">
              <span>🚀</span> Avec Booking Land
            </h4>
            <div class="space-y-4">
              <div v-for="txt in ['Tout est tracé', 'Gain de temps (x5)', 'Expérience Premium']" :key="txt" 
                class="p-4 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-4">
                <div class="text-orange-600">✔</div>
                <span class="font-bold text-neutral-800">{{ txt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- ========================================== -->
    <!-- FAQ -->
    <!-- ========================================== -->
    <BaseSection spacing="xl" variant="gray" width="default">
      <div class="text-center mb-12">
        <BaseBadge variant="info" size="sm" class="mb-4">Questions fréquentes</BaseBadge>
        <h2 class="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          Vous avez des questions ?
        </h2>
        <p class="text-xl text-neutral-600">
          Nous avons les réponses
        </p>
      </div>
 
      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="(faq, index) in faqs" :key="index">
          <button
            @click="toggleFaq(index)"
            class="w-full bg-white rounded-xl p-6 text-left hover:shadow-md transition-all duration-200 border-2 border-transparent hover:border-primary-200"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-lg text-neutral-900 pr-4">{{ faq.question }}</h3>
              <svg 
                :class="['w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200', openFaqIndex === index ? 'rotate-180' : '']"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
 
            <div 
              v-show="openFaqIndex === index"
              class="mt-4 text-neutral-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </button>
        </div>
      </div>
 
      <!-- CTA en bas de FAQ -->
      <div class="mt-12 text-center">
        <p class="text-neutral-600 mb-4">Une autre question ?</p>
        <BaseButton variant="outline" to="/contact">
          Contactez-nous
        </BaseButton>
      </div>
    </BaseSection>

    <BaseSection variant="dark" spacing="xl" centered class="overflow-hidden relative">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-5xl font-black mb-6">Prêt à reprendre le contrôle ?</h2>
        <p class="text-xl text-neutral-400 mb-10">Rejoignez des milliers d'utilisateurs qui ne "prennent plus de rendez-vous", mais qui les créent.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="secondary" size="xl" to="/organizations" class="px-12">Je commence</BaseButton>
          <BaseButton variant="glass" size="sm" to="/contact" class="text-white border-white/20">Parler à un expert</BaseButton>
        </div>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
/* Animations de chat */
.chat-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.chat-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.scale-enter-active {
  transition: all 0.5s ease-out;
}
.scale-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

/* Custom background mesh */
.bg-mesh {
  background-color: #ffffff;
  background-image: radial-gradient(at 0% 0%, rgba(251, 191, 36, 0.1) 0, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.1) 0, transparent 50%);
}
</style>