"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./mergeSort");
const array1 = [1, 5, 8];
const array2 = [4, 6, 9];
const mergedArray1 = (0, merge_1.merge)(array1, array2);
console.log('Merged Array1:', mergedArray1);