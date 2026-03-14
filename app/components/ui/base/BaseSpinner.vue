<script lang="ts" setup>
import { computed } from 'vue'

/**
 * BaseSpinner - Système de chargement ultra-complet
 * 
 * SPINNERS ANIMÉS:
 * - spinner, dots, pulse, bars, ring, dual-ring, grid, bounce, wave, orbit
 * 
 * SKELETON LOADERS:
 * - skeleton-text, skeleton-card, skeleton-avatar, skeleton-button, skeleton-input
 * 
 * @example
 * <!-- Spinner -->
 * <BaseSpinner type="spinner" size="md" variant="primary" />
 * 
 * <!-- Skeleton -->
 * <BaseSpinner type="skeleton-text" :lines="3" />
 */

// ============================================
// TYPES & INTERFACES
// ============================================
interface Props {
  /** Type de loader */
  type?: 
    // Spinners animés
    | 'spinner' | 'dots' | 'pulse' | 'bars' | 'ring' | 'dual-ring' 
    | 'grid' | 'bounce' | 'wave' | 'orbit'
    // Skeleton loaders
    | 'skeleton-text' | 'skeleton-card' | 'skeleton-avatar' 
    | 'skeleton-button' | 'skeleton-input' | 'skeleton-image'
  
  /** Taille (pour spinners) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  
  /** Variante de couleur (pour spinners) */
  variant?: 'primary' | 'white' | 'neutral' | 'success' | 'warning' | 'error' | 'info'
  
  /** Vitesse d'animation */
  speed?: 'slow' | 'normal' | 'fast'
  
  /** Texte de chargement (pour spinners) */
  label?: string
  
  /** Position du label */
  labelPosition?: 'bottom' | 'right'
  
  /** Nombre de lignes (pour skeleton-text) */
  lines?: number
  
  /** Largeur (pour skeletons) */
  width?: string
  
  /** Hauteur (pour skeletons) */
  height?: string
  
  /** Cercle (pour skeleton-avatar) */
  circle?: boolean
  
  /** Arrondi (pour skeletons) */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

// ============================================
// PROPS & DEFAULTS
// ============================================
const props = withDefaults(defineProps<Props>(), {
  type: 'spinner',
  size: 'md',
  variant: 'primary',
  speed: 'normal',
  labelPosition: 'bottom',
  lines: 3,
  width: '100%',
  height: 'auto',
  circle: false,
  rounded: 'md'
})

// ============================================
// COMPUTED
// ============================================

// Détection si c'est un skeleton
const isSkeleton = computed(() => {
  return props.type.startsWith('skeleton-')
})

// Classes de taille
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'w-3 h-3'
    case 'sm':
      return 'w-4 h-4'
    case 'md':
      return 'w-6 h-6'
    case 'lg':
      return 'w-8 h-8'
    case 'xl':
      return 'w-12 h-12'
    case '2xl':
      return 'w-16 h-16'
    default:
      return ''
  }
})

// Classes de couleur
const colorClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'text-primary-600'
    case 'white':
      return 'text-white'
    case 'neutral':
      return 'text-neutral-600'
    case 'success':
      return 'text-green-600'
    case 'warning':
      return 'text-yellow-600'
    case 'error':
      return 'text-red-600'
    case 'info':
      return 'text-blue-600'
    default:
      return ''
  }
})

// Durée d'animation
const animationDuration = computed(() => {
  switch (props.speed) {
    case 'slow':
      return 'duration-1000'
    case 'normal':
      return 'duration-700'
    case 'fast':
      return 'duration-500'
    default:
      return ''
  }
})

// Taille du label
const labelSizeClasses = computed(() => {
  switch (props.size) {
    case 'xs':
    case 'sm':
      return 'text-xs'
    case 'md':
      return 'text-sm'
    case 'lg':
      return 'text-base'
    case 'xl':
    case '2xl':
      return 'text-lg'
    default:
      return ''
  }
})

// Layout (vertical ou horizontal)
const layoutClasses = computed(() => {
  return props.labelPosition === 'right' 
    ? 'flex-row items-center' 
    : 'flex-col items-center'
})

