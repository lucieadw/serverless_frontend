import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => <>
      <nav class="navbar navbar-expand-sm navbar-light bg-light p-3">
        <div class="container-fluid">
          <router-link class="navbar-brand d-flex align-items-center" to="/">
            <img src="/logo.png" height="36" class="me-2" />
            RoyalPlants
          </router-link>
          <div class="navbar-collapse" >
            <ul class="navbar-nav me-auto">
              <li class="nav-item"><router-link class="nav-link" to="/shop/plant">Shop</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/about">Geschichte &amp; FAQ</router-link></li>
            </ul>
            <router-link to="/profile" class="btn btn-dark me-3"><i class="fa fa-user"></i></router-link>
            <router-link to="/basket" class="btn btn-dark"><i class="fa fa-shopping-cart"></i></router-link>
          </div>
        </div>
      </nav>
      <router-view class="app__content" />
      <div class="container-fluid mt-5 bg-light text-center">
        <div class="row">
          <div class="col p-4">
            <i class="fa fa-2x fa-github me-2"></i>
            Hier sollten ein paar Icon-Links sein<br/>
            Contact: lucie.ausderwieschen@haw-hamburg.de<br/>
            RoyalPlants © 2021<br/>
          </div>
        </div>
      </div>
    </>
  }
})
