<template>
  <div>
    <section class="page-title bg-1">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block text-center">
              <span class="text-white font-weight-bold text-lg"
                >Platz 1 in der Kategorie "Trenntoilette f&uuml;r den
                Garten"</span
              >
              <h1 class="text-capitalize mb-5 text-lg">TROBOLO® KersaBœm</h1>

              <!-- <ul class="list-inline breadcumb-nav">
            <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="list-inline-item"><span class="text-white">/</span></li>
            <li class="list-inline-item"><a href="#" class="text-white-50">Department Details</a></li>
          </ul> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section department-single">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="department-img">
              <img
                src="/images/trenntoiletten/trenntoilette-trobolo-kersaboem.webp"
                alt="Garten Trenntoilette TROBOLO KersaBoem"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="department-content mt-5">
              <h2 class="text-md">KersaBoem</h2>
              <div class="divider my-4"></div>
              <p class="lead">
                Die Trenntoilette KersaBoem von TROBOLO® ist eine Trenntoilette
                für den Garten- und Außenbereich, welche sich zu jeder
                Jahreszeit, auch bei Minusgraden, benutzen lässt. Die
                Verarbeitung des FSC®-zertifizierten Holzes ist ausgezeichnet
                und zeigt Liebe für das Detail.
              </p>
              <p>
                Die Trenntoilette bietet denselben Komfort einer herkömmlichen
                Toilette. Sie besitzt ein Trenn- und Abluftsystem und ist somit
                vollständig geruchsfrei. Die Entleerung ist einfach und
                hygienisch. Die KersaBoem funktioniert komplett autark und
                benötigt kein Wasser oder Chemie, was der Umwelt zu Gute kommt.
                Die Trenntoilette kommt in einem Bausatz daher, ist jedoch
                komplett ohne Werkzeug aufbaubar. Die KersaBoem hält jeder
                Jahreszeit ohne Probleme stand und benötigt sehr wenig Wartung.
                Sie bietet viele Extras, unter anderem ein Türschloss welches
                aus einem Edelstahlriegel hergestellt ist, oder ein
                "Besetzt"-Zeichen. Zusätzlich zur KersaBoem kann ein passender
                Komposter mitbestellt werden mit dem man die nährstoffreichen
                Ausscheidungen kompostieren kann um es hinterher wieder der
                Natur zurückzuführen. Bei der KersaBoem von TROBOLO® ist
                wirklich an alles gedacht. Wer eine Komplettlösung benötigt ohne
                sich groß Gedanken machen zu müssen über den Komfort oder die
                Wartung, liegt mit dieser Trenntoilette genau richtig.
              </p>

              <h3 class="mt-5 mb-4">Test Kriterien</h3>
              <div class="divider my-4"></div>
              <ul class="list-unstyled department-service lead">
                <li>
                  <img src="/images/icons/check.webp" /> Qualität des Materials
                </li>
                <li><img src="/images/icons/check.webp" /> Sitzkomfort</li>
                <li>
                  <img src="/images/icons/check.webp" /> Möglichkeiten für
                  Ersatzteile
                </li>
                <li>
                  <img src="/images/icons/check.webp" /> Geruchsentwicklung
                </li>
                <li><img src="/images/icons/check.webp" /> Entleerung</li>
                <li><img src="/images/icons/check.webp" /> Preis</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="sidebar-widget schedule-widget mt-5">
              <h5 class="mb-4">KersaBœm</h5>

              <ul class="list-unstyled">
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Marke</a>
                  <span>TROBOLO®</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Material</a>
                  <span>23mm massives Kiefernholz</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Maße</a>
                  <span>Höhe 200 - Tiefe 97 - Breite 93</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Gewicht</a>
                  <span>160 KG</span>
                </li>
              </ul>

              <div class="sidebar-contatct-info mt-4">
                <p class="mb-0">Preis</p>
                <h3>1.979,00 EUR</h3>
              </div>
            </div>
            <div class="text-center">
              <a
                href="https://trobolo.com/de/produkte/kersaboem/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="KersaBoem online bestellen"
                class="btn btn-main-2 btn-round-full"
                >Online Bestellen ></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TroboloKersaboem",
  head: {
    title: "Trobolo KersaBoem - Testsieger",
    link: [{ rel: "canonical", href: "/trobolo-kersaboem/" }],
    meta: [
      {
        hid: "author",
        name: "author",
        content: "trenntoilette.net",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Die KersaBoem Trenntoilette von TROBOLO&reg; mit optionalem Komposter ist der Testsieger in der Kategorie: Trenntoilette f&uuml;r den Garten- und Außenbereich.",
      },
    ],
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "KersaBoem",
          image: [
            "https://www.trenntoilette.net/images/trenntoiletten/trenntoilette-trobolo-kersaboem.webp",
          ],
          description:
            "Die KersaBoem Garten-Trenntoilette von TROBOLO eignet sich für jede Jahreszeit. Sie wird als vorgefertiger Bausatz geliefert und kommt mit optionalem Komposter daher",
          sku: "M20XX1313",
          mpn: "21838",
          brand: {
            "@type": "Brand",
            name: "TROBOLO",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4.9",
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "Trenntoilette.net",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.88",
            reviewCount: "304",
          },
          offers: {
            "@type": "Offer",
            url: "https://www.trenntoilette.net/trobolo-kersaboem",
            priceCurrency: "EUR",
            price: "1979.00",
            priceValidUntil: "2023-11-20",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Testsieger",
              item: "https://www.trenntoilette.net/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "KersaBoem",
            },
          ],
        },
      ],
    };
  },
};
</script>