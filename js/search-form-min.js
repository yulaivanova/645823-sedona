var link=document.querySelector(".search-button"),popup=document.querySelector(".modal-search-hotels"),arDate=popup.querySelector("[name=ar-date]"),depDate=popup.querySelector("[name=dep-date]"),adults=popup.querySelector("[name=amount-of-adults]"),childs=popup.querySelector("[name=amount-of-childs]"),form=popup.querySelector("form"),password=popup.querySelector("[name=password]"),plusAdult=document.querySelector("[name=plus-adult]"),minusAdult=document.querySelector("[name=minus-adult]"),plusChild=document.querySelector("[name=plus-child]"),minusChild=document.querySelector("[name=minus-child]");plusAdult.addEventListener("click",function(e){e.preventDefault(),adults.value++}),minusAdult.addEventListener("click",function(e){e.preventDefault(),0<adults.value&&(adults.value=adults.value-1)}),plusChild.addEventListener("click",function(e){e.preventDefault(),childs.value++}),minusChild.addEventListener("click",function(e){e.preventDefault(),0<childs.value&&(childs.value=childs.value-1)}),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-show"),popup.classList.remove("modal-error"),arDate.focus()}),form.addEventListener("submit",function(e){arDate.value&&depDate.value&&(childs.value||adults.value)&&(0!=childs.value||0!=adults.value)||(e.preventDefault(),console.log("Нужно ввести данные"),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});