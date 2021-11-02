export default class GlobalVariables {
    static createVariables() {
        //set here variables you want to be global
        this.tXP = 0;
        this.level = 1;
        this.xpNeed = 3000;
        this.xpPercent = 0;
        this.uXP = 0;
        this.corPercent = 0;
    }
    static addTest(value) {
        this.tXP += value;
    }
    
    static getuXP() {
        return this.uXP;
    }
    static getXP() {//method to get XP
        
        return this.tXP;
    }
    static setuXP() {
        this.uXP = this.uXP - (this.xpNeed);
        return this.uXP;
    }
    static getNeed() {//method to get XP
        return this.xpNeed;
    }
    static getLevel() {//method to get XP
        return this.level;
    }
    static setXP(value) {
        this.tXP = value;
    }
    static addXP(value) {//method to add XP
        this.tXP += value;
        this.uXP += value;
    }
    static getxpPercent() {
        this.xpPercent = this.uXP / this.xpNeed;
        return this.xpPercent;
    }
    static addLevel() {
        this.level += 1;
        return this.level;
    }
    static updateNeed() {
        this.xpNeed = 3000 * (this.level ** 2) - (3000 * this.level);
        return this.xpNeed;
    }
    static getcorPercent() {
        return this.corPercent;
    }
    static setcorPercent(value) {
        this.corPercent = value;
    }
}
