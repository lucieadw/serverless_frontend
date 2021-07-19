import api, { Product } from '@/api'
import { defineComponent, computed, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    product: { type: Object as PropType<Product | undefined>, required: true }
  },
  setup (props) {
    const addedItem = ref(false)
    function onIncreaseAmount () {
      api.increaseProductAmount(props.product!.category, props.product!.productId)
      addedItem.value = true
    }
    function onClose () {
      addedItem.value = false
    }
    const image = computed(() => '/img/' + (props.product!.picture || 'monstera.jpeg'))
    return () => <div class="modal fade" id="detailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{props.product!.name}</h5>
            <button onClick={onClose} type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <img src={image.value}/>
                </div>
                <div class="col-6">
                  <p class="text-justify">{props.product!.description}</p>
                  <p>{props.product!.price}€</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button onClick={onClose} type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
            {!addedItem.value && <button onClick={onIncreaseAmount} class="btn btn-dark mb-1"><i class="fa fa-shopping-cart"></i>  Hinzufügen</button>}
            {addedItem.value && <button onClick={onIncreaseAmount} class="btn btn-dark mb-1" disabled={true}><i class="fa fa-check"></i> Hinzugefügt</button>}
          </div>
        </div>
      </div>
    </div>
  }
})
