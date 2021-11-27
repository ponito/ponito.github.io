// pills
// treasures

function Cultivator() {
	this.body;
	this.core;
	this.meridians;

	this.unrefinedQi;

	this.cultivationTechnique;
	this.cultivating;

	this.tick = function () {
		if (this.cultivating) {
			this.cultivate();
		}
	}

	this.cultivate = function (time) {
		this.unrefinedQi += 0.1 * time;
	}

	this.cycle = function (time) {
		if (this.core.qiType == this.cultivationTechnique.qiType) {
			let amountCycled = Math.min(this.unrefinedQi, this.cultivationTechnique.qiAmount * time);

			this.unrefinedQi -= amountCycled;
			this.core.cycle(this.cultivationTechnique, amountCycled);
		}
	}
}