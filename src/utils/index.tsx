const convertObjToFd = (obj: object): FormData => {
    const body = new FormData();

    for (let x in Object.entries(obj)) {
        const [key, value] = Object.entries(obj)[x];
        body.append(key, value);
    }

    return body;
};

export { convertObjToFd };
