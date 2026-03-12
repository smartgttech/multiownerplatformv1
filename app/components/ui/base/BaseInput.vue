<script lang="ts" setup>
import { computed, ref } from 'vue'

/**
 * BaseInput - Input texte générique et réutilisable
 * 
 * @example
 * <BaseInput v-model="email" type="email" placeholder="Votre email" />
 */

// ============================================
// TYPES & INTERFACES
// ============================================
interface Props {
  /** Type d'input HTML */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  /** Taille de l'input */
  size?: 'sm' | 'md' | 'lg'
  /** Texte placeholder */
  placeholder?: string
  /** État désactivé */
  disabled?: boolean
  /** État de chargement */
  loading?: boolean
  /** Input en erreur */
  error?: boolean
  /** Message d'erreur (optionnel) */
  errorMessage?: string
  /** Message d'aide */
  helpText?: string
  /** Label de l'input */
  label?: string
  /** Input requis */
  required?: boolean
  /** Input pleine largeur */
  fullWidth?: boolean
  /** Icône à gauche */
  iconLeft?: string
  /** Icône à droite */
  iconRight?: string
  /** Valeur de l'input (pour v-model) */
  modelValue?: string | number
}

// ============================================
// PROPS & DEFAULTS
// ============================================
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  loading: false,
  error: false,
  required: false,
  fullWidth: false
})

// ============================================
// EMITS
// ============================================
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'input', event: Event): void
}>()

// ============================================
// STATE
// ============================================
const isFocused = ref(false)

// ============================================
// COMPUTED CLASSES
// ============================================

// Classes de base communes à tous les inputs
const baseClasses = 'w-full rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-100'

// Classes selon la taille
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-2 text-sm'
    case 'md':
      return 'px-4 py-3 text-base'
    case 'lg':
      return 'px-5 py-4 text-lg'
    default:
      return ''
  }
})

// Classes selon l'état (normal, focus, error)
const stateClasses = computed(() => {
  if (props.error) {
    return 'border-red-500 focus:border-red-500 focus:ring-red-500/20 bg-red-50'
  }
  
  if (isFocused.value) {
    return 'border-amber-500 ring-amber-500/20'
  }
  
  return 'border-neutral-300 focus:border-amber-500 focus:ring-amber-500/20 bg-white hover:border-neutral-400'
})

// Classes de pleine largeur pour le container
const containerWidthClasses = computed(() => {
  return props.fullWidth ? 'w-full' : 'max-w-md'
})

// Classe finale combinée pour l'input
const inputClasses = computed(() => {
  const classes = [
    baseClasses,
    sizeClasses.value,
    stateClasses.value
  ]
  
  // Ajout de padding si icônes présentes
  if (props.iconLeft) classes.push('pl-10')
  if (props.iconRight || props.loading) classes.push('pr-10')
  
  return classes.join(' ')
})

// ============================================
// METHODS
// ============================================
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}
</script>

<template>
  <div :class="containerWidthClasses">
    <!-- Label -->
    <label v-if="label" class="block text-sm font-medium text-neutral-700 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Icône gauche -->
      <div 
        v-if="iconLeft && !loading"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
      >
        <slot name="icon-left">
          {{ iconLeft }}
        </slot>
      </div>

      <!-- Input -->
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled || loading"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <!-- Spinner de chargement (à droite) -->
      <div 
        v-if="loading"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
      >
        <svg 
          class="animate-spin h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>

      <!-- Icône droite (si pas de loading) -->
      <div 
        v-else-if="iconRight"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
      >
        <slot name="icon-right">
          {{ iconRight }}
        </slot>
      </div>
    </div>

    <!-- Message d'aide -->
    <p v-if="helpText && !error" class="mt-2 text-sm text-neutral-500">
      {{ helpText }}
    </p>

    <!-- Message d'erreur -->
    <p v-if="error && errorMessage" class="mt-2 text-sm text-red-600 flex items-center gap-1">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      {{ errorMessage }}
    </p>
  </div>
</template>