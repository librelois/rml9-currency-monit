# RML 9 Currency-Monit

nous allons installer ensemble un noeud spécialisé currency-monit minimaliste, vous allez voir que c'est assez simple :)

## Installer Node.js et Yarn

Nous avosn besoin de `nodejs` et `yarn`, voici comment faire sous linux* :
_*les utilisateurs de systèmes privateurs trouverons de l'aide ici :_ https://github.com/duniter/duniter/blob/master/doc/contribute-french.md#niveau-ii--ex%C3%A9cuter-les-tests-unitaires

### Sous Linux / MacOS

Installer Node.js est devenu extrêmement simple pour ces OS : un outil vous permet d'installer la version de Node.js que vous souhaitez, en changer quand vous voulez et sans conflit avec une version précédente : il s'agit de nvm.

Vous pouvez installer nvm avec la commande suivante :

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
    
Fermez puis rouvrez votre terminal, comme indiqué. Puis, installez Node.js (choisissez la version 6) :

    nvm install 6
    
Vous aurez alors la dernière version de Node.js prête à l'emploi.

Nous aurons également besoin de yarn :

    sudo apt-get install yarn

#### Outils de build

Attention : il est nécessaire d'avoir `g++` ainsi que `python` d'installés ainsi que d'autres librairies de compilation. Sur Ubuntu/Debian, il existe un paquet installant ces différents utilitaires : installez-le avec la commande :

    sudo apt-get install build-essential

## Installation du noeud spécialisé

    git clone https://github.com/librelois/rml9-currency-monit.git
    cd rml9-currency-monit && yarn
    node index.js config --autoconf
    node index.js sync g1.duniter.org 10901
    node index.js currency-monit

Puis, visitez http://localhost:10500.
