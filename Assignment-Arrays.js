let favAnime = [];
favAnime = ["Black Clover", "My Hero Academia", "Sheild Hero","Goblin Slayer","Magi"];
favAnime.push("Sword Art Online","Overly Cautious Hero","Boy and the Beast","Seven Deadly Sins","Naruto");
favAnime.unshift("Dragon Ball Super","Arifureta","How not to summon a Demon Lord","Noragami","One Piece");
favAnime.shift(2); 
favAnime.unshift("Dragon Ball Super".toUpperCase());
favAnime.sort();
favAnime.forEach(element => console.log(element));
console.log(favAnime);


