function filterName(name) {
    if (name === undefined) {
        name = "Rien à afficher"
    }
    if (name.lenght > 6) {
        name = name.substring(0, 6)
    }
    return name
}
export default filterName