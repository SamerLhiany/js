const book1 = {
    name: "The Secret",
    auther: "Rhonda Byrne",
    year: 2006,

}
const book2 = {
    name: "Normal People",
    auther: "Sally Rooney",
    year: 2017,

}

const bookUtils = {
    getFirstPublished: function (b1, b2) {
        if (b1.year > b2.year) {
            return [b2.name, b2.year];
        }
        else {
            return [b1.name, b1.year];
        }

    },

    setNewEdition: function (book, editionyear) {
        book.latestEdition = editionyear;
    },

    setLanguage: function (book, Language, Translator) {
        book.translation = {
            translator: Translator,
            language: Language
        }
    },

    setPublisher: function (book, Name, Location) {
        book.publisher = {
            name: Name,
            location: Location
        }
    },

    isSamePublisher: function (b1, b2) {
        if (b1.publisher.name === b2.publisher.name) {
            console.log("the publisher name identical in the 2 books");
        }
        else {
            console.log("the publisher name different in both books");
        }
    }
}
bookUtils.setPublisher (book1,"samer", "haifa");
bookUtils.setPublisher (book2,"rawi", "daliatelcarmel");
bookUtils.isSamePublisher(book1, book2);



