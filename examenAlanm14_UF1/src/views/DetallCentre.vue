<template>
    <div class="detall-centre">
      <div v-if="loading">Carregant dades...</div>

      <!-- Només mostrara l'error -->
      <div v-else-if="error">Error: {{ error }}</div>
  
      <div v-else>
        <h1>Informe sobre Beques i Mobilitat a {{ tipus_de_centre }}</h1>
        <h2>Any: {{ any }}</h2>
  
        <ul v-if="dades">
          <li><strong>Beques Dones:</strong> {{ dades.formaci_dones }} ({{ percentatge(dades.formaci_dones, dades.formaci_homes) }}%)</li>
          <li><strong>Beques Homes:</strong> {{ dades.formaci_homes }} ({{ percentatge(dades.formaci_homes, dades.formaci_dones) }}%)</li>
          <li><strong>Mobilitat Dones:</strong> {{ dades.mobilitat_dones }} ({{ percentatge(dades.mobilitat_dones, dades.mobilitat_homes) }}%)</li>
          <li><strong>Mobilitat Homes:</strong> {{ dades.mobilitat_homes }} ({{ percentatge(dades.mobilitat_homes, dades.mobilitat_dones) }}%)</li>
        </ul>
      </div>
  
      <button @click="$router.back()">Tornar</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, toRefs } from 'vue'
  import { useDetallCentre } from '@/composables/useDetallCentre'
  
  const props = defineProps({
    any: String,
    tipus_de_centre: String
  })
  
  const { any, tipus_de_centre } = toRefs(props)
  
  const { dades, loading, error } = useDetallCentre(any, tipus_de_centre)
  
  const percentatge = (valor, altreValor) => {
    const total = Number(valor) + Number(altreValor)
    return total ? ((Number(valor) / total) * 100).toFixed(2) : '0.00'
  }
  </script>



<style setup> 
detall-centre {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
  }



  </style>
  