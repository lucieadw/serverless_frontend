import api from '@/api'
import router from '@/router'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['close'],
  props: {
    onClose: Function
  },
  setup (props, { emit }) {
    const email = ref('')
    const password = ref('')
    async function onLogin () {
      try {
        await api.signIn(email.value, password.value)
        emit('close')
      } catch (error) {
        console.log(error)
      }
    }
    return () => <section class="popup-signin">
      <div class="popup-signin-info">
        <h3>Einloggen</h3>
        <p>E-mail Adresse</p>
        <input v-model={email.value} type="text" name="E-Mail"></input>
        <p>Passwort</p>
        <input v-model={password.value} type="password" placeholder="Passwort" name="passwort"></input>
        <p></p>
        <button onClick={onLogin}>Einloggen</button>
      </div>
    </section>
  }
})
