# Флаги регионов России

![GitHub release (latest by date)](https://img.shields.io/github/v/release/vnau/blazon)

Коллекция изображений флагов 85 субъектов Российской Федерации в форматах PNG и SVG.

Исходные файлы получены из Wikipedia. Все изображения приведены к соотношению сторон 3x2 и оптимизированы.

Файлы именуются в соответствии с буквенными кодами субъектов РФ стандарта [ISO 3166-2](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D1%8B_%D1%81%D1%83%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8), за исключением кодов Республики Крым и Севастополя (используются коды CR и SEV соответственно).

Согласно статье 1259 части 4 Гражданского кодекса РФ, ФЗ №230 от 18 декабря 2006г, государственные символы и знаки (флаги, гербы, ордена, денежные знаки и тому подобное), а также символы и знаки муниципальных образований не являются объектами авторских прав.

## Использование

Для упрощения интеграции применяется один из четырёх файлов CSS:
* `blazon-flags-ru-xs.css` - флаги в размере xs, встроенные в CSS
* `blazon-flags-ru-png.css` - флаги в виде спрайтов в формате PNG в пяти размерах: xs, sm, md, lg, xl
* `blazon-flags-ru-svg.css` - флаги в формате SVG
* `blazon-flags-ru.css` - интеграция флагов как в формате PNG, так и SVG

Для встраивания флага в растре добавьте классы `blazon-flag` и `flag-ru-XXX`, где XXX - код необходимого региона. 
Например, для Москвы:
```html
<i class="blazon-flag flag-ru-mow"></i>
```
Для встраивания флага в SVG вместо класса `blazon-flag` используйте `blazon-flagv`.

Возможен выбор одного из пяти размеров путём добавления классов `blazon-xs`, `blazon-sm`, `blazon-md`, `blazon-lg`, `blazon-xl`.
Кроме того, можно добавить флагу эффект глянца классом `blazon-glossy`.

Пример для встраивания крупного флага Новгородской области в SVG с эффектом глянца:
```html
<i class="blazon-flagv blazon-xl blazon-glossy flag-ru-ngr"></i>
```

<p float="left">
    <img alt="Республика Адыгея" src="flags/md/ru/ad.png"/>
    <img alt="Башкортостан" src="flags/md/ru/ba.png"/>
    <img alt="Республика Бурятия" src="flags/md/ru/bu.png"/>
    <img alt="Республика Алтай" src="flags/md/ru/al.png"/>
    <img alt="Республика Дагестан" src="flags/md/ru/da.png"/>
    <img alt="Республика Ингушетия" src="flags/md/ru/in.png"/>
    <img alt="Кабардино-Балкария" src="flags/md/ru/kb.png"/>
    <img alt="Республика Калмыкия" src="flags/md/ru/kl.png"/>
    <img alt="Карачаево-Черкесия" src="flags/md/ru/kc.png"/>
    <img alt="Республика Карелия" src="flags/md/ru/kr.png"/>
    <img alt="Республика Коми" src="flags/md/ru/ko.png"/>
    <img alt="Марий Эл" src="flags/md/ru/me.png"/>
    <img alt="Мордовия" src="flags/md/ru/mo.png"/>
    <img alt="Республика Саха (Якутия)" src="flags/md/ru/sa.png"/>
    <img alt="Северная Осетия - Алания" src="flags/md/ru/se.png"/>
    <img alt="Татарстан" src="flags/md/ru/ta.png"/>
    <img alt="Республика Тыва" src="flags/md/ru/ty.png"/>
    <img alt="Удмуртская Республика" src="flags/md/ru/ud.png"/>
    <img alt="Республика Хакасия" src="flags/md/ru/kk.png"/>
    <img alt="Чеченская Республика" src="flags/md/ru/ce.png"/>
    <img alt="Чувашия" src="flags/md/ru/cu.png"/>
    <img alt="Алтайский край" src="flags/md/ru/alt.png"/>
    <img alt="Краснодарский край" src="flags/md/ru/kda.png"/>
    <img alt="Красноярский край" src="flags/md/ru/kya.png"/>
    <img alt="Приморский край" src="flags/md/ru/pri.png"/>
    <img alt="Ставропольский край" src="flags/md/ru/sta.png"/>
    <img alt="Хабаровский край" src="flags/md/ru/kha.png"/>
    <img alt="Амурская область" src="flags/md/ru/amu.png"/>
    <img alt="Архангельская область" src="flags/md/ru/ark.png"/>
    <img alt="Астраханская область" src="flags/md/ru/ast.png"/>
    <img alt="Белгородская область" src="flags/md/ru/bel.png"/>
    <img alt="Брянская область" src="flags/md/ru/bry.png"/>
    <img alt="Владимирская область" src="flags/md/ru/vla.png"/>
    <img alt="Волгоградская область" src="flags/md/ru/vgg.png"/>
    <img alt="Вологодская область" src="flags/md/ru/vlg.png"/>
    <img alt="Воронежская область" src="flags/md/ru/vor.png"/>
    <img alt="Ивановская область" src="flags/md/ru/iva.png"/>
    <img alt="Иркутская область" src="flags/md/ru/irk.png"/>
    <img alt="Калининградская область" src="flags/md/ru/kgd.png"/>
    <img alt="Калужская область" src="flags/md/ru/klu.png"/>
    <img alt="Камчатский край" src="flags/md/ru/kam.png"/>
    <img alt="Кемеровская область" src="flags/md/ru/kem.png"/>
    <img alt="Кировская область" src="flags/md/ru/kir.png"/>
    <img alt="Костромская область" src="flags/md/ru/kos.png"/>
    <img alt="Курганская область" src="flags/md/ru/kgn.png"/>
    <img alt="Курская область" src="flags/md/ru/krs.png"/>
    <img alt="Ленинградская область" src="flags/md/ru/len.png"/>
    <img alt="Липецкая область" src="flags/md/ru/lip.png"/>
    <img alt="Магаданская область" src="flags/md/ru/mag.png"/>
    <img alt="Московская область" src="flags/md/ru/mos.png"/>
    <img alt="Мурманская область" src="flags/md/ru/mur.png"/>
    <img alt="Нижегородская область" src="flags/md/ru/niz.png"/>
    <img alt="Новгородская область" src="flags/md/ru/ngr.png"/>
    <img alt="Новосибирская область" src="flags/md/ru/nvs.png"/>
    <img alt="Омская область" src="flags/md/ru/oms.png"/>
    <img alt="Оренбургская область" src="flags/md/ru/ore.png"/>
    <img alt="Орловская область" src="flags/md/ru/orl.png"/>
    <img alt="Пензенская область" src="flags/md/ru/pnz.png"/>
    <img alt="Пермский край" src="flags/md/ru/per.png"/>
    <img alt="Псковская область" src="flags/md/ru/psk.png"/>
    <img alt="Ростовская область" src="flags/md/ru/ros.png"/>
    <img alt="Рязанская область" src="flags/md/ru/rya.png"/>
    <img alt="Самарская область" src="flags/md/ru/sam.png"/>
    <img alt="Саратовская область" src="flags/md/ru/sar.png"/>
    <img alt="Сахалинская область" src="flags/md/ru/sak.png"/>
    <img alt="Свердловская область" src="flags/md/ru/sve.png"/>
    <img alt="Смоленская область" src="flags/md/ru/smo.png"/>
    <img alt="Тамбовская область" src="flags/md/ru/tam.png"/>
    <img alt="Тверская область" src="flags/md/ru/tve.png"/>
    <img alt="Томская область" src="flags/md/ru/tom.png"/>
    <img alt="Тульская область" src="flags/md/ru/tul.png"/>
    <img alt="Тюменская область" src="flags/md/ru/tyu.png"/>
    <img alt="Ульяновская область" src="flags/md/ru/uly.png"/>
    <img alt="Челябинская область" src="flags/md/ru/che.png"/>
    <img alt="Забайкальский край" src="flags/md/ru/zab.png"/>
    <img alt="Ярославская область" src="flags/md/ru/yar.png"/>
    <img alt="Москва" src="flags/md/ru/mow.png"/>
    <img alt="Санкт-Петербург" src="flags/md/ru/spe.png"/>
    <img alt="Еврейская автономная область" src="flags/md/ru/yev.png"/>
    <img alt="Ненецкий автономный округ" src="flags/md/ru/nen.png"/>
    <img alt="Ханты-Мансийский АО" src="flags/md/ru/khm.png"/>
    <img alt="Чукотский автономный округ" src="flags/md/ru/chu.png"/>
    <img alt="Ямало-Ненецкий АО" src="flags/md/ru/yan.png"/>
    <img alt="Республика Крым" src="flags/md/ru/cr.png"/>
    <img alt="Севастополь" src="flags/md/ru/sev.png"/>
</p>
