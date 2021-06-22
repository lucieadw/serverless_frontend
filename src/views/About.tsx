import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return () => <div class="container-fluid about">
      <div class="row align-items-center text-center mb-4 about__header" style={{ backgroundImage: `url(${'/img/office.jpeg'})` }}>
        <div class="col">
          <h1>Was steckt hinter RoyalPlants?</h1>
          <h2>Geschichte und FAQ</h2>
        </div>
      </div>
      <div class="row mb-3 about__item">
        <div class="col-6 p-3">
          <h3>Entstehungsgeschichte</h3>
          <p>Diese Webseite dient als Fallbeispiel für eine Bachelorarbeit über Serverless Computing. Die Arbeit beschäftigt sich mit den Vorteilen, Nachteilen und Grenzen der Architektur.
          Häufig entsteht um neue Technologien eine Art Hype, welcher zu einer Überbenutzung und einer Fehleinschätzung der Nutzbarkeit führen kann. Ein ähnliches Beispiel für diesen Sachverhalt sind Microservices, welche bereits vermehrt auf diese Problematik untersucht wurden. Ich stelle mir nun die Frage, ob wir wirklich eine „Server-Revolution“ erleben oder ob Serverless nur ein weiteres Tool für speziell passende Anwendungen ist. Können die hohen Erwartungen erfüllt werden oder bestehen letztendlich doch gravierende Einschränkungen?
          Jede aufstrebende Technologie bringt neben neuen Möglichkeiten und Vorteilen immer auch Probleme und Einschränkungen mit sich. Es soll also eine realistische Beurteilung unter Betrachtung verschiedener Blickwinkel vorgenommen werden, da dies konstruktiver ist, als nur auf Stärken oder Schwächen einzugehen. Der Webshop auf dem du dich hier befindest hat all seine Besonderheiten und Experimente im Backend, also falls es dich interessiert...
          </p>
          <a href="https://github.com/lucieadw?tab=repositories"> Schau's dir auf GitHub an! </a>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-center">
          <i class="fa fa-5x fa-info-circle"></i>
        </div>
      </div>
      <div class="row mb-3 about__item">
        <div class="col-6 d-flex align-items-center justify-content-center">
          <i class="fa fa-5x fa-question-circle"></i>
        </div>
        <div class="col-6 p-3">
          <h3>FAQ</h3>
          <p></p>
          <p></p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-transparent">
              <h6>Kann man hier wirlich pflanzen kaufen?</h6>
              <p>Nein, leider nicht, aber schau doch mal <a href="https://plnts.com/">hier</a> oder <a href="https://winkelvansinkel.de/">hier</a> :-)</p>
            </li>
            <li class="list-group-item bg-transparent">
              <h6>Sind meine Daten bei dir sicher?</h6>
              <p>Diese Frage wird an Amazon weitergeleitet - ich gebe keine Garantien.</p>
            </li>
            <li class="list-group-item bg-transparent">
              <h6>Hast du eine gute Note in der Bachelorarbeit bekommen?</h6>
              <p>Hoffentlich ;-)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
})
