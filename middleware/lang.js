import config from "~/assets/data/config.json"

export default ({ app, route }) => {
    const routePath = route.path

    config.languages.forEach((language) => {
        language.href = language.href + routePath
        app.head.link.push(language)
    });
}