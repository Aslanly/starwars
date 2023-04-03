export const getIdFromURL = (url: string) => {
    const arr = url.split("/");
    return arr[arr.length - 2];
};