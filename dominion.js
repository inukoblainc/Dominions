
  var canvas = document.getElementById("dominion");
  var ctx = canvas.getContext("2d");
    var base = new Array(25);
	
	base[0] = "Cellar";
	base[1] = "Chapel";
	base[2] = "Moat";
	base[3] = "Chancellor";
	base[4] = "Village";
	base[5] = "Woodcutter";
	base[6] = "Workshop";
	base[7] = "Bureaucrat";
	base[8] = "Feast";
	base[9] = "Gardens";
	base[10] = "Militia";
	base[11] = "Moneylender";
	base[12] = "Remodel";
	base[13] = "Smithy";
	base[14] = "Spy";
	base[15] = "Thief";
	base[16] = "ThroneRoom";
	base[17] = "CouncilRoom";
	base[18] = "Festival";
	base[19] = "Laboratory";
	base[20] = "Library";
	base[21] = "Market";
	base[22] = "Mine";
	base[23] = "Witch";
	base[24] = "Adventurer";
	var basepic = new Array();
    for (var i =0; i <= 24; i += 1) {
		var img = new Image();
		img.src = "img/base/" + i + ".jpg";
		basepic.push(img);	
    }
	var intrigue = new Array(25);
	intrigue[0] = "Courtyard";
	intrigue[1] = "Pawn";
	intrigue[2] = "SecretChamber";
	intrigue[3] = "GreatHall";
	intrigue[4] = "Masquerade";
	intrigue[5] = "ShantyTown";
	intrigue[6] = "Steward";
	intrigue[7] = "Swindler";
	intrigue[8] = "WishingWell";
	intrigue[9] = "Baron";
	intrigue[10] = "Bridge";
	intrigue[11] = "Conspirator";
	intrigue[12] = "Coppersmith";
	intrigue[13] = "Ironworks";
	intrigue[14] = "MiningVillage";
	intrigue[15] = "Scout";
	intrigue[16] = "Duke";
	intrigue[17] = "Minion";
	intrigue[18] = "Saboteur";
	intrigue[19] = "Torturer";
	intrigue[20] = "TradingPost";
	intrigue[21] = "Tribute";
	intrigue[22] = "Upgrade";
	intrigue[23] = "Harem";
	intrigue[24] = "Nobles";
	var intpic = new Array();
    for (var i =0; i <= 24; i += 1) {
		var img = new Image();
		img.src = "img/int/" + i + ".jpg";
		intpic.push(img);
	}
	var seaside = new Array(26);
	seaside[0] = "Embargo";
	seaside[1] = "Haven";
	seaside[2] = "Lighthouse";
	seaside[3] = "NativeVillage";
	seaside[4] = "PearlDiver";
	seaside[5] = "Ambassador";
	seaside[6] = "FishingVillage";
	seaside[7] = "Lookout";
	seaside[8] = "Smugglers";
	seaside[9] = "Warehouse";
	seaside[10] = "Caravan";
	seaside[11] = "Cutpurse";
	seaside[12] = "Island";
	seaside[13] = "Navigator";
	seaside[14] = "PirateShip";
	seaside[15] = "Salvager";
	seaside[16] = "Sea Hag";
	seaside[17] = "TreasureMap";
	seaside[18] = "Bazaar";
	seaside[19] = "Explorer";
	seaside[20] = "GhostShip";
	seaside[21] = "MerchantShip";
	seaside[22] = "Outpost";
	seaside[23] = "Tactician";
	seaside[24] = "Treasury";
	seaside[25] = "Wharf";
	var seapic = new Array();
    for (var i =0; i <= 25; i += 1) {
		var img = new Image();
		img.src = "img/sea/" + i + ".jpg";
		seapic.push(img);
	}
	var prosperity = new Array(25);
	prosperity[0] = "Loan";
	prosperity[1] = "TradeRoute";
	prosperity[2] = "Watchtower";
	prosperity[3] = "Bishop";
	prosperity[4] = "Monument";
	prosperity[5] = "Quarry";
	prosperity[6] = "Talisman";
	prosperity[7] = "WorkersVillage";
	prosperity[8] = "City";
	prosperity[9] = "Contraband";
	prosperity[10] = "Mint";
	prosperity[11] = "Mountebank";
	prosperity[12] = "Rabble";
	prosperity[13] = "Royal Seal";
	prosperity[14] = "Vault";
	prosperity[15] = "Venture";
	prosperity[16] = "Goons";
	prosperity[17] = "GrandMarket";
	prosperity[18] = "Hoard";
	prosperity[19] = "Bank";
	prosperity[20] = "Expand";
	prosperity[21] = "Forge";
	prosperity[22] = "KingsCourt";
	prosperity[23] = "Peddler";
	prosperity[24] = "CountingHouse";
	var propic = new Array();
    for (var i =0; i <= 24; i += 1) {
		var img = new Image();
		img.src = "img/pro/" + i + ".jpg";
		propic.push(img);
	}
	//Colony
	//Platinum
	var cornucopia = new Array(13);
	cornucopia[0] = "Menagerie";
	cornucopia[1] = "Hamlet";
	cornucopia[2] = "FortuneTeller";
	cornucopia[3] = "Fairgrounds";
	cornucopia[4] = "FarmingVillage";
	cornucopia[5] = "HorseTraders";
	cornucopia[6] = "Remake";
	cornucopia[7] = "Tournament";//special case 
	cornucopia[8] = "YoungWitch";
	cornucopia[9] = "Harvest";
	cornucopia[10] = "HornOfPlenty";
	cornucopia[11] = "HuntingParty";
	cornucopia[12] = "Jester";
	var cornpic = new Array();
    for (var i =0; i <= 12; i += 1) {
		var img = new Image();
		img.src = "img/corn/" + i + ".jpg";
		cornpic.push(img);
	}
	var youngwitch = false;
	/*/
	Diadem
	Followers
	Princess
	Trusty steed
	*/
	var hinterlands = new Array(26);
	hinterlands[0] = "Crossroads";
	hinterlands[1] = "Duchess";
	hinterlands[2] = "FoolsGold";
	hinterlands[3] = "Develop";
	hinterlands[4] = "Oasis";
	hinterlands[5] = "Oracle";
	hinterlands[6] = "Scheme";
	hinterlands[7] = "Tunnel";
	hinterlands[8] = "JackOfAllTrades";
	hinterlands[9] = "NobleBrigand";
	hinterlands[10] = "NomadCamp";
	hinterlands[11] = "SilkRoad";
	hinterlands[12] = "SpiceMerchant";
	hinterlands[13] = "Trader";
	hinterlands[14] = "Cache";
	hinterlands[15] = "Cartographer";
	hinterlands[16] = "Embassy";
	hinterlands[17] = "Haggler";
	hinterlands[18] = "Highway";
	hinterlands[19] = "IllGottenGains";
	hinterlands[20] = "Inn";
	hinterlands[21] = "Mandarin";
	hinterlands[22] = "Mangrave";
	hinterlands[23] = "Stables";
	hinterlands[24] = "BorderVillage";
	hinterlands[25] = "Farmland";
	var hinpic = new Array();
	for (var i =0; i <= 25; i += 1) {
		var img = new Image();
		img.src = "img/hin/" + i + ".jpg";
		hinpic.push(img);
	}
	var darkages = new Array(35);
	darkages[0] = "PoorHouse";
	darkages[1] = "Beggar";
	darkages[2] = "Squire";
	darkages[3] = "Vagrant";
	darkages[4] = "Forager";
	darkages[5] = "Hermit";
	darkages[6] = "MarketSquare";
	darkages[7] = "Sage";
	darkages[8] = "Storeroom";
	darkages[9] = "Urchin";
	darkages[10] = "Armory";
	darkages[11] = "DeathCart";
	darkages[12] = "Feodum";
	darkages[13] = "Fortress";
	darkages[14] = "Ironmonger";
	darkages[15] = "Marauder";
	darkages[16] = "Procession";
	darkages[17] = "Rats";
	darkages[18] = "Scavenger";
	darkages[19] = "HuntingGrounds";
	darkages[20] = "WanderingMinstrel";
	darkages[21] = "BandOfMisfits";
	darkages[22] = "BanditCamp";
	darkages[23] = "Catacombs";
	darkages[24] = "Count";
	darkages[25] = "Counterfeit";
	darkages[26] = "Cultist";
	darkages[27] = "Graverobber";
	darkages[28] = "JunkDealer";
	darkages[29] = "Mystic";
	darkages[30] = "Pillage";
	darkages[31] = "Rebuild";
	darkages[32] = "Rogue";
	darkages[33] = "Altar";
	darkages[34] = "Knights";
	var darpic = new Array();
	for (var i =0; i <= 34; i += 1) {
		var img = new Image();
		img.src = "img/dar/" + i + ".jpg";
		darpic.push(img);
	}
	/* Shelters
	Madman
	Mercenary
	Ruins
	Spoils
	*/
	var guilds = new Array(13);
	guilds[0] = "CandlestickMaker";
	guilds[1] = "Stonemason";
	guilds[2] = "Doctor";
	guilds[3] = "Masterpiece";
	guilds[4] = "Advisor";
	guilds[5] = "Herald";
	guilds[6] = "Plaza";
	guilds[7] = "Taxman";
	guilds[8] = "Baker";
	guilds[9] = "Butcher";
	guilds[10] = "Journeyman";
	guilds[11] = "MerchantGuild";
	guilds[12] = "Soothsayer";
	var guipic = new Array();
    for (var i =0; i <= 12; i += 1) {
		var img = new Image();
		img.src = "img/gui/" + i + ".jpg";
		guipic.push(img);
	}
	var alchemy = new Array(12);
	alchemy[0] = "Herbalist";
	alchemy[1] = "Vineyard";
	alchemy[2] = "Apothecary";
	alchemy[3] = "Transmute";
	alchemy[4] = "ScryingPool";
	alchemy[5] = "University";
	alchemy[6] = "Alchemist";
	alchemy[7] = "Familiar";
	alchemy[8] = "PhilosophersStone";
	alchemy[9] = "Golem";
	alchemy[10] = "Apprentice";
	alchemy[11] = "Possession";
	var alcpic = new Array();
	for (var i =0; i <= 11; i += 1) {
		var img = new Image();
		img.src = "img/alc/" + i + ".jpg";
		alcpic.push(img);
	}
	//Potion 
	var xtra = new Array(9);
	xtra[0] = "Ruins";
	xtra[1] = "Colony";
	xtra[2] = "Platinum";
	xtra[3] = "Prizes";
	xtra[4] = "Shelter";
	xtra[5] = "Madman";
	xtra[6] = "Mercenary";
	xtra[7] = "Potion";
	xtra[8] = "Spoils";
	var xtrapic = new Array();
	for (var i =0; i <= 8; i += 1) {
		var img = new Image();
		img.src = "img/xtra/" + i + ".jpg";
		xtrapic.push(img);
	}
	

	var baseset =0 ;
	var intset = 0;
	var seaset = 0;
	var alcset = 0;
	var proset = 0;
	var cornset =0 ;
	var hinset = 0;
	var darset = 0;
	var guiset = 0;
	function basebutton(){
		if(baseset == 1){
			baseset = 0;
			
		}
		else{
			baseset = 1;
			
		}
	
	}
	function intbutton(){
		if(intset == 1){
			intset = 0;
			
		}
		else{
			intset = 1;
			
		}
	}
	function seabutton(){
		if(seaset == 1){
			seaset = 0;
			
		}
		else{
			seaset = 1;
			
		}
	}
	function alcbutton(){
		if(alcset == 1){
			alcset = 0;
			
		}
		else{
			alcset = 1;
			
		}
	}
	function probutton(){
		if(proset == 1){
			proset = 0;
			
		}
		else{
			proset = 1;
			
		}
	}
	function cornbutton(){
		if(cornset == 1){
			cornset = 0;
			
		}
		else{
			cornset = 1;
			
		}
	}
	function hinbutton(){
		if(hinset == 1){
			hinset = 0;
			
		}
		else{
			hinset = 1;
			
		}
	}
	function darbutton(){
		if(darset == 1){
			darset = 0;
			
		}
		else{
			darset = 1;
			
		}
	}
	function guibutton(){
		if(guiset == 1){
			guiset = 0;
			
		}
		else{
			guiset = 1;
			
		}
	}
	function randomizecards() {
		var row3 = 1;
		var deckcount = baseset + intset + seaset + alcset +proset + cornset + hinset + darset + guiset;
		var card = new Array(10);
			 for (var i = 0; i <= 9; i += 1){
				var end = false;
				var count = 1;
				var rando = Math.random();
				if (baseset == 1 && end == false ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * base.length))
						card[i] = base[num];
						if(i < 5){
							
							ctx.drawImage(basepic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(basepic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * base.length))
							card[i] = base[num];
							if(i < 5){
								ctx.drawImage(basepic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(basepic[num], 250 + (i-5) * 300, 550);
							}
						}
						
						end = true;
					}
					count++;
				}
				
				if (intset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * intrigue.length))
						card[i] = intrigue[num];
						
						if(i < 5){
							ctx.drawImage(intpic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(intpic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * intrigue.length))
							card[i] = intrigue[num];
							if(i < 5){
								ctx.drawImage(intpic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(intpic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
						
					}
					count++;
				}

				if (seaset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * seaside.length))
						card[i] = seaside[num];
						
						if(i < 5){
							ctx.drawImage(seapic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(seapic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * seaside.length))
							card[i] = seaside[num];
							if(i < 5){
								ctx.drawImage(seapic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(seapic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
				if (alcset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * alchemy.length))
						card[i] = alchemy[num];
						
						if(i < 5){
							ctx.drawImage(alcpic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(alcpic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * alchemy.length))
							card[i] = alchemy[num];
							if(i < 5){
								ctx.drawImage(alcpic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(alcpic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
				if (proset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * prosperity.length))
						card[i] = prosperity[num];
						
						if(i < 5){
							ctx.drawImage(propic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(propic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * prosperity.length))
							card[i] = prosperity[num];
							if(i < 5){
								ctx.drawImage(propic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(propic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
				if (cornset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * cornucopia.length))
						card[i] = cornucopia[num];
						if (num == 8){
							youngwitch = true;
							
						}
						
						if(i < 5){
							ctx.drawImage(cornpic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(cornpic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * cornucopia.length))
							card[i] = cornucopia[num];
							if (num == 8){
								youngwitch = true;
								
							}
							if(i < 5){
								ctx.drawImage(cornpic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(cornpic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
				if (hinset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * hinterlands.length))
						card[i] = hinterlands[num];
						
						if(i < 5){
							ctx.drawImage(hinpic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(hinpic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * hinterlands.length))
							card[i] = hinterlands[num];
							if(i < 5){
								ctx.drawImage(hinpic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(hinpic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
				if (darset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * darkages.length))
						card[i] = darkages[num];
						
						if(i < 5){
							ctx.drawImage(darpic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(darpic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * darkages.length))
							card[i] = darkages[num];
							if(i < 5){
								ctx.drawImage(darpic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(darpic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
				if (guiset == 1 && end == false  ) {
					if(rando < (count/deckcount)){
						var num = Math.floor((Math.random() * guilds.length))
						card[i] = guilds[num];
						if(i < 5){
							ctx.drawImage(guipic[num], 250 + i * 300, 50);
						}
						else{
							ctx.drawImage(guipic[num], 250 + (i-5) * 300, 550);
						}
						while ( card[i] == card[(i-1)] || card[i] == card[(i-2)] || card[i] == card[(i-3)] || card[i] == card[(i-4)] || card[i] == card[(i-5)] || card[i] == card[(i-6)] || card[i] == card[(i-7)] || card[i] == card[(i-8)] || card[i] == card[(i-9)]){
							var num = Math.floor((Math.random() * guilds.length))
							card[i] = guilds[num];
							if(i < 5){
								ctx.drawImage(guipic[num], 250 + i * 300, 50);
							}
							else{
								ctx.drawImage(guipic[num], 250 + (i-5) * 300, 550);
							}
						}
						end = true;
					}
					count++;
				}
			
			ctx.font = "20px Georgia";
			if(deckcount){
				ctx.fillText("Card " + (i+1) + " is " + card[i],0,i*30 +20 );
			}
			else {
			ctx.fillText("Pick at least one deck..." ,0,50 );
			}	
		}
		for( i = 0; i < 10; i++){
			if( card[i] == "Tournament"){
				ctx.fillText("Card " + (row3+10) + " is " + xtra[3],0,row3*30 +290 );
				ctx.drawImage(xtrapic[3], 250 + (row3-1) * 300, 1050);
				row3++;
			}
		}	
		if (youngwitch == true){
			var witchcheck = true;
			
			while(witchcheck){
				var witchnum = Math.floor((Math.random() * 55 ))
				if(alcset === 1 && witchnum == 0){ 
					
					
					if(alchemy[0] != card[0] && alchemy[0] != card[1] &&alchemy[0] != card[2] &&alchemy[0] != card[3] &&alchemy[0] != card[4] &&alchemy[0] != card[5] &&alchemy[0] != card[6] &&alchemy[0] != card[7] &&alchemy[0] != card[8] &&alchemy[0] != card[9]){
						witchcheck = false;
						ctx.fillText("The Young witchs bane is"+ alchemy[0],0,row3*30 +290 );
						ctx.drawImage(alcpic[0], 250 + (row3-1) * 300, 1050);
						row3++;
						witchcheck = false;
						youngwitch = false;
					}
				}
				if(baseset ===1 && witchnum > 0 && witchnum < 8 ){
					if(base[(witchnum-1)] != card[0] && base[(witchnum-1)] != card[1] &&base[(witchnum-1)] != card[2] &&base[(witchnum-1)] != card[3] &&base[(witchnum-1)] != card[4] &&base[(witchnum-1)] != card[5] &&base[(witchnum-1)] != card[6] &&base[(witchnum-1)] != card[7] &&base[(witchnum-1)] != card[8] &&base[(witchnum-1)] != card[9]){
						ctx.fillText("The Young witchs bane is"+ base[(witchnum-1)],0,row3*30 +290 );
						ctx.drawImage(basepic[(witchnum-1)], 250 + (row3-1) * 300, 1050);
						row3++;
						witchcheck = false;
						youngwitch = false;
					
					}
				}
				if(cornset ==1 && witchnum >7 && witchnum < 11){
					if(cornucopia[(witchnum-7)] != card[0] && cornucopia[(witchnum-7)] != card[1] &&cornucopia[(witchnum-7)] != card[2] &&cornucopia[(witchnum-7)] != card[3] &&cornucopia[(witchnum-7)] != card[4] &&cornucopia[(witchnum-7)] != card[5] &&cornucopia[(witchnum-7)] != card[6] &&cornucopia[(witchnum-7)] != card[7] &&cornucopia[(witchnum-7)] != card[8] &&cornucopia[(witchnum-7)] != card[9]){
							ctx.fillText("The Young witchs bane is"+ cornucopia[(witchnum-7)],0,row3*30 +290 );
							ctx.drawImage(cornpic[(witchnum-7)], 250 + (row3-1) * 300, 1050);
							row3++;
							witchcheck = false;
							youngwitch = false;
					debugger
					}
				}
				if(darkages){// beggar squire vagrant forager hermit marketsquare sage storeroom urchin
				}
				if (guilds){// stonemason doctor masterpiece candlestickmaker 
				}
				if (hinterlands){
				}
				if(intrigue){//courtyard pawn secretchamber greathall Masquerade shantytown steward swindler wishingwell
				}
				if(prosperity){// loan traderoute watchtower
				}
				if(seaside){ //embargo haven lighthouse nativevillage pearldiver
				//ambassodor fishingvillage lookout smugglers warehouse
				}
			}		//crossroads 
					//duchess foolsgold develop Oasis oracle scheme Tunnel
				
				debugger
		}
	}
 

function startgame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
      randomizecards();
	  

  };

