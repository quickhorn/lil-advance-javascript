import { ReactiveObject } from "./ReactiveObject.js";

class Plant{
    constructor(name, sowingDate, estimatedFruitingTime){
        this.name = name;
        this.sowingDate = sowingDate;
        this.estimatedFruitingTime = estimatedFruitingTime;
        this.actualFruitingTime = "";
        this.difference = 0;
    }

    recordActualFruitingTime(actualFruitingTime){
        this.actualFruitingTime = actualFruitingTime;
        let expectedFruitingDate = new Date(this.sowingDate);
        expectedFruitingDate.setDate(expectedFruitingDate.getDate() + this.estimatedFruitingTime);
        let actualFruitingDate = new Date(actualFruitingTime);
        this.difference =  parseInt((actualFruitingDate - expectedFruitingDate) / (1000 * 3600 * 24));
        // console.log(`SowingDate ${sowingDateAsDate}. Expected Fruiting Date ${expectedFruitingDate}. Actual Fruiting Date ${actualFruitingDate}. Difference ${this.difference}`);
    }
}

class PlantTracker extends ReactiveObject{
    constructor(){
        super();
        this.plants = [];
    }

    sowPlant(name, sowingDate, estimatedFruitingTime){
        this.plants.push(new Plant(name, sowingDate, estimatedFruitingTime));
        this.updateSubscribers();
    }

    recordActualFruitingTime(plantIndex, actualFruitingTime){
        let plant = this.plants[plantIndex];
        plant.recordActualFruitingTime(actualFruitingTime);
        this.updateSubscribers();
    }

}

//the tracker that subscribers will use
const plantTracker = new PlantTracker();

export {plantTracker}