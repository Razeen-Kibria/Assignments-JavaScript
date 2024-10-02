//--------Problem Solving Exercise -----------

//-----Task-01:

function FeetTomile(feet) {
  var mile = feet / 5280;
  return mile;
}
var checkTheMile = FeetTomile(5);
console.log("Result: ", checkTheMile);

//------Task-02----------

function woodCalculator(chair, table, bed) {
  // Define the wood requirement for each item in cubic feet
  const chairWood = 1; // 1 cubic foot per chair
  const tableWood = 3; // 3 cubic feet per table
  const bedWood = 5; // 5 cubic feet per bed

  // Calculate the total wood requirement
  const totalWood = chair * chairWood + table * tableWood + bed * bedWood;

  // Return the total wood in cubic feet
  return totalWood;
}

// Example usage:
const totalWood = woodCalculator(4, 2, 1); // For 4 chairs, 2 tables, and 1 bed
console.log("Total wood required:", totalWood, "cubic feet");

//--------------------task-03-------------

function brickCalculator(floor) {
  const bricksPerFoot = 1000; // 1 foot requires 1000 bricks
  let totalBricks = 0;

  // Calculate bricks required for floors 1 to 10 (10 feet per floor)
  if (floor >= 1 && floor <= 10) {
    totalBricks = floor * 10 * bricksPerFoot;
  }

  // Calculate bricks required for floors 11 to 19 (12 feet per floor)
  else if (floor >= 11 && floor <= 19) {
    totalBricks = 10 * 10 * bricksPerFoot + (floor - 10) * 12 * bricksPerFoot;
  }

  // Calculate bricks required for floors 20 and above (10 feet per floor)
  else if (floor >= 20) {
    totalBricks =
      10 * 10 * bricksPerFoot +
      9 * 12 * bricksPerFoot +
      (floor - 19) * 10 * bricksPerFoot;
  }

  return totalBricks;
}

// Example usage:
const totalBricks = brickCalculator(25); // For 25 floors
console.log("Total bricks required:", totalBricks);

//-------------------------task-04--------------------------
