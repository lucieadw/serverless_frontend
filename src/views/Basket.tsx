import api, { BasketProduct } from '@/api'
import BasketEntry from '@/components/BasketEntry'
import { computed, defineComponent, ref, watchEffect, withModifiers } from 'vue'

export default defineComponent({
  setup () {
    const firstname = ref('')
    const lastname = ref('')
    const street = ref('')
    const housenr = ref('')
    const city = ref('')
    const postcode = ref('')

    const success = ref(false)

    const basketProducts = ref<BasketProduct[]>([])
    const sum = computed<number>(() => basketProducts.value
      .map(p => p.price * p.amount)
      .reduce((a, b) => a + b, 0))
    const checkoutVisible = ref(false)
    const error = ref('')

    watchEffect(async () => {
      if (api.isSignedIn.value) {
        basketProducts.value = (await api.getBasket()).products
      } else {
        basketProducts.value = []
      }
    })

    async function onChange (product: BasketProduct) {
      basketProducts.value = (await api.updateBasket(product.category, product.productId, product.amount)).products
    }

    async function onCreateOrder () {
      try {
        const orderBody = {
          name: firstname.value + ' ' + lastname.value,
          street: street.value,
          housenr: housenr.value,
          city: city.value,
          postcode: postcode.value,
          products: basketProducts.value
        }
        await api.createOrderRequest(orderBody)
        success.value = true
        checkoutVisible.value = false
        error.value = ''
      } catch (e) {
        error.value = e.message
        console.log(e)
      }
    }

    return () => <div class="container basket">
      <div class="row mt-4">
        <div class="col-12 p-3">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Name</th>
                <th>Menge</th>
                <th>Stückpreis</th>
                <th>Gesamtpreis</th>
              </tr>
            </thead>
            <tbody class="table-light">
              {(basketProducts.value.map(p => <BasketEntry onChange={onChange} basketProduct={p} />))}
            </tbody>
            <tfoot class="table-secondary">
              <tr>
                <td colspan={3} class="text-end">Summe:</td>
                <td class="text-end">{sum.value.toFixed(2)} €</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-3">
          {!checkoutVisible.value && !success.value && <button onClick={() => (checkoutVisible.value = true)} class="btn btn-dark" disabled={basketProducts.value.length === 0}>Zur Kasse</button>}
          {checkoutVisible.value && !success.value && <form onSubmit={withModifiers(onCreateOrder, ['prevent'])}>
            <div class="card">
              <div class="card-header bg-dark text-white"><strong>Kasse</strong></div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-6">
                    <label class="form-label">Vorname</label>
                    <input v-model={firstname.value} name="Fistname" type="text" class="form-control" required />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Nachname</label>
                    <input v-model={lastname.value} name="Lastname" type="text" class="form-control" required />
                  </div>
                  <div class="col-8">
                    <label class="form-label">Straße</label>
                    <input v-model={street.value} name="Street" type="text" class="form-control" required />
                  </div>
                  <div class="col-4">
                    <label class="form-label">Hausnr.</label>
                    <input v-model={housenr.value} name="Housenr" type="text" class="form-control" required />
                  </div>
                  <div class="col-8">
                    <label class="form-label">Stadt</label>
                    <input v-model={city.value} name="City" type="text" class="form-control" required />
                  </div>
                  <div class="col-4">
                    <label class="form-label">PLZ</label>
                    <input v-model={postcode.value} name="Postcode" type="text" class="form-control" required />
                  </div>
                </div>
              </div>
              <div class="card-footer text-end">
                <button class="btn btn-dark" type="submit">Bestellen</button>
              </div>
              {!!error.value && <div class="alert alert-danger">
                {error.value}
              </div>}
            </div>
          </form>}
          {!checkoutVisible.value && success.value && <div class="alert alert-success d-flex align-items-center" role="alert">
            <i class="fa fa-2x fa-check me-2"></i>
            <div>
              Danke für deine Bestellung!
            </div>
          </div>}
        </div>
      </div>
    </div>
  }
})
