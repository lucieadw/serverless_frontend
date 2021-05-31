import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => <div class="home">
      <div class="grid-container">
        <div class="grid-item grid-item-header" style={{ backgroundImage: `url(${'/img/monstera.jpeg'})` }}>
          <p class="welcome">Willkommen bei Pretty Plants!</p>
          <p class="welcome-info-1">Pflanzen die nie sterben, weil sie nie geliefert werden</p>
          <p class="welcome-info-2">Der Pflanzenshop deines Vertrauens</p>
        </div>
        <div class="grid-item" style={{ backgroundImage: `url(${require('@/assets/pplants.jpeg')})` }}/>
        <div class="grid-item grid-item-info">
          <h3>Zimmerpflanzen</h3>
          <p>Voluptatibus cum vero libero ipsa officiis non hic beatae fugit placeat? Minima ea omnis, rem aliquam obcaecati exercitationem nemo aut ex? Et tempore nulla inventore, accusantium, veritatis eius consectetur libero delectus quae molestias atque qui tenetur esse aspernatur! Aut voluptas iusto vero possimus vitae maxime, autem quae ipsam recusandae laudantium veritatis neque ea sint fugit temporibus, molestiae fuga repellat. Laboriosam nam dignissimos inventore sit nesciunt corporis, eum vitae error asperiores molestias, consequuntur, minima quae animi voluptas possimus. Dolore, quas.</p>
          <router-link to="/shop" class="shop-now">Jetzt Shoppen</router-link></div>
        <div class="grid-item grid-item-info">
          <h3>Schnittblumen</h3>
          <p>Lorem aliquam obcaecati exercitationem nemo aut ex? Et tempore nulla inventore, delectus quae molestias atque qui tenetur esse aspernatur! Aut voluptas iusto vero possimus vitae maxime, autem quae ipsam recusandae laudantium veritatis neque ea sint fugit temporibus, molestiae fuga repellat. Laboriosam nam dignissimos inventore sit nesciunt consequuntur, minima quae animi voluptas possimus. Dolore, quas.</p>
          <router-link to="/shop" class="shop-now">Jetzt Shoppen</router-link></div>
        <div class="grid-item" style={{ backgroundImage: `url(${require('@/assets/flowers.jpeg')})` }}/>
        <div class="grid-item" style={{ backgroundImage: `url(${require('@/assets/edible.jpeg')})` }}/>
        <div class="grid-item grid-item-info">
          <h3>Kräuter &amp; Gemüse</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quae hic, corrupti libero eum vel repellat consequatur ipsam quam dolor! aliquam obcaecati exercitationem nemo aut ex? Et tempore nulla inventore, delectus quae molestias atque qui tenetur esse aspernatur! Aut voluptas iusto vero possimus vitae maxime, autem quae ipsam recusandae laudantium veritatis neque ea sint fugit temporibus, molestiae fuga repellat. Laboriosam nam dignissimos inventore sit nesciunt consequuntur, minima quae animi voluptas possimus. Dolore, quas.</p>
          <router-link to="/shop" class="shop-now">Jetzt Shoppen</router-link></div>
      </div>
    </div>
  }
})
