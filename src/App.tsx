import { defineComponent } from 'vue'

export default defineComponent({
  render () {
    return <>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/plants">Pflanzen</router-link>
        <router-link to="/flowers">Blumen</router-link>
        <router-link to="/edibles">Essbares</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view class="content"/>
      <footer>Footer Text</footer>
    </>
  }
})
