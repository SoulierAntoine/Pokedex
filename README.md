
### Questions

> Si 5 devs rejoignent ton équipe demain et que ton application est en production, quelles sont les améliorations à apporter à l'environnement de Dev et pourquoi ?

- Mettre en place tout le côté Dev Ops :
  - Créer un dockerfile pour un setup rapide
  - Mettre en place une CI (par ex. gitlab-ci) pour le déploiement
  - Test / Lint automatique lors des commits avec Husky
- Côté back :
  - Tester individuellement les différentes parties du code
  - Une gestion d'erreur plus poussée que celle proposée par défaut par Nest
- Côté front :
  - Mettre en place un storybook (optionnel pour le moment car pas de composants complexes)