// Taille des dots
const dotSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'w-1 h-1'
    case 'sm':
      return 'w-1.5 h-1.5'
    case 'md':
      return 'w-2 h-2'
    case 'lg':
      return 'w-3 h-3'
    case 'xl':
      return 'w-4 h-4'
    case '2xl':
      return 'w-5 h-5'
    default:
      return ''
  }
})

// Taille des bars
const barHeight = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'h-2'
    case 'sm':
      return 'h-3'
    case 'md':
      return 'h-4'
    case 'lg':
      return 'h-6'
    case 'xl':
      return 'h-8'
    case '2xl':
      return 'h-10'
    default:
      return ''
  }
})

// Classes d'arrondi pour skeletons
const roundedClasses = computed(() => {
  switch (props.rounded) {
    case 'none':
      return 'rounded-none'
    case 'sm':
      return 'rounded-sm'
    case 'md':
      return 'rounded-md'
    case 'lg':
      return 'rounded-lg'
    case 'full':
      return 'rounded-full'
    default:
      return ''
  }
})

// Classes de base pour skeletons
const skeletonBaseClasses = 'bg-neutral-200 animate-pulse'
</script>

<template>
  <div>
    <!-- ========================================== -->
    <!-- SPINNERS ANIMÉS -->
    <!-- ========================================== -->
    <div v-if="!isSkeleton" :class="['inline-flex gap-3', layoutClasses]">
      <!-- TYPE 1: SPINNER (cercle qui tourne) -->
      <svg
        v-if="type === 'spinner'"
        :class="[sizeClasses, colorClasses, 'animate-spin', animationDuration]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>

      <!-- TYPE 2: DOTS (3 points qui rebondissent) -->
      <div v-else-if="type === 'dots'" class="flex items-center gap-1">
        <span
          v-for="i in 3" :key="i"
          :class="[dotSize, colorClasses, 'rounded-full bg-current animate-bounce']"
          :style="{ animationDelay: `${i * 150}ms`, animationDuration: '0.6s' }"
        />
      </div>

      <!-- TYPE 3: PULSE (cercle qui pulse) -->
      <div v-else-if="type === 'pulse'" class="relative flex items-center justify-center">
        <span :class="[sizeClasses, colorClasses, 'absolute inline-flex rounded-full bg-current opacity-75 animate-ping']" />
        <span :class="[sizeClasses, colorClasses, 'relative inline-flex rounded-full bg-current']" />
      </div>

      <!-- TYPE 4: BARS (3 barres qui ondulent) -->
      <div v-else-if="type === 'bars'" class="flex items-end gap-1" :style="{ height: barHeight }">
        <span
          v-for="i in 3" :key="i"
          :class="[colorClasses, 'w-1 bg-current rounded-full animate-pulse']"
          :style="{ animationDelay: `${i * 150}ms`, animationDuration: '1s', height: `${30 + (i * 20)}%` }"
        />
      </div>

      <!-- TYPE 5: RING (anneau qui tourne) -->
      <div
        v-else-if="type === 'ring'"
        :class="[sizeClasses, colorClasses, 'rounded-full border-4 border-current border-t-transparent animate-spin']"
      />

      <!-- TYPE 6: DUAL RING (double anneau) -->
      <div v-else-if="type === 'dual-ring'" class="relative" :class="sizeClasses">
        <div :class="['absolute inset-0 rounded-full border-4 border-current border-t-transparent animate-spin', colorClasses]" />
        <div
          :class="['absolute inset-2 rounded-full border-4 border-current border-b-transparent animate-spin', colorClasses]"
          style="animation-direction: reverse; animation-duration: 0.8s;"
        />
      </div>

      <!-- TYPE 7: GRID (9 points en grille) -->
      <div v-else-if="type === 'grid'" :class="[sizeClasses, 'grid grid-cols-3 gap-1']">
        <span
          v-for="i in 9" :key="i"
          :class="[colorClasses, 'rounded-sm bg-current animate-pulse']"
          :style="{ animationDelay: `${i * 100}ms`, animationDuration: '1.2s' }"
        />
      </div>

      <!-- TYPE 8: BOUNCE (cercle qui rebondit) -->
      <div
        v-else-if="type === 'bounce'"
        :class="[sizeClasses, colorClasses, 'rounded-full bg-current animate-bounce']"
        style="animation-duration: 0.6s;"
      />

      <!-- TYPE 9: WAVE (5 barres en vague) -->
      <div v-else-if="type === 'wave'" class="flex items-center gap-1">
        <span
          v-for="i in 5" :key="i"
          :class="[colorClasses, 'w-1 bg-current rounded-full']"
          :style="{ 
            height: size === 'xs' ? '8px' : size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '24px' : '32px',
            animation: 'wave 1.2s ease-in-out infinite',
            animationDelay: `${i * 100}ms`
          }"
        />
      </div>

      <!-- TYPE 10: ORBIT (2 cercles en orbite) -->
      <div v-else-if="type === 'orbit'" class="relative" :class="sizeClasses">
        <div :class="[colorClasses, 'absolute w-2 h-2 rounded-full bg-current']" style="animation: orbit 1.5s linear infinite; transform-origin: center center;" />
        <div :class="[colorClasses, 'absolute w-2 h-2 rounded-full bg-current']" style="animation: orbit 1.5s linear infinite reverse; transform-origin: center center;" />
      </div>

      <!-- Label optionnel -->
      <span v-if="label" :class="[labelSizeClasses, colorClasses, 'font-medium whitespace-nowrap']">
        {{ label }}
      </span>
    </div>

    <!-- ========================================== -->
    <!-- SKELETON LOADERS -->
    <!-- ========================================== -->
    <div v-else>
      <!-- SKELETON TEXT (lignes de texte) -->
      <div v-if="type === 'skeleton-text'" class="space-y-3" :style="{ width }">
        <div
          v-for="i in lines" :key="i"
          :class="[skeletonBaseClasses, roundedClasses]"
          :style="{ 
            height: '16px',
            width: i === lines ? '70%' : '100%'
          }"
        />
      </div>

      <!-- SKELETON CARD (carte complète) -->
      <div v-else-if="type === 'skeleton-card'" :class="[skeletonBaseClasses, roundedClasses, 'p-6']" :style="{ width, height: height !== 'auto' ? height : '300px' }">
        <div class="space-y-4">
          <!-- Image placeholder -->
          <div :class="[skeletonBaseClasses, 'h-40 w-full', roundedClasses]" />
          <!-- Title -->
          <div :class="[skeletonBaseClasses, 'h-6 w-3/4', roundedClasses]" />
          <!-- Description lines -->
          <div class="space-y-2">
            <div :class="[skeletonBaseClasses, 'h-4 w-full', roundedClasses]" />
            <div :class="[skeletonBaseClasses, 'h-4 w-5/6', roundedClasses]" />
          </div>
        </div>
      </div>

      <!-- SKELETON AVATAR (cercle ou carré) -->
      <div
        v-else-if="type === 'skeleton-avatar'"
        :class="[
          skeletonBaseClasses,
          circle ? 'rounded-full' : roundedClasses,
          sizeClasses
        ]"
      />

      <!-- SKELETON BUTTON -->
      <div
        v-else-if="type === 'skeleton-button'"
        :class="[skeletonBaseClasses, roundedClasses]"
        :style="{ 
          width: width === '100%' ? '120px' : width,
          height: height !== 'auto' ? height : '40px'
        }"
      />

      <!-- SKELETON INPUT -->
      <div
        v-else-if="type === 'skeleton-input'"
        :class="[skeletonBaseClasses, roundedClasses]"
        :style="{ 
          width,
          height: height !== 'auto' ? height : '44px'
        }"
      />

      <!-- SKELETON IMAGE -->
      <div
        v-else-if="type === 'skeleton-image'"
        :class="[skeletonBaseClasses, roundedClasses]"
        :style="{ 
          width,
          height: height !== 'auto' ? height : '200px'
        }"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes wave {
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
}

@keyframes orbit {
  from { transform: rotate(0deg) translateX(150%) rotate(0deg); }
  to { transform: rotate(360deg) translateX(150%) rotate(-360deg); }
}
</style>