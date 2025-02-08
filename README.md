# Nigeria GeoData

Nigeria GeoData is an npm package that provides easy-to-use functions to retrieve Nigerian states, their local government areas (LGAs), and cities/areas within those LGAs. This package is ideal for developers building applications that require geographic data of Nigeria, such as dropdown selectors, data validation, or any location-based feature.

## Installation

Install the package using npm:

```bash
npm install nigeria-geodata

Or using Yarn:

```
```bash

yarn add nigeria-geodata

```
### Usage
Import the functions in your TypeScript or JavaScript project:

TypeScript Example

import { getAllStates, getLocalGovernments, getCities } from 'nigeria-geodata';

// Get all Nigerian states (alphabetically sorted)
const states = getAllStates();
console.log('States:', states);

// Get Local Government Areas for a specific state (case insensitive)
const stateName = 'Abia';
const lgas = getLocalGovernments(stateName);
console.log(`Local Governments in ${stateName}:`, lgas);

// Get Cities/Areas for a specific LGA within a state (case insensitive)
const localGovernment = 'Aba North';
const cities = getCities(stateName, localGovernment);
console.log(`Cities/Areas in ${localGovernment}, ${stateName}:`, cities);


JavaScript Example

const { getAllStates, getLocalGovernments, getCities } = require('nigeria-geodata');

// Get all Nigerian states
const states = getAllStates();
console.log('States:', states);

// Get LGAs for a specific state
const stateName = 'Abia';
const lgas = getLocalGovernments(stateName);
console.log(`Local Governments in ${stateName}:`, lgas);

// Get Cities/Areas for a specific LGA in the state
const localGovernment = 'Aba North';
const cities = getCities(stateName, localGovernment);
console.log(`Cities/Areas in ${localGovernment}, ${stateName}:`, cities);


### API Reference
getAllStates()
Returns: string[]
Description:
Extracts and returns a sorted array of all unique Nigerian state names from the data.


stateName: The name of the state (case insensitive).
Returns: string[]
Description:
Finds the state object matching the given name and returns a sorted array of its local government areas. Returns an empty array if the state is not found.

getCities(stateName: string, localGovernment: string)


getCities(stateName: string, localGovernment: string)
Parameters:

stateName: The name of the state (case insensitive).
localGovernment: The name of the local government area (case insensitive).
Returns: string[]
Description:
Navigates through the state and local government data to return a sorted array of cities/areas within the specified local government. Returns an empty array if the state or local government is not found.

About the Developer
This package was developed by a senior software engineer with extensive experience in building robust and user-friendly software solutions. Passionate about leveraging data to solve real-world challenges, the developer created Nigeria GeoData to simplify the process of integrating Nigerian geographic data into modern web and mobile applications.

For more projects, insights, or to get in touch, visit https://mubarakcancode.vercel.app or GitHub https://github.com/binary-tech001.

Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

# License
This project is licensed under the MIT License.