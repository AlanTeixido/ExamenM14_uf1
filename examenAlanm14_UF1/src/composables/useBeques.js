import { ref } from 'vue'
import axios from 'axios'

export function useBeques() {
  const anys = ref([])
  const centres = ref([])
  const loading = ref(false)
  const error = ref(null)

  const getAnys = async () => {
    loading.value = true
    anys.value = []
    error.value = null
    try {
      const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json')
      anys.value = [...new Set(response.data.map(item => item.any))].sort((a, b) => b - a)
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  const getCentresPerAny = async (anySeleccionat) => {
    loading.value = true
    centres.value = []
    error.value = null
    try {
      const response = await axios.get(`https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json?$where=any='${anySeleccionat}'`)
      centres.value = [...new Set(response.data.map(item => item.tipus_de_centres))].sort()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }
  
  

  return { anys, centres, loading, error, getAnys, getCentresPerAny }
}
