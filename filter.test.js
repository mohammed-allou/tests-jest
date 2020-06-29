import filterName from './filter';
describe("validation", () => {
    test("check the name", () => {
        expect(filterName()).toBe("Rien à afficher")
    })
    test("check name lenght > 6", () => {
        expect(filterName("AllouMohammed")).toBe("AllouM")
    })
})