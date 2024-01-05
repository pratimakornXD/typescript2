"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] <= collection2[j]) {
            merged.push(collection1[i]);
            i++;
        }
        else {
            merged.push(collection2[j]);
            j++;
        }
    }
    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        merged.push(collection2[j]);
        j++;
    }
    return merged;
}
exports.merge = merge;
