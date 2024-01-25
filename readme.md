# O aplikaci

Aplikace sbírá a zobrazuje data o stavu pacientů.

## Instalace

[![Youtube návod](yt.png "YT návod")](https://www.youtube.com/watch?v=7SyqFDT-zjM)

Pro instalaci je potřeba mít nainstalovaný [Node.js](https://nodejs.org/en/)

1. Stáhněte si zdrojové kódy pomocí `git clone https://github.com/jaroslavhuss/healthtracker` nebo si stáhněte zip soubor z [Repozitáře](https://github.com/jaroslavhuss/healthtracker)
2. V kořenovém adresáři nainstalujte závislosti pro aplikační logiku i front-end pomocí `npm install`
3. Aplikace používá dokumentovou databázi MongoDB. MongoDB lze mít nainstalovaný lokálně (https://www.mongodb.com/docs/manual/installation/), pomocí Dockeru (https://hub.docker.com/_/mongo/) a nebo pomocí MongoAtlas, kde si lze vytvořit databázi zdarma (https://www.mongodb.com/cloud/atlas). **Upozorňuji, že sdílení pacientských dat s cloudovou verzi MongoAtlas je z hlediska GDPR problematické.**
4. Do složky aplikace ` apps/api/` je potřeba přidat soubor .env, který obsahuje základní nastavení instance aplikace. Příklad souboru ` apps/api/.env` je níže.

```bash
JWT_SECRET = 5f4dcc3b5aa765d61d8327deb882cf99
JWT_REFRESH_SECRET = 5f4dcc3b5aa765d61d8327deb882cf99
JWT_EXPIRE = 120min
JWT_EXPIRE_REFRESH = 7d
DATABASE_URL = mongodb://localhost:27017/myoms
PORT = 5006
```

Berte prosím za nesmírně důležité změnu hodnot u JWT_SECRET a JWT_REFRESH_SECRET. Tyto hodnoty jsou použity pro šifrování a dešifrování JWT tokenů. Hodnoty můžete vygenerovat pomocí `openssl rand -hex 40`.

### Spuštění produkční verze

Na produkčním spouštění verze se pracuje.

## Pokud se vyskytnou problémy

Pokud se vyskytnou problémy, můžete vytvořit issue v tomto repozitáři. Také mě můžete kontaktovat na emailu jaroslav.huss@gmail.com

## npm audit

Závislosti aplikace jsou zkontrolovány pomocí `npm audit`. Výsledek kontroly je na obrázku níže.
![Zranitelnost aplikace](npm_audit.png "Zranitelnost aplikace")

## Licence

MIT Licence

Tento software a přidružené dokumentační soubory (dále jen "Software") jsou poskytovány zdarma každé osobě, která získá kopii tohoto softwaru a přidružených dokumentačních souborů, za podmínek uvedených níže:

Je povoleno používat, kopírovat, upravovat, slučovat, publikovat, distribuovat, sublicencovat a/nebo prodávat kopie tohoto softwaru a povoleno je také povolit osobám, kterým je Software poskytnut, aby tak činily, za předpokladu, že následující podmínky jsou splněny:

Všechny kopie nebo podstatné části tohoto softwaru musí obsahovat výše uvedené autorská práva a toto povolení.

SOFTWARE JE POSKYTOVÁN "TAK JAK JE", BEZ ZÁRUKY JAKÉHOKOLIV DRUHU, VÝSLOVNÉ NEBO PŘEDPOKLÁDANÉ, VČETNĚ, ALE NEJEN, ZÁRUKY OBCHODOVATELNOSTI, VHODNOSTI PRO URČITÝ ÚČEL A NEPORUŠOVÁNÍ AUTORSKÝCH PRÁV. V ŽÁDNÉM PŘÍPADĚ NEBUDE AUTOR NEBO DRŽITEL AUTORSKÝCH PRÁV ODPOVĚDNÝ ZA JAKÉKOLIV NÁROKY, ŠKODY NEBO JINOU ODPOVĚDNOST, BUĎTO V DŮSLEDKU SMLUVNÍHO VZTAHU, DELIKTU NEBO JINAK, VYPLÝVAJÍCÍ Z, NEBO V SOUVISLOSTI S SOFTWAREM NEBO POUŽÍVÁNÍM NEBO JINÝMI ČINNOSTMI V SOUVISLOSTI S SOFTWAREM.

---

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
