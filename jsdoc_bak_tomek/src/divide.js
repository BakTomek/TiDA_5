/**
 * Funkcja dzieli licznik przez mianownik
 * @param {number} a licznik
 * @param {number} b mianownik
 * @returns {number} wynik dzielenia
 * @example
 * const a = 6;
 * const b = 2;
 *
 * const result = divide(a, b);
 * console.log(result);
 * // 3
 * @throws {Error} Jesli mianownik jest rowny 0
 * @author baktomek5d
 **/
function divide(a, b) {
    if (b != 0){
        return a / b
    }
    else {
        throw new Error('Division by 0 error')
    }
}

divide(6,2)