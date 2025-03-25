import { ref, watchEffect } from 'vue'
import axios from 'axios'

export function useDetallCentre(any, tipus_de_centre) {
  const dades = ref(null)
  const loading = ref(false)
  const error = ref(null)

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

  watchEffect(() => {
    if (any.value && tipus_de_centre.value) {
      getDadesDetall()
    }
  })

  return { dades, loading, error }
}
