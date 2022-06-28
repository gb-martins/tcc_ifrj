function checking() {
    let checkJanela = document.getElementById("checkJanela")
    if (checkJanela.checked == true) {
        document.getElementById("input1Janela").style.display = "block"
        document.getElementById("input2Janela").style.display = "block"
        document.getElementById("input3Janela").style.display = "block"
    }
    else {
        document.getElementById("input1Janela").style.display = "none"
        document.getElementById("input2Janela").style.display = "none"
        document.getElementById("input3Janela").style.display = "none"
    }
    
    let checkSplit = document.getElementById("checkSplit")
    if (checkSplit.checked == true) {
        document.getElementById("input1Split").style.display = "block"
        document.getElementById("input2Split").style.display = "block"
        document.getElementById("input3Split").style.display = "block"
        document.getElementById("input4Split").style.display = "block"
        document.getElementById("input5Split").style.display = "block"
    }
    else {
        document.getElementById("input1Split").style.display = "none"
        document.getElementById("input2Split").style.display = "none"
        document.getElementById("input3Split").style.display = "none"
        document.getElementById("input4Split").style.display = "none"
        document.getElementById("input5Split").style.display = "none"
    }
}

function calc() {
    //C1
    let area = parseFloat(document.getElementById("inputArea").value)
    let h1Area = document.getElementById("h1Area")
    h1Area.innerHTML = "Área = " + (area) + " m²"

    let cargaMin = 0.03 * area
    let c1Area = document.getElementById("c1Area")
    c1Area.innerHTML = "Carga mínima (C1) = " + cargaMin.toFixed(2) + " kVA"

    let c1 = parseFloat(document.getElementById("inputC1").value)
    let c1Cargas = document.getElementById("c1Cargas")
    c1Cargas.innerHTML = "Carga Instalada 1 (C1) = " + c1 + " kVA"

    let c1Utilizado
    if (cargaMin > c1) {
        document.getElementById("c1Area").style.color = "#90ee90"
        document.getElementById("c1Cargas").style.color = "#8b0000"
        c1Utilizado = cargaMin
    }
    else{
        document.getElementById("c1Area").style.color = "#8b0000"
        document.getElementById("c1Cargas").style.color = "#90ee90"
        c1Utilizado = c1
    }

    //D1
    let c1Int = Math.trunc(c1Utilizado)
    let c1Dec = parseFloat((c1Utilizado - c1Int).toFixed(2))
    let somaIntC1 = 0
    let somaDecC1 = 0
    if (c1Int <= 10 && c1Int > 0) {
        var fatorDemanda

        for(i = 0; i < c1Int; i++) {
            fatorDemanda = [0.8, 0.75, 0.65, 0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.27, 0.24]
            let divisao = c1Int / c1Int
            let resultadoInt = divisao * fatorDemanda[i]
            somaIntC1 += resultadoInt
        }

        fatorDemanda = [0.8, 0.75, 0.65, 0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.27, 0.24]
        var resultadoDecC1 = c1Dec * fatorDemanda[c1Int]
        somaDecC1 += parseFloat(resultadoDecC1.toFixed(2))

        var d1 = parseFloat(somaIntC1 + somaDecC1).toFixed(2)
    }
    else if (c1Int > 10) {
        let novoInt = c1Int - 10
        var somaNovoIntC1 = 0

        for (i = 0; i <= novoInt; i++) {
            fatorDemanda = [0.8, 0.75, 0.65, 0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.27, 0.24]
            
            let divisao = novoInt / novoInt
            let resultadoNovoInt = divisao * fatorDemanda[10]
            somaNovoIntC1 = resultadoNovoInt
            const c1P10 = 5.07
            somaIntC1 = somaNovoIntC1 + c1P10
        }

        fatorDemanda = [0.8, 0.75, 0.65, 0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.27, 0.24]
        resultadoDecC1 = c1Dec * fatorDemanda[10]
        somaDecC1 += parseFloat(resultadoDecC1.toFixed(2))
        d1 = parseFloat((somaIntC1 + somaDecC1).toFixed(2))
    }
    let h1D1 = document.getElementById("h1D1")
    h1D1.innerHTML = "Demanda (D1) = " + d1 + " kVA"

    //C2
    let c2 = parseFloat(document.getElementById("inputC2").value)
    let h1C2 = document.getElementById("h1C2")
    h1C2.innerHTML = "Carga Instalada 2 (C2) = " + c2 + " kVA"

    //D2
    let numChuveiros = parseInt(document.getElementById("numChuveiros").value)
    fatorDemanda = [1, 0.75, 0.7, 0.66, 0.62, 0.59, 0.56, 0.53, 0.51, 0.49, 0.47, 0.45, 0.43, 0.41, 0.4, 0.39, 0.38, 0.37, 0.36, 0.35, 0.34, 0.33, 0.32, 0.31,  0.3]
    let d2 = parseFloat((c2 * fatorDemanda[numChuveiros - 1]).toFixed(2))
    if (numChuveiros >= 25){
        d2 = parseFloat(c2 * fatorDemanda[24])
    }
    let h1D2 = document.getElementById("h1D2")
    h1D2.innerHTML = "Demanda (D2) = " + d2 + " kVA"

    //C3
    var display1Janela = document.getElementById("input1Janela").style.display
    var janelaMenor9k = document.getElementById("janelaMenor9k")
    if (display1Janela == "none") {
        janelaMenor9k === 0
    } else if (display1Janela == "block") {
        janelaMenor9k = parseInt(document.getElementById("janelaMenor9k").value)
    }

    var display2Janela = document.getElementById("input2Janela").style.display
    var janelaMenor14k = document.getElementById("janelaMenor14k")
    if (display2Janela == "none") {
        janelaMenor14k === 0
    } else if (display2Janela == "block") {
        janelaMenor14k = parseInt(document.getElementById("janelaMenor14k").value)
    }

    var display3Janela = document.getElementById("input3Janela").style.display
    var janelaMaior14k = document.getElementById("janelaMaior14k")
    if (display3Janela == "none") {
        janelaMaior14k === 0
    } else if (display3Janela == "block") {
        janelaMaior14k = parseInt(document.getElementById("janelaMaior14k").value)
    }

    var display1Split = document.getElementById("input1Split").style.display
    var splitMenor10k = document.getElementById("splitMenor10k")
    if (display1Split == "none") {
        splitMenor10k === 0
    } else if (display1Split == "block") {
        splitMenor10k = parseInt(document.getElementById("splitMenor10k").value)
    }

    var display2Split = document.getElementById("input2Split").style.display
    var splitMenor15k = document.getElementById("splitMenor15k")
    if (display2Split == "none") {
        splitMenor15k === 0
    } else if (display2Split == "block") {
        splitMenor15k = parseInt(document.getElementById("splitMenor15k").value)
    }

    var display3Split = document.getElementById("input3Split").style.display
    var splitMenor20k = document.getElementById("splitMenor20k")
    if (display3Split == "none") {
        splitMenor20k === 0
    } else if (display3Split == "block") {
        splitMenor20k = parseInt(document.getElementById("splitMenor20k").value)
    }

    var display4Split = document.getElementById("input4Split").style.display
    var splitMenor30k = document.getElementById("splitMenor30k")
    if (display4Split == "none") {
        splitMenor30k === 0
    } else if (display4Split == "block") {
        splitMenor30k = parseInt(document.getElementById("splitMenor30k").value)
    }

    var display5Split = document.getElementById("input5Split").style.display
    var splitMaior30k = document.getElementById("splitMaior30k")
    if (display5Split == "none") {
        splitMaior30k === 0
    } else if (display5Split == "block") {
        splitMaior30k = parseInt(document.getElementById("splitMaior30k").value)
    }

    let valorJanelaMenor9k = parseFloat(janelaMenor9k * 0.58)
    let valorJanelaMenor14k = parseFloat(janelaMenor14k * 0.82)
    let valorJanelaMaior14k = parseFloat(janelaMaior14k * 1.69)
    let valorSplitMenor10k = parseFloat(splitMenor10k * 0.65)
    let valorSplitMenor15k = parseFloat(splitMenor15k * 0.88)
    let valorSplitMenor20k = parseFloat(splitMenor20k * 1.22)
    let valorSplitMenor30k = parseFloat(splitMenor30k * 1.99)
    let valorSplitMaior30k = parseFloat(splitMaior30k * 3.08)
    let numAres = parseInt(janelaMenor9k + janelaMenor14k + janelaMaior14k + splitMenor10k + splitMenor15k + splitMenor20k + splitMenor30k + splitMaior30k)
}
