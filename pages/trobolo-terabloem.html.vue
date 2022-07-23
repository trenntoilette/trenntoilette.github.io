<template>
  <div>
    <section class="page-title bg-1">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block text-center">
              <span class="text-white font-weight-bold text-lg"
                >Platz 1 in der Kategorie "Trenntoilette im Haus"</span
              >
              <h1 class="text-capitalize mb-5 text-lg">TROBOLO® TeraBlœm</h1>

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
                src="/images/trenntoiletten/trenntoilette-trobolo-terabloem.webp"
                alt="Trenntoilette TROBOLO TeraBloem"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="department-content mt-5">
              <h2 class="text-md">TeraBlœm</h2>
              <div class="divider my-4"></div>
              <p class="lead">
                Die Trenntoilette TeraBlœm von TROBOLO® hat bei uns nicht ohne
                Grund den ersten Platz erklommen. Ausgezeichnete Qualität,
                optimale Funktionsweise und ein tolles Design machen diese
                Trenntoilette zum besten Produkt.
              </p>
              <p>
                Die TeraBlœm Trenntoilette von TROBOLO® kommt als vorgefertiger
                Bausatz für den Innenbereich. Sie bietet ausgezeichnete
                Komfortabilität und steht einer normalen Toilette nichts nach.
                Die TeraBlœm hat ein austauschbares Trennsystem und bietet Platz
                für genug Einstreu. Optional kann ein elektrisches Abluftsystem
                installiert werden, welches per 12V, 24V oder 230V betrieben
                werden kann. Dies ermöglicht einen vielfältigen Einsatz an jedem
                Ort. Die Entleerung funktioniert sehr einfach und die
                Trenntoilette von TROBOLO® kommt ohne Wasser oder Chemie aus.
                Daher eignet sie sich ideal für Innenräume und kann ohne
                zusätzliches Werkzeug montiert werden, ganz ohne handwerkliche
                Vorkenntnisse.
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
              <h5 class="mb-4">TeraBlœm</h5>

              <ul class="list-unstyled">
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Marke</a>
                  <span>TROBOLO®</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Material</a>
                  <span>Erlen Mehrschichtholz</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Maße</a>
                  <span>Höhe 497 - Tiefe 470 - Breite 330</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <a href="#">Gewicht</a>
                  <span>12,7 KG</span>
                </li>
              </ul>

              <div class="sidebar-contatct-info mt-4">
                <p class="mb-0">Preis</p>
                <h3>429,00 EUR</h3>
              </div>
            </div>
            <div class="text-center">
              <a
                href="https://trobolo.com/de/produkte/terabloem/"
                target="_blank"
                rel="nofollow noopener"
                title="TeraBloem online bestellen"
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
  name: "TroboloTerabloem",
  head: {
    title: "Trobolo TeraBloem - Testsieger",
    link: [{ rel: "canonical", href: "/trobolo-terabloem/" }],
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
          "Die TeraBloem Trenntoilette von TROBOLO&reg; ist der Testsieger in der Kategorie: Trenntoilette f&uuml;r zu Hause.",
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
          name: "TeraBloem",
          image: [
            "https://www.trenntoilette.net/images/trenntoiletten/trenntoilette-trobolo-terabloem.webp",
          ],
          description:
            "Die TeraBloem Trenntoilette von TROBOLO zeichnet sich durch ausgezeichnete Qualität aus. Sie ist überall, auch ohne Wasseranschluss, nutzbar.",
          sku: "S5XX1392ES",
          mpn: "24542",
          brand: {
            "@type": "Brand",
            name: "TROBOLO",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "Trenntoilette.net",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "84",
          },
          offers: {
            "@type": "Offer",
            url: "https://www.trenntoilette.net/trobolo-terabloem",
            priceCurrency: "EUR",
            price: "429.00",
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
              name: "TeraBloem",
            },
          ],
        },
      ],
    };
  },
};
</script>