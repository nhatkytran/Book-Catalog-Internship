// This code is used to create color variables in file /src/styles/GlobalStyles.js
// Get data of colors from Tailwindcss (https://tailwindcss.com/docs/customizing-colors)

// How to use? //////////

// 1. Copy string of colors from the color palette -> 'stringColors'
// 2. Change the 'colorName' -> 'orange' -> '--color-orange-50'
// 3. At the root directory, run command -> node /dev-data/extractColor.js

// Input:
/*
  const envs = `50
  #fafafa
  100
  #f5f5f5`;

  const colorName = 'orange';
**/

// Output:
/*
  --color-orange-50: #fafafa;
  --color-orange-100: #f5f5f5;
**/

const stringColors = `50
#eff6ff
100
#dbeafe
200
#bfdbfe
300
#93c5fd
400
#60a5fa
500
#3b82f6
600
#2563eb
700
#1d4ed8
800
#1e40af
900
#1e3a8a
950
#172554`;

const colorName = 'blue';

(color => {
  const variables = [];
  const hexes = [];

  stringColors.split('\n').forEach((item, index) => {
    if (index % 2 === 0) variables.push(item);
    else hexes.push(item);
  });

  variables.forEach((variable, index) =>
    console.log(`--color-${color}-${variable}: ${hexes[index]};`)
  );
})(colorName);
