
    var link = document.querySelector(".search-button");
    var popup = document.querySelector(".modal-search-hotels");
    var arDate = popup.querySelector("[name=ar-date]");
    var depDate = popup.querySelector("[name=dep-date]");
    var adults = popup.querySelector("[name=amount-of-adults]");
    var childs = popup.querySelector("[name=amount-of-childs]");
    var form = popup.querySelector("form");
    var password = popup.querySelector("[name=password]");
    var plusAdult = document.querySelector("[name=plus-adult]");
    var minusAdult = document.querySelector("[name=minus-adult]");
    var plusChild = document.querySelector("[name=plus-child]");
    var minusChild = document.querySelector("[name=minus-child]");

    document.body.classList.remove('no-js');

    plusAdult.addEventListener("click", function(evt) {
      evt.preventDefault();
      adults.value++;
    });

    minusAdult.addEventListener("click", function(evt) {
      evt.preventDefault();
      if (adults.value > 0) {
      adults.value=adults.value-1;
      }
    });

    plusChild.addEventListener("click", function(evt) {
      evt.preventDefault();
      childs.value++;
    });

    minusChild.addEventListener("click", function(evt) {
      evt.preventDefault();
      if (childs.value >0) {
      childs.value=childs.value-1;
      } 
    });
    
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-show");
      popup.classList.toggle("modal-close");
      popup.classList.remove("modal-error");
      
      arDate.focus();
    });    

    form.addEventListener("submit", function (evt) {
      if (!arDate.value || !depDate.value || (!childs.value && !adults.value) || (childs.value == 0 && adults.value == 0 )) {
      evt.preventDefault();
      console.log("Нужно ввести данные");
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
      if (!childs.value ) {
        childs.value=0
      };
      if (!adults.value ) {
        adults.value=0
      };
    });
    
    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
  