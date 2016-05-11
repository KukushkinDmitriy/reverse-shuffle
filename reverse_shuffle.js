
HTMLUListElement.prototype.rev = function () {
    var count = this.childElementCount
    var firstChild = this.firstElementChild
    for(var i =0;i<count;i++){
        this.insertBefore(this.lastElementChild,firstChild)
    }
   
}
var $ulrev=document.querySelectorAll('ul[reversed]')
Array.from($ulrev).forEach(element => element.rev())


HTMLUListElement.prototype.shuf = function () {
    var count = this.childElementCount
    var childs = Array.from(this.children).sort(() => {return 0.5 - Math.random()})
    for(var i =0;i<count;i++){
        this.appendChild(childs[i])
    }
}
var $ulshuf=document.querySelectorAll('ul[shuffle]')
Array.from($ulshuf).forEach(element => element.shuf())
