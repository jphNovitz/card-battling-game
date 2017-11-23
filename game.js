/**
 * @file game.js
 * 
 * Object that contains game cards and elements
 * 
 * This Object take elements that are figures, family -> give them a value and create the card game basis
 * 
 * There are methods that distribute cards to player, make player give a card and manage both packages.
 * 
 * jphNovitz (Novitz Jean-Philippe)
 * @jphNovitz on github 
 * hello@jiphi.be
 * 
 *  - november 2017 - 
 *  
 */

const game = {
    /* variables definitions */
        cards : [],
        family : ['clubs',  'spades', 'hearts', 'diamonds'],
        figures : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'V', 'K', 'A'],
        player_1 : {
            cards: [],
            points: 0,
            encore: true
        },
        player_2 : {
            cards: [],
            points: 0,
            encore: true
        },
    
    /* object's methods */
        /**
         * @method initialize()
         * create card game from arrays
         */    
        initialize : function() {
            this.figures.map(fig => {
                for (let i = 0 ; i < 4 ; i++) {
                    let tempCard = {
                        'family': this.family[i],
                        'figure': fig,
                        'value': this.figures.indexOf(fig)
                    }
                    this.cards.push(tempCard)
                }
            }
            )},

       
        /**
         * @method giveCardToPLayer() 
         * take a card from cards and give it to 'player' and delete it from the package
         */
        giveCardToPlayer : function(player) {
            let randomCard = this.cards[Math.floor(Math.random() * this.cards.length)]
            let cardPosition = this.cards.indexOf(randomCard)
            player.cards.push(randomCard)
            this.cards.splice(cardPosition,1)
        },
    
        /**
         * @method distribute() 
         * give alternatively cards to player 1 an player 2 till cards package is empty
         */
        distribute : function () {
            while (this.cards.length > 0) {
                this.giveCardToPlayer(this.player_1)  // card to player 1 
                this.giveCardToPlayer(this.player_2)  // card to player 2 
            }   
        },

        /**
         * @method pick 
         * a card and delete it from 'player' package
         */
        pickCard :  function(player) {
            let card = player.cards[0]
            player.cards.splice(0,1)
            return card
        },

        /**
         * @method displayCard() 
         * displays the 'card' in the 'player' playmat
         */
        displayCard : function (card, player) {
            const visualCard = document.createElement('div')
            visualCard.classList.add('card')
            const cardContent = document.createTextNode(card.figure)
            visualCard.appendChild(cardContent)
            document.getElementById(player).appendChild(visualCard)
            return visualCard
        },

        givePoints: function () {}

}