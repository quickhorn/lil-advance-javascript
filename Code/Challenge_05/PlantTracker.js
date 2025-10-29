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
        let sowingDateAsDate = new Date(this.sowingDate);
        let expectedFruitingDate = new Date(sowingDateAsDate.getDate() + this.estimatedFruitingTime);
        let actualFruitingDate = new Date(actualFruitingTime);
        let difference = actualFruitingDate.getDate() - expectedFruitingDate.getDate();
        console.log(`SowingDate ${sowingDateAsDate}. Expected Fruiting Date ${expectedFruitingDate}. Actual Fruiting Date ${actualFruitingDate}. Difference ${difference}`);
    }

    #expectedFruitingDate = new Date(new Date(this.sowingDate).getDate + this.estimatedFruitingTime);
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
        let plant = plants[plantIndex];
        plant.recordActualFruitingTime(actualFruitingTime);
        this.updateSubscribers();
    }

}

const plant = new Plant("Eggplant", "2023-05-01", 80);
console.log(plant);

//the tracker that subscribers will use
const plantTracker = new PlantTracker();