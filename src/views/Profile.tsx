import api from '@/api'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => <>
      <div class="profile"><h3>Deine Daten</h3></div>
      <button onClick={api.signOut}>Ausloggen</button>
    </>
  }
})
