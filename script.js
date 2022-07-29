var numBombas, divBombaUnica, divRadio, radioSim, radioNao, divBombasIguais, novaDiv= [], divDados, novoH1, novoBr, novoSelect, botaoCalc, erros

function checking() {
    let checkJanela = document.getElementById("checkJanela")
    if (checkJanela.checked == true) {
        var input1Janela = document.getElementById("input1Janela").style.display = "block"
        var input2Janela = document.getElementById("input2Janela").style.display = "block"
        var input3Janela = document.getElementById("input3Janela").style.display = "block"
    } else {
        input1Janela = document.getElementById("input1Janela").style.display = "none"
        input2Janela = document.getElementById("input2Janela").style.display = "none"
        input3Janela = document.getElementById("input3Janela").style.display = "none"
    }
    
    let checkSplit = document.getElementById("checkSplit")
    if (checkSplit.checked == true) {
        var input1Split = document.getElementById("input1Split").style.display = "block"
        var input2Split = document.getElementById("input2Split").style.display = "block"
        var input3Split = document.getElementById("input3Split").style.display = "block"
        var input4Split = document.getElementById("input4Split").style.display = "block"
        var input5Split = document.getElementById("input5Split").style.display = "block"
    } else {
        input1Split = document.getElementById("input1Split").style.display = "none"
        input2Split = document.getElementById("input2Split").style.display = "none"
        input3Split = document.getElementById("input3Split").style.display = "none"
        input4Split = document.getElementById("input4Split").style.display = "none"
        input5Split = document.getElementById("input5Split").style.display = "none"
    }
}

function confBombas() {
    numBombas = parseInt(document.getElementById("numBombas").value)

    if (numBombas == 0) {
        divBombaUnica = document.getElementById("bombaUnica").style.display = "none"
        divRadio = document.getElementById("radioContainer").style.display = "none"
    } else if (numBombas == 1) {
        divBombaUnica = document.getElementById("bombaUnica").style.display = "block"
        divRadio = document.getElementById("radioContainer").style.display = "none"
    } else if (numBombas > 1) {
        divBombaUnica = document.getElementById("bombaUnica").style.display = "none"
        divRadio = document.getElementById("radioContainer").style.display = "block"
    }
}

function checkRadio() {
    numBombas = parseInt(document.getElementById("numBombas").value)
    radioSim = document.getElementById("radioSim")
    radioNao = document.getElementById("radioNao")

    if (radioSim.checked == true) { 
        divBombasIguais = document.getElementById("bombasIguais").style.display = "block"

        for (var i = 0; i < numBombas; i++) {
            novaDiv[(i + 1)].style.display = "none"
        }
    } else if (radioNao.checked == true) {
        divBombasIguais = document.getElementById("bombasIguais").style.display = "none"

        for (var i = 0; i < numBombas; i++) {
            divDados = document.getElementById("dados")
            
            novaDiv[(i + 1)] = document.createElement("div")
            novaDiv[(i + 1)].setAttribute("class", "inputContainer")
            novaDiv[(i + 1)].setAttribute("id", "divBomba" + (i + 1))

            novoH1 = document.createElement("h1")
            h1Content = document.createTextNode("Insira a potência da " + (i+1) + "ª (em CV):")
            novoH1.appendChild(h1Content)

            novoBr = document.createElement("br")

            novoSelect = document.createElement("select")
            novoSelect.setAttribute("name", "valueBomba" + (i + 1))
            novoSelect.setAttribute("id", "selectBomba" + (i + 1))

            novoSelect.options[novoSelect.options.length] = new Option("1/4", 0.25)
            novoSelect.options[novoSelect.options.length] = new Option("1/3", 0.33)
            novoSelect.options[novoSelect.options.length] = new Option("1/2", 0.5)
            novoSelect.options[novoSelect.options.length] = new Option("3/4", 0.75)
            novoSelect.options[novoSelect.options.length] = new Option("1", 1)
            novoSelect.options[novoSelect.options.length] = new Option("1.5", 1.5)
            novoSelect.options[novoSelect.options.length] = new Option("2", 2)
            novoSelect.options[novoSelect.options.length] = new Option("3", 3)
            novoSelect.options[novoSelect.options.length] = new Option("4", 4)
            novoSelect.options[novoSelect.options.length] = new Option("5", 5)
            novoSelect.options[novoSelect.options.length] = new Option("7.5", 7.5)
            novoSelect.options[novoSelect.options.length] = new Option("10", 10)
            novoSelect.options[novoSelect.options.length] = new Option("12.5", 12.5)
            novoSelect.options[novoSelect.options.length] = new Option("15", 15)
            novoSelect.options[novoSelect.options.length] = new Option("20", 20)
            novoSelect.options[novoSelect.options.length] = new Option("25", 25)
            novoSelect.options[novoSelect.options.length] = new Option("30", 30)
            novoSelect.options[novoSelect.options.length] = new Option("40", 40)
            novoSelect.options[novoSelect.options.length] = new Option("50", 50)
            novoSelect.options[novoSelect.options.length] = new Option("60", 60)
            novoSelect.options[novoSelect.options.length] = new Option("75", 75)
            novoSelect.options[novoSelect.options.length] = new Option("100", 100)
            novoSelect.options[novoSelect.options.length] = new Option("125", 125)
            novoSelect.options[novoSelect.options.length] = new Option("150", 150)
            novoSelect.options[novoSelect.options.length] = new Option("200", 200)

            novaDiv[(i + 1)].appendChild(novoH1)
            novaDiv[(i + 1)].appendChild(novoBr)
            novaDiv[(i + 1)].appendChild(novoSelect)

            botaoCalc = document.getElementById("botaoCalc")

            divDados.insertBefore(novaDiv[(i + 1)], botaoCalc)
        }
    }
}

