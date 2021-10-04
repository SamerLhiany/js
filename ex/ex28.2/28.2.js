let lhiany = {
    name: `samer`,
    getName: function () {
        console.log(this.name);
    },
    delayGetName: function () {
        setTimeout((this.getName.bind(lhiany))
            , 1000)
    }
}

lhiany.getName();
lhiany.delayGetName();

