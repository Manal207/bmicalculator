import './App.css';
import React, { useState } from "react";




function App() {

  
  


  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmiResult, setBmiResult] = useState("");

  const calculateBMI = (event) => {
    event.preventDefault();
    const heightTotalInches = heightFeet * 12 + heightInches;
    const heightMeters = heightTotalInches * 0.0254;
    const weightKilograms = weight * 0.453592;
    const bmi = weightKilograms / Math.pow(heightMeters, 2);

    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    setBmiCategory(category);
    setBmiResult(`Your BMI is ${bmi.toFixed(2)} (${category})`);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <label>
          Height (feet):
          <input
            type="number"
            value={heightFeet}
            onChange={(e) => setHeightFeet(parseInt(e.target.value))}
          />
        </label>
        <label>
          Height (inches):
          <input
            type="number"
            value={heightInches}
            onChange={(e) => setHeightInches(parseInt(e.target.value))}
          />
        </label>
        <label>
          Weight (pounds):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </label>
        <button type="submit">Calculate BMI</button>
      </form>
      <div id="bmiResult">{bmiResult}</div>
    </div>
  );
}

export default App;



