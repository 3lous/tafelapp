Tafelapp

Een kleine website om de tafels van vermenigvuldiging te oefenen. Je kunt een tafel laten zien als hulp, of jezelf testen met een puzzel van 10 sommen.

Gemaakt door Ali.

Wat kan de app?

De pagina heeft twee kaarten naast elkaar:

1. Hulp: tafel van ...Je vult een tafel in (bijvoorbeeld 5) en klikt op GO!. Dan zie je de hele tafel van 1 t/m 10 onder elkaar staan, dus `1 x 5 = 5`, `2 x 5 = 10`, enzovoort.
2. Puzzel: tafel van ... Je vult een tafel in (bijvoorbeeld 4) en klikt op GO!. Dan krijg je 10 sommen, één voor één, in een willekeurige volgorde. Je typt het antwoord in en klikt op Controleer.

Bestanden

Bestand Waar is het voor?
`Tafelapp.html` de pagina zelf: de twee kaarten, de invoervelden en de knoppen.
`tafelapp.js` alle logica: wat er gebeurt als je op een knop klikt.
`style.css` staat erbij maar is nog leeg, en wordt ook nog niet in de HTML gebruikt.

Voor de opmaak gebruik ik Bootstrap 5. Die wordt via internet (een CDN) ingeladen, dus je hebt internet nodig om het mooi te zien.

Hoe start je de app?

Je hoeft niets te installeren. Download of clone de repository en dubbelklik op `Tafelapp.html`. Dan opent de app in je browser.

Hoe werkt het eigenlijk?

De hulp-kaart

Als je op GO! klikt, draait de functie `toonHulp()`:

1. Hij pakt het getal uit het invoervak.
2. Hij loopt met een `for`-loop van 1 tot en met 10.
3. Bij elke stap maakt hij een regel tekst, zoals `3 x 5 = 15`.
4. Alle regels samen worden onder het invoervak getoond.

Let op: als je het vak leeg laat, rekent hij met 0 en zie je de tafel van 0.
###De puzzel hulp

Als je op GO! klikt, draait de functie `maakPuzzel()`:

1. Eerst checkt hij of je wel een tafel hebt ingevuld. Zo niet, dan zie je "Vul eerst een tafel in."
2. Hij maakt een lijstje met de getallen 1 t/m 10 en husselt dat door elkaar (`maakWillekeurigeFactoren()`). Zo krijg je elke keer een andere volgorde, en elke som komt precies één keer voor.
3. De eerste som wordt getoond met `toonSom()`, bijvoorbeeld "7 x 4 =" met een invoervak ernaast.
4. De Controleer-knop verschijnt.

Daarna werkt de knop zo (`verwerkAntwoord()`):

Antwoord goed: het vak wordt groen en je kunt niks meer aanpassen. De knop verandert in "Volgende som". Als je daarop klikt, krijg je de volgende som.
Antwoord fout of leeg:het vak wordt rood en je ziet "Maak een afspraak met Ids". Je mag het gewoon opnieuw proberen, dezelfde som blijft staan.
Laatste som goed (som 10): je ziet "je mag naar huis!" en de knop verdwijnt.

De app onthoudt wat er gaande is met een paar variabelen bovenaan `tafelapp.js`:

Variable wat onthoudt hij?
`puzzelTafel`  Welke tafel je aan het oefenen bent.
`puzzelSom` Bij welke som je zit (1 t/m 10).
`puzzelFactoren`  de door elkaar gehusselde lijst met getallen 1 t/m 10.
`puzzelFactor` het getal van de som waar je nu mee bezig bent.
`antwoordGecontroleerd` of je antwoord al goed is gekeurd, zodat de knop weet dat hij naar de volgende som moet.

Ideeën voor later

Opmaak toevoegen in `style.css` en die in de HTML koppelen.
Een score bijhouden, bijvoorbeeld hoeveel pogingen je nodig had.
De hulp-kaart laten klagen als je niets invult.
