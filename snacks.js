function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}
function createSlug(stringa) {
  return stringa.toLowerCase();
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
  

module.exports = {
  getInitials,
  createSlug,
  average,
};
