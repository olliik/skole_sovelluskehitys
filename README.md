# skole_sovelluskehitys
School project, server+vue client / MERN-stack

Verkko-ohjelmointi ja sovelluskehitys kurssien harjoitustyö.

# Verkko-ohelmointi - backend
Verkko-ohjelmoinnin harjoitustyönä toimii repon juurikansio poislukien "vueapp". Entrypoint on app.js.
Palvelimelle on toteutettu REST rajapinta, jota hyödynnetään clientin päässä MongoDB-tietokantaan tehtäviin CRUD operaatioihin ja autentikointiin. Controllers, models ja routes hakemistot on olennaisimmat. (Views, public ei käytössä -> vueapp).


# Sovelluskehitys - frontend
Repon juuressa löytyy "vueapp" kansio, jonka alta löytyy sovelluskehitys kurssia varten toteutettu vue app.
Sovelluksen päätarkoitus on käyttäjäkohtainen elokuvien arvostelu systeemi ja watchlist(hieman kesken)-ominaisuus.
 - /vueapp/src/main.js on sovelluksen pää vue-instanssi.
 - /vueapp/src/router.js vue-router määritelmät -> pathia/url:ia vastaavat componentit löytyvät /src/views -hakemistosta.
 - /vueapp/src/auth.js toinen vue-instanssi jossa hoidetaan käyttäjän tilan hallinta. (context/globaali pääsy käyttäjän tietoihin).
 - /src/views/ kansiosta löytyy sovelluksen eri sivut (katso router)
 - /src/components/ kansiosta löytyy sivuilla käytetyt komponentit.
 - /src/helpers/ kansiosta löytyy palvelimien rajapintoihin käytettävät metodit.
