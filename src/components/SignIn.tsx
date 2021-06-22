import api from '@/api'
import { defineComponent, ref, withModifiers } from 'vue'

export default defineComponent({
  setup () {
    const email = ref('')
    const password = ref('')
    const success = ref(false)
    const error = ref('')

    async function onLogin () {
      try {
        error.value = ''
        await api.signIn(email.value, password.value)
        success.value = true
      } catch (e) {
        error.value = e.message
      }
    }
    return () => <form onSubmit={withModifiers(onLogin, ['prevent'])}>
      <div class="modal fade" id="loginModal" tabindex="-1">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Einloggen</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {!success.value && <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">E-mail Adresse</label>
                <input v-model={email.value} class="form-control" type="text" name="E-Mail" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Passwort</label>
                <input v-model={password.value} class="form-control" type="password" placeholder="Passwort" name="passwort" required />
              </div>
              {!!error.value && <div class="alert alert-danger">
                {error.value}
              </div>}
            </div>}
            {success.value && <div class="modal-body">
              <i class="fa fa-check"></i> Erfolgreich angemeldet!
            </div>}
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Schließen</button>
              {!success.value && <button type="submit" class="btn btn-dark">Anmelden</button>}
            </div>
          </div>
        </div>
      </div>
    </form>
  }
})
