<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xl-7">
            <div class="block">
              <div class="divider mb-3"></div>
              <span class="text-uppercase lead letter-spacing text-light"
                >Trenntoiletten</span
              >
              <h1 class="mb-3 mt-3 text-light">Blog</h1>

              <p class="lead mb-4 pr-5 text-light">
                Möchtest du mehr erfahren über die neusten Entwicklungen,
                Angeboten, News und Informationen zum Thema Trenntoilette? Dann
                folge uns auf unserem Blog.
              </p>
              <div class="btn-container">
                <a
                  href="#articles"
                  class="btn btn-main-2 btn-icon btn-round-full"
                  >Die neusten Beiträge ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section department-single" id="articles">
      <div class="container">
        <div class="row">
          <!-- blog article card -->
          <div class="col-lg-4">
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
                  >weiterlesen</nuxt-link
                >
              </div>
            </div>
          </div>
          <!-- end blog article card -->

          <!-- blog article card -->
          <div class="col-lg-4">
            <div class="card" style="width: 18rem">
              <nuxt-link
                to="/blog/posts/deutsches-startup-revolutioniert-die-campingtoilette-und-verkauft-sie-fuer-249euro/"
                title="Deutsches Startup revolutioniert die Campingtoilette und
                    verkauft sie für 249€"
              >
                <nuxt-img
                  class="card-img-top"
                  src="/images/landingpage/lander-title.png"
                  format="webp"
                  quality="90"
                  alt="Deutsches Startup revolutioniert die Campingtoilette und
                    verkauft sie für 249€"
                />
              </nuxt-link>
              <div class="card-body">
                <nuxt-link
                  to="/blog/posts/deutsches-startup-revolutioniert-die-campingtoilette-und-verkauft-sie-fuer-249euro/"
                  title="Deutsches Startup revolutioniert die Campingtoilette und"
                >
                  <h5 class="card-title">
                    Deutsches Startup revolutioniert die Campingtoilette und
                    verkauft sie für 249€
                  </h5>
                </nuxt-link>
                <p class="card-text">Produktneuheit</p>
                <p class="card-text">
                  <small class="text-muted">21. August 2022</small>
                </p>
                <nuxt-link
                  to="/blog/posts/deutsches-startup-revolutioniert-die-campingtoilette-und-verkauft-sie-fuer-249euro/"
                  title="Deutsches Startup revolutioniert die Campingtoilette und
                    verkauft sie für 249€"
                  class="btn btn-main-2 btn-icon btn-round-full"
                  >weiterlesen</nuxt-link
                >
              </div>
            </div>
          </div>
          <!-- blog article card -->
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="department-content mt-5"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "trenntoiletten-blog",
  head: {
    title: "Trenntoiletten Blog",
    meta: [
      {
        hid: "author",
        name: "author",
        content: "trenntoilette.net",
      },
      {
        hid: "robots",
        name: "robots",
        content: "index, follow",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Auf dem Trenntoiletten Blog findest du aktuelle News, Angebote, Informationen und Vergleiche zum Thema Trenntoiletten, Campintoiletten und Gartentoiletten.",
      },
    ],
  },
};
</script>