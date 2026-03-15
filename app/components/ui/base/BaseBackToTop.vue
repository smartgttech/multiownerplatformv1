<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props
interface Props {
  /**
   * Distance de scroll (en pixels) avant d'afficher le bouton
   * @default 300
   */
  threshold?: number
  
  /**
   * Position du bouton
   * @default 'bottom-right'
   */
  position?: 'bottom-right' | 'bottom-left'
  
  /**
   * Comportement du scroll
   * @default 'smooth'
   */
  behavior?: 'smooth' | 'instant'
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
  position: 'bottom-right',
  behavior: 'smooth'
})

// State
const isVisible = ref(false)
const scrollProgress = ref(0)

// Calculer la progression du scroll
const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  
  // Calculer le pourcentage de scroll
  const scrollableHeight = documentHeight - windowHeight
  const progress = (scrollTop / scrollableHeight) * 100
  
  scrollProgress.value = Math.min(progress, 100)
  
  // Afficher/masquer le bouton selon le threshold
  isVisible.value = scrollTop > props.threshold
}

// Scroll vers le haut
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: props.behavior
  })
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})

// Classes de position
const positionClasses = {
  'bottom-right': 'right-6 md:right-8',
  'bottom-left': 'left-6 md:left-8'
}
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-75 translate-y-8"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-75 translate-y-8"
    >
      <button
        v-if="isVisible"
        @click="scrollToTop"
        :class="[
          'fixed bottom-6 md:bottom-8 z-50',
          'w-14 h-14 md:w-16 md:h-16',
          'rounded-full',
          'bg-gradient-to-br from-blue-500 via-blue-700 to-blue-400',
          'text-white',
          'shadow-2xl shadow-amber-500/30',
          'hover:shadow-amber-500/50 hover:scale-110',
          'active:scale-95',
          'transition-all duration-300',
          'flex items-center justify-center',
          'group',
          'cursor-pointer',
          positionClasses[position]
        ]"
        aria-label="Retour en haut"
      >
        <!-- Cercle de progression -->
        <svg 
          class="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <!-- Background circle -->
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            stroke-width="4"
          />
          <!-- Progress circle -->
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            :stroke-dasharray="283"
            :stroke-dashoffset="283 - (283 * scrollProgress) / 100"
            class="transition-all duration-150"
          />
        </svg>

        <!-- Icône flèche -->
        <svg 
          class="w-6 h-6 md:w-7 md:h-7 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2.5" 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>

        <!-- Effet de pulsation au hover -->
        <span class="absolute inset-0 rounded-full bg-amber-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
      </button>
    </transition>
  </Teleport>
</template>