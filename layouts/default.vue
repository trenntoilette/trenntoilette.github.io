<template>
  <div>
    <nav class="navbar navbar-expand-lg navigation" id="navbar">
      <div class="container">
        <!-- <a class="navbar-brand" href="https://www.trenntoilette.net">
			  	<img src="/images/logo.webp" alt="" class="img-fluid">
				<span class="nav-link">Trenntoiletten.com</span>
			 	</a> -->

        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarmain"
          aria-controls="navbarmain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/images/icons/menue.webp" alt="Menü Icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarmain">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" title="Trenntoilette" href="/">Startseite</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/#sieger">Testsieger</a>
            </li>
            <li class="nav-item active">
              <a
                class="nav-link"
                title="Gartentoiletten im Test"
                href="/gartentoilette/"
                >Gartentoilette</a
              >
            </li>
            <li class="nav-item active">
              <a
                class="nav-link"
                title="Campingtoiletten im Test"
                href="/campingtoilette/"
                >Campingtoilette</a
              >
            </li>
            <li class="nav-item active">
              <a
                class="nav-link"
                title="Einstreu für die Trenntoilette"
                href="/einstreu/"
                >Einstreu</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#ueberuns">Über Uns</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Nuxt />

    <footer class="footer section gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mr-auto col-sm-6">
            <div class="widget mb-5 mb-lg-0">
              <div class="logo mb-4">
                <!-- <img src="/images/logo.webp" alt="" class="img-fluid"> -->
                <h4 class="text-capitalize">Trenntoilette.net</h4>
              </div>
              <p class="lead">Der Ratgeber für deine Trenntoilette</p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a
                    href="https://twitter.com/trenntoilette"
                    title="Trenntoilette.net auf Twitter"
                    ><img
                      src="/images/social/twitter.webp"
                      alt="Twitter Profile"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.youtube.com/channel/UCW_GsjtxFO8Jb3UJ2z2bpgw"
                    title="Trenntoilette.net auf Youtube"
                    ><img src="/images/social/youtube.webp"
                  /></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="widget mb-5 mb-lg-0">
              <h4 class="text-capitalize mb-3">Links</h4>
              <div class="divider mb-4"></div>

              <ul class="list-unstyled footer-menu lh-35">
                <li><a href="/impressum/">Impressum</a></li>
                <li><a href="/impressum/#datenschutz">Datenschutz</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="widget mb-5 mb-lg-0">
              <h4 class="text-capitalize mb-3">Service</h4>
              <div class="divider mb-4"></div>

              <ul class="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget widget-contact mb-5 mb-lg-0">
              <h4 class="text-capitalize mb-3">Kontakt</h4>
              <div class="divider mb-4"></div>

              <div class="footer-contact-block mb-4">
                <div class="icon d-flex align-items-center">
                  <img
                    class="mr-3"
                    src="/images/icons/email.webp"
                    alt="Kontakt per Email aufnehmen"
                  />
                  <span class="h6 mb-0">Nehmen Sie Kontakt auf</span>
                </div>
                <h4 class="mt-2">
                  <a href="mailto:trenntoilette@protonmail.com"
                    >kontakt@trenntoilette.net</a
                  >
                </h4>
              </div>

              <div class="footer-contact-block">
                <div class="icon d-flex align-items-center">
                  <img
                    class="mr-3"
                    src="/images/icons/telefon.webp"
                    alt="Telefonischer Kontakt"
                  />
                  <span class="h6 mb-0">Mo - Fr : 08:30 - 18:00</span>
                </div>
                <h4 class="mt-2">
                  <a href="tel:+4915111243129">+49 1511 12 43 12 9</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-btm py-4 mt-5">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6">
              <div class="copyright">
                &copy; Copyright by
                <a href="https://www.trenntoilette.net/" title="Trenntoilette"
                  >Trenntoilette.net</a
                >
              </div>
            </div>
            <div class="col-lg-6">
              <div class="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" class="subscribe">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ihre Email Addresse"
                  />
                  <a href="#" class="btn btn-main btn-round-full"
                    >Auf dem neusten Stand bleiben</a
                  >
                </form>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <a class="backtop js-scroll-trigger" href="#top">
                <img src="/images/icons/up.webp" alt="Hochscrollen" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>