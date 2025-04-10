function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}
function createSlug(stringa) {
  if (!stringa) {
    throw new Error("Titolo non valido");
  }
  return stringa.toLowerCase().replaceAll(" ", "-");
}
function average(nums) {
  let somma = 0;

  nums.forEach((num) => {
    if (isNaN(num)) {
      throw new Error("L'array deve contenere solo numeri");
    }
    somma += num;
  });

  return somma / nums.length;
}
function isPalindroma(p) {
  const parolaInversa = p.trim().split("").reverse().join("");
  return p.trim() === parolaInversa;
}
function findPostById(posts, id) {
  if (typeof id !== "number") {
    throw new Error(`ID non valido"`);
  }

  posts.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error("Array posts non è nel formato corretto");
    }
  });

  return posts.find((p) => p.id === id) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindroma,
  findPostById,
};
