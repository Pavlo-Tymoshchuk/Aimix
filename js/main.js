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

            for(var i = 0; buttons.length > i; i++) {
                let span = document.createElement("span");
                span.classList.add('decor');
                buttons[i].appendChild(span);
                
                buttons[i].addEventListener('mouseover', function(e){
                    let box = this.getBoundingClientRect();
                    let left = e.clientX - box.left;
                    let decorElem = this.querySelector('.decor');
                    
                    this.classList.add("active");
                    
                    decorElem.style.left = '' + left + 'px';
                });
                
                buttons[i].addEventListener("mouseleave", function(){
                    this.classList.remove("active");
                });
            }
        }
        
    }
    
    // //Button effect
    
});