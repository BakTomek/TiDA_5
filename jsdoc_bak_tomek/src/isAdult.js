/**
 * Funkcja sprawdza czy osoba o podanym wieku jest dorosla
 * @param {int} age wiek osoby
 * @returns {boolean} Prawda lub falsz w zaleznosci czy osoba jest dorosla. Prawda, gdy dorosla
 * @throws {Error} Jesli wiek jest mniejszy lub rowny 0
 * @author baktomek5d
 */
function isAdult(age) {
    if (age >= 0){
        return age >= 18;
    }
    else throw new Error('Age can not be 0 or less')
}