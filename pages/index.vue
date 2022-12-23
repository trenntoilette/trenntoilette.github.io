<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xl-7">
            <div class="block">
              <div class="divider mb-3"></div>
              <span class="text-uppercase lead letter-spacing text-light"
                >Wir finden für Sie die beste</span
              >
              <h1 class="mb-3 mt-3 text-light">Trenntoilette</h1>

              <p class="lead mb-4 pr-5 text-light">
                Wenn Sie auf der Suche nach einer Trenntoilette sind, sind Sie
                hier genau richtig. Wir testen und zeigen Ihnen die beste
                Trenntoilette für Ihr Einsatzgebiet.
              </p>
              <div class="btn-container">
                <a href="#sieger" class="btn btn-main-2 btn-icon btn-round-full"
                  >Zu den Testsiegern ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section about gray-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="about-img">
              <nuxt-img
                src="/images/trenntoiletten/trenntoiletten.webp"
                alt="Trenntoilette TROBOLO LuweBloem beim Camping"
                class="img-fluid"
                format="webp"
                quality="90"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="about-content pl-4 mt-4 mt-lg-0">
              <h2 class="title-color">
                Trenntoilette - ganz ohne Wasser <br />& Chemie
              </h2>
              <p class="mt-4 mb-5 lead">
                Wir testen ausschließlich Trenntoiletten bei denen keine Chemie
                oder Wasser benötigt wird. Der Umwelt zu Liebe.
              </p>

              <a
                href="#trenntoiletten"
                class="btn btn-main-2 btn-round-full btn-icon"
                >Alle Trenntoiletten ansehen ></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section clients">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title text-center">
              <div class="h2">Blog News</div>
              <div class="divider mx-auto my-4"></div>
              <p class="lead">
                Informationen, News und Angebote rund um das Thema
                Trenntoiletten
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card" style="width: 18rem">
              <nuxt-link
                to="/blog/posts/campingtoilette-vergleich/"
                title="Campingtoilette unter 250 Euro im Vergleich"
              >
                <nuxt-img
                  class="card-img-top"
                  src="/images/blog/camping.jpg"
                  format="webp"
                  quality="90"
                  alt="Campingtoilette unter 250 € im Vergleich"
                />
              </nuxt-link>
              <div class="card-body">
                <nuxt-link
                  to="/blog/posts/campingtoilette-vergleich/"
                  title="Campingtoiletten unter 250 Euro im Vergleich"
                >
                  <h5 class="card-title">
                    Campingtoiletten unter 250 € im Vergleich
                  </h5>
                </nuxt-link>
                <p class="card-text">
                  Unter Campern wird das Thema Campingtoilette aktuell heiß
                  diskutiert...
                </p>
                <p class="card-text">
                  <small class="text-muted">15. August 2022</small>
                </p>
                <nuxt-link
                  to="/blog/posts/campingtoilette-vergleich/"
                  title="Campingtoiletten unter 250 Euro im Vergleich"
                  class="btn btn-main-2 btn-icon btn-round-full"
                >
                  weiterlesen</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </section>

    <section class="section service-2 gray-bg" id="sieger">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <div class="section-title">
              <div class="h2">Trenntoilette Testsieger</div>
              <div class="divider mx-auto my-4"></div>
              <p class="lead">
                Wir stellen vor: Die besten Trenntoiletten nach Kategorien
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="department-block mb-5">
              <a href="/trobolo-terabloem/" title="TROBOLO TeraBloem">
                <nuxt-img
                  src="/images/trenntoiletten/trenntoilette-trobolo-terabloem.webp"
                  alt="Trenntoilette TROBOLO TeraBloem"
                  class="img-fluid w-100"
                  format="webp"
                  quality="90"
                />
              </a>
              <div class="content">
                <h5 class="mt-4 mb-2 title-color">
                  Testsieger<br />"Trenntoilette im Haus"
                </h5>
                <h3 class="mt-4 mb-2 title-color">TROBOLO® TeraBlœm</h3>
                <p class="mb-4 lead">
                  Testsieger TeraBlœm von Trobolo. Ausgezeichnete Qualität bei
                  bestem Komfort und Preis.
                </p>
                <a href="/trobolo-terabloem/" title="TROBOLO TeraBloem">
                  <h4>Zum Testbericht ></h4>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="department-block mb-5">
              <a href="/trobolo-kersaboem/" title="TROBOLO KersaBoem">
                <nuxt-img
                  src="/images/trenntoiletten/trenntoilette-trobolo-kersaboem.webp"
                  alt="Trenntoilette TROBOLO KersaBoem"
                  class="img-fluid w-100"
                  format="webp"
                  quality="90"
                />
              </a>
              <div class="content">
                <h5 class="mt-4 mb-2 title-color">
                  Testsieger<br />"Trenntoilette im Garten"
                </h5>
                <h3 class="mt-4 mb-2 title-color">TROBOLO® KersaBœm</h3>
                <p class="mb-4 lead">
                  Testsieger KersaBœm von Trobolo. Autarke Trenntoilette für den
                  Garten. Mit Trenn- und Abluftsystem.
                </p>
                <a href="/trobolo-kersaboem/" title="TROBOLO KersaBoem">
                  <h4>Zum Testbericht ></h4>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="department-block mb-5">
              <a href="/kildwick-miniloo/" title="Kildwick MiniLoo">
                <nuxt-img
                  src="/images/trenntoiletten/trenntoilette-kildwick-miniloo.webp"
                  alt="Camping Toilette Kildwick MiniLoo"
                  class="img-fluid w-100"
                  format="webp"
                  quality="90"
                />
              </a>
              <div class="content">
                <h5 class="mt-4 mb-2 title-color">
                  Testsieger<br />"Camping Toilette"
                </h5>
                <h3 class="mt-4 mb-2 title-color">Kildwick MiniLoo</h3>
                <p class="mb-4 lead">
                  Die Camping Toilette als Bausatz. Kostengünstig, Platzsparend
                  und leicht im Gewicht.
                </p>
                <a href="/kildwick-miniloo/" title="Kildwick MiniLoo">
                  <h4>Zum Testbericht ></h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section service">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <div class="section-title">
              <div class="h2">Welche Vorteile bietet eine Trenntoilette?</div>
              <div class="divider mx-auto my-4"></div>
              <p class="lead">
                6 trifftige Gründe warum du den Wechsel zu einer Trenntoilette
                in Betracht ziehen solltest.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-item mb-4">
              <div class="icon d-flex align-items-center">
                <nuxt-img
                  class="text-lg"
                  src="/images/icons/chemie.webp"
                  format="webp"
                  quality="90"
                />
                <h4 class="mt-3 mb-3">Chemiefrei</h4>
              </div>

              <div class="content">
                <p class="mb-4 lead">
                  Eine Trenntoilette kommt ohne Chemie aus
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-item mb-4">
              <div class="icon d-flex align-items-center">
                <nuxt-img
                  class="text-lg"
                  src="/images/icons/wasser.webp"
                  format="webp"
                  quality="90"
                />
                <h4 class="mt-3 mb-3">Wasserersparnis</h4>
              </div>
              <div class="content">
                <p class="mb-4 lead">
                  Trenntoiletten benötigen keinen Wasseranschluss
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-item mb-4">
              <div class="icon d-flex align-items-center">
                <nuxt-img
                  class="text-lg"
                  src="/images/icons/geruchsfrei.webp"
                  format="webp"
                  quality="90"
                />
                <h4 class="mt-3 mb-3">Geruchsfrei</h4>
              </div>
              <div class="content">
                <p class="mb-4 lead">
                  Durch die Trennung von Urin und Stuhl entstehen keine Gerüche
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-item mb-4">
              <div class="icon d-flex align-items-center">
                <nuxt-img
                  class="text-lg"
                  src="/images/icons/muelleimer.webp"
                  format="webp"
                  quality="90"
                />
                <h4 class="mt-3 mb-3">Einfache Entsorgung</h4>
              </div>

              <div class="content">
                <p class="mb-4 lead">
                  Durch Trenneinsätze ist die Entsorgung kinderleicht
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-item mb-4">
              <div class="icon d-flex align-items-center">
                <nuxt-img
                  class="text-lg"
                  src="/images/icons/umweltfreundlich.webp"
                  format="webp"
                  quality="90"
                />
                <h4 class="mt-3 mb-3">Umweltfreundlich</h4>
              </div>
              <div class="content">
                <p class="mb-4 lead">
                  Weder kostbares Wasser noch Chemie wird benötigt
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="service-item mb-4">
              <div class="icon d-flex align-items-center">
                <nuxt-img
                  class="text-lg"
                  src="/images/icons/nachhaltig.webp"
                  format="webp"
                  quality="90"
                />
                <h4 class="mt-3 mb-3">Nachhaltig</h4>
              </div>
              <div class="content">
                <p class="mb-4 lead">
                  Nutzen Sie den nährstoffreichen Kompost und sparen Sie Geld
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section doctors gray-bg" id="trenntoiletten">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="section-title">
              <div class="h2">Trenntoiletten</div>
              <div class="divider mx-auto my-4"></div>
              <p class="lead">
                Für jedes Einsatzgebiet findest du eine passende Trenntoilette.
                Egal ob im Haus, im Garten oder unterwegs im Camper. Folgende
                Trenntoiletten haben wir getestet und sind führend in Sachen
                Nachhaltigkeit, Umweltfreundlichkeit, Geruchsentwicklung und
                Entsorgung.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 text-center mb-5">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn active">
              <input
                type="radio"
                name="shuffle-filter"
                value="all"
                checked="checked"
              />Alle Einsatzgebiete
            </label>
            <label class="btn">
              <input type="radio" name="shuffle-filter" value="haus" />Haus
            </label>
            <label class="btn">
              <input type="radio" name="shuffle-filter" value="garten" />Garten
            </label>
            <label class="btn">
              <input
                type="radio"
                name="shuffle-filter"
                value="camping"
              />Camping
            </label>
          </div>
        </div>

        <div class="row shuffle-wrapper portfolio-gallery">
          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['haus']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <a href="/trobolo-terabloem/" title="TROBOLO TeraBloem">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-trobolo-terabloem.webp"
                      alt="Trenntoilette TROBOLO TeraBloem"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </a>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/trobolo-terabloem/" title="TROBOLO TeraBloem"
                    >TeraBlœm</a
                  >
                </h4>
                <p class="lead">Trobolo</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['garten']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <a href="/trobolo-kersaboem/" title="TROBOLO KersaBoem">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-trobolo-kersaboem.webp"
                      alt="Trenntoilette TROBOLO KersaBoem"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </a>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/trobolo-kersaboem/" title="TROBOLO KersaBoem"
                    >KersaBœm</a
                  >
                </h4>
                <p class="lead">Trobolo</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['garten']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <a href="/trobolo-kitaboem/" title="TROBOLO KitaBœm">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-trobolo-kitaboem.webp"
                      alt="Trenntoilette TROBOLO KitaBoem"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </a>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/trobolo-kitaboem/" title="TROBOLO KitaBoem"
                    >KitaBœm</a
                  >
                </h4>
                <p class="lead">Trobolo</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['camping']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <a href="/trobolo-wandago/" title="TROBOLO WandaGO">
                    <nuxt-img
                      src="/images/trenntoiletten/campingtoilette-trobolo-wandago.webp"
                      alt="Campingtoilette TROBOLO WandaGO"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </a>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/trobolo-wandago/" title="TROBOLO WandaGO"
                    >WandaGO</a
                  >
                </h4>
                <p class="lead">Trobolo</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['camping','haus']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <a href="/kildwick-miniloo/" title="Kildwick MiniLoo">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-kildwick-miniloo.webp"
                      alt="Camping Toilette Kildwick MiniLoo"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </a>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/kildwick-miniloo/" title="Kildwick MiniLoo"
                    >Kildwick MiniLoo</a
                  >
                </h4>
                <p class="lead">Kildwick</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['camping', 'haus']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <nuxt-link to="/trelino-origin-l/" title="Trelino Origin L">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-trelino-origin-l.webp"
                      alt="Trelino Origin L"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/trelino-origin-l/" title="Trelino Origin L"
                    >Trelino Origin L</a
                  >
                </h4>
                <p class="lead">Trelino</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['haus']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <nuxt-link to="/separett-weekend/" title="Separett Weekend">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-separett-weekend.webp"
                      alt="Trenntoilette Separett Weekend"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <nuxt-link to="/separett-weekend/" title="Separett Weekend">
                    <a title="Separett Weekend">Separett Weekend</a>
                  </nuxt-link>
                </h4>
                <p class="lead">Separett</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['camping']"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <nuxt-link to="/trelino-evo-s/" title="Trelino Evo S">
                    <nuxt-img
                      src="/images/trenntoiletten/trelino-evo-s.webp"
                      alt="Trelino Evo S"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/trelino-evo-s/" title="Trelino Trelino"
                    >Trelino Evo S</a
                  >
                </h4>
                <p class="lead">Trelino</p>
              </div>
            </div>
          </div>

          <!-- easyloo kildwick -->
          <div
            class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
            data-groups="['camping', 'haus', 'garten]"
          >
            <div class="position-relative doctor-inner-box">
              <div class="doctor-profile">
                <div class="doctor-img">
                  <nuxt-link to="/kildwick-easyloo/" title="Kildwick EasyLoo">
                    <nuxt-img
                      src="/images/trenntoiletten/trenntoilette-kildwick-easyloo.webp"
                      alt="Kildwick EasyLoo"
                      class="trenntoiletteImageSieger img-fluid w-100"
                      format="webp"
                      quality="90"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="content mt-3">
                <h4 class="mb-0">
                  <a href="/kildwick-easyloo/" title="Kildwick EasyLoo"
                    >Kildwick EasyLoo</a
                  >
                </h4>
                <p class="lead">Kildwick</p>
              </div>
            </div>
          </div>
          <!-- easyloo kildwick end -->
        </div>
      </div>
    </section>

    <section id="kontakt" class="section appoinment">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="appoinment-content">
              <nuxt-img
                src="/images/faq.png"
                format="webp"
                quality="90"
                alt="Fragen zum Thema Trenntoilette"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-10">
            <div class="appoinment-wrap mt-5 mt-lg-0">
              <div class="h2 mb-2 title-color">
                Haben Sie noch weitere Fragen?
              </div>
              <p class="mb-4 lead">
                Haben Sie noch offene Fragen bezüglich einer Trenntoilette?
                Kontaktieren Sie uns gerne und wir beantworten Ihre Frage
                umgehend, unverbindlich und kostenfrei.
              </p>
              <form id="#" class="appoinment-form" method="post" action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Ihr Name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="Ihre Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group-2 mb-4">
                  <textarea
                    name="message"
                    id="message"
                    class="form-control"
                    rows="6"
                    placeholder="Ihre Nachricht"
                  ></textarea>
                </div>

                <a
                  class="btn btn-main btn-round-full"
                  href="#"
                  onclick="alert('todo!');"
                  >Nachricht abschicken ></a
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="ueberuns" class="section testimonial-2 gray-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title text-center">
              <div class="h2">
                Wir haben über 5000+ Menschen geholfen die passende
                Trenntoilette zu finden
              </div>
              <div class="divider mx-auto my-4"></div>
              <p class="lead">
                Wir kennen es selbst, die Auswahl einer passenden Trenntoilette
                ist zunächst nicht einfach und zu Anfang mit nicht-geringen
                Anschaffungskosten verbunden. Aber es lohnt sich und langfristig
                sparen Sie viel Geld. Lesen Sie selbst was unsere Leser dazu
                schreiben.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 testimonial-wrap-2">
            <div class="testimonial-block style-2 gray-bg">
              <div class="testimonial-thumb">
                <nuxt-img
                  src="/images/feedback/jennifer.webp"
                  alt="Feedback von Jennifer"
                  class="img-fluid"
                  format="webp"
                  quality="90"
                />
              </div>

              <div class="client-info">
                <h4>"Endlich die passende Trenntoilette!"</h4>
                <span>Jennifer aus München</span>
                <p>
                  Cool ich habe endlich die richtige Trenntoilette gefunden!
                  Danke. Hatte lange gesucht aber war mir die ganze Zeit
                  unschlüssig. Mit der TeraBlœm hab ich nun die optimale
                  Trenntoilette für zu Hause gefunden.
                </p>
              </div>

              <nuxt-img
                src="/images/icons/zitat.webp"
                format="webp"
                quality="90"
              />
            </div>

            <div class="testimonial-block style-2 gray-bg">
              <div class="testimonial-thumb">
                <nuxt-img
                  format="webp"
                  quality="90"
                  src="/images/feedback/nicolas.webp"
                  alt="Feedback von Nicolas"
                  class="img-fluid"
                />
              </div>

              <div class="client-info">
                <h4>"Ich bin sehr zufrieden"</h4>
                <span>Nicolas aus Hannover</span>
                <p>
                  Ich hatte lange gezögert mir eine Trenntoilette online zu
                  kaufen aber dadurch das Ihr mir persönlich auf meine Anfragen
                  geantwortet habt, hab ich endlich den Entschluss gefasst und
                  bin sehr zufrieden.
                </p>
              </div>

              <nuxt-img
                format="webp"
                quality="90"
                src="/images/icons/zitat.webp"
              />
            </div>

            <div class="testimonial-block style-2 gray-bg">
              <div class="testimonial-thumb">
                <nuxt-img
                  src="/images/feedback/vicky.webp"
                  alt="Feedback von Vicky"
                  class="img-fluid"
                  format="webp"
                  quality="90"
                />
              </div>

              <div class="client-info">
                <h4>"Beste Qualität und fairer Preis"</h4>
                <span>Vick aus Kiel</span>
                <p>
                  Habe die passende Trenntoilette für meinen Camper gefunden und
                  ich muss sagen es funktioniert super. Nimmt wenig Platz im
                  Camper ein und ist absolut geruchslos. Super Qualität und
                  fairer Preis.
                </p>
              </div>

              <nuxt-img
                src="/images/icons/zitat.webp"
                format="webp"
                quality="90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section clients">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title text-center">
              <div class="h2">Trenntoiletten Anbieter</div>
              <div class="divider mx-auto my-4"></div>
              <p class="lead">
                Wir haben Deutschland's bekanntesten Trenntoiletten-Anbieter
                getestet:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row clients-logo">
          <div class="col-lg-3">
            <div class="client-thumb">
              <nuxt-img
                src="/images/hersteller/trobolo.webp"
                alt="TROBOLO"
                class="img-fluid"
                format="webp"
                quality="90"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="client-thumb">
              <nuxt-img
                src="/images/hersteller/kildwick.webp"
                alt="Kildwick"
                class="img-fluid"
                format="webp"
                quality="90"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="client-thumb">
              <nuxt-img
                src="/images/hersteller/meinetrenntoilette.webp"
                alt="MeineTrenntoilette"
                class="img-fluid"
                format="webp"
                quality="90"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="client-thumb">
              <nuxt-img
                src="/images/hersteller/kompotoi.webp"
                alt="Kompotoi"
                class="img-fluid"
                format="webp"
                quality="90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section clients gray-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <div class="h2">Was ist eine Trenntoilette?</div>
              <div class="divider mx-auto my-4"></div>
              <p class="text-justify">
                Grundsätzlich handelt es sich bei einer Trenntoilette um eine
                Toilette, bei der Kot und Urin beim Toilettengang voneinander
                getrennt werden. Dank dieses Trennmechanismus kommen
                Trenntoiletten ohne Wasser und Chemie aus. Dies macht sie zu
                einer idealen Lösung für eine Vielzahl von Einsatzbereichen,
                beispielsweise im Garten, im Wohnmobil oder auch daheim.
              </p>

              <p class="text-justify">
                Mittlerweile gibt es eine Vielzahl von Herstellern und Modellen,
                die alle ihre Vor- und Nachteile mit sich bringen. Daher haben
                wir es uns zur Aufgabe gemacht, die verschiedenen Modelle zu
                testen und zu vergleichen. In unseren Testberichten finden Sie
                ausführliche Informationen zu den jeweiligen Trenntoiletten, so
                dass diese ihnen als Entscheidungshilfe bei der Wahl der
                richtigen Trenntoilette dienen können.
              </p>

              <h3 class="h2 pt-5">Welche Trenntoilette ist die beste?</h3>
              <div class="divider mx-auto my-4"></div>

              <p class="text-justify">
                Diese Frage stellen sich viele Interessierte, allerdings lässt
                sich das gar nicht so pauschal beantworten. Beispielsweise gibt
                es große Trenntoiletten mit Toilettenhäuschen, die vor allem im
                Bereich Kleingarten eingesetzt werden, aber für die Mitnahme im
                Wohnmobil ziemlich ungeeignet sind. Dann wiederum gibt es
                kleine, handliche Modelle, die man problemlos ins Auto packen
                und mit zum Camping nehmen kann. Die richtige Wahl hängt also
                stark von Ihren persönlichen Präferenzen und Vorhaben ab.
              </p>

              <h4 class="h2 pt-5">
                Alle Vorteile einer Trenntoilette auf einen Blick
              </h4>
              <div class="divider mx-auto my-4"></div>

              <ul class="text-justify" style="list-style-type: none">
                <li>Komfortable Toilettennutzung ohne Gerüche</li>

                <li>Autarker Einsatz ohne Wasser, Chemie und Strom</li>

                <li>Hygienische Entleerung der Behälter</li>

                <li>
                  Einfache Entsorgung der Ausscheidungen ohne
                  Entsorgungsstationen
                </li>

                <li>Toilettenabfälle können bei Bedarf kompostiert werden</li>

                <li>Leicht zu reinigen</li>
              </ul>

              <h5 class="h2 pt-6">So läuft der Trenntoiletten-Test ab</h5>
              <div class="divider mx-auto my-4"></div>

              <p class="text-justify">
                Wenn wir uns eine Trenntoilette zum Testen vornehmen, geht es
                ans Eingemachte. Das heißt, wir benutzen die Toiletten
                tatsächlich für einige Zeit im Alltag und bewerten dabei unsere
                persönlichen Erfahrungen. Wir achten dabei darauf, wie
                komfortabel die jeweilige Trenntoilette ist, ob die Trennung
                einwandfrei funktioniert und ob die Nutzung tatsächlich
                geruchsfrei ist. Außerdem achten wir darauf, wie die
                Verarbeitung ist, ob sich Behälter leicht entnehmen lassen und
                was für Eigenheiten uns sonst noch so auffallen. Als Profis im
                Bereich Trenntoilette wissen wir ganz genau, worauf es ankommt
                und dieses Expertenwissen möchten wir Ihnen durch unsere
                Testberichte weitergeben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import multiLanguageOptions from "~/plugins/lang.js";

