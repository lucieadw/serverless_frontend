import { defineComponent } from 'vue'

export default defineComponent({
  render () {
    return <>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        {/* <router-link to="/flowers">Blumen</router-link>
        <router-link to="/edibles">Essbares</router-link> */}
        <router-link to="/about">Geschichte</router-link>
      </nav>
      <router-view class="content"/>
      <div class="footer-container">
        <footer>Hier sollten ein paar Icon-Links sein z.B. zu GitHub oder Vue</footer>
        <p class="copyright">Contact: lucie.ausderwieschen@haw-hamburg.de</p>
        <p class="copyright">Pretty Plants © 2021</p>
      </div>
    </>
  }
})
