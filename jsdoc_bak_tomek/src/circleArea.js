/**
 * Funkcja oblicza pole kola na podstawie podanego promienia
 * @param {number} radius promien kola
 * @returns {number} pole kola obliczone na podstawie podanego promienia
 * @throws {Error} Jesli promien jest mniejszy lub rowny 0
 * @author baktomek5d
 */
function calculateArea(radius) {
    if (radius <= 1) {
        throw new Error('radius must be greater than 0.');
    }
    else return 3.14 * (radius * radius)
}