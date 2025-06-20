class substring {
    constructor(text) {
        this.text = text.split("");
    }
    printPattern() {
        for (let i = 0; i < this.text.length; i++) {
            for (let j = i; j < this.text.length; j++) {
                let space = " ";
                for (let k = j; k < this.text.length; k++) {
                    space += this.text[k]
                }
                console.log(space);
            }
        }
    }
}
const pattern = new substring("kincenvizh");
pattern.printPattern();
