import {DropdownCustomPlaceholderComponent} from '../../../components/dropdown-custom-placeholder/dropdown-custom-placeholder.component';
import {Component, Type} from '@angular/core';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';

export const MOCK_DUAL_OPTIOS_PAGINATION: any[] = [
    {
        id: 1,
        email: 'Eliseo@gardner.biz'
    },
    {
        id: 2,
        email: 'Jayne_Kuhic@sydney.com'
    },
    {
        id: 3,
        email: 'Nikita@garfield.biz'
    },
    {
        id: 4,
        email: 'Lew@alysha.tv'
    },
    {
        id: 5,
        email: 'Hayden@althea.biz'
    },
    {
        id: 6,
        email: 'Presley.Mueller@myrl.com'
    },
    {
        id: 7,
        email: 'Dallas@ole.me'
    },
    {
        id: 8,
        email: 'Mallory_Kunze@marie.org'
    },
    {
        id: 9,
        email: 'Meghan_Littel@rene.us'
    },
    {
        id: 10,
        email: 'Carmen_Keeling@caroline.name'
    },
    {
        id: 11,
        email: 'Veronica_Goodwin@timmothy.net'
    },
    {
        id: 12,
        email: 'Oswald.Vandervort@leanne.org'
    },
    {
        id: 13,
        email: 'Kariane@jadyn.tv'
    },
    {
        id: 14,
        email: 'Nathan@solon.io'
    },
    {
        id: 15,
        email: 'Maynard.Hodkiewicz@roberta.com'
    },
    {
        id: 16,
        email: 'Christine@ayana.info'
    },
    {
        id: 17,
        email: 'Preston_Hudson@blaise.tv'
    },
    {
        id: 18,
        email: 'Vincenza_Klocko@albertha.name'
    },
    {
        id: 19,
        email: 'Madelynn.Gorczany@darion.biz'
    },
    {
        id: 20,
        email: 'Mariana_Orn@preston.org'
    },
    {
        id: 21,
        email: 'Noemie@marques.me'
    },
    {
        id: 22,
        email: 'Khalil@emile.co.uk'
    },
    {
        id: 23,
        email: 'Sophia@arianna.co.uk'
    },
    {
        id: 24,
        email: 'Jeffery@juwan.us'
    },
    {
        id: 25,
        email: 'Isaias_Kuhic@jarrett.net'
    },
    {
        id: 26,
        email: 'Russel.Parker@kameron.io'
    },
    {
        id: 27,
        email: 'Francesco.Gleason@nella.us'
    },
    {
        id: 28,
        email: 'Ronny@rosina.org'
    },
    {
        id: 29,
        email: 'Jennings_Pouros@erica.biz'
    },
    {
        id: 30,
        email: 'Lurline@marvin.biz'
    },
    {
        id: 31,
        email: 'Buford@shaylee.biz'
    },
    {
        id: 32,
        email: 'Maria@laurel.name'
    },
    {
        id: 33,
        email: 'Jaeden.Towne@arlene.tv'
    },
    {
        id: 34,
        email: 'Ethelyn.Schneider@emelia.co.uk'
    },
    {
        id: 35,
        email: 'Georgianna@florence.io'
    },
    {
        id: 36,
        email: 'Raheem_Heaney@gretchen.biz'
    },
    {
        id: 37,
        email: 'Jacky@victoria.net'
    },
    {
        id: 38,
        email: 'Piper@linwood.us'
    },
    {
        id: 39,
        email: 'Gaylord@russell.net'
    },
    {
        id: 40,
        email: 'Clare.Aufderhar@nicole.ca'
    },
    {
        id: 41,
        email: 'Lucio@gladys.tv'
    },
    {
        id: 42,
        email: 'Shemar@ewell.name'
    },
    {
        id: 43,
        email: 'Jackeline@eva.tv'
    },
    {
        id: 44,
        email: 'Marianna_Wilkinson@rupert.io'
    },
    {
        id: 45,
        email: 'Marcia@name.biz'
    },
    {
        id: 46,
        email: 'Jeremy.Harann@waino.me'
    },
    {
        id: 47,
        email: 'Pearlie.Kling@sandy.com'
    },
    {
        id: 48,
        email: 'Manuela_Stehr@chelsie.tv'
    },
    {
        id: 49,
        email: 'Camryn.Weimann@doris.io'
    },
    {
        id: 50,
        email: 'Kiana_Predovic@yasmin.io'
    },
    {
        id: 51,
        email: 'Laurie@lincoln.us'
    },
    {
        id: 52,
        email: 'Abigail.OConnell@june.org'
    },
    {
        id: 53,
        email: 'Laverne_Price@scotty.info'
    },
    {
        id: 54,
        email: 'Kenton_Vandervort@friedrich.com'
    },
    {
        id: 55,
        email: 'Hayden_Olson@marianna.me'
    },
    {
        id: 56,
        email: 'Vince_Crist@heidi.biz'
    },
    {
        id: 57,
        email: 'Darron.Nikolaus@eulah.me'
    },
    {
        id: 58,
        email: 'Ezra_Abshire@lyda.us'
    },
    {
        id: 59,
        email: 'Jameson@tony.info'
    },
    {
        id: 60,
        email: 'Americo@estrella.net'
    },
    {
        id: 61,
        email: 'Aurelio.Pfeffer@griffin.ca'
    },
    {
        id: 62,
        email: 'Vesta_Crooks@dora.us'
    },
    {
        id: 63,
        email: 'Margarett_Klein@mike.biz'
    },
    {
        id: 64,
        email: 'Freida@brandt.tv'
    },
    {
        id: 65,
        email: 'Mollie@agustina.name'
    },
    {
        id: 66,
        email: 'Janice@alda.io'
    },
    {
        id: 67,
        email: 'Dashawn@garry.com'
    },
    {
        id: 68,
        email: 'Devan.Nader@ettie.me'
    },
    {
        id: 69,
        email: 'Joana.Schoen@leora.co.uk'
    },
    {
        id: 70,
        email: 'Minerva.Anderson@devonte.ca'
    },
    {
        id: 71,
        email: 'Lavinia@lafayette.me'
    },
    {
        id: 72,
        email: 'Sabrina.Marks@savanah.name'
    },
    {
        id: 73,
        email: 'Desmond_Graham@kailee.biz'
    },
    {
        id: 74,
        email: 'Gussie_Kunde@sharon.biz'
    },
    {
        id: 75,
        email: 'Richard@chelsie.co.uk'
    },
    {
        id: 76,
        email: 'Gage_Turner@halle.name'
    },
    {
        id: 77,
        email: 'Alfred@sadye.biz'
    },
    {
        id: 78,
        email: 'Catharine@jordyn.com'
    },
    {
        id: 79,
        email: 'Esther_Ratke@shayna.biz'
    },
    {
        id: 80,
        email: 'Evangeline@chad.net'
    },
    {
        id: 81,
        email: 'Newton.Kertzmann@anjali.io'
    },
    {
        id: 82,
        email: 'Caleb_Herzog@rosamond.net'
    },
    {
        id: 83,
        email: 'Sage_Mueller@candace.net'
    },
    {
        id: 84,
        email: 'Bernie.Bergnaum@lue.com'
    },
    {
        id: 85,
        email: 'Alexzander_Davis@eduardo.name'
    },
    {
        id: 86,
        email: 'Jacquelyn@krista.info'
    },
    {
        id: 87,
        email: 'Grover_Volkman@coty.tv'
    },
    {
        id: 88,
        email: 'Jovanny@abigale.ca'
    },
    {
        id: 89,
        email: 'Isac_Schmeler@barton.com'
    },
    {
        id: 90,
        email: 'Sandy.Erdman@sabina.info'
    },
    {
        id: 91,
        email: 'Alexandro@garry.io'
    },
    {
        id: 92,
        email: 'Vickie_Schuster@harley.net'
    },
    {
        id: 93,
        email: 'Roma_Doyle@alia.com'
    },
    {
        id: 94,
        email: 'Tatum_Marks@jaylon.name'
    },
    {
        id: 95,
        email: 'Juston.Ruecker@scot.tv'
    },
    {
        id: 96,
        email: 'River.Grady@lavada.biz'
    },
    {
        id: 97,
        email: 'Claudia@emilia.ca'
    },
    {
        id: 98,
        email: 'Torrey@june.tv'
    },
    {
        id: 99,
        email: 'Hildegard.Aufderhar@howard.com'
    },
    {
        id: 100,
        email: 'Leone_Fay@orrin.com'
    },
    {
        id: 101,
        email: 'Lura@rod.tv'
    },
    {
        id: 102,
        email: 'Lottie.Zieme@ruben.us'
    },
    {
        id: 103,
        email: 'Winona_Price@jevon.me'
    },
    {
        id: 104,
        email: 'Gabriel@oceane.biz'
    },
    {
        id: 105,
        email: 'Adolph.Ondricka@mozell.co.uk'
    },
    {
        id: 106,
        email: 'Allen@richard.biz'
    },
    {
        id: 107,
        email: 'Nicholaus@mikayla.ca'
    },
    {
        id: 108,
        email: 'Kayla@susanna.org'
    },
    {
        id: 109,
        email: 'Gideon@amina.name'
    },
    {
        id: 110,
        email: 'Cassidy@maribel.io'
    },
    {
        id: 111,
        email: 'Stefan.Crist@duane.ca'
    },
    {
        id: 112,
        email: 'Aniyah.Ortiz@monte.me'
    },
    {
        id: 113,
        email: 'Laverna@rico.biz'
    },
    {
        id: 114,
        email: 'Derek@hildegard.net'
    },
    {
        id: 115,
        email: 'Tyrell@abdullah.ca'
    },
    {
        id: 116,
        email: 'Reyes@hailey.name'
    },
    {
        id: 117,
        email: 'Danika.Dicki@mekhi.biz'
    },
    {
        id: 118,
        email: 'Alessandra.Nitzsche@stephania.us'
    },
    {
        id: 119,
        email: 'Matteo@marquis.net'
    },
    {
        id: 120,
        email: 'Joshua.Spinka@toby.io'
    },
    {
        id: 121,
        email: 'Annabelle@cole.com'
    },
    {
        id: 122,
        email: 'Kacey@jamal.info'
    },
    {
        id: 123,
        email: 'Mina@mallie.name'
    },
    {
        id: 124,
        email: 'Hudson.Blick@ruben.biz'
    },
    {
        id: 125,
        email: 'Domenic.Durgan@joaquin.name'
    },
    {
        id: 126,
        email: 'Alexie@alayna.org'
    },
    {
        id: 127,
        email: 'Haven_Barrows@brant.org'
    },
    {
        id: 128,
        email: 'Marianne@maximo.us'
    },
    {
        id: 129,
        email: 'Fanny@danial.com'
    },
    {
        id: 130,
        email: 'Trevion_Kuphal@bernice.name'
    },
    {
        id: 131,
        email: 'Emmet@guy.biz'
    },
    {
        id: 132,
        email: 'Megane.Fritsch@claude.name'
    },
    {
        id: 133,
        email: 'Amya@durward.ca'
    },
    {
        id: 134,
        email: 'Jasen_Rempel@willis.org'
    },
    {
        id: 135,
        email: 'Harmony@reggie.com'
    },
    {
        id: 136,
        email: 'Rosanna_Kunze@guy.net'
    },
    {
        id: 137,
        email: 'Ressie.Boehm@flossie.com'
    },
    {
        id: 138,
        email: 'Domenic.Wuckert@jazmyne.us'
    },
    {
        id: 139,
        email: 'Rhett.OKon@brian.info'
    },
    {
        id: 140,
        email: 'Mathias@richmond.info'
    },
    {
        id: 141,
        email: 'Ottis@lourdes.org'
    },
    {
        id: 142,
        email: 'Estel@newton.ca'
    },
    {
        id: 143,
        email: 'Bertha@erik.co.uk'
    },
    {
        id: 144,
        email: 'Joesph@matteo.info'
    },
    {
        id: 145,
        email: 'Alva@cassandre.net'
    },
    {
        id: 146,
        email: 'Vivienne@willis.org'
    },
    {
        id: 147,
        email: 'Angelita@aliza.me'
    },
    {
        id: 148,
        email: 'Timmothy_Okuneva@alyce.tv'
    },
    {
        id: 149,
        email: 'Moriah_Welch@richmond.org'
    },
    {
        id: 150,
        email: 'Ramiro_Kuhn@harmon.biz'
    },
    {
        id: 151,
        email: 'Cary@taurean.biz'
    },
    {
        id: 152,
        email: 'Tillman_Koelpin@luisa.com'
    },
    {
        id: 153,
        email: 'Aleen@tania.biz'
    },
    {
        id: 154,
        email: 'Durward@cindy.com'
    },
    {
        id: 155,
        email: 'Lester@chauncey.ca'
    },
    {
        id: 156,
        email: 'Telly_Lynch@karl.co.uk'
    },
    {
        id: 157,
        email: 'Makenzie@libbie.io'
    },
    {
        id: 158,
        email: 'Amiya@perry.us'
    },
    {
        id: 159,
        email: 'Meghan@akeem.tv'
    },
    {
        id: 160,
        email: 'Mitchel.Williamson@fletcher.io'
    },
    {
        id: 161,
        email: 'Ashlee_Jast@emie.biz'
    },
    {
        id: 162,
        email: 'Antwan@lori.ca'
    },
    {
        id: 163,
        email: 'Estelle@valentina.info'
    },
    {
        id: 164,
        email: 'Haylie@gino.name'
    },
    {
        id: 165,
        email: 'Blake_Spinka@robyn.info'
    },
    {
        id: 166,
        email: 'Aimee.Bins@braeden.ca'
    },
    {
        id: 167,
        email: 'Eloy@vladimir.com'
    },
    {
        id: 168,
        email: 'Gabrielle@jada.co.uk'
    },
    {
        id: 169,
        email: 'Lee@dawn.net'
    },
    {
        id: 170,
        email: 'Gideon.Hyatt@jalen.tv'
    },
    {
        id: 171,
        email: 'Gerda.Reynolds@ceasar.co.uk'
    },
    {
        id: 172,
        email: 'Ivah@brianne.net'
    },
    {
        id: 173,
        email: 'Ethyl_Bogan@candace.co.uk'
    },
    {
        id: 174,
        email: 'Janelle_Guann@americo.info'
    },
    {
        id: 175,
        email: 'Alfonzo.Barton@kelley.co.uk'
    }
    /*{
        id: 176,
        email: 'Esther@ford.me'
    },
    {
        id: 177,
        email: 'Naomie_Cronin@rick.co.uk'
    },
    {
        id: 178,
        email: 'Darryl@reginald.us'
    },
    {
        id: 179,
        email: 'Thea@aurelio.org'
    },
    {
        id: 180,
        email: 'Carolyn@eloisa.biz'
    },
    {
        id: 181,
        email: 'Milan.Schoen@cortney.io'
    },
    {
        id: 182,
        email: 'Sabrina@raymond.biz'
    },
    {
        id: 183,
        email: 'Hildegard@alford.ca'
    },
    {
        id: 184,
        email: 'Lowell.Pagac@omari.biz'
    },
    {
        id: 185,
        email: 'Vivianne@ima.us'
    },
    {
        id: 186,
        email: 'Yasmin.Prohaska@hanna.co.uk'
    },
    {
        id: 187,
        email: 'Ursula.Kirlin@eino.org'
    },
    {
        id: 188,
        email: 'Nichole_Bartoletti@mozell.me'
    },
    {
        id: 189,
        email: 'Lottie_Wyman@jasen.biz'
    },
    {
        id: 190,
        email: 'Dominique_Hermann@paige.ca'
    },
    {
        id: 191,
        email: 'Eugene@mohammed.net'
    },
    {
        id: 192,
        email: 'Janick@marty.me'
    },
    {
        id: 193,
        email: 'Alena@deron.name'
    },
    {
        id: 194,
        email: 'Alphonso_Rosenbaum@valentin.co.uk'
    },
    {
        id: 195,
        email: 'Frank@rosalind.name'
    },
    {
        id: 196,
        email: 'Jenifer_Lowe@reuben.ca'
    },
    {
        id: 197,
        email: 'Cecelia_Nitzsche@marty.com'
    },
    {
        id: 198,
        email: 'Christop_Friesen@jordan.me'
    },
    {
        id: 199,
        email: 'Cooper_Boehm@damian.biz'
    },
    {
        id: 200,
        email: 'Amir@kaitlyn.org'
    },
    {
        id: 201,
        email: 'Cleve@royal.us'
    },
    {
        id: 202,
        email: 'Donnell@polly.net'
    },
    {
        id: 203,
        email: 'Bonita@karl.biz'
    },
    {
        id: 204,
        email: 'Shea@angelina.biz'
    },
    {
        id: 205,
        email: 'Omari@veronica.us'
    },
    {
        id: 206,
        email: 'Sophie@antoinette.ca'
    },
    {
        id: 207,
        email: 'Jessika@crystel.ca'
    },
    {
        id: 208,
        email: 'Cesar_Volkman@letitia.biz'
    },
    {
        id: 209,
        email: 'Maureen_Mueller@lance.us'
    },
    {
        id: 210,
        email: 'Eriberto@geovany.ca'
    },
    {
        id: 211,
        email: 'Faustino.Keeling@morris.co.uk'
    },
    {
        id: 212,
        email: 'Viola@aric.co.uk'
    },
    {
        id: 213,
        email: 'Felton_Huel@terrell.biz'
    },
    {
        id: 214,
        email: 'Ferne_Bogan@angus.info'
    },
    {
        id: 215,
        email: 'Amy@reymundo.org'
    },
    {
        id: 216,
        email: 'Jaylan.Mayert@norbert.biz'
    },
    {
        id: 217,
        email: 'Cristina.DAmore@destini.biz'
    },
    {
        id: 218,
        email: 'Ettie_Bashirian@lambert.biz'
    },
    {
        id: 219,
        email: 'Lizeth@kellen.org'
    },
    {
        id: 220,
        email: 'Vladimir_Schumm@sharon.tv'
    },
    {
        id: 221,
        email: 'Madonna@will.com'
    },
    {
        id: 222,
        email: 'Cicero_Goldner@elenor.tv'
    },
    {
        id: 223,
        email: 'Zella@jan.net'
    },
    {
        id: 224,
        email: 'Robin_Jacobi@verdie.net'
    },
    {
        id: 225,
        email: 'Lawson@demarco.co.uk'
    },
    {
        id: 226,
        email: 'Benton@jayde.tv'
    },
    {
        id: 227,
        email: 'Melody@london.name'
    },
    {
        id: 228,
        email: 'Wyman.Swaniawski@marjorie.name'
    },
    {
        id: 229,
        email: 'Deborah@fletcher.co.uk'
    },
    {
        id: 230,
        email: 'Dario@barton.info'
    },
    {
        id: 231,
        email: 'Kelton_McKenzie@danial.us'
    },
    {
        id: 232,
        email: 'Itzel@fritz.io'
    },
    {
        id: 233,
        email: 'Jacquelyn_Kutch@kaya.co.uk'
    },
    {
        id: 234,
        email: 'Cheyanne.Schowalter@alycia.biz'
    },
    {
        id: 235,
        email: 'Macey@abbie.org'
    },
    {
        id: 236,
        email: 'Freeda.Kirlin@eddie.ca'
    },
    {
        id: 237,
        email: 'Jennifer.Rowe@zoe.org'
    },
    {
        id: 238,
        email: 'Providenci.Heller@lenna.info'
    },
    {
        id: 239,
        email: 'Emerald_Murazik@darrell.biz'
    },
    {
        id: 240,
        email: 'Joseph@corrine.com'
    },
    {
        id: 241,
        email: 'Lemuel@willow.name'
    },
    {
        id: 242,
        email: 'Sven@gudrun.info'
    },
    {
        id: 243,
        email: 'Jennifer@shania.ca'
    },
    {
        id: 244,
        email: 'Eldora@madge.com'
    },
    {
        id: 245,
        email: 'Litzy@kaylie.io'
    },
    {
        id: 246,
        email: 'Jaycee.Turner@euna.name'
    },
    {
        id: 247,
        email: 'Wilbert@cheyenne.ca'
    },
    {
        id: 248,
        email: 'Rebecca_Hessel@edna.net'
    },
    {
        id: 249,
        email: 'Christiana@lawrence.info'
    },
    {
        id: 250,
        email: 'Samara@shaun.org'
    },
    {
        id: 251,
        email: 'Ayden_Hickle@stephany.tv'
    },
    {
        id: 252,
        email: 'Carissa.Krajcik@jean.name'
    },
    {
        id: 253,
        email: 'Jayde@geovanny.io'
    },
    {
        id: 254,
        email: 'Ardella@khalid.biz'
    },
    {
        id: 255,
        email: 'Delta_Welch@carleton.tv'
    },
    {
        id: 256,
        email: 'Carlee_Heathcote@harley.tv'
    },
    {
        id: 257,
        email: 'Delpha_Cormier@raymond.org'
    },
    {
        id: 258,
        email: 'Glenna@caesar.org'
    },
    {
        id: 259,
        email: 'Hoyt_Dickens@napoleon.ca'
    },
    {
        id: 260,
        email: 'Wendell.Marvin@maegan.net'
    },
    {
        id: 261,
        email: 'Virgie@layne.org'
    },
    {
        id: 262,
        email: 'Tia@kirsten.info'
    },
    {
        id: 263,
        email: 'Marco@jennyfer.biz'
    },
    {
        id: 264,
        email: 'Taya@milan.biz'
    },
    {
        id: 265,
        email: 'Lenora@derrick.biz'
    },
    {
        id: 266,
        email: 'Carolina.Auer@polly.co.uk'
    },
    {
        id: 267,
        email: 'Jaylan.Braun@lane.us'
    },
    {
        id: 268,
        email: 'Javier.Dicki@damien.org'
    },
    {
        id: 269,
        email: 'Khalil_Sawayn@tanya.net'
    },
    {
        id: 270,
        email: 'Tom.Russel@pattie.org'
    },
    {
        id: 271,
        email: 'Ethelyn.Moore@gabe.info'
    },
    {
        id: 272,
        email: 'Evangeline_Kuvalis@santina.ca'
    },
    {
        id: 273,
        email: 'Orland@larry.name'
    },
    {
        id: 274,
        email: 'Micaela.Powlowski@saul.me'
    },
    {
        id: 275,
        email: 'Imelda_Klein@melany.biz'
    },
    {
        id: 276,
        email: 'Matt.Moen@gilda.org'
    },
    {
        id: 277,
        email: 'Rocky_Ullrich@rowena.name'
    },
    {
        id: 278,
        email: 'Natalia@caitlyn.ca'
    },
    {
        id: 279,
        email: 'Edythe@general.org'
    },
    {
        id: 280,
        email: 'Aglae@gerardo.name'
    },
    {
        id: 281,
        email: 'Bridie@pearl.ca'
    },
    {
        id: 282,
        email: 'Aglae_Goldner@madisyn.co.uk'
    },
    {
        id: 283,
        email: 'Owen_Moore@jeremy.org'
    },
    {
        id: 284,
        email: 'Jarred@dangelo.name'
    },
    {
        id: 285,
        email: 'Remington_Mohr@vincenza.me'
    },
    {
        id: 286,
        email: 'Marco.Langworth@zoie.org'
    },
    {
        id: 287,
        email: 'Sedrick@mertie.tv'
    },
    {
        id: 288,
        email: 'Caleigh@eleanore.org'
    },
    {
        id: 289,
        email: 'Paolo@cristopher.com'
    },
    {
        id: 290,
        email: 'Juana_Stamm@helmer.com'
    },
    {
        id: 291,
        email: 'Pascale@fleta.ca'
    },
    {
        id: 292,
        email: 'Molly_Kertzmann@tristin.me'
    },
    {
        id: 293,
        email: 'Kailee.Larkin@amina.org'
    },
    {
        id: 294,
        email: 'Earnest.Sanford@lane.us'
    },
    {
        id: 295,
        email: 'Abigail@trudie.com'
    },
    {
        id: 296,
        email: 'Name.Walter@zoie.me'
    },
    {
        id: 297,
        email: 'Norma@abraham.co.uk'
    },
    {
        id: 298,
        email: 'Norberto_Weimann@ford.tv'
    },
    {
        id: 299,
        email: 'Nelson@charlene.biz'
    },
    {
        id: 300,
        email: 'Letha@liliane.ca'
    },
    {
        id: 301,
        email: 'Tiana@jeramie.tv'
    },
    {
        id: 302,
        email: 'Lindsey@caitlyn.net'
    },
    {
        id: 303,
        email: 'Gregory.Kutch@shawn.info'
    },
    {
        id: 304,
        email: 'Murphy.Kris@casimer.me'
    },
    {
        id: 305,
        email: 'Isidro_Kiehn@cristina.org'
    },
    {
        id: 306,
        email: 'Kenton_Carter@yolanda.co.uk'
    },
    {
        id: 307,
        email: 'Amos_Rohan@mozelle.tv'
    },
    {
        id: 308,
        email: 'Timothy_Heathcote@jose.name'
    },
    {
        id: 309,
        email: 'Otilia.Daniel@elvie.io'
    },
    {
        id: 310,
        email: 'Toni@joesph.biz'
    },
    {
        id: 311,
        email: 'Brisa@carrie.us'
    },
    {
        id: 312,
        email: 'Jasen.Kihn@devon.biz'
    },
    {
        id: 313,
        email: 'Efren.Konopelski@madisyn.us'
    },
    {
        id: 314,
        email: 'Demetris.Bergnaum@fae.io'
    },
    {
        id: 315,
        email: 'Luella.Pollich@gloria.org'
    },
    {
        id: 316,
        email: 'Sister.Morissette@adelia.io'
    },
    {
        id: 317,
        email: 'Shyanne@rick.info'
    },
    {
        id: 318,
        email: 'Freeman.Dare@ada.name'
    },
    {
        id: 319,
        email: 'Donnell@orland.org'
    },
    {
        id: 320,
        email: 'Robin@gaylord.biz'
    },
    {
        id: 321,
        email: 'Danyka_Stark@jedidiah.name'
    },
    {
        id: 322,
        email: 'Margarita@casper.io'
    },
    {
        id: 323,
        email: 'Carlo@cortney.net'
    },
    {
        id: 324,
        email: 'Mina@nikita.tv'
    },
    {
        id: 325,
        email: 'Violette@naomi.tv'
    },
    {
        id: 326,
        email: 'Lauren.Hodkiewicz@jarret.info'
    },
    {
        id: 327,
        email: 'Ernestina@piper.biz'
    },
    {
        id: 328,
        email: 'Hettie_Morar@wiley.info'
    },
    {
        id: 329,
        email: 'Corbin.Hilll@modesto.biz'
    },
    {
        id: 330,
        email: 'Kenyatta@renee.io'
    },
    {
        id: 331,
        email: 'Don@cameron.co.uk'
    },
    {
        id: 332,
        email: 'Jovan@aaliyah.tv'
    },
    {
        id: 333,
        email: 'Jeanie.McGlynn@enoch.ca'
    },
    {
        id: 334,
        email: 'Garett_Gusikowski@abigale.me'
    },
    {
        id: 335,
        email: 'Doug@alana.co.uk'
    },
    {
        id: 336,
        email: 'Yoshiko@viviane.name'
    },
    {
        id: 337,
        email: 'Micaela_Bins@mertie.us'
    },
    {
        id: 338,
        email: 'Loy@gillian.me'
    },
    {
        id: 339,
        email: 'Tyrel@hunter.net'
    },
    {
        id: 340,
        email: 'Otilia.Schuppe@randal.com'
    },
    {
        id: 341,
        email: 'April@larissa.co.uk'
    },
    {
        id: 342,
        email: 'Glenna_Waters@retha.me'
    },
    {
        id: 343,
        email: 'Cordelia.Oberbrunner@peyton.com'
    },
    {
        id: 344,
        email: 'Zander@santino.net'
    },
    {
        id: 345,
        email: 'Camila_Runolfsdottir@tressa.tv'
    },
    {
        id: 346,
        email: 'Kirstin@tina.info'
    },
    {
        id: 347,
        email: 'Anthony.Koepp@savannah.tv'
    },
    {
        id: 348,
        email: 'Bradley.Lang@marilyne.tv'
    },
    {
        id: 349,
        email: 'Loren@aric.biz'
    },
    {
        id: 350,
        email: 'Arjun@natalie.ca'
    },
    {
        id: 351,
        email: 'Solon.Goldner@judah.org'
    },
    {
        id: 352,
        email: 'Nina@osbaldo.name'
    },
    {
        id: 353,
        email: 'Madaline@marlin.org'
    },
    {
        id: 354,
        email: 'Mike.Kozey@gladyce.us'
    },
    {
        id: 355,
        email: 'Orval.Treutel@arnold.me'
    },
    {
        id: 356,
        email: 'Trent@samir.net'
    },
    {
        id: 357,
        email: 'Ashleigh@annette.ca'
    },
    {
        id: 358,
        email: 'Douglas@anabel.org'
    },
    {
        id: 359,
        email: 'Lowell@mossie.com'
    },
    {
        id: 360,
        email: 'Jacquelyn@kristian.net'
    },
    {
        id: 361,
        email: 'Antwon@domenico.me'
    },
    {
        id: 362,
        email: 'Kenyon@retha.me'
    },
    {
        id: 363,
        email: 'Ben@elouise.net'
    },
    {
        id: 364,
        email: 'Madisen.Hauck@barney.co.uk'
    },
    {
        id: 365,
        email: 'Dock.Parker@roy.biz'
    },
    {
        id: 366,
        email: 'Pablo.Ritchie@tyrique.co.uk'
    },
    {
        id: 367,
        email: 'Sebastian_Gaylord@freda.org'
    },
    {
        id: 368,
        email: 'Lazaro@nadia.ca'
    },
    {
        id: 369,
        email: 'Jessy.Boyle@vernice.biz'
    },
    {
        id: 370,
        email: 'Mitchel@hal.co.uk'
    },
    {
        id: 371,
        email: 'Lindsay@kiley.name'
    },
    {
        id: 372,
        email: 'Erika.Murazik@jorge.me'
    },
    {
        id: 373,
        email: 'Olin@edmund.ca'
    },
    {
        id: 374,
        email: 'Lacey@novella.biz'
    },
    {
        id: 375,
        email: 'Sister@miller.net'
    },
    {
        id: 376,
        email: 'Raphaelle@miller.com'
    },
    {
        id: 377,
        email: 'Jaren.Schiller@augusta.org'
    },
    {
        id: 378,
        email: 'Nikko_Reynolds@harry.me'
    },
    {
        id: 379,
        email: 'Afton.Medhurst@mina.info'
    },
    {
        id: 380,
        email: 'Wilson.Nikolaus@fredrick.org'
    },
    {
        id: 381,
        email: 'Tomasa@lee.us'
    },
    {
        id: 382,
        email: 'Ally_Kassulke@rashad.ca'
    },
    {
        id: 383,
        email: 'Reagan_Ziemann@ross.io'
    },
    {
        id: 384,
        email: 'Angelita@sally.org'
    },
    {
        id: 385,
        email: 'Lonzo@lorena.org'
    },
    {
        id: 386,
        email: 'Alexandre@derrick.co.uk'
    },
    {
        id: 387,
        email: 'Judd@lucinda.ca'
    },
    {
        id: 388,
        email: 'Eleanora@karson.net'
    },
    {
        id: 389,
        email: 'Enrico_Feil@liana.biz'
    },
    {
        id: 390,
        email: 'Beverly@perry.org'
    },
    {
        id: 391,
        email: 'Corene_Mante@rory.com'
    },
    {
        id: 392,
        email: 'Emily_Flatley@ephraim.name'
    },
    {
        id: 393,
        email: 'Donna@frederik.com'
    },
    {
        id: 394,
        email: 'Kyleigh@ruben.org'
    },
    {
        id: 395,
        email: 'Noemy.Hammes@lisette.net'
    },
    {
        id: 396,
        email: 'Margarett_Jenkins@harley.us'
    },
    {
        id: 397,
        email: 'Dexter.Pacocha@lauren.biz'
    },
    {
        id: 398,
        email: 'Gennaro@jaunita.co.uk'
    },
    {
        id: 399,
        email: 'Jaycee@aimee.us'
    },
    {
        id: 400,
        email: 'Brennon@carmela.tv'
    },
    {
        id: 401,
        email: 'Vella.Mayer@colten.net'
    },
    {
        id: 402,
        email: 'Caleb_Dach@kathleen.us'
    },
    {
        id: 403,
        email: 'Patience_Bahringer@dameon.biz'
    },
    {
        id: 404,
        email: 'Destinee.Simonis@jose.tv'
    },
    {
        id: 405,
        email: 'Keshaun@brown.biz'
    },
    {
        id: 406,
        email: 'Merle.Schultz@marcel.org'
    },
    {
        id: 407,
        email: 'Malvina_Fay@louie.name'
    },
    {
        id: 408,
        email: 'Domenick_Douglas@gabe.us'
    },
    {
        id: 409,
        email: 'Isaac@allene.net'
    },
    {
        id: 410,
        email: 'Marianna.Pacocha@george.net'
    },
    {
        id: 411,
        email: 'Sister_Barton@lela.com'
    },
    {
        id: 412,
        email: 'Autumn.Lebsack@kasandra.ca'
    },
    {
        id: 413,
        email: 'Irma.OKon@arden.me'
    },
    {
        id: 414,
        email: 'Alaina_Hammes@carter.info'
    },
    {
        id: 415,
        email: 'Alia@addison.org'
    },
    {
        id: 416,
        email: 'Aurelie_McKenzie@providenci.biz'
    },
    {
        id: 417,
        email: 'May_Steuber@virgil.net'
    },
    {
        id: 418,
        email: 'Tessie@emilie.co.uk'
    },
    {
        id: 419,
        email: 'Priscilla@colten.org'
    },
    {
        id: 420,
        email: 'Aylin@abigale.me'
    },
    {
        id: 421,
        email: 'Holden@kenny.io'
    },
    {
        id: 422,
        email: 'Guillermo_Dare@dorothea.tv'
    },
    {
        id: 423,
        email: 'Oscar@pearline.com'
    },
    {
        id: 424,
        email: 'Jonathon_Feest@maxime.io'
    },
    {
        id: 425,
        email: 'Micah_Wolf@lennie.co.uk'
    },
    {
        id: 426,
        email: 'Shany@daisha.biz'
    },
    {
        id: 427,
        email: 'Drew_Lemke@alexis.net'
    },
    {
        id: 428,
        email: 'Karina.Donnelly@liam.com'
    },
    {
        id: 429,
        email: 'Ahmed_Runolfsson@claire.name'
    },
    {
        id: 430,
        email: 'Marilou_Halvorson@kane.io'
    },
    {
        id: 431,
        email: 'Bernie.Schoen@seamus.co.uk'
    },
    {
        id: 432,
        email: 'Joesph@darryl.net'
    },
    {
        id: 433,
        email: 'Timmothy.Corwin@augustus.co.uk'
    },
    {
        id: 434,
        email: 'Julien_OHara@vance.io'
    },
    {
        id: 435,
        email: 'Susan.Bartell@euna.org'
    },
    {
        id: 436,
        email: 'Selena.Quigley@johan.co.uk'
    },
    {
        id: 437,
        email: 'Clifton_Boehm@jacynthe.io'
    },
    {
        id: 438,
        email: 'Lizzie_Bartell@diamond.net'
    },
    {
        id: 439,
        email: 'Yasmeen@golda.ca'
    },
    {
        id: 440,
        email: 'Adolf.Russel@clark.ca'
    },
    {
        id: 441,
        email: 'Elian@matilda.me'
    },
    {
        id: 442,
        email: 'Salma@francis.net'
    },
    {
        id: 443,
        email: 'Orlando_Dickinson@vern.org'
    },
    {
        id: 444,
        email: 'Elda@orval.name'
    },
    {
        id: 445,
        email: 'Dennis@karley.net'
    },
    {
        id: 446,
        email: 'Jedediah@mason.io'
    },
    {
        id: 447,
        email: 'Maryam@jack.name'
    },
    {
        id: 448,
        email: 'Rick@carlos.tv'
    },
    {
        id: 449,
        email: 'Vallie@jerrod.net'
    },
    {
        id: 450,
        email: 'Adolph.Hayes@isobel.biz'
    },
    {
        id: 451,
        email: 'Duane_Dach@demario.us'
    },
    {
        id: 452,
        email: 'General@schuyler.org'
    },
    {
        id: 453,
        email: 'Stephania_Stanton@demond.biz'
    },
    {
        id: 454,
        email: 'Reinhold.Schiller@kelly.info'
    },
    {
        id: 455,
        email: 'Royce@jaiden.co.uk'
    },
    {
        id: 456,
        email: 'Cassie@diana.org'
    },
    {
        id: 457,
        email: 'Jena.OKeefe@adonis.net'
    },
    {
        id: 458,
        email: 'Magdalen@holly.io'
    },
    {
        id: 459,
        email: 'Nyah@otho.com'
    },
    {
        id: 460,
        email: 'Kara_Stokes@connie.co.uk'
    },
    {
        id: 461,
        email: 'Conner@daron.info'
    },
    {
        id: 462,
        email: 'Nathanael@jada.org'
    },
    {
        id: 463,
        email: 'Nicklaus@talon.io'
    },
    {
        id: 464,
        email: 'Jerald@laura.io'
    },
    {
        id: 465,
        email: 'Jamey_Dare@johnny.org'
    },
    {
        id: 466,
        email: 'Brant@yasmin.co.uk'
    },
    {
        id: 467,
        email: 'Adrianna_Howell@molly.io'
    },
    {
        id: 468,
        email: 'Amiya.Morar@emma.tv'
    },
    {
        id: 469,
        email: 'Destany@bailey.info'
    },
    {
        id: 470,
        email: 'Katarina.Wolff@joel.io'
    },
    {
        id: 471,
        email: 'Pearline@veda.ca'
    },
    {
        id: 472,
        email: 'Belle.Braun@otis.name'
    },
    {
        id: 473,
        email: 'Eliane@libby.net'
    },
    {
        id: 474,
        email: 'Trey.Harber@christop.biz'
    },
    {
        id: 475,
        email: 'Kailyn@ivory.info'
    },
    {
        id: 476,
        email: 'Amely.Kunde@rodrigo.co.uk'
    },
    {
        id: 477,
        email: 'Thaddeus.Halvorson@ruthe.ca'
    },
    {
        id: 478,
        email: 'Hannah@emma.ca'
    },
    {
        id: 479,
        email: 'Maryam.Mann@thelma.info'
    },
    {
        id: 480,
        email: 'Michel@keira.us'
    },
    {
        id: 481,
        email: 'Domenick@russell.ca'
    },
    {
        id: 482,
        email: 'Chanelle@samson.me'
    },
    {
        id: 483,
        email: 'Hermann.Kunde@rosina.us'
    },
    {
        id: 484,
        email: 'Olen@bryce.net'
    },
    {
        id: 485,
        email: 'Lorenza.Carter@consuelo.ca'
    },
    {
        id: 486,
        email: 'Lamont@georgiana.biz'
    },
    {
        id: 487,
        email: 'Colin_Gutkowski@muriel.net'
    },
    {
        id: 488,
        email: 'Albert@johnny.biz'
    },
    {
        id: 489,
        email: 'Hilma.Kutch@ottilie.info'
    },
    {
        id: 490,
        email: 'Donnie@alfreda.biz'
    },
    {
        id: 491,
        email: 'Maxwell@adeline.me'
    },
    {
        id: 492,
        email: 'Amina@emmet.org'
    },
    {
        id: 493,
        email: 'Gilda@jacques.org'
    },
    {
        id: 494,
        email: 'Kadin@walter.io'
    },
    {
        id: 495,
        email: 'Alice_Considine@daren.com'
    },
    {
        id: 496,
        email: 'Zola@lizzie.com'
    },
    {
        id: 497,
        email: 'Dolly@mandy.co.uk'
    },
    {
        id: 498,
        email: 'Davion@eldora.net'
    },
    {
        id: 499,
        email: 'Wilburn_Labadie@araceli.name'
    },
    {
        id: 500,
        email: 'Emma@joanny.ca'
    }*/
];

