import { plantTracker } from "./PlantTracker.js"

// This is how your code will be called.
// You can edit plantArray to try different testing cases.

const plantArray = [
    {
      name: "Tomato",
      sowingDate: "2023-02-01",
      estimatedFruitingTime: 60,
      actualFruitingTime: "2023-04-10",
    },
    {
      name: "Cucumber",
      sowingDate: "2023-03-21",
      estimatedFruitingTime: 50,
      actualFruitingTime: "2023-06-20",
    },
    {
      name: "Pepper",
      sowingDate: "2023-04-17",
      estimatedFruitingTime: 70,
      actualFruitingTime: "2023-06-20",
    },
    {
      name: "Eggplant",
      sowingDate: "2023-05-01",
      estimatedFruitingTime: 80,
      actualFruitingTime: "2023-07-20",
    },
  ];
  
  plantArray.forEach((plant) => {
    plantTracker.sowPlant(
      plant.name,
      plant.sowingDate,
      plant.estimatedFruitingTime
    );
    plantTracker.recordActualFruitingTime(
      plantArray.indexOf(plant),
      plant.actualFruitingTime
    );
  });
  
  const result = plantTracker.plants;