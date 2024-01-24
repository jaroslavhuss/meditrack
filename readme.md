# O aplikaci

Aplikace sbírá a zobrazuje data o stavu pacientů.

## Instalace

<iframe width="560" height="315" src="https://www.youtube.com/embed/7SyqFDT-zjM?si=557f_u6ZSGp8iSDH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