export const MOCK_DUAL_OPTIONS_PRESET: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon'},
    {id: 2, title: 'Petey Cruiser'},
    {id: 3, title: 'Anna Sthesia'},
    {id: 4, title: 'Paul Molive'}
];

export const MOCK_DUAL_OPTIONS_PRESET_DISABLED: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon', isDisabled: true},
    {id: 2, title: 'Petey Cruiser', isDisabled: true},
    {id: 3, title: 'Anna Sthesia', isDisabled: true},
    {id: 4, title: 'Paul Molive', isDisabled: true}
];

export const MOCK_DUAL_OPTIONS: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon'},
    {id: 2, title: 'Petey Cruiser'},
    {id: 3, title: 'Anna Sthesia'},
    {id: 4, title: 'Paul Molive'},
    {id: 5, title: 'Anna Mull'},
    {id: 6, title: 'Gail Forcewind'},
    {id: 7, title: 'Paige Turner'},
    {id: 8, title: 'Bob Frapples'},
    {id: 9, title: 'Walter Melon'},
    {id: 10, title: 'Nick R. Bocker'},
    {id: 11, title: 'Barb Ackue'},
    {id: 12, title: 'Buck Kinnear'},
    {id: 13, title: 'Greta Life'},
    {id: 14, title: 'Ira Membrit'},
    {id: 15, title: 'Shonda Leer'},
    {id: 16, title: 'Brock Lee'},
    {id: 17, title: 'Maya Didas'},
    {id: 18, title: 'Rick O`Shea'},
    {id: 19, title: 'Pete Sariya'},
    {id: 20, title: 'Monty Carlo'},
    {id: 21, title: 'Mario Speed'},
    {id: 22, title: 'Harry Potter'},
    {id: 23, title: 'Ron Wisely'},
    {id: 24, title: 'Severus Snape'},
    {id: 25, title: 'Hermione Granger'},
    {id: 26, title: 'Tom Hanks'},
    {id: 27, title: 'The Rock'},
    {id: 28, title: 'Tom Hardy'},
    {id: 29, title: 'Tom Hiddleston'},
    {id: 30, title: 'Captain America'},
    {id: 31, title: 'Black Panther'},
    {id: 32, title: 'Black Widow'},
    {id: 33, title: 'Green Lantern'},
    {id: 34, title: 'Chris Evans'},
    {id: 35, title: 'Robert Downey Jr.'},
    {id: 36, title: 'Robert Redford'},
    {id: 37, title: 'Winter Soldier'},
    {id: 38, title: 'Bucky Barnes'},
    {id: 39, title: 'Sam Wilson'},
    {id: 40, title: 'Bruce Banner'}
];

