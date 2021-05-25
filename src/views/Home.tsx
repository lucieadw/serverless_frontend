import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => <div class="home">
      <div class="grid-container">
        <div class="grid-item grid-item-header">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis consectetur molestiae maxime libero? Iusto, dicta esse? Expedita labore ab voluptas accusantium laudantium dicta porro totam possimus quam consequuntur perspiciatis natus voluptatibus dolor aliquam eveniet unde quibusdam, dolorem voluptates accusamus quaerat molestias reiciendis error enim? Culpa voluptate molestiae tempore, sunt deserunt soluta facilis quod quis sapiente atque sint nemo doloremque tempora nisi vel doloribus quam et est laborum aliquam quaerat in? Minima quo incidunt veniam dolore accusamus est sint enim perferendis omnis. Voluptates deserunt optio aliquam tempore exercitationem saepe facere officiis velit ad laudantium!</div>
        <div class="grid-item" style={{ backgroundImage: `url(${require('@/assets/pplants.jpeg')})` }}/>
        <div class="grid-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum vero libero ipsa officiis non hic beatae fugit placeat? Minima ea omnis, rem aliquam obcaecati exercitationem nemo aut ex? Et tempore nulla inventore, accusantium, veritatis eius consectetur libero delectus quae molestias atque qui tenetur esse aspernatur! Aut voluptas iusto vero possimus vitae maxime, autem quae ipsam recusandae laudantium veritatis neque ea sint fugit temporibus, molestiae fuga repellat. Laboriosam nam dignissimos inventore sit nesciunt corporis, eum vitae error asperiores molestias, consequuntur, minima quae animi voluptas possimus. Dolore, quas.</div>
        <div class="grid-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque distinctio earum, rerum, optio perferendis eveniet at, tempore harum dicta eaque possimus delectus impedit officiis. Non eius quisquam enim molestias possimus voluptas excepturi quae perferendis eos at officia facilis aspernatur sapiente maxime cumque ut animi libero eligendi debitis error sit magnam, aliquam natus! Rem, deleniti iste. Consectetur ullam provident perspiciatis dignissimos iure facilis explicabo! Animi adipisci sunt laudantium quisquam accusantium iste ea, esse voluptas modi odit libero beatae dignissimos eius cupiditate molestiae incidunt autem, nisi soluta perspiciatis! Similique, rerum, omnis quam neque impedit asperiores nihil iste at quidem soluta iure.</div>
        <div class="grid-item" style={{ backgroundImage: `url(${require('@/assets/flowers.jpeg')})` }}/>
        <div class="grid-item" style={{ backgroundImage: `url(${require('@/assets/edible.jpeg')})` }}/>
        <div class="grid-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio vel eum placeat est dignissimos, voluptatibus dicta alias architecto ratione repellat. Labore, molestias. Quas, eaque vero minus voluptate, voluptas laudantium tempora odit inventore corporis cumque perspiciatis omnis maxime, fuga dignissimos reprehenderit quidem. Amet nam exercitationem repellat ullam officia architecto, et deleniti voluptates quasi accusamus excepturi error sunt, iusto laborum aspernatur! Repudiandae reprehenderit aperiam nulla obcaecati ullam id voluptate quis nemo soluta. A doloremque vitae voluptas harum architecto qui quam error.</div>
      </div>
    </div>
  }
})