import { getQueryParams } from './addQuertParams';

describe('getQueryParams', () => {
    it('should return an empty query string if params is empty', () => {
        const params = {};
        const result = getQueryParams(params);
        expect(result).toBe('?');
    });

    it('should return a query string with one parameter', () => {
        const params = { key1: 'value1' };
        const result = getQueryParams(params);
        expect(result).toBe('?key1=value1');
    });

    it('should return a query string with multiple parameters', () => {
        const params = { key1: 'value1', key2: 'value2' };
        const result = getQueryParams(params);
        expect(result).toBe('?key1=value1&key2=value2');
    });

    it('should ignore undefined or null values in params', () => {
        const params = { key1: 'value1', key2: undefined, key3: null };
        const result = getQueryParams(params);
        expect(result).toBe('?key1=value1');
    });

    it('should update the existing query parameters', () => {
        const params = { key1: 'value1' };
        const result = getQueryParams(params);
        expect(result).toBe('?key1=value1');
    });
});