function invalido() {
    var inputs = document.getElementsByClassName("input")
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            alert("Preencha todos os campos corretamente.\nLembre-se, 0 também é número! :D")
            break
        }
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
    } else{
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
    } else if (c1Int > 10) {
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
    h1D1.innerHTML = "Demanda Elétrica (D1) = " + d1 + " kVA"

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
    h1D2.innerHTML = "Demanda Elétrica (D2) = " + d2 + " kVA"

    //C3
    let display1Janela = input1Janela.style.display
    if (display1Janela == "none") {
        var janelaMenor9k = document.getElementById("janelaMenor9k").value = 0
    } else {
        janelaMenor9k = parseInt(document.getElementById("janelaMenor9k").value)
    }
    let kvaJanelaMenor9k = parseFloat(janelaMenor9k * 0.58)

    let display2Janela = input2Janela.style.display
    if (display2Janela == "none") {
        var janelaMenor14k = document.getElementById("janelaMenor14k").value = 0
    } else {
        janelaMenor14k = parseInt(document.getElementById("janelaMenor14k").value)
    }
    let kvaJanelaMenor14k = parseFloat(janelaMenor14k * 0.82)

    let display3Janela = input3Janela.style.display
    if (display3Janela == "none") {
        var janelaMaior14k = document.getElementById("janelaMaior14k").value = 0
    } else {
        janelaMaior14k = parseInt(document.getElementById("janelaMaior14k").value)
    }
    let kvaJanelaMaior14k = parseFloat(janelaMaior14k * 1.69)

    let display1Split = input1Split.style.display
    if (display1Split == "none") {
        var splitMenor10k = document.getElementById("splitMenor10k").value = 0
    } else {
        splitMenor10k = parseInt(document.getElementById("splitMenor10k").value)
    }
    let kvaSplitMenor10k = parseFloat(splitMenor10k * 0.65)

    let display2Split = input2Split.style.display
    if (display2Split == "none") {
        var splitMenor15k = document.getElementById("splitMenor15k").value = 0
    } else {
        splitMenor15k = parseInt(document.getElementById("splitMenor15k").value)
    }
    let kvaSplitMenor15k = parseFloat(splitMenor15k * 0.88)

    let display3Split = input3Split.style.display
    if (display3Split == "none") {
        var splitMenor20k = document.getElementById("splitMenor20k").value = 0
    } else {
        splitMenor20k = parseInt(document.getElementById("splitMenor20k").value)
    }
    let kvaSplitMenor20k = parseFloat(splitMenor20k * 1.22)

    let display4Split = input4Split.style.display
    if (display4Split == "none") {
        var splitMenor30k = document.getElementById("splitMenor30k").value = 0
    } else {
        splitMenor30k = parseInt(document.getElementById("splitMenor30k").value)
    }
    let kvaSplitMenor30k = parseFloat(splitMenor30k * 1.99)

    let display5Split = input5Split.style.display
    if (display5Split == "none") {
        var splitMaior30k = document.getElementById("splitMaior30k").value = 0
    } else {
        splitMaior30k = parseInt(document.getElementById("splitMaior30k").value)
    }
    let kvaSplitMaior30k = parseFloat(splitMaior30k * 3.08)

    let c3 = parseFloat((kvaJanelaMenor9k + kvaJanelaMenor14k + kvaJanelaMaior14k + kvaSplitMenor10k + kvaSplitMenor15k + kvaSplitMenor20k + kvaSplitMenor30k + kvaSplitMaior30k).toFixed(2))
    let h1C3 = document.getElementById("h1C3")
    h1C3.innerHTML = "Carga Instalada 3 (C3) = " + c3 + " kVA"

    //D3
    let numAres = (janelaMenor9k + janelaMenor14k + janelaMaior14k + splitMenor10k + splitMenor15k + splitMenor20k + splitMenor30k + splitMaior30k)
    fatorDemanda = [1, 0.7, 0.6, 0.55, 0.53, 0.52, 0.5]
    
    if (numAres == 0) {
        var d3 = 0
    } else if (numAres > 0 && numAres <= 4) {
        var d3 = parseFloat((c3 * fatorDemanda[0]).toFixed(2))
    } else if (numAres > 4 && numAres <= 10) {
        d3 = parseFloat((c3 * fatorDemanda[1]).toFixed(2))
    } else if (numAres > 10 && numAres <= 20) {
        d3 = parseFloat((c3 * fatorDemanda[2]).toFixed(2))
    } else if (numAres > 20 && numAres <= 30) {
        d3 = parseFloat((c3 * fatorDemanda[3]).toFixed(2))
    } else if (numAres > 30 && numAres <= 40) {
        d3 = parseFloat((c3 * fatorDemanda[4]).toFixed(2))
    } else if (numAres > 40 && numAres <= 50) {
        d3 = parseFloat((c3 * fatorDemanda[5]).toFixed(2))
    } else if (numAres > 50) {
        d3 = parseFloat((c3 * fatorDemanda[6]).toFixed(2))
    }
    let h1D3 = document.getElementById("h1D3")
    h1D3.innerHTML = "Demanda Elétrica (D3) = " + d3 + " kVA"

    //C5
    var c5
    if (numBombas == 0) {
        c5 = 0
    } else if (numBombas == 1) {
        var kVAvalueCV = [0.66, 0.77, 0.87, 1.26, 1.52, 2.17, 2.7, 4.04, 5.03, 6.02, 8.65, 11.54, 14.09, 16.65, 22.1, 25.83, 30.52, 39.74, 48.73, 58.15, 72.28, 95.56, 117.05, 141.29, 190.18]
        var selectBombaUnica = document.getElementById("selectBombaUnica")
        var indiceBombaUnica = selectBombaUnica.selectedIndex
        var kvaBombaUnica = kVAvalueCV[indiceBombaUnica]
        c5 = parseFloat((kvaBombaUnica).toFixed(2))
    } else if (numBombas > 1 && numBombas < 10) {
        kVAvalueCV = [0.66, 0.77, 0.87, 1.26, 1.52, 2.17, 2.7, 4.04, 5.03, 6.02, 8.65, 11.54, 14.09, 16.65, 22.1, 25.83, 30.52, 39.74, 48.73, 58.15, 72.28, 95.56, 117.05, 141.29, 190.18]
        
        if (radioSim.checked == true) {
            var selectBombasIguais = document.getElementById("selectBombasIguais")
            var indiceBombasIguais = selectBombasIguais.selectedIndex
            var kvaBombasIguais = kVAvalueCV[indiceBombasIguais]
            var kvaBombasIguaisTotal = kvaBombasIguais * numBombas
            c5 = parseFloat(kvaBombasIguaisTotal.toFixed(2))
        } else if (radioNao.checked == true) {
            var selectBombas = []
            var indiceBombas = []
            var kvaBombas = []
            var kvaTotalBombas = 0
            for (var i = 0; i < numBombas; i++) {
                selectBombas[(i + 1)] = document.getElementById("selectBomba" + (i + 1))
                indiceBombas[(i + 1)] = selectBombas[(i + 1)].selectedIndex
                kvaBombas[(i + 1)] = (kVAvalueCV[indiceBombas[(i + 1)]])
                kvaTotalBombas += kvaBombas[(i + 1)]
            }
            c5 = parseFloat((kvaTotalBombas).toFixed(2))
        }
    } else if (numBombas >= 10) {
        kVAvalueCV = [0.66, 0.77, 0.87, 1.26, 1.52, 2.17, 2.7, 4.04, 5.03, 6.02, 8.65, 11.54, 14.09, 16.65, 22.1, 25.83, 30.52, 39.74, 48.73, 58.15, 72.28, 95.56, 117.05, 141.29, 190.18]

        if (radioSim.checked == true) {
            selectBombasIguais = document.getElementById("selectBombasIguais")
            indiceBombasIguais = selectBombasIguais.selectedIndex
            kvaBombasIguais = kVAvalueCV[indiceBombasIguais]
            kvaBombasIguaisTotal = kvaBombasIguais * numBombas
            c5 = parseFloat(kvaBombasIguaisTotal.toFixed(2))
        } else if (radioNao.checked == true) {
            var selectBombas = []
            var indiceBombas = []
            var kvaBombas = []
            var kvaTotalBombas = 0
            for (var i = 0; i < numBombas; i++) {
                selectBombas[(i + 1)] = document.getElementById("selectBomba" + (i + 1))
                indiceBombas[(i + 1)] = selectBombas[(i + 1)].selectedIndex
                kvaBombas[(i + 1)] = (kVAvalueCV[indiceBombas[(i + 1)]])
                kvaTotalBombas += kvaBombas[(i + 1)]
            }
            c5 = parseFloat((kvaTotalBombas).toFixed(2))
        }
    }
    let h1C5 = document.getElementById("h1C5")
    h1C5.innerHTML = "Carga Instalada 5 (C5) = " + c5 + " kVA"

    //D5
    var d5

    if (numBombas == 0) {
        d5 = 0
    } else if (numBombas == 1) {
        fatorDemanda = [1, 0.75, 0.6333, 0.575, 0.54, 0.5, 0.4714, 0.45, 0.4333, 0.42]
        d5 = parseFloat((c5 * fatorDemanda[0]).toFixed(2))
    } else if(numBombas > 1 && numBombas < 10) {
        fatorDemanda = [1, 0.75, 0.6333, 0.575, 0.54, 0.5, 0.4714, 0.45, 0.4333, 0.42]

        if (radioSim.checked == true) {
            d5 = parseFloat((c5 * fatorDemanda[(numBombas - 1)]).toFixed(2))

        } else if (radioNao.checked == true) {
            d5 = parseFloat((c5 * fatorDemanda[(numBombas - 1)]).toFixed(2))

        }
    } else if (numBombas >= 10) {
        fatorDemanda = [1, 0.75, 0.6333, 0.575, 0.54, 0.5, 0.4714, 0.45, 0.4333, 0.42]

        if (radioSim.checked == true) {
            d5 = parseFloat((c5 * fatorDemanda[9]).toFixed(2))
        } else if (radioNao.checked == true) {
            d5 = parseFloat((c5 * fatorDemanda[9]).toFixed(2))
        }
    }
    let h1D5 = document.getElementById("h1D5")
    h1D5.innerHTML = "Demanda Elétrica (D5) = " + d5 + " kVA"

    //CT
    let ct = (c1Utilizado + c2 + c3 + c5).toFixed(2)
    let h1CT = document.getElementById("h1CT")
    h1CT.innerHTML = "Carga Instalada Total (CT) = " + ct + " kVA"

    //DT
    let dt = parseFloat(parseFloat(d1) + d2 + d3 + d5).toFixed(2)
    let h1DT = document.getElementById("h1DT")
    h1DT.innerHTML = "Demanda Total (DT) = " + dt + " kVA"
}
