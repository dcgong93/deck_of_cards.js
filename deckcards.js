function DeckConstructor(){
  var self = this;
  var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
  var types = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  this.newDeck = function(){
    this.deck = []
    for (suit in suits){
      for (type in types){
        var card = {
          suit:suits[suit],
          type:types[type]
        }
        this.deck.push(card)
      }
    }
  };

  DeckConstructor.prototype.shuffle = function(){
    this.newDeck();
    for (var i=0; i<this.deck.length; i++){
      deck = this.deck;
      random = Math.floor(Math.random()*deck.length);
      temp = deck[i]
      deck[i] = deck[random];
      deck[random] = temp;
    }
    return self;
  };

  DeckConstructor.prototype.reset = function(){
    this.newDeck();
    return self;
  };

  DeckConstructor.prototype.deal = function(){
    index = random
    var card = deck[index];
    deck.splice(index,1)
    return card;
  };
}

function PlayerConstructor(name){
  var self = this;
  this.name = name;
  this.hand = [];
  this.takeCard = function(deck){
    var card = deck.deal();
    this.hand.push(card);
    return self
  }
}

PlayerConstructor.prototype.discard = function(card){
  if (this.hand.length > 0){
    this.hand.splice(card-1,1);
  }
}

deck1 = new DeckConstructor();
deck1.newDeck();
deck1.shuffle();
Derek = new PlayerConstructor("Derek");
console.log(Derek.takeCard(deck1).takeCard(deck1).hand);
console.log(deck1.deck.length);
Derek.discard(2)
console.log(Derek.hand)
