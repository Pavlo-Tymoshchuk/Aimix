document.addEventListener('DOMContentLoaded', function(){
    
    // Button effect
    
    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 || ua.indexOf("Edge") > -1;
        
        return is_ie; 
    }
    
    if(!isIE()) {
        if(window.innerWidth > 1200) {
            let buttons = document.querySelectorAll('.js-button-decor');
            
            document.addEventListener('mouseover', function(e){
                let elem = e.target;
                
                if(elem.closest(".js-button-decor")) {
                    
                    if(!elem.closest(".js-button-decor").querySelector('.decor')) {
                        let span = document.createElement("span");
                        span.classList.add('decor');
                        elem.closest(".js-button-decor").appendChild(span);
                    }

                    let box = elem.closest(".js-button-decor").getBoundingClientRect();
                    let left = e.clientX - box.left;
                    let decorElem = elem.closest(".js-button-decor").querySelector('.decor');
                    
                    elem.closest(".js-button-decor").classList.add("active");
                    
                    decorElem.style.left = '' + left + 'px';
                    
                }
                
                if(!elem.closest(".js-button-decor")) {
                    let buttons = document.querySelectorAll('.js-button-decor');
                    if(buttons) {
                        buttons.forEach(function(item){
                            item.classList.remove("active");
                        });
                    }
                }
            });
            
            for(var i = 0; buttons.length > i; i++) {
                let span = document.createElement("span");
                span.classList.add('decor');
                buttons[i].appendChild(span);
            }
        }
    }
    
    // //Button effect
    
    // Drop
    
    var dropList = document.querySelectorAll('.js-drop-item');


    document.addEventListener('click', function(e){
        let element = e.target;
        
        if(element.closest('.js-drop-button')){
            let isActive = element.closest('.js-drop-item').classList.contains('active')? true: false;
            
            dropList.forEach(item => {item.classList.remove('active')});
            
            if(isActive)
                element.closest('.js-drop-item').classList.remove('active');
            else
                element.closest('.js-drop-item').classList.add('active');
        }
        
        if(element.closest('.js-drop-contains')){
            let dropList = element.closest('.js-drop-item');
            let dropItems = dropList.querySelectorAll('.js-drop-contains');
            
            dropItems.forEach(item => {item.classList.remove('active')});
            element.closest('.js-drop-contains').classList.add('active');
            let innerContent = element.closest('.js-drop-contains').querySelector('.text').innerHTML;
            let dropInput = dropList.querySelector('.js-drop-input');
            
            if(dropInput) {
                dropInput.value = innerContent;
            }
            
            checkInput(allInput);
            
            // close dropdown
            dropList.classList.remove('active');
        }
    });
    
    document.querySelector('body').addEventListener('click', function(event){
        
        let dropItem = event.target.closest('.js-drop-item');
        
        if(!dropItem) {
            document.querySelectorAll('.js-drop-item').forEach(function(item){
                item.classList.remove('active');
            }); 
        }
        if(dropItem) {
            if(!dropItem.classList.contains("active")) {
                document.querySelectorAll('.js-drop-item').forEach(function(item){
                    item.classList.remove('active');
                });
            }
        }
        
    });
    
    // //Drop
    
    // Position quiz info block
    
    document.addEventListener("click", function(e){
        let item = e.target;
        
        if(item.closest(".js-position-info")) {
            let buttonPosition = item.closest(".js-position-info").getBoundingClientRect();
            let wrapper = item.closest(".js-position-wrapper");
            let wrapperPosition = wrapper.getBoundingClientRect();
            let infoBlock = wrapper.querySelector(".js-info-block");
            let infoDecorElem = wrapper.querySelector(".js-info-decor");
            
            if(window.innerWidth > 1025){
                infoBlock.style.left = Math.floor((buttonPosition.left - wrapperPosition.left)) - 30 + "px";
                return;
            }
            
            if(window.innerWidth < 1025 && window.innerWidth > 767) {
                infoBlock.style.right = Math.floor((wrapperPosition.right - buttonPosition.right)) - 20 + "px";
                infoDecorElem.style.left = "auto";
                return;
            }
            
            if(window.innerWidth < 767) {
                infoDecorElem.style.left = Math.floor((buttonPosition.left - wrapperPosition.left)) - 10 + "px";
            }
            
        }
    });
    
    // //Position quiz info block
    
    // Popup
        
    let mainButton = document.querySelectorAll('.js-button');
    let overlay = document.querySelector('.overlay');
    let htmlOverflow = document.querySelector('html');
    
    for(var i = 0; mainButton.length > i; i++) {
        if(mainButton[i] !== null) {
            
            mainButton[i].addEventListener('click', function(){
                let getData = this.getAttribute('data-target');
                let popup = document.querySelector('.popup[data-target = ' + getData + ']');
                popup.classList.add('active');
                overlay.classList.add('active');
                htmlOverflow.classList.add('overflow')
            });
        }
    }
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-close')){
            let popupActive = document.querySelector('.popup.active');
            
            if(popupActive) {
                popupActive.classList.remove('active');
                overlay.classList.remove('active');
                htmlOverflow.classList.remove('overflow');
            }
        }
    });

    overlay.addEventListener('click', function(){
        let popupActive = document.querySelector('.popup.active');
        
        popupActive.classList.remove('active');
        overlay.classList.remove('active');
        htmlOverflow.classList.remove('overflow');
    });
    
    // //Popup
    
    // Turn on music
    
    let audio = document.querySelector('.js-audio');
    let audioButton = document.querySelectorAll('.js-audio-button');
    
    audioButton.forEach(function(item) {
        item.addEventListener("click", function() {
            audioButton.forEach(function(item) {
                item.classList.toggle('active');
            });
            
            let audioSrc = audio.getAttribute('data-src');
            if(!audio.hasAttribute('src')) {
                audio.setAttribute('src',`${audioSrc}`);
            }else {
                audio.removeAttribute('src');
                audio.pause();
            }
        });
    });
    
    
    // //Turn on music
    
    // Scroll to top
    
    let wrapperToTop = document.querySelector('.button-to-top');
    let buttonToTop = document.querySelector('.to-top');
    
    document.addEventListener('scroll', function(){
        if(window.pageYOffset > 1000 && window.innerWidth < 1025) {
            wrapperToTop.classList.add('show');
        }else {
            wrapperToTop.classList.remove('show');
        }
    });
    
    buttonToTop.addEventListener('click', function(){
       window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    // /Scroll to top
    
     // Header
    
    let burger = document.querySelector('.header-burger');
    let burgerList = document.querySelector(".header__nav");
    let burgerClose = document.querySelector('.header__close-nav');

    burger.addEventListener('click', function(){
        burgerList.classList.add("active");
        document.querySelector('html').classList.add('overflow');
    });

    burgerClose.addEventListener('click', function(){
        burgerList.classList.remove('active');
        document.querySelector('html').classList.remove('overflow');
    });

    // /Header
    
    // Footer 
    
    let maxScroll = document.body.offsetHeight - document.documentElement.clientHeight;
    
    let fixedNav = document.querySelector('.js-fixed-nav');
    if(window.scrollY < 100) {
        if(fixedNav){
            document.querySelector('.js-fixed-nav').classList.add('hide');
        }
        
    }
    
    if(fixedNav){
        document.addEventListener('scroll', function() {
            let scrollTopCurrent = window.scrollY;
            
            if((scrollTopCurrent > maxScroll - 150)) {
                document.querySelector('.js-fixed-nav').classList.add('hide');
            }else {
                document.querySelector('.js-fixed-nav').classList.remove('hide');
            }
        });
    }

});