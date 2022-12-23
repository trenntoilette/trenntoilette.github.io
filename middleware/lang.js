import config from "~/assets/data/config.json"

export default ({ app, route }) => {
    const routePath = route.path
    const urlMatching = config.urlMatching;

    // for each language, add the alternate link to the app.head.link array
    // which will then be added to the head of the page as <link rel="alternate" ... />
    config.languages.forEach((language) => {
        const path = urlMatching?.[routePath]?.[language?.hreflang] || routePath
        language.href = language.href + path
        app.head.link.push(language)
    });
}