import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import SignIn from '@/components/SignIn'
import api from './api'

export default defineComponent({
  setup () {
    const signInVisible = ref(false)

    function onAction (target: string) {
      if (!api.jwtToken.value) {
        signInVisible.value = true
      } else {
        router.push(target)
      }
    }

    const router = useRouter()
    return () => <>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/about">Geschichte</router-link>
        <button onClick={() => onAction('/basket')} class="basket"><i class="fa fa-shopping-cart"><p class="basket-text">Warenkorb</p></i></button>
        {signInVisible.value && <div class='popup'>
          <div class='popup-signin'>
            <SignIn onClose={() => (signInVisible.value = false)}>
            </SignIn>
            <button onClick={() => (signInVisible.value = false)} class="btn btn-link btn-close">
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>}
        <button onClick={() => onAction('/profile')} class="profile-button"><i class="fa fa-user"></i></button>
      </nav>
      <router-view class="content" />
      <div class="footer-container">
        <footer>Hier sollten ein paar Icon-Links sein z.B. zu GitHub oder Vue</footer>
        <p class="copyright">Contact: lucie.ausderwieschen@haw-hamburg.de</p>
        <p class="copyright">Pretty Plants © 2021</p>
      </div>
    </>
  }
})
