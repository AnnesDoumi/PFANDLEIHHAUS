// src/views/Conditions.vue
<template>
  <div class="conditions-container">
    <div class="header">⚡ KONDITIONEN</div>
    <div class="conditions-content">
      <div class="conditions-left">
        <h2>Kreditzins</h2>
        <p>pro angefangenem Monat 1%</p>
        <h2>Gebühr</h2>
        <table>
          <tr><th>Betrag</th><th>Gebühr</th></tr>
          <tr><td>bis 15,00</td><td>1,00</td></tr>
          <tr><td>15,01 - 30,00</td><td>1,50</td></tr>
          <tr><td>30,01 - 50,00</td><td>2,00</td></tr>
          <tr><td>50,01 - 100,00</td><td>2,50</td></tr>
          <tr><td>100,01 - 150,00</td><td>3,50</td></tr>
          <tr><td>150,01 - 200,00</td><td>4,50</td></tr>
          <tr><td>200,01 - 250,00</td><td>5,50</td></tr>
          <tr><td>250,01 - 300,00</td><td>6,50</td></tr>
          <tr><td>ab 300,00</td><td>2,5%</td></tr>
        </table>
        <h2>Pfand</h2>
        <ul>
          <li>Gold- und Silberschmuck</li>
          <li>Diamanten</li>
          <li>Uhren</li>
          <li>KFZ</li>
          <li>Technik</li>
          <li>Antiquitäten</li>
        </ul>
      </div>
      <div class="conditions-right">
        <h2>Beispiel 1</h2>
        <p><strong>Pfandkredit: 100€</strong></p>
        <p>Pfand z.B. Handy mit Pfandwert 100,00€</p>
        <p>Zinsen (1% der Kreditsumme): <strong>1,00€</strong></p>
        <p>Gebühr (2,50 € pauschal): <strong>2,50€</strong></p>
        <p class="total">monatliche Zahlung: <strong>3,50€</strong></p>
        <h2>Beispiel 2</h2>
        <p><strong>Pfandkredit: 1.000€</strong></p>
        <p>Pfand z.B. Uhr mit Pfandwert 1.000€</p>
        <p>Zinsen (1% der Kreditsumme): <strong>10,00€</strong></p>
        <p>Gebühr (3,5%): <strong>35,00€</strong></p>
        <p class="total">monatliche Zahlung: <strong>45,00€</strong></p>
      </div>
    </div>
  </div>
</template>

<style>
.conditions-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
}
.header {
  background: navy;
  color: yellow;
  font-size: 24px;
  padding: 10px;
  text-align: left;
  font-weight: bold;
}
.conditions-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.conditions-left, .conditions-right {
  flex: 1;
  min-width: 300px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
.total {
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .conditions-content {
    flex-direction: column;
  }
  .conditions-left, .conditions-right {
    width: 100%;
  }
  table {
    font-size: 14px;
  }
}
</style>