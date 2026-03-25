<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

/**
 * BaseSection - Section avec animations d'entrée personnalisables au scroll
 */

// ============================================
// TYPES & INTERFACES
// ============================================
interface Props {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  width?: 'narrow' | 'default' | 'wide' | 'full'
  variant?: 'default' | 'dark' | 'gray' | 'gradient'
  centered?: boolean
  /** Active/Désactive l'animation */
  animate?: boolean
  /** Direction de l'entrée */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** Type d'effet visuel */
  animation?: 'fade' | 'slide' | 'zoom' | 'bounce'
}

const props = withDefaults(defineProps<Props>(), {
  spacing: 'lg',
  width: 'default',
  variant: 'default',
  centered: false,
  animate: true,
  direction: 'up',
  animation: 'slide'
})

// ============================================
// LOGIQUE D'INTERSECTION (SCROLL)
// ============================================
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!props.animate) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isVisible.value = entry.isIntersecting
    })
  }, { threshold: 0.15 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

// ============================================
// COMPUTED CLASSES D'ANIMATION
// ============================================

const animationClasses = computed(() => {
  if (!props.animate) return ''

  // 1. État initial (quand caché)
  const hiddenBase = 'opacity-0'
  let transform = ''

  // Gestion de la direction (Translation)
  if (isVisible.value === false) {
    const dist = '50px' // Distance de déplacement
    switch (props.direction) {
      case 'up': transform = `translateY(${dist})` ; break
      case 'down': transform = `translateY(-${dist})` ; break
      case 'left': transform = `translateX(-${dist})` ; break
      case 'right': transform = `translateX(${dist})` ; break
      default: transform = ''
    }

    // Gestion du type d'animation (Scale)
    if (props.animation === 'zoom') transform += ' scale(0.8)'
    if (props.animation === 'bounce') transform += ' scale(0.8)'
  } else {
    // État final (quand visible)
    transform = 'translateY(0) translateX(0) scale(1)'
  }

  // Durée et timing selon le type
  let timing = 'duration-1000 ease-out'
  if (props.animation === 'bounce') timing = 'duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)'

  return `${isVisible.value ? 'opacity-100' : hiddenBase} ${timing}`
})

// On utilise le style dynamique pour les transformations complexes
const animationStyle = computed(() => {
  if (!props.animate) return {}
  
  const dist = '60px'
  let transform = ''

  if (!isVisible.value) {
    switch (props.direction) {
      case 'up': transform = `translateY(${dist})` ; break
      case 'down': transform = `translateY(-${dist})` ; break
      case 'left': transform = `translateX(-${dist})` ; break
      case 'right': transform = `translateX(${dist})` ; break
    }
    if (props.animation === 'zoom') transform += ' scale(0.92)'
    if (props.animation === 'bounce') transform += ' scale(0.85)'
  } else {
    transform = 'translateY(0) translateX(0) scale(1)'
  }

  return {
    transform,
    transitionProperty: 'opacity, transform',
    pointerEvents: isVisible.value ? 'auto' : 'none'
  }
})

// ============================================
// AUTRES CLASSES (Design)
// ============================================

const spacingClasses = computed(() => {
  switch (props.spacing) {
    case 'none': return ''
    case 'sm': return 'py-8 md:py-12'
    case 'md': return 'py-12 md:py-16'
    case 'lg': return 'py-16 md:py-24'
    case 'xl': return 'py-24 md:py-32'
    default: return ''
  }
})

const containerWidthClasses = computed(() => {
  const base = 'mx-auto px-4'
  switch (props.width) {
    case 'narrow': return `${base} max-w-4xl`
    case 'default': return `${base} max-w-5xl`
    case 'wide': return `${base} max-w-7xl`
    case 'full': return 'w-full px-4 md:px-6'
    default: return base
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'dark': return 'bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white'
    case 'gray': return 'bg-neutral-50'
    case 'gradient': return 'bg-gradient-to-br from-amber-50 via-white to-blue-50'
    default: return 'bg-white'
  }
})

const centeredClasses = computed(() => props.centered ? 'text-center' : '')

const sectionClasses = computed(() => {
  return [
    spacingClasses.value,
    variantClasses.value,
    props.animate ? 'transition-opacity duration-1000' : ''
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <section 
    ref="sectionRef" 
    :class="sectionClasses"
    :style="animationStyle"
  >
    <div :class="[containerWidthClasses, centeredClasses]">
      <slot />
    </div>
  </section>
</template>