export default {
  name: "IndexPage",
  head() {
    const routePath = this.$route.path;
    return {
      title: "Trenntoilette - Alle Testsieger im Überblick",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Trenntoilette für Garten, Haus und Camping im Vergleich. Wir haben einen Testsieger und helfen dir zu entscheiden, welche Trenntoilette für dich die richtige ist.",
        },
        {
          hid: "author",
          name: "author",
          content: "trenntoilette.net",
        },
      ],
      script: [
        { src: "js/main.js", type: "text/javascript", body: true },
        {
          src: "/plugins/slick-carousel/slick/slick.min.js",
          type: "text/javascript",
        },
        { src: "/plugins/shuffle/shuffle.min.js", type: "text/javascript" },
      ],
    };
  },
};
</script>

<style scoped>
@charset 'UTF-8';

.trenntoiletteImageSieger {
  width: 270px;
  height: 270px;
}

/* Slider */

.slick-loading .slick-list {
  background: #fff url("/plugins/slick-carousel/slick//ajax-loader.gif") center
    center no-repeat;
}

/* Icons */

@font-face {
  font-display: swap;
  font-family: "slick";
  font-weight: normal;
  font-style: normal;
  src: url("/fonts/slick.eot");
  src: url("/fonts/slick.eot?#iefix") format("embedded-opentype"),
    url("/plugins/slick-carousel/slick/fonts/slick.woff") format("woff"),
    url("/fonts/slick.ttf") format("truetype"),
    url("/fonts/slick.svg#slick") format("svg");
}

/* Arrows */

.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}

.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-display: swap;
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.75;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
}

[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}

.slick-prev:before {
  content: "←";
}

[dir="rtl"] .slick-prev:before {
  content: "→";
}

.slick-next {
  right: -25px;
}

[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}

.slick-next:before {
  content: "→";
}

[dir="rtl"] .slick-next:before {
  content: "←";
}

/* Dots */

.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

.slick-dots li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}

.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}

.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}

.slick-dots li button:before {
  font-display: swap;
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}

/* Slider */

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.slick-list:focus {
  outline: none;
}

.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}

.slick-track:after {
  clear: both;
}

.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}

[dir="rtl"] .slick-slide {
  float: right;
}

.slick-slide img {
  display: block;
}

.slick-slide.slick-loading img {
  display: none;
}

.slick-slide.dragging img {
  pointer-events: none;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-loading .slick-slide {
  visibility: hidden;
}

.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
  display: none;
}
</style>