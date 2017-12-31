// Istruzioni che valgono in tutte le scene
function istruzioniGenerali() {
	titolo("La mia storia");
	messaggiErrore("Prova qualcos'altro...");
	rispondi("quit|exit", "Per uscire chiudi la scheda del browser. Se desideri ricominciare daccapo puoi aggiornare la pagina del browser o scrivere 'restart'.");
	rispondi("restart", "Ricaricare tutto comporterà la perdita delle informazioni sulla partita in corso. Per confermare scrivi 'restart!' con il punto esclamativo.");
	rispondiVai("restart!", "Ok! Ricarico tutto...", 1);
	uscita("guardo|g", 0, "invisibile");
	rispondi("vocabolario|v", "Predicati ricorrenti: apro, chiudo, entro, esamino, esco, guardo, inventario, prendo.<br />Comandi speciali: istruzioni, vocabolario, direzioni, restart, save, load, quit.");
	contenitore("inventario", "");
	rispondi("inventario|i", "Hai con te: @inventario@.");
	rispondi("aiuto", "Scrivi 'istruzioni' per leggere le istruzioni e 'vocabolario' o 'v' per leggere i predicati con cui interagire con gli oggetti.");
	rispondi("nord|sud|ovest|est|su|giù", "Non è possibile procedere in quella direzione.");
	rispondi("istruzioni", "Scrivi in prima persona o usa l'imperativo. Puoi omettere gli articoli. Scrivi 'vocabolario' o 'v' per leggere i predicati disponibili. Il predicato 'esamino' è l'unico che può essere omesso. Raggiungi un luogo già visitato scrivendo 'direzione' o 'd' e 'nome luogo'. I luoghi raggiungibili sono consultabili scrivendo 'direzioni' o 'd'. I luoghi possono avere comportamenti speciali. Rileggi una scena scrivendo 'guardo' o 'g'. Scrivi 'inventario' o 'i' per consultarlo.");
	rispondi("esamino", "Cosa vorresti esaminare? Devono essere oggetti raggiungibili.");
	rispondi("prendo", "Cosa vorresti prendere?");
	rispondi("apro", "Cosa vorresti aprire?");
	rispondi("chiudo", "Cosa vorresti chiudere?");
	rispondi("entro", "Dove vorresti entrare?");
	rispondi("esco", "Da dove vorresti uscire?");
}
// Istruzioni specifiche per ciascuna scena
function istruzioniScena(n) {
	Vista.preparaScena(n);
	switch (n) {
	case 1:
		testo("Copertina della storia", "centrato");
		scegliVai("Inizia", 2, "centrato");
		scegliRispondi("Istruzioni", "", "centrato");
		scegliRispondi("Licenza", "Specificate la licenza con cui rilasciate la storia.", "centrato");
		break;
	case 2:
		testo("Introduzione alla storia o inizio diretto...<br />Puoi vedere: una storia vuota.");
		rispondi("esamino la storia", "È tutta da scrivere...");
		break;
	}
	Vista.mostra();
}
