import api, { Order, OrderStatus } from '@/api'
import { defineComponent, PropType } from 'vue'

const badgeColors: Record<OrderStatus, string> = {
  [OrderStatus.Confirmed]: 'bg-success',
  [OrderStatus.OutOfStock]: 'bg-danger',
  [OrderStatus.Canceled]: 'bg-info'
}

export default defineComponent({
  props: {
    order: { type: Object as PropType<Order>, required: true }
  },
  setup (props) {
    async function onCancel () {
      await api.cancelOrder(props.order)
      // TODO
      // props.order.orderStatus = 'Canceled'
    }
    return () => <div class="row">
      <div class="col-8">
        {props.order.products.map(p => <li>{p.amount}&times; {p.name}</li>)}
      </div>
      <div class="col-4">
        Status: <div class={'badge ' + badgeColors[props.order.orderStatus]}>{props.order.orderStatus}</div><br/>
        Preis: {props.order.sum.toFixed(2)} €<br/>
        {props.order.orderStatus === 'Confirmed' && <button onClick={onCancel} class="btn btn-danger btn-sm">Stornieren</button>}
      </div>
    </div>
  }
})
