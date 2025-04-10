const { getInitials, createSlug, average, isPalindroma } = require("./snacks");

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
  expect(getInitials("luigi bianchi")).toBe("L.B.");
  expect(getInitials("Maria  Verdi")).toBe("M.V.");
});

test("La funzione createSlug restituisce una stringa in lowercase", () => {
  expect(createSlug("Nome CON Maiuscole")).toBe("nome-con-maiuscole");
});

// snack 3
test(' la funzione "average calcola la media aritmetica di un array di numeri', () => {
  expect(average([5, 15])).toBe(10);
  expect(average([10, 20, 30, 40, 50])).toBe(30);
  expect(() => average([5, "ciao"])).toThrow();
});
// snack 4
test('La funzione createSlug sostituisce gli spazi con "-".', () => {
  expect(createSlug("Nome BELLO e Lungo")).toBe("nome-bello-e-lungo");
});
//snack 5
test("La funzione isPalindroma verifica se una stringa è un palindromo", () => {
  expect(isPalindroma("anna")).toBeTruthy();
  expect(isPalindroma("ciao")).toBeFalsy();
});
// snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => createSlug("")).toThrow("Titolo non valido");
  expect(() => createSlug(null)).toThrow("Titolo non valido");
});
