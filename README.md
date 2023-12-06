# Proba-Tehnica-IT

Implementare

Front-end

Fiecare componenta in parte are si partea de CSS scrisa in folderul componentStyles. 
Aplicatia nu e prea modulara pentru ca de la un moment dat a devenit foarte greu pentru mine
sa gestionez toate componentele in file diferite, asa ca Popup-ul si Form-ul le-am unit.

Landing page-ul tine toate componentele paginii si unele state-uri, cu ajutorul carora
arata interfata pentru user logat sau nelogat inca. Pentru asezarea in pagina am folosit
flexbox.

Navbarul e facut cu stiluri din Bootstrap, dar, fiind prima componenta pe care am facut-o,
e realizata destul de rudimentar. (Macar e sticky :))) Navbarul tine butoanele de Login, Register, Create Poll si Logout.
Fiecare aduce pe ecran un popup cu functionalitatea corespunzatoare.

Componenta de Form e cea mai importanta, dupa parererea mea, pentru ca ofera si posibilitatea de a te
inregistra, loga, cat si de a crea poll-uri. Fiecare formular consta intr-un popup, unde se pot introduce datele.
Formularul de inregistrare valideaza credentialele oferite.

Componenta de Poll tine toate poll-urile si te lasa sa votezi o data, pune in consola optiunea,
apoi da disable la formular. Are, de asemenea buton de delete pentru poll-urile tale, atunci
cand esti logat.

Footerul e relativ simplu, nu tine decat pictogramele cerute si linkuri la paginile LSAC.


Back-end

Fisierul db doar porneste baza de date.

Fisierul app are toate functionalitatile necesare.
Putem crea poll-uri si conturi de utilizator care sunt introduse in baza de date.
Putem gasi toti userii, toate poll-urile, userii in functie de email,
pollurile in functie de emailul userului si access tokenul lui, facut cu JWT si pus in localstorage.
In functie de asta afiseaza doar Poll-urile utilizatorului cu buton de delete si le sterge in functie de 
titlul poll-ului.
La register, parola e criptata cu bcrypt.


Experienta personala

La inceputul probei nu stiam nimic, decat niste HTML facut prin clasa a 9-a. Acum 
ma descurc cu CSS, React si Node. La inceput mi-a fost foarte greu, dura foarte mult
pana reuseam sa fac orice. Cu cat am mai avansat, am inteles pe unde sa caut si sa modific
ce aveam nevoie. Pana la final, chiar ma distram facand toate chestiile alea. Nu pentru
ca era foarte usor, fiindca erau acum foarte multe linii de cod (pentru mine cel putin),
ci pentru ca aveam ceva ce functiona binisor si stiam cat de cat ce sa ii fac ca sa 
functioneze mai bine, sau in felul in care voiam eu.
Una peste alta, a fost o experienta foarte faina si sper sa ma primiti in departament =))
