<script lang="ts" setup>
import { ref } from 'vue'
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseCard from '~/components/ui/base/BaseCard.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
import BaseBadge from '~/components/ui/base/BaseBadge.vue'

useHead({
  title: 'À propos - Booking Land'
})

definePageMeta({
  layout: 'secondary'
})

// ============================================
// Props
// ============================================
interface Difference {
  icon?: string;
  title?: string;
  description?: string;
  badge?: string;
  highlight?: boolean;
}

const differences = ref<Difference[]>([]);

// ============================================
// DATA (Strictement ton contenu d'origine)
// ============================================

const mission = {
  title: "Remettre l'humain au cœur de la réservation",
  description: "Trop longtemps, les outils de réservation ont imposé la rigidité des algorithmes. Nous croyons que chaque rendez-vous mérite un dialogue, pas juste un clic sur un calendrier.",
  values: [
    {
      icon: '🤝',
      title: 'Flexibilité d\'abord',
      description: 'Les créneaux se négocient, ils ne s\'imposent pas. Nous donnons la parole aux deux parties.'
    },
    {
      icon: '🏢',
      title: 'Pensé pour les organisations',
      description: 'Pas pour les individus seuls, mais pour les équipes, les structures, les collaborations.'
    },
    {
      icon: '⚡',
      title: 'Simplicité radicale',
      description: 'Un workflow doit être plus rapide que les emails, sinon il ne sert à rien.'
    },
    {
      icon: '🌐',
      title: 'Vision marketplace',
      description: 'Demain, une plateforme où organisations et clients se rencontrent naturellement.'
    }
  ]
}

const story = [
  {
    year: '2024',
    title: 'Le constat',
    description: 'Après avoir observé des dizaines d\'organisations perdre des heures en coordination par email, nous avons réalisé qu\'il manquait un outil.'
  },
  {
    year: '2025 Q1',
    title: 'La vision',
    description: 'Et si les créneaux pouvaient se négocier ? Et si les organisations avaient un vrai système multi-utilisateurs ? L\'idée de Booking Land était née.'
  },
  {
    year: '2025 Q2',
    title: 'Le MVP en construction',
    description: 'Nous développons la première version avec un objectif : prouver que la négociation de créneaux change tout.'
  },
  {
    year: 'Prochainement',
    title: 'Le lancement',
    description: 'Nous cherchons nos premières organisations pilotes pour valider le concept et affiner le produit.'
  }
]

 differences.value = [
  {
    icon: '🎯',
    title: 'Workflow de négociation',
    description: 'La seule plateforme qui permet de proposer, contre-proposer et valider. Un vrai dialogue.',
    highlight: true
  },
  {
    icon: '👥',
    title: 'Architecture multi-organisations',
    description: 'Gestion native des rôles, workflows d\'équipe, vision consolidée. Pas juste des calendriers liés.',
    highlight: false
  },
  {
    icon: '🚀',
    title: 'Vision marketplace',
    description: 'Demain, les organisations seront découvrables. Nous construisons le "Malt de la réservation".',
    highlight: false
  }
]

const principles = [
  {
    title: 'Transparence totale',
    description: 'Nous ne cachons rien. Pas de faux chiffres, pas de promesses irréalistes. Nous construisons en public.'
  },
  {
    title: 'Écoute utilisateur',
    description: 'Chaque fonctionnalité naît d\'un besoin réel. Nous interviewons, testons, itérons.'
  },
  {
    title: 'Qualité > Quantité',
    description: 'Nous préférons un workflow parfait à 50 features médiocres.'
  },
  {
    title: 'Produit avant marketing',
    description: 'Un bon produit se vend tout seul. Nous investissons dans l\'expérience utilisateur.'
  }
]
</script>

