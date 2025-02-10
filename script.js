function calculate() {
  let fuelCost = parseFloat(document.getElementById("fuelCost").value);
  let fuelAmount = parseFloat(document.getElementById("fuelAmount").value);
  let mileage = parseFloat(document.getElementById("mileage").value);
  let distance = parseFloat(document.getElementById("distance").value);

  if (fuelCost > 0 && fuelAmount > 0) {
    let liters = fuelAmount / fuelCost;

    // Calculate Mileage if it's empty
    if (!mileage && distance) {
      mileage = distance / liters;
      document.getElementById("mileage").value = mileage.toFixed(2);
    }

    // Calculate Distance if it's empty
    if (!distance && mileage) {
      distance = mileage * liters;
      document.getElementById("distance").value = distance.toFixed(2);
    }

    document.getElementById("outputMileage").textContent = `Mileage: ${mileage ? mileage.toFixed(2) : "N/A"} km/l`;
    document.getElementById("outputDistance").textContent = `Distance: ${distance ? distance.toFixed(2) : "N/A"} km`;
  } else {
    alert("Please enter valid Fuel Cost & Fuel Amount!");
  }
}

function resetForm() {
  document.getElementById("fuelCost").value = "";
  document.getElementById("fuelAmount").value = "";
  document.getElementById("mileage").value = "";
  document.getElementById("distance").value = "";
  document.getElementById("outputMileage").textContent = "";
  document.getElementById("outputDistance").textContent = "";
}
