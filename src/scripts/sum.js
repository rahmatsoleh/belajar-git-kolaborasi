const sum = (... count) => {
    let result = 0;
    count.forEach(angka => result += angka);
    return result;
}

export default sum;