(function() {
    var wrapper5 = document.getElementsByClassName("wrapper-5")[0];
    var wrapper4 = document.getElementsByClassName("wrapper-4")[0];
    var wrapper3 = document.getElementsByClassName("wrapper-3")[0];
    var wrapper2 = document.getElementsByClassName("wrapper-2")[0];
    var wrapper1 = document.getElementsByClassName("wrapper-1")[0];
    var delay = 500;
  
    function clickEvent(event) {
        event.timeout = (event.timeout + delay) || 0;
        var startAt = event.timeout;
        var target = event.currentTarget;
        var eventPhase = "";
        switch (event.eventPhase){
            case 1: {
                eventPhase = "capturing";  
                break;
            }
            case 2: {
                eventPhase = "target";  
                break;
            }
            case 3: {
                eventPhase = "bubbling"; 
                break;
            }
        }

        console.log(target.className + " - " + eventPhase + " - startAt = " + startAt)
        setTimeout(function() {
            target.classList.toggle('highlight');
            target.childNodes[0].nodeValue = `${eventPhase}`;
            setTimeout(function() {
            target.classList.toggle('highlight');
            target.childNodes[0].nodeValue = "-";
            }, delay);
        }, startAt);
    }
  
    // capture phase
    wrapper4.addEventListener('click', clickEvent, true);
    wrapper3.addEventListener('click', clickEvent, true);
    wrapper2.addEventListener('click', clickEvent, true);
    wrapper1.addEventListener('click', clickEvent, true);
    //target phase - wrapper element
    wrapper1.addEventListener('click', clickEvent);
    
    //bubble phase
    wrapper5.addEventListener('click', clickEvent);
    wrapper4.addEventListener('click', clickEvent);
    wrapper3.addEventListener('click', clickEvent);
    wrapper2.addEventListener('click', clickEvent);

})();