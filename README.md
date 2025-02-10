# bible-in-our-hearts
Nous utilisons l'api https://bible-api.com/
Dont les fonctionalitées principales sont de récupérer et rendre accessible les versets de la majorité des livres de la bible.
La construction par defaut (la plus basique) nécessite la definition de trois arguments selon ce modèle : https://bible-api.com/BOOK+CHAPTER:VERSE
Il faut définir le livre, le chapitre, et un verset (optionnel, sinon l'ensemble du chapitre est donnée)


# Fonctionnalité 1
get-specific-verse
Il s'agit d'implémenter l'utilisation de base de l'api en la rendant plus acessible aux utilisateurs avec un site web simple.
On annonce trois entrées pour les variables précedentes.
Pour plus de simplicité utilisateur et la réduction d'erreurs, une liste fermée est mise en place pour le choix des livres.

La fonction "getVerse" est la fonction principale pour mettre en forme les entrées de l'utilisateur pour réaliser la requete, et donner le resultat (ou annoncer une erreur le cas écheant)

La fonction "getBibleVerseUrl" est utilisée pour la vérification des requetes aupres de l'API, deja pre-construite avec une securité en cas d'erreur dans la formation de la requete.

# Fonctionnalité 2
get-translation
Il s'agit d'implémenter une nouvelle entrée, permettant de choisir si on veut traduire le verset dans une liste de langue proposée.
Si aucune langue n'est demandée, le rendu est réalisé à travers la world english bible par defaut.
Pour plus de simplicité utilisateur et la réduction d'erreurs, une liste fermée est mise en place pour le choix des langues de traduction.
Il n'y a pas de test avancés suite à la gestion sécurisée (et encadré) de cette nouvelle entrée, on a simplement réalisé une complété du test existant.

La fonction principale "get-specific-verse" a été complétée avec cette nouvelle entrée pour la formater à la suite de la requete pour l'API.


# Fonctionnalité 3
get-random-verse
Il s'agit d'implementer un bouton permettant de réaliser une requete rendant un verset aléatoire en donnant des arguments aléatoire valide.
L'api possède déjà une gestion pour éviter de réaliser une erreur de requete vers des versets inexistants

L'ajout de la fonction "getRandomVerse" permet d'obtenir un verset aléatoire de n'importe quel livre à travers une nouvelle forme de requete deja existante avec l'API
Le test implémenté verifie simplement la fonction d'appel de l'api.