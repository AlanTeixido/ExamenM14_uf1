<template>
    <ul>
      <li v-for="element in elements" :key="element.id">
        {{ element.nom }} ({{ element.valor }})
      </li>
    </ul>
  </template>
  
  <script setup>
  defineProps(['elements'])
  </script>
  