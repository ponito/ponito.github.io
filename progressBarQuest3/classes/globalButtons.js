/**
 * Created by Jim on 4/23/2017.
 */
function GlobalButtons(scope) {
    this.buySpeedBonus = function() { //% Global Speed Increase
        buyButtonClicked(getLastRow(), scope.costSpeedBonus, function() {
            scope.costSpeedBonus = Math.ceil(3* scope.costSpeedBonus); //cost increase
            scope.boughtSpeedBonus += 5;
        })};
    this.buySecondsBoost = function() { //Seconds of Boost on Levelup
        buyButtonClicked(getLastRow(), scope.costSecondsBoost, function() {
            scope.costSecondsBoost = Math.ceil(4* scope.costSecondsBoost);
            scope.secondsLevelBoost += 5;
        })};
    this.buyProgressBar = function() { //Buy Progress Bar
        buyButtonClicked(getLastRow(), scope.costBuyRow, function() {
            scope.costBuyRow = Math.ceil(2 * scope.costBuyRow);
            initialRowCount += 1;
        })};
    this.buyGainFirst = function() { //Gain for First
        buyButtonClicked(getLastRow(), scope.costGainFirst, function() {
            scope.costGainFirst = Math.ceil(1.25* scope.costGainFirst);
            getLastRow().resGain += 5;  //+ Math.floor($scope.gainFirst * .12)
        })};
    this.buyGainAll = function() { //Gain for All
        buyButtonClicked(getLastRow(), scope.costGainAll, function() {
            scope.costGainAll = Math.ceil(3 * scope.costGainAll);
            scope.gainAll += 1; // + Math.floor($scope.gainAll * .2)
            for(var x = 0; x < scope.pbars.length; x++) {
                scope.pbars[x].resGain++;
                scope.pbars[x].calcTotalResGain();
            }
        })};
    this.buyExpMult = function() { //Exp Mult
        buyButtonClicked(getLastRow(), scope.costExpMult, function() {
            scope.costExpMult = Math.ceil(7 * scope.costExpMult);
            scope.expMult += 1;
            for(var x = 0; x < scope.pbars.length; x++) {
                //scope.pbars[x].expGain++;
            }
        })};



    this.buttonMouseOver = function() {
        getLastRow().isHovered = true;
    };
    this.buttonMouseLeave = function() {
        getLastRow().isHovered = false;
    };

    function buyButtonClicked(lastRow, costVar, resultOfFinish) {
        if(lastRow.resources >= costVar) {
            lastRow.resources -= costVar; //cost
            resultOfFinish();
        }
    }
    function getLastRow() {
        return scope.pbars[scope.pbars.length-1];
    }


    //Debug/Cheating
    this.testSettings = function() {
        getLastRow().resources += 1000;
    };
    this.testSettings2 = function() {
        getLastRow().resources += 50000;
    };
}
