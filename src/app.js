export class App {
    constructor() {
        this.data = [];
        this.showOnlySelected = false;
    }

    attached() {
        for (let i = 0; i < 1000; i++) {
            this.data.push({ id: i, title: `item ${i+1}`, isSelected: false });
        }
    }
}
