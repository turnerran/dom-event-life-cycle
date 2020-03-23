(function() {
    var wrapper = document.getElementsByClassName("wrapper")[0];
    var middle = document.getElementsByClassName("middle")[0];
    var inner = document.getElementsByClassName("inner")[0];
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
            target.classList.add('highlight');
            target.childNodes[0].nodeValue = `${eventPhase}`;
            setTimeout(function() {
            target.classList.remove('highlight');
            target.childNodes[0].nodeValue = "-";
            }, delay);
        }, startAt);
    }
  
    // capture phase
    wrapper.addEventListener('click', clickEvent, true);
    middle.addEventListener('click', clickEvent, true);

    //target phase - wrapper element
    wrapper.addEventListener('click', clickEvent);
    
    //bubble phase
    middle.addEventListener('click', clickEvent);
    inner.addEventListener('click', clickEvent);
    
})();