import config from "./assets/data/config.json"

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: config.title,
        htmlAttrs: {
            lang: config.lang
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/css/style.css' },
        ],
        script: [
            { src: "/plugins/jquery/jquery.js", type: "text/javascript" },
            { src: "/plugins/bootstrap/js/bootstrap.min.js", type: "text/javascript" },
            // { src: "js/contact.js", type: "text/javascript" },
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-XGEWJYNFG5',
                async: true,
            },
            {
                innerHTML: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XGEWJYNFG5');
                `,
            },
        ],
        __dangerouslyDisableSanitizersByTagID: {
            // this is to prevent Nuxt from sanitizing the innerHTML
            'google-gtag': ['innerHTML'],
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/jsonld.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // middleware
    router: {
        // middleware: 'lang'
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/image'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        publicPath: '/assets/',
        // parallel: true,
        // cache: true,
        // hardSource: true,
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true
            }
        }
    },

    generate: {
        dir: 'docs'
    },

    image: {
        staticFilename: '[publicPath]/img/[name][ext]'
    },

    // sitemap
    sitemap: {
        hostname: config.hostname,
        gzip: true,
        trailingSlash: true,
        exclude: [
            "/trobolo-kersaboem.html",
            "/trobolo-kitaboem.html",
            "/trobolo-terabloem.html",
            "/trobolo-wandago.html",
            "/kildwick-miniloo.html",
            "/blog/posts/deutsches-startup-revolutioniert-die-campingtoilette-und-verkauft-sie-fuer-249euro"

        ]
    },
}
