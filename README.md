# @zswensrude/a2-package
This is a package that has some functions that interact with arrays and specific objects.

## Purpose
Created for CMPT 315 Assignment 2.

## Usage

**Install it:**

`npm install @zswensrude/a2-package`

**Require it:**

`const _ = require('@zswensrude/a2-package')`


## Documentation

The following functions are currently implemented:
- findNaNIndex: Find all the indexes where NaN is found in a given array of numbers and NaN
- isArrayFactorChain: Return true or false if an array is a factor chain or not
- countNumberOfArrays: Return the count for the number of arrays inside a given array
- participants: Returns an array of all the player names (no player should be listed more than once)
- winnersObject: Returns an object which lists each participant, and a list of who they've beaten
- biggestLoser: Returns the player with the most losses, subtracting wins from their loss count


### Versions
Note that each function which was added was considered a minor release using `npm version minor`, and each change that didnt add a function was considered a patch using 'npm version patch'. This was followed, except for the first two functions, as I had to rename the project (as per instructor email), so the first two functions were implemented in version 1.0.0.


