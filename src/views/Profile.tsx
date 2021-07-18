import api, { Order } from '@/api'
import { defineComponent, onBeforeMount, ref } from 'vue'
import OrderOverview from '@/components/OrderOverview'

export default defineComponent({
  setup () {
    const orders = ref<Order[]>([])

    onBeforeMount(async () => (orders.value = await api.getOrders()))

    return () => <div class="container-fluid profile">
      <div class="row mt-4">
        <div class="col-4">
          <div class="card">
            <div class="card-header">Deine Daten</div>
            <div class="card-body">
              <p>Email: test@test.de</p>
              <button class="btn btn-danger" disabled><i class="fa fa-sign-out"></i> Ausloggen</button>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="card">
            <div class="card-header">Deine Bestellungen</div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                {orders.value.map(o => <li class="list-group-item"><OrderOverview order={o} /></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
})
