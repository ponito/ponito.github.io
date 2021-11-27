// used to refine Qi
function Core() {
    this.realm = 0;
    this.stage = 0;

    this.capacity = 10;

    this.refinedQi = 0;
    this.qiType = "None";

    this.cycle = function(technique, amount) {
        this.refinedQi += amount;

        if (this.refinedQi > this.capacity) {
            let coreExtension = (this.refinedQi - this.capacity) * technique.coreEfficiency;

            this.refinedQi = this.capacity += coreExtension;
        }
    }
}