export const MOCK_DUAL_OPTIONS_DISABLED: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon', isDisabled: true},
    {id: 2, title: 'Petey Cruiser', isDisabled: true},
    {id: 3, title: 'Anna Sthesia', isDisabled: true},
    {id: 4, title: 'Paul Molive', isDisabled: true},
    {id: 5, title: 'Anna Mull'},
    {id: 6, title: 'Gail Forcewind'},
    {id: 7, title: 'Paige Turner'},
    {id: 8, title: 'Bob Frapples'},
    {id: 9, title: 'Walter Melon'},
    {id: 10, title: 'Nick R. Bocker'},
    {id: 11, title: 'Barb Ackue'},
    {id: 12, title: 'Buck Kinnear'},
    {id: 13, title: 'Greta Life'},
    {id: 14, title: 'Ira Membrit'},
    {id: 15, title: 'Shonda Leer'},
    {id: 16, title: 'Brock Lee'},
    {id: 17, title: 'Maya Didas'},
    {id: 18, title: 'Rick O`Shea'},
    {id: 19, title: 'Pete Sariya'},
    {id: 20, title: 'Monty Carlo'},
    {id: 21, title: 'Mario Speed'},
    {id: 22, title: 'Harry Potter'},
    {id: 23, title: 'Ron Wisely'},
    {id: 24, title: 'Severus Snape'},
    {id: 25, title: 'Hermione Granger'},
    {id: 26, title: 'Tom Hanks'},
    {id: 27, title: 'The Rock'},
    {id: 28, title: 'Tom Hardy'},
    {id: 29, title: 'Tom Hiddleston'},
    {id: 30, title: 'Captain America'},
    {id: 31, title: 'Black Panther'},
    {id: 32, title: 'Black Widow'},
    {id: 33, title: 'Green Lantern'},
    {id: 34, title: 'Chris Evans'},
    {id: 35, title: 'Robert Downey Jr.'},
    {id: 36, title: 'Robert Redford'},
    {id: 37, title: 'Winter Soldier'},
    {id: 38, title: 'Bucky Barnes'},
    {id: 39, title: 'Sam Wilson'},
    {id: 40, title: 'Bruce Banner'}
];

