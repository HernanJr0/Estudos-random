var fYear = document.getElementById('pergBDay')
    fYear.style.display = 'none'

    var rS = document.getElementById('rBDs')
    var rN = document.getElementById('rBDn')
    var res = document.getElementById('resultado')

    function escondeItem() {
        var form = document.getElementById('pergYear')
        form.style.display = 'none'
        fYear.style.display = 'block'
    }

    function mostraIdade() {
        var ano = document.getElementById('year').value
        if (rS.checked) {
            res.textContent = 'Sua idade é ' + (2023 - ano)
        } else {
            res.textContent = 'Sua idade é ' + (2022 - ano)
        }
    }