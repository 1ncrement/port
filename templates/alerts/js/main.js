/**
 * Autor: "Who am I" Date: "11/03/2016"
 * vk: http://vk.com/vakula_e_g
 * fb: https://www.facebook.com/profile.php?id=100004015285077
 * skype: diabolik9244
 */
//'use strict';
(function(){
    //'use strict';
    /*====================================================================
    Action plan:
    * событие(event)
    * формирование елемента с текстом события(create elem.)
    * добавление елемента в DOM(add elem.)
    * анимация обьекта(animation elem.)
    * ждать N времени(wait)
    * убрать анимацией с страници(out amination elem.)
    * удалить елемент(remove elem.)
     =====================================================================*/

var d = document, w = window,
    anim = {
        time: 4000,
        in: 'bounceInDown',
        out: 'bounceOutUp'
    };

    //event
    w.addEventListener('click', function (event) {
        //create elem
        var elem = d.createElement('div');
        elem.classList.add('superPuperAlert');
        elem.innerHTML = 'You\'re click on cords x:'+event.x+' y:'+event.y;

        //add elem.
        var alert = d.body.appendChild(elem);
        alertInMiddle(alert);

        //animation elem.
        var start = Date.now();
        var animation = setInterval(function () {
            var timePassed = Date.now() - start;

            //wait
            if(timePassed >= anim.time){
                clearInterval(animation);
                //animation out elem.
                alertInMiddle(alert, 1);
                setTimeout(function () {
                    d.body.removeChild(alert);
                    return;
                },1000);
            }
        }, anim.time);
    });

function Alert(X, Y, In, Out, time){
    this.x = X;
    this.y = Y;
    this.in = In;
    this.out = Out;
    this.time = time;
}

function alertInMiddle(elem, out){
    if(out){
        elem.classList.remove(anim.in);
        elem.classList.add(anim.out);
        return;
    }
    elem.style.position = 'fixed';
    elem.style.top = elem.offsetHeight/2 + 'px';
    elem.style.left = (w.innerWidth - elem.offsetWidth)/2 + 'px';
    //animation in elem.
    elem.classList.add('animated',anim.in);
}

Object.prototype.getStyle = function (prop) {
    return (window.getComputedStyle(this, null)[prop] || this.currentStyle[prop]);
}
})();