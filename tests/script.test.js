const { default: expect } = require("expect");
const getBibleVerseUrl = require("../web/script.js");
test("Construire l'url api", () => {
    expect(getBibleVerseUrl.getBibleVerseUrl("John", "2", "3")).toBe("https://bible-api.com/John2:3")
})
