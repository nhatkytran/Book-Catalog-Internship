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
#fff7ed
100
#ffedd5
200
#fed7aa
300
#fdba74
400
#fb923c
500
#f97316
600
#ea580c
700
#c2410c
800
#9a3412
900
#7c2d12
950
#431407`;

const colorName = 'orange';

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
