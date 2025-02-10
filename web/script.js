async function getVerse() {
    const livre = document.getElementById("livre").value;
    if(!livre) {
        alert("Veuillez entrer un livre, mon enfant !");
        return
    }
    const chapitre = document.getElementById("chapitre").value;
    if(!chapitre) {
        alert("Veuillez entrer un chaptitre, mon enfant !");
        return
    }
    const verset = document.getElementById("verset").value;
    if(!verset) {
        alert("Veuillez entrer un verset, mon enfant !");
        return
    }

    const translation = document.getElementById("translation").value;

    const apiUrl = getBibleVerseUrl(livre, chapitre, verset, translation)

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.text) {
            document.getElementById("verse-result").innerHTML = '<p>Verset: '+ data.text + '</p>';
            return data.text
        } else {
            document.getElementById("verse-result").innerHTML = "<p>Attention: Que ton cœur ne se trouble point, ô chercheur ! Car l'absence de résultat n'est point une fin, mais un nouveau commencement sur le chemin de la découvert</p>";
        }
    } catch(error) {
        document.getElementById("verse-result").innertHTML = '<p>Erreur lors de la récupération du verset.</p>'
    }
}

function getBibleVerseUrl(livre, chapitre, verset, translation) {
    return "https://bible-api.com/" + livre + chapitre + ":" + verset + "?translation=" + translation
}

module.exports = {
    getBibleVerseUrl
}