<template>
  <div class="overflow-hidden bg-white min-h-screen">
    
    <BaseSection spacing="xl" class="relative overflow-visible" animation="bounce" direction="left">
      <div class="absolute -top-24 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      
      <div class="max-w-5xl">
        <BaseBadge variant="primary" styleType="outline" class="mb-6">Notre histoire</BaseBadge>
        
        <h1 class="text-6xl md:text-7xl font-black text-neutral-900 leading-[0.85] mb-8 tracking-tighter">
          Réinventer la réservation.<br/>
          <span class="text-purple-600">Ensemble.</span>
        </h1>
        
        <div class="grid md:grid-cols-12 gap-2 items-end">
          <p class="md:col-span-8 text-md md:text-lg text-neutral-500 leading-relaxed font-medium">
            Booking Land n'est pas encore une success story. C'est un projet en construction, porté par une conviction : 
            la réservation mérite mieux que des créneaux figés.
          </p>
          <div class="md:col-span-4 flex flex-col gap-3">
            <BaseButton variant="danger" shiny size="lg" to="/become-partner" full-width>
              Rejoindre l'aventure
            </BaseButton>
            <BaseButton variant="primary" size="lg" to="/contact" full-width>
              Nous contacter
            </BaseButton>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="xl" variant="gray" class="rounded-[3rem] md:rounded-[5rem]">
      <div class="max-w-6xl mx-auto">
        <div class="mb-20">
          <BaseBadge variant="purple" styleType="subtle" class="mb-4">Notre mission</BaseBadge>
          <h2 class="text-4xl md:text-6xl font-black text-neutral-900 mb-8 max-w-3xl leading-tight">
            {{ mission.title }}
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl leading-relaxed">
            {{ mission.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(value, index) in mission.values"
            :key="index"
            :class="[
                'group relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-100 p-10 hover:border-purple-200 transition-all duration-500',
                index % 2 !== 0 ? 'md:translate-y-12' : ''
            ]"
          >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-700 bg-gradient-to-br from-purple-500 to-transparent"></div>
            
            <div class="relative z-10">
              <div class="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                {{ value.icon }}
              </div>
              <h3 class="text-2xl font-black text-neutral-900 mb-4">{{ value.title }}</h3>
              <p class="text-neutral-600 text-lg leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="xl">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <BaseBadge variant="info" styleType="subtle" class="mb-4">Timeline</BaseBadge>
          <h2 class="text-4xl md:text-5xl font-black text-neutral-900 mb-6">Notre parcours</h2>
          <p class="text-xl text-neutral-600">Nous en sommes au début. Voici où nous en sommes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-100 -z-10"></div>
            
            <div
              v-for="(step, index) in story"
              :key="index"
              class="group bg-white rounded-3xl border-2 border-neutral-50 p-8 hover:border-purple-200 hover:shadow-xl transition-all duration-500"
            >
              <BaseBadge 
                :variant="index === story.length - 1 ? 'warning' : 'default'" 
                size="sm" 
                class="mb-6"
                :pulse="index === story.length - 1"
              >
                {{ step.year }}
              </BaseBadge>
              <h3 class="text-xl font-black text-neutral-900 mb-3">{{ step.title }}</h3>
              <p class="text-neutral-500 leading-relaxed text-sm">{{ step.description }}</p>
            </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="xl" variant="dark" class="rounded-[4rem] mx-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <BaseBadge variant="amber" styleType="subtle" class="mb-4">Notre différence</BaseBadge>
          <h2 class="text-4xl md:text-6xl font-black mb-6">Ce qui nous rend uniques</h2>
          <p class="text-xl text-neutral-400">Trois piliers qui changent tout</p>
        </div>

        <div class="grid md:grid-cols-12 gap-6 auto-rows-fr">
          <div class="md:col-span-8 group relative overflow-hidden rounded-[3rem] bg-neutral-800 border border-white/10 p-10">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-br from-amber-500/30 to-transparent blur-3xl"></div>
            <div class="relative h-full flex flex-col justify-between z-10">
              <div>
                <BaseBadge variant="warning" pulse class="mb-6">Killer Feature</BaseBadge>
                <div class="text-6xl mb-6">{{ differences[0].icon }}</div>
                <h3 class="text-4xl font-black mb-4">{{ differences[0].title }}</h3>
              </div>
              <p class="text-neutral-400 text-xl leading-relaxed max-w-xl">
                {{ differences[0].description }}
              </p>
            </div>
          </div>

          <div class="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-blue-600 p-10 text-white">
            <div class="relative h-full flex flex-col justify-between z-10">
              <div class="text-6xl group-hover:rotate-12 transition-transform duration-500">{{ differences[1].icon }}</div>
              <div>
                <h3 class="text-2xl font-black mb-4">{{ differences[1].title }}</h3>
                <p class="text-blue-100 leading-relaxed">{{ differences[1].description }}</p>
              </div>
            </div>
          </div>

          <div class="md:col-span-12 group relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-purple-600 to-pink-600 p-10 text-white">
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div class="flex-1">
                <div class="text-6xl mb-6">{{ differences[2].icon }}</div>
                <h3 class="text-4xl font-black mb-4">{{ differences[2].title }}</h3>
                <p class="text-purple-50 text-xl leading-relaxed max-w-3xl">
                  {{ differences[2].description }}
                </p>
              </div>
              <div class="text-9xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">🌍</div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="xl">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-20">
          <BaseBadge variant="success" styleType="subtle" class="mb-4">Nos principes</BaseBadge>
          <h2 class="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">Comment nous construisons</h2>
          <p class="text-xl text-neutral-600">Quatre piliers qui guident notre développement</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div v-for="(principle, index) in principles" :key="index" class="flex gap-8 group">
            <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-black group-hover:bg-purple-600 transition-colors duration-300">
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-2xl font-bold text-neutral-900 mb-3">{{ principle.title }}</h3>
              <p class="text-neutral-500 text-lg leading-relaxed">{{ principle.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection spacing="xl" variant="gray">
      <div class="max-w-4xl mx-auto">
        <div class="bg-neutral-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"></div>
          
          <div class="relative z-10">
            <div class="text-7xl mb-8 animate-bounce">🚀</div>
            <h2 class="text-3xl md:text-5xl font-black mb-6">Vous voulez faire partie des pionniers ?</h2>
            <p class="text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl">
              Nous cherchons nos premières organisations pilotes. Si vous croyez qu'il faut réinventer 
              la réservation, parlons-en.
            </p>
            
            <div class="flex flex-wrap gap-4 mb-10">
              <BaseButton variant="secondary" size="xl" to="/become-partner" shiny>
                Devenir partenaire pilote
              </BaseButton>
              <BaseButton variant="glass" size="xl" to="/contact" class="text-white border-white/20">
                Discuter du projet
              </BaseButton>
            </div>

            <div class="pt-8 border-t border-white/10">
              <p class="text-sm text-neutral-500 font-medium">
                💡 Transparence : Nous n'avons pas encore de clients. Nous construisons le produit avec vous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection variant="dark" spacing="lg" class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-transparent"></div>
      <div class="relative z-10 text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black mb-6">Envie d'en savoir plus ?</h2>
        <p class="text-xl text-neutral-400 mb-10">Découvrez comment fonctionne notre workflow de négociation</p>
        <div class="flex flex-wrap justify-center gap-6">
          <BaseButton variant="secondary" size="lg" to="/how-it-works">Comment ça marche</BaseButton>
          <BaseButton variant="glass" size="lg" to="/faq" class="text-white border-white/20">Questions fréquentes</BaseButton>
        </div>
      </div>
    </BaseSection>
  </div>
</template>