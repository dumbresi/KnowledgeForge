const baseUrl = 'http://localhost:4000';

export const commonGET = async <T>(path: string): Promise<T[]> => {
    const response = await fetch(baseUrl + path, {
        method: 'GET'
    })

    const data: T[] = await response.json();

    return data;

}

export const commonGETOne = async <T>(path: string): Promise<T> => {
    const response = await fetch(baseUrl + path, {
        method: 'GET',
        credentials: 'include',
    })

    const data: T = await response.json();
    return data;

}
