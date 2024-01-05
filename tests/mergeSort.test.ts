import { merge } from '../src/mergeSort';

describe('merge', () => {
    it('should merge two sorted arrays', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should merge arrays with different lengths', () => {
        const result = merge([1, 3, 5, 7], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should handle empty arrays', () => {
        const result = merge([], [2, 4, 6]);
        expect(result).toEqual([2, 4, 6]);
    });
    
    it('should merge two sorted arrays', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
      });
    
      it('should handle empty arrays', () => {
        const result = merge([], []);
        expect(result).toEqual([]);
      });
    
      it('should handle one empty array', () => {
        const result1 = merge([1, 2, 3], []);
        const result2 = merge([], [4, 5, 6]);
        expect(result1).toEqual([1, 2, 3]);
        expect(result2).toEqual([4, 5, 6]);
      });
});