import api, { Product } from '@/api'
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  props: {
    product: { type: Object as PropType<Product | undefined>, required: true }
  },
  setup (props) {
    function increaseAmount () {
      api.increaseProductAmount(props.product!.category, props.product!.productId)
    }
    const image = computed(() => '/img/' + (props.product!.picture || 'monstera.jpeg'))
    return () => <div class="modal fade" id="detailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{props.product!.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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
            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
            {api.isSignedIn.value &&
            <button onClick={increaseAmount} type="button" class="btn btn-dark"><i class="fa fa-shopping-cart"></i> Hinzufügen</button>}
          </div>
        </div>
      </div>
    </div>
  }
})
