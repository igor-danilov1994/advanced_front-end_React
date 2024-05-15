export const getQueryParams = (params: OptionalRecord<string, any>) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
};

export const addQueryParams = (params: OptionalRecord<string, any>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
