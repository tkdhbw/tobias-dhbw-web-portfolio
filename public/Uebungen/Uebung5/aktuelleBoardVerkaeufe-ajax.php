<?php

// Mit beliebiger Anzahl verkaufter Boards starten
$gesamtVerkauft = 1012;

// Neue Verk�ufe nachbilden
srand((double)microtime() * 1000000);
$gesamtVerkauft = $gesamtVerkauft + rand(0,1000);

echo $gesamtVerkauft;
?>
