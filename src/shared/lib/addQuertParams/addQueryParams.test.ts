import { addQueryParams, getQueryParams } from './addQuertParams'; // Replace with your actual file path

describe('addQueryParams', () => {
    beforeEach(() => {
        window.history.pushState = jest.fn();
    });

    it('should call pushState with correct query string', () => {
        const params = { key1: 'value1', key2: 'value2' };
        addQueryParams(params);
        expect(window.history.pushState).toHaveBeenCalledWith(
            null,
            '',
            getQueryParams(params),
        );
    });

    it('should handle empty params correctly', () => {
        const params = {};
        addQueryParams(params);
        expect(window.history.pushState).toHaveBeenCalledWith(
            null,
            '',
            getQueryParams(params),
        );
    });

    it('should handle undefined or null values in params', () => {
        const params = { key1: 'value1', key2: undefined, key3: null };
        addQueryParams(params);
        expect(window.history.pushState).toHaveBeenCalledWith(
            null,
            '',
            getQueryParams(params),
        );
    });

    it('should update existing query parameters', () => {
        const originalLocation = window.location;
        window.location = { search: '?existingKey=existingValue' } as any;

        const params = { key1: 'value1' };
        addQueryParams(params);
        expect(window.history.pushState).toHaveBeenCalledWith(
            null,
            '',
            getQueryParams(params),
        );

        window.location = originalLocation;
    });
});
