TP JQuery
============

> Ne pas modifier le HTML.

Pré-requis : 
- Lancer `npm install` pour installer les dépendances

1 - Ajoutez jQuery aux dépendances

2 - Créer un fichier de travail app.js

3 - Afficher les ingrédients des pizzas au survol de leurs noms 

4 - Afficher visuellement le nombre de parts et le nombre de pizzas approprié en dessous du champs « Nombre de parts »

5 - Afficher le formulaire de saisie d'adresse au clic sur le bouton "Etape suivante" puis masquer ce même bouton

6 - Ajouter une ligne de champ d'adresse lorsque l'on clique sur le bouton "Ajouter un autre ligne d'adresse"

7 - Au clic sur le bouton de validation, supprimer tous les éléments de la page, et afficher un message de remerciement (Merci PRENOM ! Votre commande sera livrée dans 15 minutes).

8 - Actualiser le total de la commande en fonction des éléments choisis grâce à l'attribut data-price. Mettre ce calcul dans une fonction (DRY - Don’t Repeat Yourself)


----------


Question bonus:

Faire une nouvelle branche dans votre repository que l'on appelera "bonus". Dans le cadre de cette question bonus, vous avez le droit de modifier le html

1 - S'il fait moins de 0 degrès celsius augmenter le prix de 5 euros pour le tips du livreur.


----------


AIDE // Code Snippets
---------------------

- Récupérer une checkbox coché en jQuery :
`$('input[name=example]:checked');`

- Boucler sur tous les elements cochés :
`$('input[name=group]:checked').each(function() {
	total += $(this).data('price');
});`

- Caster un string en int (grâce à +) :
`var number = +$('input.element’).val();`

- Dupliquer un élément HTML en jQuery pour l'insérer à plusieurs endroits :
`var element = $('<span class="my-class"></span>');
var new_element = element.clone();`
