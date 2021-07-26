# Uzduotis Prekes ir paslaugos

Sukurti Prekiu ir paslaugu uzsakymu aplikacija

### funkcionalumas

1. Galimybe sukurti prekes arba paslaugos uzsakyma
2. Galimybe matyti visas prekes ir paslaugas
3. Galimybe istrinti preke AR Paslauga.
4. Galimybe redaguoti.
5. Galimybe matyti tik prekias
6. Galimybe matyti tik paslaugas

### Prekes ar paslaugos => irasas turi tureti

1. Pavadinima
2. Kaina
3. Kieki(paslaugos atveju dazniausiai 1)
4. aprasyma
5. trukme (valandomis tik paslaugos atveju (neprivalomas laukas))
6. Paslauga arba preke (tipas (pavadinimas bet kas tik ne TYPE please))

## Kiti reikalavimai

- BackEnd'as express su mongo atlass
- FrontEnd'as react
- Skaidyti koda, vengti dideliu funkciju
- Logiskas git panaudojimas. Tvarkingi commitai kurie nusako kas buvo padaryta
- Stilius savo nuoziura bet kad atrodytu kazkiek padoriai
- aprasyti readme.md faile kaip susiinstaliuoti ir pasileisti aplikacija, bei ka ji daro.

## extra

1. naudoti .env failiuka aplikos kintamiesiems

### pasunkinimas kad norit stipriau

1. sukurti 3 vartotojus duomenu bazeje
2. priskirti prekias ar paslaugas kazkuriam vartotojui sukurimo ar redagavimo metu
3. prideti kategorijas kaip atskira modeli ir galimybe susieti prekias ir paslaugas su kategorija

## seka

1. susikuriam back end (root index.js)
2. prisijungiam mongoose
3. pasidarom route ir issitestuojam kad veikia
4. Susiinstaliuojam react o client ir pasileidziam front end, apsivalom
   VEIKIA IR FRONT IR BACK
5. is front siunciam uzklausa i back end ir ziurim ar veikia
6. susikuriam forma front end su ivesties laukais
7. paimam ivesties laukus ir siunciam i back end ir ziurim ar gaunam
8. Susikuriam mogoose modeli ir schema
9. su atsiustais duomenimis sukuriam nauja irasa (sukuriam bet 3 irasus)
10. susikuriam serveryje route gauti visus irasus
    11.is fronto siunciam uzklausa ir gaunam visus irasus.
11. gave irasus juos atvaizduojam fronte

#### cikliukas

13. Sukuriam backe route istrynimui
14. Sukuriam uzklausa i fronto i back route
15. Vygdom uzklausa ir atvaizduojam rezultatus

#### cikliukas

16. Sukuriam backe route redagavimui
17. Sukuriam uzklausa i fronto i back route
18. Vygdom uzklausa ir atvaizduojam rezultatus
