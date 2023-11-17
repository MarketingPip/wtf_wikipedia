import getResult from '../../src/_fetch/getResult.js'
import test from 'tape'

test('parse a normal case', (t) => {
  const options = {
    "domain": "liquipedia.net",
    "path": "counterstrike/api.php",
    "follow_redirects": true,
    "Api-User-Agent": "wtf_wikipedia test script - <spencermountain@gmail.com>",
    "title": "Team_Liquid"
  }

  const response = {
  "batchcomplete": "",
  "query": {
    "normalized": [
      {
        "from": "Team_Liquid",
        "to": "Team Liquid"
      }
    ],
    "pages": {
      "19571": {
        "pageid": 19571,
        "ns": 0,
        "title": "Team Liquid",
        "revisions": [
          {
            "revid": 2619779,
            "parentid": 2614712,
            "slots": {
              "main": {
                "contentmodel": "wikitext",
                "contentformat": "text/x-wiki",
                "*": "{{Liquipedia links/Team Liquid}}\n{{Person Tabs|team=1}}\n{{Infobox team\n|name=Team Liquid\n|image=Team Liquid 2023 lightmode.png\n|imagedarkmode=Team Liquid 2023 darkmode.png\n|location=Netherlands\n|location2=Europe\n|region=Europe\n|founders={{flag/nl}} [[starcraft2:Nazgul|Nazgul]]\n|ceo={{flag/nl}} [[starcraft2:Nazgul|Nazgul]]<br>{{flag/us}} Steve Arhancet\n|manager={{flag/ca}} John Lewis<br>{{flag/us}} [[jokasteve]]\n|igl={{flag/lv}} [[YEKINDAR]]\n|coaches={{flag/ca}} [[daps]]\n|analysts={{flag/us}} [[DeMars DeRover]]\n|csgo=y\n|website=https://www.teamliquid.com\n|twitter=TeamLiquidCS\n|facebook=teamliquid\n|instagram=teamliquid\n|youtube=teamliquid\n|vk=teamliquid\n|weibo=teamliquid\n|twitch=team/teamliquid\n|esea=\n|faceit=fdfd53ba-b212-447f-a0d2-fda182e83566\n|privsteam=teamliquid-pro\n|created={{Org}}: 2000-??-??<br>{{CSGO}}: 2015-01-13\n}}\n\n\n'''Team Liquid''' is a professional esports organization founded in the [[:category:Netherlands|Netherlands]] in 2000. Originally a ''[[starcraft:StarCraft|StarCraft: Brood War]]'' clan, the team switched to ''[[starcraft2:StarCraft|StarCraft II]]'' during the beta in 2010, and became one of the most successful foreign teams. On January 13, 2015, it was announced that the team had formed a ''[[Counter-Strike: Global Offensive]]'' division. <ref name=\"TL 2015\">{{cite web|url=https://www.teamliquid.com/news/2015/01/13/introducing-counter-strike-global-offensive|title=Introducing Counter-Strike: Global Offensive|date=2015-01-13|author=[[jokasteve]]|publisher='''Team Liquid'''}}</ref>\n\n==History==\n{{See also|Team Liquid/History|l1=History of Team Liquid}}\n\n===Timeline===\n{{Tabs dynamic\n|name1=2015\n|name2=2016\n|name3=2017\n|name4=2018\n|name5=2020\n|name6=2021\n|name7=2022\n|name8=2023\n|This=8\n\n|content1=\n* January 13th - '''Team Liquid''' enter ''[[Counter-Strike: Global Offensive]]'' by signing [[Chill guys]], a lineup consisting of [[adreN (American player)|adreN]], [[daps]], [[FugLy]], [[NAF]] and [[nitr0]]. Additionally, they sign [[Warden]] as coach. <ref name=\"TL 2015\"/>\n* March 16th - '''Team Liquid''' part ways with [[Warden]]. <ref name=\"-Warden\">{{cite web|url=https://play.esea.net/teams/67926/roster|title=Play - Teams - Team Liquid - Roster|publisher=[[ESEA]]}}</ref>\n* March 22nd - '''Team Liquid''' bench [[NAF]] and sign [[EliGE]] as his replacement. <ref name=\"+EliGE\">{{cite web|url=https://www.teamliquid.com/news/2015/03/23/elige-joins-team-liquids-csgo-team|title=EliGE joins Team Liquid's CS:GO team|date=2015-03-22|publisher='''Team Liquid'''}}</ref>\n* May 11th - [[NAF]] is acquired by [[Luminosity Gaming]]. <ref name=\"-NAF\">{{cite web|url=https://www.hltv.org/n/14954|title=Luminosity sign NAF-FLY|date=2015-05-11|author=[[MIRAA]]|publisher=[[HLTV]]}}</ref>\n* May 25th - '''Team Liquid''' sign [[flowsicK]]. <ref name=\"+flowsicK\">{{cite web|url=https://www.hltv.org/n/15040|title=flowsicK signs for Liquid|date=2015-05-25|author=[[MIRAA]]|publisher=[[HLTV]]}}</ref>\n* June 2nd - '''Team Liquid''' part ways with [[daps]] upon the expiration of his contract. <ref name=\"-daps\">{{cite web|url=http://www.twitlonger.com/show/n_1smgc7b|title=Today my contract with Team Liquid has officially ended|date=2015-06-02|author=[[daps]]}}</ref>\n* September 3rd - '''Team Liquid''' part ways with [[flowsicK]] and [[dmode]] and sign [[Hiko]] and [[GBJame^s]], the latter as coach. <ref name=\"+Hiko\">{{cite web|url=https://www.teamliquid.com/news/2015/09/03/hiko-and-gbjames-joining-our-ranks|date=2015-09-03|title=Hiko and GBJames joining our ranks|publisher='''Team Liquid'''}}</ref>\n* September 20th - '''Team Liquid''' sign [[KJ]] as the team's analyst. <ref name=\"kj\">{{inside source|source=KJ}}</ref>\n\n|content2=\n* January 2nd - '''Team Liquid''' part ways with [[FugLy]] and sign [[s1mple]] as his replacement. <ref name=\"+s1mple\">{{cite web|url=https://www.teamliquid.com/news/2016/01/02/a-s1mple-pickup|date=2016-01-02|title=A s1mple pickup|author=[[Bumblebee]]|publisher='''Team Liquid'''}}</ref>\n* February 21st - '''Team Liquid''' bench [[adreN_(American player)|adreN]] and sign [[koosta]] as his replacement. <ref name=\"+koosta\">{{cite web|url=https://www.hltv.org/n/17139|date=2016-02-21|title=Official: Liquid sign koosta|author=[[Striker (Czech journalist)|Striker]]|publisher=[[HLTV]]}}</ref>\n* April 6th - '''Team Liquid''' part ways with [[KJ]]. <ref name=\"-KJ\">{{cite web|url=https://twitter.com/KJcsgo/status/717871117600305152|date=2016-04-06|title=Officially left @TeamLiquidPro|author=[[KJ]]}}</ref>\n* April 21st - '''Team Liquid''' bench [[s1mple]] by mutual agreement and reinstate [[adreN (American player)|adreN]] to the starting lineup. <ref name=\"s1mple bench\">{{cite web|url=https://www.hltv.org/n/17611|date=2016-04-21|title=s1mple to seek new European team|author=[[stich]]|publisher=[[HLTV]]}}</ref>\n* April 23rd - '''Team Liquid''' part ways with [[GBJame^s]]. <ref name=\"-Jame^s\">{{cite web|url=https://www.hltv.org/n/17631|date=2016-04-23|title=Jame^s parts ways with Liquid|author=[[Striker (Czech journalist)|Striker]]|publisher=[[HLTV]]}}</ref>\n* May 17th - '''Team Liquid''' sign [[peacemaker]] as coach. <ref name=\"+peacemaker\">{{cite web|url=https://www.teamliquid.com/news/2016/05/17/peacemaker-to-coach-liquid|date=2016-05-17|title=Peacemaker to Coach Liquid|author=[[starcraft2:Nazgul|Nazgul]]|publisher='''Team Liquid'''}}</ref>\n* June 6th - '''Team Liquid''' part ways with [[adreN (American player)|adreN]]. <ref name=\"-adreN\">{{cite web|url=https://www.hltv.org/n/17966|date=2016-06-06|title=s1mple returns to Liquid roster|author=[[MIRAA]]|publisher=[[HLTV]]}}</ref>\n* June 13th - '''Team Liquid''' and [[Counter Logic Gaming]] swap [[koosta]] and [[jdm64]]. <ref name=\"+jdm\">{{cite web|url=https://www.hltv.org/n/18040|date=2016-06-13|title=Liquid and CLG swap jdm64, Koosta|author=[[Striker (Czech journalist)|Striker]]|publisher=[[HLTV]]}}</ref>\n* June 15th - '''Team Liquid''' sign [[Pimp]]. <ref name=\"+Pimp\">{{cite web|url=https://www.teamliquid.com/news/2016/06/15/pimpin-the-csgo-roster|date=2016-06-15|title=Pimpin the CSGO Roster|author=[[shiroiusagi]]|publisher='''Team Liquid'''}}</ref>\n* August 4th - [[s1mple]] is acquired by [[Natus Vincere]]. <ref name=\"-s1mple\">{{cite web|url=http://read.navi-gaming.com/en/team_news/s1mple_to_natus_vincere|date=2016-08-04|title=s1mple joins Natus Vincere!|author=[[Andersen]]|publisher=[[Natus Vincere]]|archiveurl=http://archive.fo/KlbR7|archivedate=2016-08-14}}</ref>\n* October 22nd - '''Team Liquid''' part ways with [[peacemaker]]. <ref name=\"-peacemaker\">{{cite web|url=https://www.facebook.com/notes/team-liquid/team-liquid-and-peacemaker-part-ways/1331091366975973|title=Peacemaker parts ways with Team Liquid|author=[[Nazgul]]|publisher='''Team Liquid'''|archiveurl=http://archive.ph/UmBJa|archivedate=2018-12-03}}</ref>\n* November 11th - '''Team Liquid''' sign [[zews]] as their new coach. <ref name=\"+zews\">{{cite web|url=https://www.hltv.org/n/19198|title=zews joins Team Liquid|author=[[Professeur]]|publisher=[[HLTV]]}}</ref><ref>{{cite web|url=https://twitter.com/LiQuiD112/status/797163480759476224|title=Yes, @wiltonzews will be coaching our CSGO team today in Montreal and in Oakland|author=[[LiQuiD112]]}}</ref>\n\n|content3=\n* February 3rd - '''Team Liquid''' sign [[stanislaw]]. <ref name=\"+stan\">{{cite web|url=https://www.teamliquid.com/news/2017/02/03/liquidstanislaw|title=Liquid stanislaw|publisher='''Team Liquid'''}}</ref>\n* February 7th - '''Team Liquid''' part ways with [[Hiko]]. <ref name=\"-Hiko\">{{cite web|url=https://twitter.com/TeamLiquid/status/829129799104942081|title=Today we say goodbye to a legend that helped us take great strides in CS|publisher='''Team Liquid'''}}</ref>\n* March 23rd - '''Team Liquid''' transfer-list [[Pimp]]. <ref name=\"Pimp transfer listed\">{{cite web|url=https://www.hltv.org/n/20047|title=Pimp on his way out of Liquid|author=[[Striker (Czech journalist)|Striker]]|date=2017-03-23|publisher=[[HLTV]]}}</ref>\n* April 14th - '''Team Liquid''' acquire [[Twistzz]] from [[Misfits]]. <ref name=\"+Twistzz\">{{cite web|url=https://www.teamliquid.com/news/2017/04/14/liquidtwistzz|title=Twistzz joins Team Liquid|date=2017-04-14|publisher='''Team Liquid'''}}</ref>\n* July 9th - '''Team Liquid''' release [[Pimp]] upon the expiration of his contract. <ref name=\"-Pimp\">{{cite web|url=https://twitter.com/TeamLiquid/status/884110021512114178|title=Today we are officially releasing Pimp and thank him for his time in the #TLFam|date=2017-07-09|publisher='''Team Liquid'''}}</ref>\n* November 13th - '''Team Liquid''' bench [[stanislaw]] and sign [[steel_(Lucas_Lopes)|steel]] as his replacement. <ref name=\"+steel\">{{cite web|url=https://www.teamliquid.com/news/2017/11/13/steelega-in-for-stanislaw|title=steelega in for Stanislaw|publisher='''Team Liquid'''}}</ref>\n\n|content4=\n* February 5th - '''Team Liquid''' bench [[jdm64]] and acquire [[NAF]] from [[Renegades]]. <ref name=\"+NAF\">{{cite web|url=https://www.teamliquid.com/news/2018/02/05/csgo-roster-update-liquidnaf|title=CSGO Roster Update: Liquid`NAF|date=2018-02-05|publisher='''Team Liquid'''}}</ref>\n* February 7th - [[stanislaw]] is acquired by [[OpTic Gaming]]. <ref name=\"-stan\">{{cite web|url=https://www.hltv.org/n/22738|title=OpTic unveil new roster|author=[[MIRAA]]|publisher=[[HLTV]]}}</ref>\n* April 6th - '''Team Liquid''' bench [[steel (Brazilian player)|steel]] and sign [[TACO]] as his replacement. <ref name=\"+TACO\">{{cite web|url=https://www.teamliquid.com/news/2018/04/06/welcome-taco|title=Welcome, TACO!|date=2018-04-06|publisher='''Team Liquid'''}}</ref>\n* April 22nd - [[Steel_(Lucas_Lopes)|steel]] is acquired by [[Luminosity Gaming]]. <ref name=\"-steel\">{{cite web|url=https://www.hltv.org/n/23388|title=steel and zakk join Luminosity|author=[[Striker (Czech journalist)|Striker]]|date=2018-04-22|publisher=[[HLTV]]}}</ref>\n* June 10th - '''Team Liquid''' release [[jdm64]] upon the expiration of his contract. <ref name=\"-jdm\">{{cite web|url=https://twitter.com/jdmarzano/status/1002339155286691840|title=Starting June 10th I will be considered a free agent and no longer under contract w/ liquid|author=[[jdm64]]|date=2018-05-31}}</ref>\n* December 21st - '''Team Liquid''' and [[MIBR]] exchange [[TACO]] and [[zews]] for [[Stewie2K]]. <ref name=\"-TACO -zews +Stewie2K\">{{cite web|url=https://www.teamliquid.com/news/2018/12/21/liquid-update-zews-taco-traded-for-stewie2k|title=Liquid Update: Zews & TACO traded for Stewie2K|date=2018-12-21|publisher='''Team Liquid'''}}</ref>\n* December 22nd - '''Team Liquid''' sign [[adreN_(American_player)|adreN]] as their new coach. <ref name=\"+adreN\">{{cite web|url=https://www.teamliquid.com/news/2018/12/22/welcome-back-coach-adren|title=Welcome Back Coach adreN!|author='''Team Liquid'''|date=2018-12-22}}</ref>\n\n|content5=\n* July 17th - '''Team Liquid''' sign [[Hepa]] as an analyst. <ref name=\"+Hepa\">{{cite web|url=https://twitter.com/HepaCS/status/1284232583052763136?s=20|title=Excited to announce that I will be joining @TeamLiquid as CS:GO Analyst. Eager to start working with them and do everything possible to win|author=[[Hepa]]|date=2020-07-17}}</ref>\n* August 1st - '''Team Liquid''' bench [[nitr0]]. <ref name=\"nitr0 benched\">{{cite web|url=https://www.teamliquid.com/news/2020/08/01/thank-you-nitr0|title=Thank You Nitr0|date=2020-08-01|publisher='''Team Liquid'''}}</ref>\n* August 4th - '''Team Liquid''' acquire [[Grim]] from [[Triumph]]. <ref name=\"+Grim\">{{cite web|url=https://www.teamliquid.com/news/2020/08/04/welcome-grim-to-tlgo|title=Welcome Grim to TLGO|date=2020-08-04|publisher='''Team Liquid'''}}</ref>\n* August 5th - '''Team Liquid''' sign [[pashaBiceps]] as a streamer. <ref name=\"+pasha\">{{cite web|url=https://www.teamliquid.com/news/2020/08/05/stronger-together-pasha-joins-the-stream-team|title=Stronger Together - Pasha Joins the Stream Team|date=2020-08-05|publisher='''Team Liquid'''}}</ref>\n* August 9th - '''Team Liquid''' part ways with [[adreN (American player)|adreN]] and sign [[moses]] as head coach. <ref name=\"-adreN2\">{{cite web|url=https://twitter.com/TeamLiquid/status/1292498612740435968|title=From the bottom of our hearts: Thank you, @adreN_Hoag|date=2020-08-09|author='''Team Liquid'''}}</ref><ref name=\"+moses\">{{cite web|url=https://twitter.com/TeamLiquid/status/1292513831193731072|title=Our journey towards reclaiming first place begins today|date=2020-08-09|author='''Team Liquid'''}}</ref>\n* August 14th - [[nitr0]] retires from ''[[Counter-Strike: Global Offensive]]'' after being acquired by [[:valorant:100 Thieves|100 Thieves' ''VALORANT'' division]]. <ref name=\"-nitr0\">{{cite web|url=https://twitter.com/100Thieves/status/1294348112505389056|title=America’s captain has a new look|date=2020-08-14|author=[[100 Thieves]]}}</ref>\n* December 22nd - '''Team Liquid''' bench [[Twistzz]] by mutual agreement. <ref name=\"Twistzz benched\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1341488683774578695|title=From a starry-eyed kid to a Grand Slam Title, @Twistzz has had quite the run and we're excited to see what he does next|date=2020-12-22|author='''Team Liquid'''}}</ref>\n\n|content6=\n* January 9th - '''Team Liquid''' acquire [[FalleN]] from [[MIBR]] on a three-year contract. <ref name=\"+FalleN\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1347966366737985539|title=A man who needs no intro. Welcome to Liquid, @FalleNCS|author='''Team Liquid'''|date=2021-01-09}}</ref>\n* January 30th - [[Twistzz]] is acquired by [[FaZe Clan]]. <ref name=\"-Twistzz\">{{cite web|url=https://twitter.com/FaZeClan/status/1355561931889901580|title=Twistzz is here|author=[[FaZe Clan]]|date=2021-01-30}}</ref>\n* May 3rd -  '''Team Liquid''' part ways with [[moses]]. <ref name=\"-moses\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1389310316144648192|title=Today we say farewell to @MosesGG|author='''Team Liquid'''|date=2021-05-03}}</ref>\n* May 4th - '''Team Liquid''' re-sign [[adreN (American player)|adreN]] as head coach. <ref name=\"+adreN 2021\">{{cite web|url=https://twitter.com/teamliquidcs/status/1389625872806776840|title=Welcome home @adreN_Hoag|author='''Team Liquid'''|date=2021-05-04}}</ref>\n* November 28th - '''Team Liquid''' sign a two-year contract extension with [[NAF]], keeping him tied to the organization until 2024. <ref name=\"NAF contract 2021\">{{cite web|url=https://twitter.com/NAFFLY/status/1465049818603180049|date=2021-11-28|title=Officially resigned with @teamliquid through to 2024|author=[[NAF]]}}</ref>\n* November 29th - '''Team Liquid''' part ways with [[Hepa]]. <ref name=\"-hepa\">{{cite web|url=https://twitter.com/HepaCS/status/1465383674849943557|date=2021-11-29|title=My time with @TeamLiquidCS has come to an end|author=[[Hepa]]}}</ref>\n* December 21st - '''Team Liquid''' bench [[Stewie2K]], [[Grim]], and [[FalleN]]. <ref name=\"Trio benched 2021\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1473352575298777090|date=2021-12-21|title=Hey all, we're going to be posting some roster updates in the coming weeks but wanted to drop this message from @jokasteve to let you know who will be stepping back|author='''Team Liquid'''}}</ref>\n* December 27th - '''Team Liquid''' acquire [[oSee]] from [[Extra Salt]]. <ref name=\"+oSee\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1475527146353344522|title=Today we welcome @oSeecs to our roster!|author='''Team Liquid'''|date=2021-12-27}}</ref>\n* December 29th - '''Team Liquid''' sign [[shox]]. <ref name=\"+shox\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1476251670002606081|title=Welcome the legendary @ShoxCSGO to our starting roster!|author='''Team Liquid'''|date=2021-12-29}}</ref>\n\n|content7=\n* January 15th - '''Team Liquid''' sign [[nitr0]] as he comes out of retirement. <ref name=\"+nitr0 2022\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1482412270621761537|title=Welcome back, @nitr0|author='''Team Liquid'''|date=2022-01-15}}</ref>\n* January 18th - [[Stewie2K]] and [[Grim]] are acquired by [[Evil Geniuses]] and [[Complexity Gaming]], respectively. <ref name=\"-Stewie2K\">{{cite web|url=https://twitter.com/EvilGeniuses/status/1483499770190733313|title=Please join us in welcoming the Smoke Criminal himself to our CSGO lineup|author=[[Evil Geniuses]]|date=2022-01-18}}</ref><ref name=\"COL 2022\">{{cite web|url=https://twitter.com/Complexity/status/1483499439667007492|title=A storied past renewed|author=[[Complexity Gaming]]|date=2022-01-18}}</ref>\n* February 16th - '''Team Liquid''' release [[FalleN]]. <ref name=\"-FalleN\">{{cite web|url=https://twitter.com/FalleNCS/status/1493757403447259142|title=Oficialmente liberado da @TeamLiquid, obrigado por tudo!!|language={{flag/br}} Portuguese|trans_title=Officially released from @TeamLiquid, thanks for everything!! |author=[[FalleN]]|date=2022-02-16}}</ref>\n* April 23rd - '''Team Liquid''' sign [[Lucid]] as an analyst. <ref name=\"+Lucid\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1517913691701882880|title=Welcome @Its_Lucid_ as our new CS:GO Analyst|date=2022-04-23|author='''Team Liquid'''}}</ref>\n* June 19th - '''Team Liquid''' bench [[shox]] and [[adreN (American player)|adreN]]. <ref name=\"shox adreN bench\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1538601392352374784|title=Today we are announcing that shox & adreN are stepping down from our active lineup|date=2022-06-19|author='''Team Liquid'''}}</ref>\n* June 20th - '''Team Liquid''' sign [[daps]] as the head coach. <ref name=\"+daps\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1538938406209589248|title=Welcome our new coach @daps!|date=2022-06-20|author='''Team Liquid'''}}</ref>\n* July 31st - '''Team Liquid''' release [[adreN (American player)|adreN]] upon the expiration of his contract. <ref name=\"adreN FA 2022\">{{inside source|source=adreN}}</ref>\n* August 11th - [[shox]] is acquired by [[Apeks]]. <ref name=\"-shox\">{{cite web|url=https://apeks.gg/we-welcome-a-legend-to-apeks|title=We welcome a legend to Apeks!|date=2022-08-11|publisher=[[Apeks]]}}</ref>\n* August 17th - '''Team Liquid''' part ways with [[pashaBiceps]]. <ref name=\"-pasha\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1559929627493093376|title=Thank you, Papito|date=2022-08-17|author='''Team Liquid'''}}</ref>\n* October 18th - '''Team Liquid''' sign [[YEKINDAR]]. <ref name=\"+YEKINDAR\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1582446665989902336|title=A new legend approaches...|date=2022-10-18|author='''Team Liquid'''}}</ref>\n* November 14th - '''Team Liquid''' part ways with [[Lucid]]. <ref name=\"-Lucid\">{{cite web|url=https://www.dust2.us/news/32274/liquid-release-analyst|title=Liquid release analyst|date=2022-11-14|publisher=[[Dust2.us]]|author=[[Mnmzzz]]}}</ref>\n\n|content8=\n*May 3rd - '''Team Liquid''' sign [[DeMars DeRover]] as their data analyst. <ref name=\"+DeMars\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1653869015033577474|title=Welcome our new CS Data Analyst: @DeMarsDeRover !!!|date=2023-05-03|author='''Team Liquid'''}}</ref>\n*June 4th - '''Team Liquid''' bench [[nitr0]] as he retires from competitive ''[[Counter-Strike: Global Offensive]]''. <ref name=\"nitr0 retire\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1665412987773935619|title=Today marks the end of an era|date=2023-06-04|author='''Team Liquid'''}}</ref>\n*June 22nd - '''Team Liquid''' acquire [[Rainwaker]] and [[Patsi]] from [[500]] and [[Team Spirit]], respectively. Additionally, [[EliGE]] is acquired by [[Complexity Gaming]]. <ref name=\"+Rainwaker\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1671943846849318917|title=Welcome Rainwaker!|date=2023-06-22|author='''Team Liquid'''}}</ref><ref name=\"+Patsi\">{{cite web|url=https://twitter.com/teamliquidcs/status/1671958986223157248|title=Welcome Patsi!|date=2023-06-22|author='''Team Liquid'''}}</ref><ref name=\"-elige\">{{cite web|url=https://twitter.com/Complexity/status/1672020118337990658|title=Welcome @EliGE!|date=2023-06-22|author=[[Complexity Gaming]]}</ref>\n*October 3rd - '''Team Liquid''' bench [[Rainwaker]]. <ref name=\"Rainwaker bench\">{{cite web|url=https://twitter.com/TeamLiquidCS/status/1709257239180308975|title=For BLAST Showdown, we will be moving Rainwaker to the bench and moving daps to our active roster|date=2023-10-03|author='''Team Liquid'''}}</ref>\n}}\n\n==Player Roster==\n{{tabs dynamic\n|name1={{GameNoLink/cs2}}&nbsp;CS2\n|name2={{GameNoLink/csgo}}&nbsp;CS:GO\n|content1=\n===Active===\n{{Squad|status=active\n|{{Person|flag=ca|id=NAF|name=Keith Markovic|joindate=2018-02-05 <ref name=\"+NAF\"/>}}\n|{{Person|flag=us|id=oSee|name=Joshua Ohm|joindate=2021-12-27 <ref name=\"+oSee\"/>}}\n|{{Person|flag=lv|id=YEKINDAR|igl=y|name=Mareks Gaļinskis|joindate=2022-10-18 <ref name=\"+YEKINDAR\"/>}}\n|{{Person|flag=ru|id=Patsi|name=Robert Isyanov|joindate=2023-06-22 <ref name=\"+Patsi\"/>}}\n|{{Person|flag=ca|id=daps|role=Coach|name=Damian Steele|joindate=2022-06-20 <ref name=\"+daps\"/>}}\n}}\n\n===Inactive===\n{{Squad|status=inactive\n|{{Person|flag=bg|id=Rainwaker|name=Aleks Petrov|joindate=2023-06-22 <ref name=\"+Rainwaker\"/>|inactivedate=2023-10-03 <ref name=\"Rainwaker bench\"/>}}\n|{{Person|flag=us|id=nitr0|igl=y|name=Nicholas Cannella|joindate=2022-01-15 <ref name=\"+nitr0 2022\"/>|inactivedate=2023-06-04 <ref name=\"nitr0 retire\"/>}}\n}}\n\n|content2=\n===Former===\n{{Squad|status=former|title=Former Players\n|{{Person|flag=us|id=EliGE|name=Jonathan Jablonowski|joindate=2015-03-22 <ref name=\"+EliGE\"/>|leavedate=2023-06-22 <ref name=\"-elige\"/>|newteam=complexity}}\n|{{Person|flag=fr|id=shox|name=Richard Papillon|joindate=2021-12-29 <ref name=\"+shox\"/>|inactivedate=2022-06-19 <ref name=\"shox adreN bench\"/>|leavedate=2022-08-11 <ref name=\"-shox\"/>|newteam=Apeks}}\n|{{Person|flag=us|id=adreN|link=adreN (American player)|role=Coach|name=Eric Hoag|joindate=2021-05-04 <ref name=\"+adreN 2021\"/>|inactivedate=2022-06-19 <ref name=\"shox adreN bench\"/>|leavedate=2022-07-31 <ref name=\"adreN FA 2022\"/>}}\n|{{Person|flag=br|id=FalleN|team=Last Dance|igl=y|name=Gabriel Toledo|joindate=2021-01-09 <ref name=\"+FalleN\"/>|inactivedate=2021-12-21 <ref name=\"Trio benched 2021\"/>|leavedate=2022-02-16 <ref name=\"-FalleN\"/>|newteam=Last Dance}}\n|{{Person|flag=us|id=Stewie2K|name=Jacky Yip|joindate=2018-12-21 <ref name=\"-TACO -zews +Stewie2K\"/>|inactivedate=2021-12-21 <ref name=\"Trio benched 2021\"/>|leavedate=2022-01-18 <ref name=\"-Stewie2K\"/>|newteam=EG}}\n|{{Person|flag=us|id=Grim|name=Michael Wince|joindate=2020-08-04 <ref name=\"+Grim\"/>|inactivedate=2021-12-21 <ref name=\"Trio benched 2021\"/>|leavedate=2022-01-18 <ref name=\"COL 2022\"/>|newteam=COL}}\n|{{Person|flag=us|id=moses|role=Coach|name=Jason O'Toole|joindate=2020-08-09 <ref name=\"+moses\"/>|leavedate=2021-05-03 <ref name=\"-moses\"/>|newteam=retired}}\n|{{Person|flag=ca|id=Twistzz|name=Russel Van Dulken|joindate=2017-04-14 <ref name=\"+Twistzz\"/>|inactivedate=2020-12-22 <ref name=\"Twistzz benched\"/>|leavedate=2021-01-30 <ref name=\"-Twistzz\"/>|newteam=FaZe}}\n|{{Person|flag=us|id=nitr0|igl=y|name=Nicholas Cannella|joindate=2015-01-13 <ref name=\"TL 2015\"/>|inactivedate=2020-08-01 <ref name=\"nitr0 benched\"/>|leavedate=2020-08-14 <ref name=\"-nitr0\"/>|newteam=retired}}\n|{{Person|flag=us|id=adreN|link=adreN (American player)|role=Coach|name=Eric Hoag|joindate=2018-12-22 <ref name=\"+adreN\"/>|leavedate=2020-08-09 <ref name=\"-adreN2\"/>|newteam=Mythic}}\n|{{Person|flag=br|id=TACO|name=Epitácio de Melo|joindate=2018-04-06 <ref name=\"+TACO\"/>|leavedate=2018-12-21 <ref name=\"-TACO -zews +Stewie2K\"/>|newteam=MIBR}}\n|{{Person|flag=br|id=zews|role=Coach|name=Wilton Prado|joindate=2016-11-10 <ref name=\"+zews\"/>|leavedate=2018-12-21 <ref name=\"-TACO -zews +Stewie2K\"/>|newteam=MIBR|newrole=Coach}}\n|{{Person|flag=us|id=jdm64|name=Joshua Marzano|joindate=2016-06-13 <ref name=\"+jdm\"/>|inactivedate=2018-02-05 <ref name=\"+NAF\"/>|leavedate=2018-06-10 <ref name=\"-jdm\"/>|newteam=NV}}\n|{{Person|flag=br|id=steel|link=steel (Lucas Lopes)|name=Lucas Lopes|joindate=2017-11-13 <ref name=\"+steel\"/>|inactivedate=2018-04-06 <ref name=\"+TACO\"/>|leavedate=2018-04-22 <ref name=\"-steel\"/>|newteam=LG}}\n|{{Person|flag=ca|id=stanislaw|name=Peter Jarguz|joindate=2017-02-03 <ref name=\"+stan\"/>|inactivedate=2017-11-13 <ref name=\"+steel\"/>|leavedate=2018-02-07 <ref name=\"-stan\"/>|newteam=OpTic}}\n|{{Person|flag=dk|id=Pimp|name=Jacob Winneche|joindate=2016-06-15 <ref name=\"+Pimp\"/>|inactivedate=2017-03-23 <ref name=\"Pimp transfer listed\"/>|leavedate=2017-07-09 <ref name=\"-Pimp\"/>|newteam=DIG|newrole=Streamer}}\n|{{Person|flag=us|id=Hiko|name=Spencer Martin|joindate=2015-09-03 <ref name=\"+Hiko\"/>|inactivedate=2017-02-03 <ref name=\"+stan\"/>|leavedate=2017-02-07 <ref name=\"-Hiko\"/>|newteam=Rogue}}\n|{{Person|flag=br|id=peacemaker|role=Coach|name=Luis Tadeu|joindate=2016-05-07 <ref name=\"+peacemaker\"/>|leavedate=2016-10-22 <ref name=\"-peacemaker\"/>|newteam=NRG|newrole=Coach}}\n|{{Person|flag=ua|id=s1mple|name=Oleksandr Kostyljev|joindate=2016-01-02 <ref name=\"+s1mple\"/>|inactivedate=2016-04-21 <ref name=\"s1mple bench\"/>|leavedate=2016-08-03 <ref name=\"-s1mple\"/>|newteam=NAVI}}\n|{{Person|flag=us|id=koosta|name=Kenneth Suen|joindate=2016-02-21 <ref name=\"+koosta\"/>|leavedate=2016-06-13 <ref name=\"+jdm\"/>|newteam=CLG}}\n|{{Person|flag=us|id=adreN|link=adreN (American player)|igl=y|name=Eric Hoag|joindate={{abbr|2015-01-13|Was previously benched from 2016-02-21 to 2016-04-21}} <ref name=\"TL 2015\"/><ref name=\"+koosta\"/><ref name=\"s1mple bench\"/>|leavedate=2016-06-06 <ref name=\"-adreN\"/>|newteam=Mythic}}\n|{{Person|flag=us|id=GBJame^s|role=Coach|name=James O'Connor|joindate=2015-09-03 <ref name=\"+Hiko\"/>|leavedate=2016-04-23 <ref name=\"-Jame^s\"/>|newteam=Team Prospects|newrole=Coach}}\n|{{Person|flag=us|id=FugLy|name=Jacob Medina|joindate=2015-01-13 <ref name=\"TL 2015\"/>|leavedate=2016-01-02 <ref name=\"+s1mple\"/>|newteam=CLG}}\n|{{Person|flag=ca|id=miKnutty|role=Substitute|name=Michael Vitaterna|joindate=2015-01-13 <ref name=\"TL 2015\"/>|leavedate=2015-09-16|newteam=Nexus eSports}}\n|{{Person|flag=us|id=flowsicK|name=Kyle Mendez|joindate=2015-05-25 <ref name=\"+flowsicK\"/>|leavedate=2015-09-03 <ref name=\"+Hiko\"/>|newteam=Winterfox}}\n|{{Person|flag=us|id=dmode|role=Coach|name=Donald Cahill|joindate=2015-04-06|leavedate=2015-09-03 <ref name=\"+Hiko\"/> |newteam=retired}}\n|{{Person|flag=ca|id=daps|name=Damien Steele|joindate=2015-01-13 <ref name=\"TL 2015\"/>|leavedate=2015-06-02 <ref name=\"-daps\"/>|newteam=elevate}}\n|{{Person|flag=ca|id=NAF|name=Keith Markovic|joindate=2015-01-13 <ref name=\"TL 2015\"/>|inactivedate=2015-03-22 <ref name=\"+EliGE\"/>|leavedate=2015-05-11 <ref name=\"-NAF\"/>|newteam=LG}}\n|{{Person|flag=us|id=Warden|role=Coach|name=Matt Dickens|joindate=2015-01-13 <ref name=\"TL 2015\"/>|leavedate=2015-03-16 <ref name=\"-Warden\"/>|newteam=TS|newrole=Coach}}\n}}\n\n{{Stand-ins table|\n{{Stand-in|flag=ca|id=daps|team=tl|name=Damian Steele|tournament={{LeagueIconSmall/blast premier}} [[BLAST/Premier/2023/Fall/Showdown/Americas|BLAST Premier: Fall American Showdown 2023]] <ref name=\"Rainwaker bench\"/>}}\n{{Stand-in|flag=lv|id=YEKINDAR|team=virtus.pro 2019|name=Mareks Gaļinskis|tournament={{LeagueIconSmall/iem}} [[Intel Extreme Masters/2022/Rio/Americas|IEM Road to Rio 2022: American RMR]]<br>{{LeagueIconSmall/epl}} [[ESL/Pro_League/Season_16|ESL Pro League Season 16]]<br>{{LeagueIconSmall/blast premier}} [[BLAST/Premier/2022/Fall/Groups|BLAST Premier: Fall Groups 2022]] <ref>{{cite web|url=https://www.hltv.org/news/34380/liquid-confirm-yekindar-for-blast-premier-fall-groups|title=Liquid confirm YEKINDAR for BLAST Premier Groups|date=2022-08-11|author=[[Striker (Czech journalist)|Striker]]|publisher=[[HLTV]]}}</ref><br>{{LeagueIconSmall/iem}} [[Intel Extreme Masters/Season XVII/Cologne|IEM Cologne 2022]] <ref>{{cite web|url=https://twitter.com/TeamLiquidCS/status/1539337836976959488|title=Yekindar will be filling in for us during IEM Cologne|date=2022-06-21|author='''Team Liquid'''}}</ref>}}\n{{Stand-in|flag=us|id=jokasteve|role=Coach|team=team liquid 2020|name=Steve Perino|forflag=us|for=adreN|forlink=adreN (American player)|forname=Eric Hoag|tournament={{LeagueIconSmall/esl pro league 2019 new}} [[ESL/Pro_League/Season_15|ESL Pro League Season 15]] <ref>{{cite web|url=https://www.dust2.us/news/27715/adren-to-miss-start-of-esl-pro-league-season-15|title=adreN to miss start of ESL Pro League Season 15|author=[[Mnmzzz]]|publisher=[[Dust2.us]]|date=2022-03-15}}</ref><br>{{LeagueIconSmall/pgl}} [[PGL/2021/Stockholm|PGL Major Stockholm 2021]] <ref>{{cite web|url=https://www.instagram.com/p/CVLt3rDgpZA/|title=I will be sitting out the major due to the upcoming timing of my son's birth. @jokasteve will be taking over the reigns while I'm gone|date=2021-10-18|author=[[adreN (American player)|adreN]]}}</ref>}}\n{{Stand-in|flag=us|id=jokasteve|role=Coach|team=team liquid 2017|name=Steve Perino|forflag=br|for=zews|forname=Wilton Prado|tournament={{LeagueIconSmall/eleague}} [[ELEAGUE/2018/Premier|ELEAGUE CS:GO Premier 2018]]<br>{{LeagueIconSmall/minor_championship default}} [[Minor_Championship/2018/Boston/Americas|Americas Minor Championship - Boston 2018]]}}\n{{Stand-in|flag=br|id=zews|team=team liquid 2017|name=Wilton Prado|forflag=br|for=steel|forlink=steel (Lucas Lopes)|forname=Lucas Lopes|tournament={{LeagueIconSmall/eleague}} [[ELEAGUE/2018/Major|ELEAGUE Major: Boston 2018]]<br>{{LeagueIconSmall/esl pro league 2016}} [[ESL/Pro_League/Season 6/Finals|ESL Pro League Season 6 - Finals]]}}\n{{Stand-in|flag=br|id=steel|link=steel (Lucas Lopes)|role=Coach|team=team liquid 2017|name=Lucas Lopes|forflag=br|for=zews|forname=Wilton Prado|tournament={{LeagueIconSmall/esl pro league 2016}} [[ESL/Pro_League/Season 6/Finals|ESL Pro League Season 6 - Finals]]}}\n{{Stand-in|flag=us|id=hazed|name=James Cobb|tournament={{LeagueIconSmall/ibp}} [[IBUYPOWER/Invitational/2017/Spring|iBUYPOWER Invitational 2017 - Spring]]}}\n{{Stand-in|flag=us|id=jokasteve|role=Coach|team=team liquid orig|name=Steve Perino|tournament={{LeagueIconSmall/esl pro league 2016}} [[ESL/Pro_League/Season 4/Finals|ESL Pro League Season 4 - Finals]]<br>{{LeagueIconSmall/esl pro league 2016}} [[ESL/Pro_League/Season 3/Finals|ESL Pro League Season 3 - Finals]]<br>{{LeagueIconSmall/dreamhack}} [[DreamHack/2016/Austin|DreamHack Open Austin 2016]]}}\n{{Stand-in|flag=ua|id=s1mple|team=team liquid orig|name=Oleksandr Kostyljev|forflag=dk|for=Pimp|forname=Jacob Winneche|tournament={{LeagueIconSmall/esl one 2016}} [[ESL/One/2016/Cologne|ESL One: Cologne 2016]]<br>{{LeagueIconSmall/ecs orig}} [[Esports_Championship_Series/Season_1|ECS Season 1 - Finals]]}}\n{{Stand-in|flag=us|id=adreN|link=adreN (American player)|team=team liquid orig|name=Eric Hoag|forflag=us|for=koosta|forname=Kenneth Suen|tournament={{LeagueIconSmall/mlg}} [[MLG/2016/Columbus|MLG Major Championship: Columbus]]<br>{{LeagueIconSmall/mlg}} [[MLG/2016/Columbus/Offline_Qualifier|MLG Major Championship: Columbus - Qualifier]]}}\n{{Stand-in|flag=fi|id=allu|name=Aleksi Jalli|forflag=us|for=FugLy|forname=Jacob Medina|tournament={{LeagueIconSmall/eleague}} [[ELEAGUE/Road_to_Vegas/North_America|ELEAGUE Road to Vegas: North American Qualifier]] <ref>{{cite web|url=https://www.hltv.org/n/16641|date=2015-12-16|title=allu to try out for Liquid|author=[[Striker (Czech journalist)|Striker]]|publisher=[[HLTV]]}}</ref>}}\n{{Stand-in|flag=us|id=mOE|name=Mohamad Assad|forflag=us|for=EliGE|forname=Jonathan Jablonowski|tournament={{LeagueIconSmall/esl esea pro league orig}} [[ESL ESEA/Pro League/Season/II/Finals|ESL ESEA Season 2 - Finals]] <small>''(Day 1)''</small>}}\n}}\n}}\n\n==Organization==\n===Active===\n{{Organization start}}\n{{OrganizationPerson|flag=nl|person=Nazgul|link=starcraft2:Nazgul|name=Victor Goossens|position=Founder, Co-{{abbr|CEO|Chief Executive Officer}}|joindate=2000-??-??}}\n{{OrganizationPerson|flag=us|person=LiQuiD112|name=Steve Arhancet|position=Co-{{abbr|CEO|Chief Executive Officer}}|joindate=2015-01-06 <ref name=\"curse merge\">{{cite web|url=https://www.teamliquid.com/news/2015/01/06/team-liquid-and-former-curse-become-one|date=2015-01-06|title=Team Liquid and Former Curse Become One|publisher='''Team Liquid'''}}</ref>}}\n{{OrganizationPerson|flag=ca|person=Tephus|manager=y|name=John Lewis|position=Director of Esports|joindate=2017-08-??}}\n{{OrganizationPerson|flag=us|person=jokasteve|manager=y|name=Steve Perino|position=General Manager|joindate=2015-01-06 <ref name=\"curse merge\"/>}}\n{{OrganizationPerson|flag=us|person=DeMars DeRover|name=Jay Li|position=Data Analyst|joindate=2023-05-03 <ref name=\"+DeMars\"/>}}\n{{Organization end}}\n\n===Former===\n{{Former organization start}}\n{{OrganizationPerson|flag=us|person=ThixNation|name=Mike Milanov|position={{abbr|CBDO|Chief Business Development Officer}}|joindate=2020-11-17 <ref name=\"ThixNation promoted\"/>|leavedate=2023-04-07 <ref>{{cite web|url=https://twitter.com/ThixNation/status/1644407300495663105|date=2023-04-07|title=Career Update - Team Liquid|author=[[ThixNation]]}}</ref>}}\n{{OrganizationPerson|flag=us|person=Lucid|name=Hunter Tucker|position=Analyst|joindate=2022-04-23 <ref name=\"+Lucid\"/> |leavedate=2022-11-14 <ref name=\"-Lucid\"/>|neworg=party astronauts|newrole=Coach}}\n{{OrganizationPerson|flag=pl|person=pashaBiceps|name=Jarosław Jarząbkowski|position=Streamer|joindate=2020-08-05 <ref name=\"+pasha\"/>|leavedate=2022-08-17 <ref name=\"-pasha\"/>|neworg=|newrole=}}\n{{OrganizationPerson|flag=es|person=Hepa|name=Juan Borges|position=Analyst|joindate=2020-07-17 <ref name=\"+Hepa\"/>|leavedate=2021-11-29 <ref name=\"-hepa\"/>|neworg=eg|newrole=Analyst}}\n{{OrganizationPerson|flag=us|person=ThixNation|name=Mike Milanov|position=Director of Operations|joindate=2015-10-??|leavedate=2020-11-17 <ref name=\"ThixNation promoted\">{{cite web|url=https://esportsinsider.com/2020/11/mike-milanov-promoted-to-chief-business-development-officer-at-team-liquid|date=2020-11-17|title=Mike Milanov promoted to Chief Business Development Officer at Team Liquid|author=[[Cody Luongo]]|publisher=[[Esports Insider]]}}</ref>|neworg=team liquid|newrole=CBDO}}\n{{OrganizationPerson|flag=de|person=Swani|name=Jan Müller|position=Analyst|joindate=2017-02-27|leavedate=2017-11-16 <ref>{{cite web|url=http://www.twitlonger.com/show/n_1sqar1e|date=2017-11-16|title=New Chapter - Leaving @TeamLiquid to join @SKGaming|author=[[Swani]]}}</ref>|neworg=SK|newrole=Analyst}}\n{{OrganizationPerson|flag=dk|person=Bumblebee|link=sc2:Bumblebee (Danish player)|name=Robin Nymann|position=Head of Esports|joindate=2011-03-??|leavedate=2017-02-01|neworg=DreamHack|newrole=Product Manager}}\n{{OrganizationPerson|flag=ca|person=KJ|name=Kieran Playfair|position=Analyst|joindate=2015-09-20 <ref name=\"kj\"/>|leavedate=2016-04-06 <ref name=\"-KJ\"/> |neworg=tsm|newrole=Analyst}}\n{{OrganizationPerson|flag=us|person=dmode|name=Donald Cahill|joindate=2015-01-??|leavedate=2015-03-??|position=Analyst|neworg=tl|newrole=Coach}}\n{{Organization end}}\n\n==Results==\n{{Tabs dynamic|hide-showall=y\n|name1=Achievements|content1={{Achievements table|team=Team Liquid}}\n|name2=Recent Matches|content2={{Team recent matches table|team=Team Liquid}}\n}}\n\n==Trivia==\n*Became the first [[:category:North_America|North American]] team to reach a CS:GO [[Majors|Major]] grand final at [[ESL/One/2016/Cologne|ESL One: Cologne 2016]].\n*Previously won the most prize money from one big event with a stand-in. The event being [[ESL/One/2016/Cologne|ESL One: Cologne 2016]] with [[s1mple]] standing in. The record was beaten by [[SK Gaming]] after winning [[EPICENTER/2017|EPICENTER 2017]] using Ricardo \"[[boltz]]\" Prass as a stand-in, winning $100,000 more than '''Team Liquid'''.\n*Had the second-longest LAN {{abbr/Bo3}}/{{abbr/Bo5}} win streak at 22 series won, which began in [[DreamHack/2019/Dallas|DreamHack Masters Dallas 2019]] and ended in the quarterfinals of [[StarLadder/2019/Major|StarLadder Berlin Major 2019]]. <ref name=\"Bo3\">{{cite web|url=https://www.hltv.org/results?startDate=2019-05-28&endDate=2019-09-06&team=5973&matchType=Lan|title=Liquid's 2019 LAN winstreak|publisher=[[HLTV]]}}</ref>\n* Completed the [[Intel/Grand_Slam/2|Intel Grand Slam]] in a record-breaking 63 days by consecutively winning [[Intel_Extreme_Masters/Season_XIV/Sydney|IEM Sydney 2019]], [[DreamHack/2019/Dallas|Dreamhack Masters Dallas 2019]], [[ESL/Pro_League/Season_9/Finals|ESL Pro League Season 9 Finals]], and [[ESL/One/2019/Cologne|ESL One Cologne 2019]].\n\n==Gallery==\n===Rosters===\n<gallery mode=\"packed-hover\" heights=\"200px\">\nTeam Liquid at BLAST Paris Major 2023.jpeg|Team Liquid at [[BLAST/Major/2023/Paris|BLAST.tv Paris Major 2023]]<br><small>From left to right:</small><br>[[NAF]] ∙ [[YEKINDAR]] ∙ [[nitr0]] ∙ [[EliGE]] ∙ [[oSee]]\nLiquid at Antwerp Major 2022 America RMR.jpg|Team Liquid at [[PGL/2022/Antwerp/Americas|PGL Major Antwerp 2022: American RMR]]<br><small>From left to right:</small><br>[[shox]] ∙ [[NAF]] ∙ [[EliGE]] ∙ [[nitr0]] ∙ [[oSee]] ∙ [[adreN (American player)|adreN]]\nTL @ IEM Chicago 2019.jpg|Team Liquid upon winning [[IEM Chicago 2019]]<br><small>From left to right:</small><br>[[nitr0]] ∙ [[NAF]] ∙ [[Stewie2K]] ∙ [[Twistzz]] ∙ [[EliGE]] ∙ [[adreN (American player)|adreN]]\nLiquid IEM Katowice 2019.jpg|Team Liquid at [[IEM Katowice 2019|IEM Katowice Major 2019]]<br><small>From left to right:</small><br>[[NAF]] ∙ [[Stewie2K]] ∙ [[nitr0]] ∙ [[EliGE]] ∙ [[Twistzz]]\nLiquid EPL S7.jpg|Team Liquid at [[ESL/Pro_League/Season_7/Finals|ESL Pro League Season 7 - Finals]]<br><small>From left to right:</small><br>[[TACO]] ∙ [[EliGE]] ∙ [[nitr0]] ∙ [[Twistzz]] ∙ [[NAF]]\nTeam Liquid IEM Katowice 2018.jpg|Team Liquid at [[Intel_Extreme_Masters/Season_XII/World_Championship|IEM Katowice 2018]]<br><small>From left to right:</small><br>[[steel (Lucas Lopes)|steel]] ∙ [[NAF]] ∙ [[nitr0]] ∙ [[EliGE]] ∙ [[Twistzz]]\nTeam Liquid Boston Major.jpg.jpg|Team Liquid at [[ELEAGUE/2018/Major|ELEAGUE Major: Boston 2018]]<br><small>From left to right:</small><br>[[zews]] ∙ [[jdm64]] ∙ [[nitr0]] ∙ [[Twistzz]] ∙ [[EliGE]]\nLiquid-iem-oakland-2017.jpg|Team Liquid at [[Intel Extreme Masters/Season XII/Oakland|IEM Oakland 2017]]<br><small>From left to right:</small><br>[[Twistzz]] ∙ [[nitr0]] ∙ [[jdm64]] ∙ [[EliGE]] ∙ [[steel (Lucas Lopes)|steel]]\nTeam Liquid at Dreamhack Austin 2017.jpg|Team Liquid at [[DreamHack/2017/Austin|DreamHack Open Austin 2017]]<br><small>From left to right:</small><br>[[jdm64]] ∙ [[nitr0]] ∙ [[stanislaw]] ∙ [[Twistzz]] ∙ [[EliGE]]\nLiquid IEM Oakland 2016.jpg|Team Liquid at [[Intel_Extreme_Masters/Season_XI/Oakland|IEM Oakland 2016]]<br><small>From left to right:</small><br>[[jdm64]] ∙ [[EliGE]] ∙ [[Hiko]] ∙ [[Pimp]] ∙ [[nitr0]]\nTeam Liquid ELEAGUE Season 1.jpeg|Team Liquid at [[ELEAGUE/Season_1|ELEAGUE Season 1]]<br><small>From left to right:</small><br>[[EliGE]] ∙ [[nitr0]] ∙ [[AdreN_(American_player)|adreN]] ∙ [[Hiko]] ∙ [[koosta]]\nTeam Liquid at DH Masters Malmo 2016.jpg|Team Liquid at [[DreamHack/2016/Malmö|DreamHack Masters Malmö 2016]]<br><small>From left to right:</small><br>[[s1mple]] ∙ [[nitr0]] ∙ [[koosta]] ∙ [[EliGE]] ∙ [[Hiko]]\nTeam Liquid at DH Cluj 2015.jpg|Team Liquid at [[DreamHack/2015/Cluj-Napoca|DreamHack Open Cluj-Napoca 2015]]<br><small>From left to right:</small><br>[[AdreN_(American_player)|adreN]] ∙ [[EliGE]] ∙ [[nitr0]] ∙ [[FugLy]] ∙ [[Hiko]]\nLiquid DreamHack Valencia 2015.jpg|Team Liquid at [[FACEIT/League/2015/Stage_2/Finals|FACEIT 2015 Stage 2 Finals]]<br><small>From left to right:</small><br>[[FugLy]] ∙ [[nitr0]] ∙ [[EliGE]] ∙ [[flowsicK]] ∙ [[AdreN_(American_player)|adreN]]\n</gallery>\n\n===Logos===\n<gallery mode=\"packed\" heights=\"200px\">\nTeam Liquid logo orig notext.png|Original logo<br><small>(until January 17<sup>th</sup>, 2017)</small>\nTeam Liquid 2017 lightmode.png|Second logo<br><small>(until September 17<sup>th</sup>, 2019)</small>\nTeam Liquid 2019 teamcardimage.png|Third logo<br><small>(until February 4<sup>th</sup>, 2020)</small>\nTeam Liquid 2020 lightmode.png|Fourth logo<br><small>(until February 21<sup>st</sup>, 2023)</small>\n</gallery>\n\n==References==\n{{Reflist|2}}\n<br>\n{{Team roster}}"
              }
            }
          }
        ],
        "pageprops": {
          "displaytitle": "Team Liquid",
          "metaimage": "Team Liquid 2023 lightmode.png",
          "metaimageurl": "https://liquipedia.net/commons/images/1/1e/Team_Liquid_2023_lightmode.png",
          "wikimenu_otherpage_ageofempires": "",
          "wikimenu_otherpage_apexlegends": "Team_Liquid",
          "wikimenu_otherpage_arenafps": "Team_Liquid",
          "wikimenu_otherpage_arenaofvalor": "",
          "wikimenu_otherpage_artifact": "Team_Liquid",
          "wikimenu_otherpage_autochess": "Team_Liquid",
          "wikimenu_otherpage_battalion": "",
          "wikimenu_otherpage_battlerite": "",
          "wikimenu_otherpage_brawlhalla": "",
          "wikimenu_otherpage_brawlstars": "",
          "wikimenu_otherpage_callofduty": "",
          "wikimenu_otherpage_clashofclans": "",
          "wikimenu_otherpage_clashroyale": "Team_Liquid",
          "wikimenu_otherpage_commons": "",
          "wikimenu_otherpage_counterstrike": "Team_Liquid",
          "wikimenu_otherpage_criticalops": "",
          "wikimenu_otherpage_crossfire": "",
          "wikimenu_otherpage_diabotical": "",
          "wikimenu_otherpage_dota2": "Team_Liquid",
          "wikimenu_otherpage_fifa": "",
          "wikimenu_otherpage_fighters": "Team_Liquid",
          "wikimenu_otherpage_formula1": "",
          "wikimenu_otherpage_fortnite": "Team_Liquid",
          "wikimenu_otherpage_freefire": "Team_Liquid",
          "wikimenu_otherpage_game_ageofempires": "Age of Empires",
          "wikimenu_otherpage_game_apexlegends": "Apex Legends",
          "wikimenu_otherpage_game_arenafps": "Arena FPS",
          "wikimenu_otherpage_game_arenaofvalor": "Arena of Valor",
          "wikimenu_otherpage_game_artifact": "Artifact",
          "wikimenu_otherpage_game_autochess": "Autochess",
          "wikimenu_otherpage_game_battalion": "Battalion 1944",
          "wikimenu_otherpage_game_battlerite": "Battlerite",
          "wikimenu_otherpage_game_brawlhalla": "Brawlhalla",
          "wikimenu_otherpage_game_brawlstars": "Brawl Stars",
          "wikimenu_otherpage_game_callofduty": "Call of Duty",
          "wikimenu_otherpage_game_clashofclans": "Clash of Clans",
          "wikimenu_otherpage_game_clashroyale": "Clash Royale",
          "wikimenu_otherpage_game_commons": "Commons",
          "wikimenu_otherpage_game_counterstrike": "Counter-Strike",
          "wikimenu_otherpage_game_criticalops": "Critical Ops",
          "wikimenu_otherpage_game_crossfire": "Crossfire",
          "wikimenu_otherpage_game_diabotical": "Diabotical",
          "wikimenu_otherpage_game_dota2": "Dota 2",
          "wikimenu_otherpage_game_fifa": "FIFA",
          "wikimenu_otherpage_game_fighters": "Fighting Games",
          "wikimenu_otherpage_game_formula1": "Formula 1",
          "wikimenu_otherpage_game_fortnite": "Fortnite",
          "wikimenu_otherpage_game_freefire": "Free Fire",
          "wikimenu_otherpage_game_halo": "Halo",
          "wikimenu_otherpage_game_hearthstone": "Hearthstone",
          "wikimenu_otherpage_game_heroes": "Heroes",
          "wikimenu_otherpage_game_leagueoflegends": "League of Legends",
          "wikimenu_otherpage_game_magic": "Magic",
          "wikimenu_otherpage_game_mobilelegends": "Mobile Legends",
          "wikimenu_otherpage_game_naraka": "Naraka",
          "wikimenu_otherpage_game_omegastrikers": "Omega Strikers",
          "wikimenu_otherpage_game_osu": "osu!",
          "wikimenu_otherpage_game_overwatch": "Overwatch",
          "wikimenu_otherpage_game_paladins": "Paladins",
          "wikimenu_otherpage_game_pokemon": "Pokémon",
          "wikimenu_otherpage_game_pubg": "PUBG",
          "wikimenu_otherpage_game_pubgmobile": "PUBG Mobile",
          "wikimenu_otherpage_game_rainbowsix": "Rainbow Six",
          "wikimenu_otherpage_game_rocketleague": "Rocket League",
          "wikimenu_otherpage_game_runeterra": "Runeterra",
          "wikimenu_otherpage_game_sideswipe": "Sideswipe",
          "wikimenu_otherpage_game_simracing": "Sim Racing",
          "wikimenu_otherpage_game_smash": "Smash",
          "wikimenu_otherpage_game_splatoon": "Splatoon",
          "wikimenu_otherpage_game_splitgate": "Splitgate",
          "wikimenu_otherpage_game_squadrons": "Star Wars: Squadrons",
          "wikimenu_otherpage_game_starcraft": "Brood War",
          "wikimenu_otherpage_game_starcraft2": "StarCraft II",
          "wikimenu_otherpage_game_stormgate": "Stormgate",
          "wikimenu_otherpage_game_teamfortress": "Team Fortress",
          "wikimenu_otherpage_game_tetris": "Tetris",
          "wikimenu_otherpage_game_tft": "Teamfight Tactics",
          "wikimenu_otherpage_game_trackmania": "TrackMania",
          "wikimenu_otherpage_game_underlords": "Dota Underlords",
          "wikimenu_otherpage_game_valorant": "VALORANT",
          "wikimenu_otherpage_game_warcraft": "Warcraft",
          "wikimenu_otherpage_game_wildrift": "Wild Rift",
          "wikimenu_otherpage_game_worldoftanks": "World of Tanks",
          "wikimenu_otherpage_game_worldofwarcraft": "World of Warcraft",
          "wikimenu_otherpage_game_zula": "Zula",
          "wikimenu_otherpage_halo": "Team_Liquid",
          "wikimenu_otherpage_hearthstone": "Team_Liquid",
          "wikimenu_otherpage_heroes": "Team_Liquid",
          "wikimenu_otherpage_leagueoflegends": "Team_Liquid",
          "wikimenu_otherpage_magic": "",
          "wikimenu_otherpage_mobilelegends": "",
          "wikimenu_otherpage_naraka": "",
          "wikimenu_otherpage_omegastrikers": "",
          "wikimenu_otherpage_osu": "",
          "wikimenu_otherpage_overwatch": "Team_Liquid",
          "wikimenu_otherpage_paladins": "",
          "wikimenu_otherpage_pokemon": "",
          "wikimenu_otherpage_pubg": "Team_Liquid",
          "wikimenu_otherpage_pubgmobile": "",
          "wikimenu_otherpage_rainbowsix": "Team_Liquid",
          "wikimenu_otherpage_rocketleague": "Team_Liquid",
          "wikimenu_otherpage_runeterra": "",
          "wikimenu_otherpage_sideswipe": "",
          "wikimenu_otherpage_simracing": "",
          "wikimenu_otherpage_smash": "Team_Liquid",
          "wikimenu_otherpage_splatoon": "",
          "wikimenu_otherpage_splitgate": "",
          "wikimenu_otherpage_squadrons": "",
          "wikimenu_otherpage_starcraft": "Team_Liquid",
          "wikimenu_otherpage_starcraft2": "Team_Liquid",
          "wikimenu_otherpage_stormgate": "",
          "wikimenu_otherpage_teamfortress": "",
          "wikimenu_otherpage_tetris": "",
          "wikimenu_otherpage_tft": "Team_Liquid",
          "wikimenu_otherpage_trackmania": "",
          "wikimenu_otherpage_underlords": "",
          "wikimenu_otherpage_valorant": "Team_Liquid",
          "wikimenu_otherpage_warcraft": "",
          "wikimenu_otherpage_wildrift": "",
          "wikimenu_otherpage_worldoftanks": "",
          "wikimenu_otherpage_worldofwarcraft": "",
          "wikimenu_otherpage_zula": ""
        }
      }
    }
  }
}

  const expected = [
    {
      wiki: "test",
      meta: {
        "domain": "liquipedia.net",
        "path": "counterstrike/api.php",
        "follow_redirects": true,
        "Api-User-Agent": "wtf_wikipedia test script - <spencermountain@gmail.com>",
        "title": "Team Liquid",
        pageID: 19571,
        namespace: 0,
        wikidata: undefined,
        description: undefined,
      }
    }
  ]

  const result = getResult(response, options)
  t.deepEqual(expected, result)
  t.end()
})

