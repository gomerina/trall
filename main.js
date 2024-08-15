document.addEventListener('DOMContentLoaded', function () {
    var firstStep = document.querySelector('.jsBegin');
    var beginInput = document.querySelector('.jsBeginInput');
    var content = document.querySelector('.jsContent');
    var final = document.querySelector('.jsFinal');
    var finalHeading = document.querySelector('.jsHeading');
    var successBtn = document.querySelector('.jsSuccessBtn');
    var denyBtn = document.querySelector('.jsDenyBtn');
    beginInput.addEventListener('input', function () {
        var $this = this;
        if ($this.value == 'Пидор' || $this.value == 'пидор') {
            firstStep.classList.add('hide');
            content.classList.add('visible');
        }
    })
    successBtn.addEventListener('click', function () {
        content.classList.add('hide');
        final.classList.add('visible');
        finalHeading.textContent = 'А ОН ТЕБЯ НЕ БУДЕТ!)))';
    })
    denyBtn.addEventListener('click', function () {
        content.classList.add('hide');
        final.classList.add('visible');
        finalHeading.textContent = 'ТЫ НЕДСТОИН';
    })
})