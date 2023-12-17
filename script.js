function validerFormulaire() {
  var nom = document.getElementById("nom").value;
  var cin = document.getElementById("cin").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (nom === "" || cin === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  if (/\d/.test(nom)) {
    alert("Le champ 'Nom' ne doit pas contenir de caracteres numeriques !");
    return false;
  }

  if (!/^\d{8}$/.test(cin)) {
    alert("Le numero de CIN doit etre compose de 8 chiffres !");
    return false;
  }

  return true;
}