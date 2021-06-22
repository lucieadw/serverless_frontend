import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => <div class="container-fluid home">
      <div class="row align-items-center text-center mb-4 home__header" style={{ backgroundImage: `url(${'/img/monstera.jpeg'})` }}>
        <div class="col">
          <h1>Willkommen bei RoyalPlants!</h1>
          <h2>Pflanzen die nie sterben, weil sie nie geliefert werden</h2>
          Der Pflanzenshop deines Vertrauens
        </div>
      </div>
      <div class="row mb-3 home__item">
        <div class="col-6 home__item__img" style={{ backgroundImage: `url(${require('@/assets/pplants.jpeg')})` }} />
        <div class="col-6 p-3">
          <h4>Zimmerpflanzen</h4>
          <p>Eine Zimmerpflanze (auch Topfpflanze, in Österreich Blumenstock) ist eine Pflanze, die im Innenraum kultiviert wird. Zimmerpflanzen werden in der Regel als Zierpflanzen ganzjährig in Räumen gepflegt, im Gegensatz zu Zierpflanzen, die in Parks und Gärten gepflegt werden, oder landwirtschaftlichen Kulturpflanzen. Auch Kübelpflanzen werden gewöhnlich nur während der kühleren Wochen des Jahres in Räumen untergebracht und stehen im Sommerhalbjahr im Freigelände. Meist werden Zimmerpflanzen in Töpfen kultiviert, da in geschlossenen Räumen kein natürlicher Boden zur Verfügung steht. Im Bereich der Innenraumbegrünung existieren selten auch Beetsysteme, zum Teil mit Anschluss an das natürliche Erdreich.</p>
          <router-link to="/shop/plant" class="btn btn-outline-dark">Jetzt Shoppen</router-link>
        </div>
      </div>
      <div class="row mb-3 home__item">
        <div class="col-6 p-3">
          <h4>Schnittblumen</h4>
          <p>Schnittblumen sind Blumen, die für die Verwendung in Gestecken, als Blumenstrauß, Bouquet etc. angebaut und vermarktet werden. Schnittblumen dienen der Dekoration und als Geschenk zu besonderen Anlässen.Bei guter Pflege halten Schnittblumen einige Tage. Um Schnittblumen vor dem raschen Verwelken zu bewahren, werden sie mit ihren Stielen in einen wassergefüllten Behälter gestellt, bis zum Verkauf in der Regel in Eimer, beim Endkunden meist in eine Vase. Um die Haltbarkeit zusätzlich zu erhöhen, dienen Maßnahmen wie frisches Anschneiden der Stiele, schräges Anschneiden der Stiele, Aufbewahren unter möglichst idealer Temperatur, und die Zugabe von Frischhaltemitteln, vor allem Zucker, in das Wasser. Durch Zugabe geringer Mengen Sildenafil-Citrat (Viagra) ins Wasser kann das Verwelken deutlich verzögert werden.[1] Darüber hinaus werden besonders konservierte Blumen verkauft, die beispielsweise mit Glycerin haltbar gemacht werden. Vor allem Rosen wird hierzu Flüssigkeit entzogen und in Form von Glycerin wieder zugesetzt. Derart behandelte Blumen haben eine Haltbarkeit von bis zu drei Jahren</p>
          <router-link to="/shop/flower" class="btn btn-outline-dark">Jetzt Shoppen</router-link>
        </div>
        <div class="col-6 home__item__img" style={{ backgroundImage: `url(${require('@/assets/flowers.jpeg')})` }} />
      </div>
      <div class="row home__item">
        <div class="col-6 home__item__img" style={{ backgroundImage: `url(${require('@/assets/edible.jpeg')})` }} />
        <div class="col-6 p-3">
          <h4>Kräuter &amp; Gemüse</h4>
          <p>Als Küchenkräuter oder kurz Kräuter werden küchensprachlich Pflanzen bezeichnet, deren Blätter und Blüten – frisch oder getrocknet – als Gewürze Verwendung finden. Es muss sich dabei nicht auch im botanischen Sinne um krautige Pflanzen handeln. Auch wenn Küchenkräuter zu den Gewürzen zählen, wird häufig von „Kräutern und Gewürzen“ gesprochen – zur Unterscheidung von Gewürzen, die aus Samen, Früchten, Rinde, Wurzeln usw. hergestellt werden.</p>
          <p>Gemüse (mhd. gemüese, ursprüngliche Bedeutung: Mus aus Nutzpflanzen) ist heute ein Sammelbegriff für essbare Pflanzenteile wild wachsender oder in Kultur genommener Pflanzen. Meist handelt es sich um Blätter, Knollen, Stängel oder Wurzeln von ein- oder zweijährigen krautigen Pflanzen, die roh, gekocht oder konserviert genossen werden. Im Gegensatz zu Pflanzen oder Pflanzenteilen, die vor allem wegen ihrer Reservestoffe (Kohlenhydrate, Eiweiß und Fette) genutzt werden und deshalb die Grundkost in der Ernährung des Menschen darstellen, wird Gemüse vor allem wegen seines Gehalts an Vitaminen, Mineralstoffen und sekundären Pflanzenstoffen als Beikost verzehrt. Gemüse ist geschmacksgebend und kalorienarm. Zudem hat Gemüse aufgrund seines hohen Gehalts an Ballaststoffen eine wichtige Funktion für die Verdauung</p>
          <router-link to="/shop/edible" class="btn btn-outline-dark">Jetzt Shoppen</router-link></div>
      </div>
    </div>
  }
})
