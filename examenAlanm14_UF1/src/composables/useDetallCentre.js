import { ref, watchEffect } from 'vue'
import axios from 'axios'

export function useDetallCentre(any, tipus_de_centre) {
  const dades = ref(null) // Dades del centre
  const loading = ref(false) // Indica si estem carregant dades
  const error = ref(null) // Error en cas de que hi hagi

  // Funció per obtenir les dades del centre
  const getDadesDetall = async () => {
    loading.value = true
    dades.value = null
    error.value = null
    try {
      const response = await axios.get(
        `https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json?$where=any='${any.value}' AND tipus_de_centres='${tipus_de_centre.value}'`
      )
      dades.value = response.data[0] 
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  // Cada vegada que canvia any o tipus_de_centre, cridem a getDadesDetall
  watchEffect(() => {
    if (any.value && tipus_de_centre.value) { // Si any i tipus_de_centre tenen valor
      getDadesDetall()
    }
  })

  return { dades, loading, error }
}
