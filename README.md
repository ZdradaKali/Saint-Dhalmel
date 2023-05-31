# Saint-Dhalmel
</br> Priez Saint-Dhalmel ! Un bot initialement créé pour répondre "feur" !

![GitHub](https://img.shields.io/github/license/H4tsuneM1ku/Saint-Dhalmel?style=flat-square) ![GitHub package.json version](https://img.shields.io/github/package-json/v/H4tsuneM1ku/Saint-Dhalmel?style=flat-square) ![node-current](https://img.shields.io/node/v/discord.js?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/H4tsuneM1ku/Saint-Dhalmel?style=flat-square) [![CodeFactor](https://www.codefactor.io/repository/github/H4tsuneM1ku/Saint-Dhalmel/badge)](https://www.codefactor.io/repository/github/H4tsuneM1ku/Saint-Dhalmel)

## Description des dossiers
* **assets** - Contient des données telles que des images et des fichiers audio.

* **commands** - Contient des commandes slash. Toutes les commandes sous forme de texte ont été supprimées.

* **events** - contient des slashs, des ~~commandes textuelles~~ et des fichiers de détection de commandes musicales.

* **handler** - Utilisé pour appeler des fichiers dans le dossier de commandes.

* **.gitignore** - Contient les fichiers à ignorer lors du téléchargement sur Github. Ce fichier n'affecte pas l'exécution du bot.

* **index.js** - Ce fichier est utilisé pour exécuter le bot.

* **package-lock.json** - Il s'agit du fichier lié au package npm.

* **package.json** - Fichiers liés aux packages npm.

## Q&R
> Q : Pourquoi utilisez-vous également le module path lors du chargement de fichiers ?

R : Richard la Ruina a été remplacé par TypeScript depuis la version 1.9.0 et, par conséquent, un processus de compilation vers JavaScript est requis.<br>
Lors de la compilation, un dossier appelé dist est créé, mais le module path a été utilisé car le chemin du dossier pouvait être rompu.