export const MOCK_DUAL_OPTIONS_DISABLE_All_ITEMS: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon', isDisabled: true},
    {id: 2, title: 'Petey Cruiser', isDisabled: true},
    {id: 3, title: 'Anna Sthesia', isDisabled: true},
    {id: 4, title: 'Paul Molive', isDisabled: true},
    {id: 5, title: 'Anna Mull', isDisabled: true},
    {id: 6, title: 'Gail Forcewind', isDisabled: true},
    {id: 7, title: 'Paige Turner', isDisabled: true},
    {id: 8, title: 'Bob Frapples', isDisabled: true},
    {id: 9, title: 'Walter Melon', isDisabled: true},
    {id: 10, title: 'Nick R. Bocker', isDisabled: true},
    {id: 11, title: 'Barb Ackue', isDisabled: true},
    {id: 12, title: 'Buck Kinnear', isDisabled: true},
    {id: 13, title: 'Greta Life', isDisabled: true},
    {id: 14, title: 'Ira Membrit', isDisabled: true},
    {id: 15, title: 'Shonda Leer', isDisabled: true},
    {id: 16, title: 'Brock Lee', isDisabled: true},
    {id: 17, title: 'Maya Didas', isDisabled: true},
    {id: 18, title: 'Rick O`Shea', isDisabled: true},
    {id: 19, title: 'Pete Sariya', isDisabled: true},
    {id: 20, title: 'Monty Carlo', isDisabled: true},
    {id: 21, title: 'Mario Speed', isDisabled: true},
    {id: 22, title: 'Harry Potter', isDisabled: true},
    {id: 23, title: 'Ron Wisely', isDisabled: true},
    {id: 24, title: 'Severus Snape', isDisabled: true},
    {id: 25, title: 'Hermione Granger', isDisabled: true},
    {id: 26, title: 'Tom Hanks', isDisabled: true},
    {id: 27, title: 'The Rock', isDisabled: true},
    {id: 28, title: 'Tom Hardy', isDisabled: true},
    {id: 29, title: 'Tom Hiddleston', isDisabled: true},
    {id: 30, title: 'Captain America', isDisabled: true},
    {id: 31, title: 'Black Panther', isDisabled: true},
    {id: 32, title: 'Black Widow', isDisabled: true},
    {id: 33, title: 'Green Lantern', isDisabled: true},
    {id: 34, title: 'Chris Evans', isDisabled: true},
    {id: 35, title: 'Robert Downey Jr.', isDisabled: true},
    {id: 36, title: 'Robert Redford', isDisabled: true},
    {id: 37, title: 'Winter Soldier', isDisabled: true},
    {id: 38, title: 'Bucky Barnes', isDisabled: true},
    {id: 39, title: 'Sam Wilson', isDisabled: true},
    {id: 40, title: 'Bruce Banner', isDisabled: true}
];

export const MOCK_DUAL_OPTIONS_DYNAMIC: DropdownOption[] = [
    {
        id: 1,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 1'
                }
            }
        }
    },
    {
        id: 2,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 2'
                }
            }
        }
    },
    {
        id: 3,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 3'
                }
            }
        }
    },
    {
        id: 4,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 4'
                }
            }
        }
    },
    {
        id: 5,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 5'
                }
            }
        }
    },
    {
        id: 6,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 6'
                }
            }
        }
    },
    {
        id: 7,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 7'
                }
            }
        }
    },
    {
        id: 8,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 8'
                }
            }
        }
    },
    {
        id: 9,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 9'
                }
            }
        }
    },
    {
        id: 10,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 10'
                }
            }
        }
    },
    {
        id: 11,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 11'
                }
            }
        }
    }
];

export const dynamicDisplayItemBackendPagination = {
    id: 0,
    content: {
        component: {
            type: DropdownCustomPlaceholderComponent as Type<Component>,
            data: {
                text: ''
            }
        }
    }
};
