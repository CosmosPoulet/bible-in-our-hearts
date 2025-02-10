# bible-in-our-hearts
Nous utilisons l'api https://bible-api.com/
Dont les fonctionalitées principales sont de récupérer et rendre accessible les versets de la majorité des livres de la bible.
La construction par defaut (la plus basique) nécessite la definition de trois arguments selon ce modèle : https://bible-api.com/BOOK+CHAPTER:VERSE
Il faut définir le livre, le chapitre, et un verset (optionnel, sinon l'ensemble du chapitre est donnée)


# Fonctionnalité 1
get-specific-verse
Il s'agit d'implémenter l'utilisation de base de l'api en la rendant plus acessible aux utilisateurs avec un site web simple.
On annonce trois entrées pour les variables précedentes.

# Fonctionnalité 2
get-translation
Il s'agit d'implémenter une nouvelle entrée, permettant de choisir si on veut traduire le verset dans une liste de langue proposée.
Par defaut, le rendu est réalisé en anglais.

# Fonctionnalité 3
get-random-verse
Il s'agit d'implementer un bouton permettant de réaliser une requete rendant un verset aléatoire en donnant des arguments aléatoire valide.
L'api possède déjà une gestion pour éviter de réaliser une erreur de requete vers des versets inexistants