test('parse a normal case from wikimedia', (t) => {
  const options = {
    "lang": "it",
    "wiki": "wiktionary",
    "follow_redirects": true,
    "path": "api.php",
    "title": "casa"
  }

  const response = {
    "batchcomplete": "",
    "query": {
      "pages": {
        "742": {
          "pageid": 742,
          "ns": 0,
          "title": "casa",
          "revisions": [
            {
              "slots": {
                "main": {
                  "contentmodel": "wikitext",
                  "contentformat": "text/x-wiki",
                  "*": "Italian wiktionary"
                }
              }
            }
          ],
          "pageprops": {
            "page_image_free": "RybnoeDistrict_06-13_Konstantinovo_village_05.jpg"
          }
        }
      }
    }
  }

  const expected = [
    {
      wiki: 'Italian wiktionary',
      meta: {
        lang: 'it',
        wiki: 'wiktionary',
        follow_redirects: true,
        path: 'api.php',
        title: 'casa',
        pageID: 742,
        namespace: 0,
        domain: 'wiktionary.org',
        wikidata: undefined,
        description: undefined,
        revisionID: 2619779,
      }
    }
  ]

  const result = getResult(response, options)
  t.deepEqual(expected, result)
  t.end()
})

test('parse a not found case', (t) => {
  const options = {
    "lang": "en",
    "wiki": "wikipedia",
    "follow_redirects": true,
    "path": "api.php",
    "Api-User-Agent": "wtf_wikipedia test script - <spencermountain@gmail.com>",
    "title": "165111651dfasfasdfsadfas"
  }

  const response = { "batchcomplete": "", "query": { "pages": { "-1": { "ns": 0, "title": "165111651dfasfasdfsadfas", "missing": "" } } } }

  const expected = [null]

  const result = getResult(response, options)
  t.deepEqual(expected, result)
  t.end()
})
