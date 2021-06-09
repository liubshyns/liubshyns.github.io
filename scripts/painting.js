const getCol = () => {
    const col = document.createElement('div');
    col.className = "col-4"
    return col 
}

const getPoemByN = ( n) => {
    const poems = `
        1. Ерік Рудий
 
        Чуєш, сурми голосами
        батька Одіна збудили?
        Бачиш, он, на горизонті
        ворог в небо піднімає
        списи, стріли та знамена,
        чорні крила хижих птахів?
         
        Ерік, Ерік мене звати.
        Мій сусіде по звитязі,
        Якщо Норни переріжуть
        мою нитку в цьому бої,
        руни вибий на камінні:
        “Ерік тут лежить могутній.
        Він був гарним корабелом.
        Більше слави і багатства
        він любив на морі хвилі,
        невідомі досі землі,
        двох синів і дух свободи”.
        Я ж збираюсь перегризти
        Цим паскудникам горлянки,
        Так що текст цей не згодиться.
         
        Що ти беньки вилупаєш?
        Вріж їм так, щоб пар курився.
        Веселіш роздай по пикам!
        Не бери дурного в мізки,
        все забудь, що я торочив.
        Якщо я піду в Вальгаллу,
        Тільки гарно обісцяти
        можна буде те каміння.
        Я пішов.
        Ах ти ж зараза!
         
         ~
        2. Сахем могікан Сивий Вовк
        
        Придумав ти - останній з могікан.
        Не перший, може. Рівний серед рівних.
        Гуронів переслідувач лихий
        І ватажок своїх братів надійних.
         
        Мохавків гнали, доки топірці
        Не зазубрилися, мов пащека койота.
        За фортом Олбані, на відстані польоту
        Найкращої потужної стріли,
        Ми били їх без ліку і до поту.
         
        Брати із клану Мужніх Ведмедів,
        Вовків і Тунпаухи-Черепахи
        Загнали нечестивців за Гудзон.
        Реве гроза - поранений бізон
        і прерії гойдає дивний дзвін,
        І сходить бог-мисливець з диким птахом.
        
         ~
        3. Скіфка Елія

        Таргіта бачила тринадцять весен.
        Шкіра її гладенька,
        і лоб під старим шоломом рожевий, мов пелюстка.
        Лице Танаї вкрите жовтуватими зморшками,
        але її рука міцно стискує залізний ніж,
        а у колчані — стріли
        із роздвоєними, як пащеки змій,
        наконечниками.
        Я, Елія, взяла батькову сокиру,
        а сестра моя Аріяна — два материні списи.
        Вохрою намастили ми обличчя
        і вийшли назустріч ворогу.
        Це наша земля.
        Жовтий степ пахне сухими травами.
        Це наші коні трясуть довгими гривами.
        Це наші предки сплять під величними курганами.
        Ми боронимо свою землю,
        свої оселі, своїх коней.
        Ми сильніші за тих, хто йде на нас.
        Прабатько Скіф дає нам сили.
        Земля під ногами наливає сухим жаром
        нашу зброю.
        Брате-боривітре,
        на сивих небесних потоках ти кружляєш над нами.
        Дивися, дивися і розповідай всім:
        четверо жінок розіб’ють пришельців. 
        Ущент.
         
         ~
        4. Самурай
         
        Збиває осінь
        Лист останній з клена.
        Вітер щедрий
        на лють і стріли.
        Чесна ніч іде.
         
         ~
        5. Святий Михаїл
         
        І настане Тиша в кінці.
        І позводить на манівці
        хмарний важіль минулого лиха.
        Не пуста ейфорія, а втіха
        залікує набиті синці.
         
        І настане Тиша зі світла.
        Стане ясно, затишно і тепло.
        Розривають повільну Імлу
        Дикі діти вогню і вітру
        Із меча твого, Михаїле.
         
        І проклюнеться зір із зерна,
        І уклониться Тур за турботу,
        І розгорнеться вмить Борисфен,
        І пов’яже свою позолоту
        У пророчий величний катрен.
         ~
        6. Вогнеборець
         
        Це горіння вгорі, розпростерте між хмарами,
        Це горішні вогні, із великими й ма́лими
        Килимами подертими, стертими вирубками,
        Це ліси, помордовані клятими виродками,
        Це тече в голові чиїйсь кіптява з гноєм.
        Це лампади, заправлені кров’ю і лоєм,
        Це центральні тенета, обсаджені тлею,
        Це події, що сталися з нами і нею,
        Це яйце великоднє на теплій долоні,
        Це Великдень у ямі в чужому полоні,
        Це проросле зерно і поля золотаві,
        Це бійці, що ладнають турелі іржаві,
        Це придурки, що гидять науки звання,
        Це учені за хліб продавали знання,
        Це відстойники, повні кривих бюлетенів,
        Це ліси із родинами сов і оленів,
        Це ленд-ровери возять глистів і кліщів,
        Це медсестри, що пестять чужих малюків,
        Це дівчата, що мріють про добру родину,
        Це про нашу кохану живу Україну,
        Це про мене і гострі, колючі рядки,
        Це про сонце, що любить нас навіть таких.
         ~
        7. Бойовий монах
         
        Я молився, і Бог пояснив
        Сенс важливих речень і слів,
        Я знання це несу крізь примарне:
        Не лишай зло у світі безкарним,
        Захищай малих діток і вдів,
        І твій шлях не опиниться марним.
         
        Я молився, і Бог передав
        Мені ряд невідкладних справ,
        Бо ми - руки і очі Господні.
        Міцно списа тримаю свого,
        І не страшно мені того,
        Що я можу загинуть сьогодні.
         
        Від каміння до злої луни
        Я винищую слуг Сатани -
        І не знаю поточного ліку.
        Я є вироком, а не уроком.
        А пророче залишу пророкам,
        Віщувати - то їх споконвіку.
          ~
        8. Гладіатор

        Чи ти - чи я.
        Нічого особистого.
        Хочу жити - отже, маю вистоять.
        На жовтій таці із піску і пилу
        Ми маємо з тобою танцювати
        Смертельне коло - viva чи могила.
         
        Чи я - чи ти.
        Я знав тебе малятком -
        малесеньким кумедним левенятком,
        Я бавився з тобой у вільну мить.
        Тепер арена вимага відбитків
        І криків людських нелюдів-жахіть.
         
        Ні я - ні ти.
        Іди в свої світи,
        Де звірів не виводять на поталу
        Розпалених примарами людиськ.
        Цей день для мене точно невеселий.
        І римляни мені не зрозумілі -
        Який від мертвого їм треба зиск?
         
        Відвоював собі чотири дні.
        Убив єдиного живого друга.
        Стою над тілом лева і мовчу.
        Роздайте, боги, звірям по мечу -
        і припиніть оцю дурну наругу.
         ~
        9. Хрестоносець
         
        Раз хрестоносець - то неси свій хрест
        Крізь брами, через внутрішній протест,
        Крізь сни з батисту, кварцу, аметисту,
        Подібний до старих контрабандистів,
        Неси, мов скарб, а не важкий баласт.
         
        Ти - хрестоносець. Кращий серед каст.
        Ти бачиш світло, храм, вівтар з ягням,
        Сідаєш на слухняного коня -
        Лишається позаду метушня,
        і віра - найнадійніша броня.
         
        Червоний хрест нашитий на плащі.
        Уваги не звертає на дощі,
        Упертий, через хащі й нуртовища,
        Крізь нетрі, через скелі і хвощі,
        Найвищі гори, капища і днища
        Несе свій хрест
        І серце на мечі.
         ~
        10. Вогневир
         
        Хто під забралом?
        Чи не той, кого забрала
        Запекла з ворогом війна зухвала,
        Хто серце переплавив у вогонь,
        Чиє тепло розпечених долонь
        Крізь меч на полі битви вирувало?
         
        Це я, який не знає каяття.
        На цьому шляху зникло вороття,
        І круки у полум’яних коронах
        Підказують прийоми для атак.
        Це я, який сприйняв таємний знак,
        Коли упали брами і заслони.
         
        Птаха́ми б’ються віра і закон.
        У вогневирі із сухим чолом
        Повторюю рефрен свого псалома:
        Ми самі творимо Армагеддон.
        Ми перейшли кривавий рубікон,
        І тут нарешті ми, як є, удома.
        
         
         ~
        11.Український воїн
         
        Хто хоч раз шнурував берці,
        Має теплі зарубки на серці,
        Має розписи на потилиці,
        Що не снилися ані Сфорці,
        Ні джульєтиній годувальниці.
         
        Це про терпкий дим не з курильниць,
        Про зіниці небесних криниць,
        Роздратованість жриць і плакальниць,
        Коли їх розбуди́ть силоміць.
         
        Це про танці на старих милицях,
        Про цілунки смерті на вилицях,
        Про іконки сирі ламіновані,
        Про нотатники розліновані,
        Феєрверки не на весіллях,
        Неодмінність німого похмілля,
        Жерла магмових попереджень,
        Дурість вуличних упереджень...
         
        Хлопці носять кросівки і кеди,
        На підборах ходять дівчата,
        У дітей на взутті китиці.
        Хто хоч раз шнурував берці,
        В того цокають коліщата
        Серед розписів на потилиці.
         ~
        12. Мушкетер
         
        Таке життя, мон шер -
        Ми маємо стріляти,
        І зброї нам не можна відпускати.
        І на позиції щоранку повертатись,
        І прочищати шомполом мушкет,
        Тримати чистим, без іржі, багнет,
        Красивим паням руки цілувати.
         
        Оце таке, мон шер, моє життя.
        І разу не наснилось каяття
        За душі тих невдах і бідолашців,
        Яких я запроторив до Христа.
        Хіба що темна тиха пустота,
        По тому, як я пив з одним монахом
        І вщент йому програвся у віста.
        
        ~
        13. Бойова колискова для Мауглі
        
        Спи, моє серденько,
        З пекла підйом батискафу
        Вже заплановано,
        Й біси посипляться нафіг,
        Попіджимають куці хвости й лапи,
        Врозтіч рвонуть, гублячи капці,
        Ніби каленим хрестом
        Вжарило їх під хвостом.
        
        Спи, моє серденько,
        Скоро прибуде підмога,
        Янголи звістку несуть від єдиного Бога:
        Човен з Ясоном причалить десь там, на осонні,
        В темній осоці у центр золотої затоки.
        Третіми, горді, прибудуть у кам’яні фіорди
        Триста дракарів - усміхнені дубові морди,
        Грубі обвітрені руки твоїх побратимів,
        Тверді долоні тримають всесвітні безодні,
        Створені з каменю й крові останніх драконів - 
        Древні, іконні, веселі, захмарні, прадавні.
        
        Поки насправді Чугайстер сидить на веранді,
        Він береже твою голову в снах і розраді.
        Як вартовий, загартований гуркотом грому,
        Тихо колише в долонях розлуку і втому,
        Ніжно буркоче щось щемне, звіряче, журливе,
        просить у ночі для тебе про сонне й красиве,
        Пальцем зірки протирає в холодному небі,
        Пташку за пташкою шле по підмогу для тебе.
        `.split('~');

        return poems[n-1];
    
}



const getURL = () => {
    var pnumber = window.location.href.split('?')[1]; 
    if (pnumber === undefined){
        pnumber = "1"
    }
    try{
        eval(pnumber)
    }
    catch{
        pnumber = "1"
    }
    if (eval(pnumber) > 13){
        pnumber = 13;
    }

    rep = document.getElementsByClassName('replace')[0];
    art = document.createElement('img');
    art.src = `./static/art/${pnumber}.jpg`;
    art.className = 'bigArt';

    const artCol = getCol();
    artCol.appendChild(art);
    rep.appendChild(artCol);
/////////////////////////


    const col = document.createElement('div');
    col.className = "col-1"
    rep.appendChild(col);

///////////////////////////
    const poemCol = getCol();
    poem = getPoemByN(eval(pnumber));
    poemParagraph = document.createElement('p');
    poemParagraph.className = 'h4 text-light';
    poemParagraph.innerText = poem;
    poemCol.appendChild(poemParagraph);
    rep.appendChild(poemCol);

}
window.onload = () => getURL();