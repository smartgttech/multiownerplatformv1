<script lang="ts" setup>
import BaseSection from '~/components/ui/common/BaseSection.vue'
import BaseButton from '~/components/ui/base/BaseButton.vue'
</script>

<template>
  <BaseSection spacing="xl" variant="dark" class="relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-amber-900/40"></div>
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
    
    <div class="max-w-5xl mx-auto relative z-10 text-center">
      
      <!-- Main content -->
      <div class="mb-12">
        <!-- Badge -->
        <div class="inline-block mb-6">
          <div class="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full">
            <span class="text-white font-bold text-sm uppercase tracking-widest">
              🚀 Dernière chance
            </span>
          </div>
        </div>

        <!-- Titre principal -->
        <h2 class="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
          Prêt à réinventer <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400">
            vos réservations ?
          </span>
        </h2>

        <!-- Description -->
        <p class="text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-4">
          Rejoignez les organisations pionnières qui construisent avec nous 
          la première plateforme avec négociation de créneaux.
        </p>

        <!-- Sous-texte urgence -->
        <p class="text-lg text-amber-400 font-semibold">
          ⚡ Places limitées pour les organisations pilotes
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-6 mb-12">
        <BaseButton 
          variant="secondary" 
          size="xl"
          to="/become-partner"
          class="shadow-2xl shadow-blue-500/30 h-16 px-10"
        >
          <span class="text-lg">Devenir partenaire pilote</span>
        </BaseButton>
        
        <BaseButton 
          variant="glass" 
          size="xl"
          to="/contact"
          class="border-white/30 text-white hover:bg-white/10 h-16 px-10"
        >
          <span class="text-lg">Discuter du projet</span>
        </BaseButton>
      </div>

      <!-- Stats row -->
      <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
          <div class="text-4xl font-black text-amber-400 mb-2">MVP</div>
          <p class="text-neutral-300 text-sm">En développement</p>
        </div>
        <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
          <div class="text-4xl font-black text-blue-400 mb-2">100%</div>
          <p class="text-neutral-300 text-sm">Gratuit</p>
        </div>
        <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
          <div class="text-4xl font-black text-green-400 mb-2">Q2 2025</div>
          <p class="text-neutral-300 text-sm">Lancement</p>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
        <div class="flex items-start gap-4 text-left">
          <div class="text-3xl flex-shrink-0">💡</div>
          <div>
            <p class="text-white font-bold mb-2">Transparence totale</p>
            <p class="text-neutral-400 leading-relaxed">
              Nous construisons Booking Land en public, avec nos utilisateurs. 
              Le MVP est gratuit, sans engagement. Si vous rejoignez maintenant, 
              vous aurez un impact direct sur le produit final et des conditions 
              préférentielles au lancement commercial.
            </p>
          </div>
        </div>
      </div>

      <!-- Footer links -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="flex flex-wrap justify-center gap-8 text-sm">
          <a href="/how-it-works" class="text-neutral-400 hover:text-white transition-colors">
            Comment ça marche
          </a>
          <a href="/about" class="text-neutral-400 hover:text-white transition-colors">
            Notre histoire
          </a>
          <a href="/faq" class="text-neutral-400 hover:text-white transition-colors">
            FAQ
          </a>
          <a href="/contact" class="text-neutral-400 hover:text-white transition-colors">
            Contact
          </a>
          <a href="/privacy" class="text-neutral-400 hover:text-white transition-colors">
            Confidentialité
          </a>
        </div>
      </div>
    </div>
  </BaseSection>
</template>