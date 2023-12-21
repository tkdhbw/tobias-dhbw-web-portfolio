<?php

// Mit beliebiger Anzahl verkaufter Boards starten
$gesamtVerkauft = 1012;

// Neue Verk�ufe nachbilden
srand((double)microtime() * 1000000);
$gesamtVerkauft = $gesamtVerkauft + rand(0,1000);

?>
<html>
 <head>
  <title>Boards 'R' Us</title>
  <link rel="stylesheet" type="text/css" href="boards.css" />
 </head>

 <body>
  <h1>Boards 'R' Us :: Verkaufsbericht</h1>
  <div id="boards">
   <table>
    <tr><th>Verkaufte Snowboards</th>
     <td><span id="verkaufte-boards"><?php echo ($gesamtVerkauft); ?></span> &euro;</td></tr>
    <tr><th>Verkaufspreis</th>
     <td>$<span id="preis">249.95</span> &euro;</td></tr>
    <tr><th>Meine Kosten</th>
     <td>$<span id="kosten">84.22</span> &euro;</td></tr>
   </table>
   <h2>Kohle f&uuml;r die Pisten: 
    <span id="gewinn"><?php echo ($gesamtVerkauft * (249.95 - 84.22)); ?></span> &euro;</h2>
   <form method="GET" action="aktuelleBoardVerkaeufe.php">
    <input value="Ich will Geld sehen" type="submit" />
   </form>
  </div>
 </body>
</html>