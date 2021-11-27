class Skill extends Displayable {
    lvl = 0;
    maxExp = 10;
    exp = 0;

    mul = 1;

    constructor() {

    }

    addExp(value) {
        this.exp += value;

        while (this.exp >= this.maxExp) {
            this.exp -= this.maxExp;
            this.maxExp *= 1.05;
            this.mul *= 1.01;
            this.lvl++;
        }
    }
}