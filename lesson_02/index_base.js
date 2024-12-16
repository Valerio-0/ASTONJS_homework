function getLength(value) {
    const isArrayLike =
        value != null &&
        typeof value.length === 'number' &&
        value.length >= 0 &&
        Number.isInteger(value.length) &&
        (typeof value === 'object' || typeof value === 'function') &&
        !(value instanceof String);

    if (isArrayLike) {
        console.log(value.length);
    } else {
        console.log(0);
    }
}

