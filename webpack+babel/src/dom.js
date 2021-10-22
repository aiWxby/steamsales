/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import {getUnixStamps, formatDate} from './dateFunctions.js';
import {countdownItems, sliderItems} from './references.js';
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

    /* ---------------------------- Current Time DOM ---------------------------- */
    // * Current Time Element
    const toprint = document.querySelector(".time-left");

    setInterval(() => {
        toprint.innerHTML = formatDate(undefined, "fromObject");
    }, 1000);
    /* -------------------------------------------------------------------------- */

    /* ------------------------------- Slider DOM ------------------------------- */
    // * Elementlerin seçilmesi
    const slider = document.querySelector(".slider");
    const sliderTitle = document.querySelector(".slider__title");
    const sliderDescription = document.querySelector(".slider__description");
    const sliderFav = document.querySelector(".slider__fav");
    const sliderPrice = document.querySelector(".slider__price");
    const sliderImage = document.querySelector(".slider__image");
    const sliderBackward = document.querySelector(".slider__btn__backward");
    const sliderAfterward = document.querySelector(".slider__btn__afterward");
    
    // * Slider bilgilerinin doldurulması
    const fillSlider = function(sliderIndex = 0){
        var sliderIndex = sliderIndex;

        sliderTitle.innerText = sliderItems[sliderIndex].name;
        sliderDescription.innerText = sliderItems[sliderIndex].description;
        if (sliderPrice.innerText = sliderItems[sliderIndex].price === null) {
            sliderPrice.innerText = "Ücretsiz";
        } else {
            sliderPrice.innerText = sliderItems[sliderIndex].price;
        }
        sliderImage.src = sliderItems[sliderIndex].src;
        sliderImage.alt = sliderItems[sliderIndex].alt;

        if(sliderItems[sliderIndex].isFavorite === true){
            let icon = '<i class="fas fa-heart color--main"></i>';
            sliderFav.innerHTML = icon;
        } else {
            sliderFav.innerHTML = "";
        }
    }

    // * Her sayfa yenilendiğinde ya da sayfaya girildiğinde farklı oyun öne çıkacak
    const rndNum = Math.floor((Math.random()*sliderItems.length));
    fillSlider(rndNum);

    // * Buttonlara tıklandığında sliderMove fonksiyonuna gidecek.
    sliderBackward.addEventListener("click", sliderMove);
    sliderAfterward.addEventListener("click", sliderMove);

    // * Mevcut slider index değeri
    var sliderIndex = 0;
    function sliderMove(event){
        // * Gelen butonun class listesini alma işlemi
        let target = event.target.classList;
        let list = [...target];

        if(list.includes("slider__btn__backward")){
            if(sliderIndex == 0){
                sliderIndex = (sliderItems.length - 1);
            } else {
                sliderIndex--;
            }
        } else if (list.includes("slider__btn__afterward")) {
            if(sliderIndex == (sliderItems.length - 1)){
                sliderIndex = 0;
            } else {
                sliderIndex++;
            }
        }
        // * Yeni oluşan indexi, slider doldurma fonksiyonuna gönderme işlemi
        fillSlider(sliderIndex);
    }

    /* -------------------------------------------------------------------------- */

    /* ------------------------------ Countdown DOM ----------------------------- */
    // * Countdown
    const countdown = document.querySelector(".countdown");
    
    // * Countown List Item
        const createItem = function(index){
            const item = countdownItems[index];
            
            const listItem = document.createElement("div");
            listItem.className = "countdown__item";

            const logoSection = document.createElement("div");
            logoSection.className = "logo-section";
            const icon = document.createElement("i");
            logoSection.appendChild(icon);

            const mainSection = document.createElement("div");
            mainSection.className = "main-section";

            const title = document.createElement("h3");
            title.className = "sale-title";
            title.innerHTML = `Steam ${item.name} Sale`;
            mainSection.appendChild(title);

            const info = document.createElement("span");
            info.className = "estimated-time";

            const interval = setInterval(() => {
                let state;
                // * Kalan zaman değişkenleri
                let leftDays = getUnixStamps(item.date).days;
                let leftHours = getUnixStamps(item.date).hours;
                let leftMinutes = getUnixStamps(item.date).minutes;
                let leftSeconds = getUnixStamps(item.date).seconds;

                if ((leftDays > -3 && leftDays < 0) || (leftDays === 0)){
                    clearInterval(interval);
                    state = "HAS STARTED";
                    listItem.classList.add("active-sale");
                    icon.className = "color--main bell-animation fas fa-bell fa-lg";
                } else if (leftDays <= -3) {
                    clearInterval(interval);
                    icon.className = "far fa-bell fa-lg";
                    listItem.classList.remove("active-sale");
                    state = "EXPIRED";
                    info.classList.add("color--warning");
                } else {
                    icon.className = "far fa-bell fa-lg";
                    listItem.classList.remove("active-sale");
                    state = `<span class="color--main">${leftDays}</span> days
                    - <span class="color--main">${leftHours}</span> hours
                    - <span class="color--main">${leftMinutes}</span> minutes
                    - <span class="color--main">${leftSeconds}</span> seconds`
                };

                info.innerHTML = state;
            }, 1000);
            mainSection.appendChild(info);
            listItem.appendChild(logoSection);
            listItem.appendChild(mainSection);
            return listItem;
        }

        const list = [];
        countdownItems.forEach((item, index)=>{
            list.push(createItem(index));
        })

        list.forEach((item, index)=>{
            countdown.appendChild(list[index]);
        })
    /* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */