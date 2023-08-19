// Rasunable Function



// Triangle
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    console.log(base);
    const height = getInputValue('triangle-hieght');
    console.log(height);

    // Alert
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }

    // Tota Caculate
    const area = 0.5 * base * height;
    setFieldText('triangle-area', area);

    // Add To Calculatiion Entry
    addToCalculationEntry('Triangle', area);
}



// Rectangle
function calculateRectangleArea(){
    const base = getInputValue('rectangle-base');
    console.log(base);
    const height = getInputValue('retangle-hieght');
    console.log(height);
    
    // Alert
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    
    // total Calculate
    const area = base * height;
    setFieldText('rectangle-area', area);

    // Add To Calculatiion Entry
    addToCalculationEntry('Rectangle', area);
}



// Parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    // Alert
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    
    // Total Calculate
    const area = base * height;
    setFieldText('parallelogram-area', area);

    // Add To Calculatiion Entry
    addToCalculationEntry('Parallelogram', area);
}



// Rohmbus
function calculateRohmbaseArea(){
    const base = getInputValue('rhombus-base')
    console.log(base);
    const height = getInputValue('rhombus-hieght');
    console.log(height);

    // Alert
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    
    // Total Calculate
    const area = 0.5 * base * height;
    setFieldText('rhombus-area', area);

    // Add To Calculatiion Entry
    addToCalculationEntry('Rhombus', area);

    // Ad To Decemal Number
    const areaTwoDecimal = area.toFixed(2);
    setFieldText('rhombus-area', areaTwoDecimal);
}



//Pentagon
function calculatePentagonArea(){
    const base = getInputValue('pentagon-base')
    console.log(base);
    const height = getInputValue('pentagon-hieght');
    console.log(height);

    // Alert
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }

    // Total Calculate
    const area = 0.5 * base * height;
    setFieldText('pentagon-area', area);

    // Add To Calculatiion Entry
    addToCalculationEntry('Pentagon', area);
   
    // Add To Decemal Number
    const areaTwoDecimal = area.toFixed(2);
    setFieldText('pentagon-area', areaTwoDecimal);
}



// Ellipse 
function calculateEllipseArea(){
    const base = getInputValue('ellipse-base');
    console.log(base);
    const height = getInputValue('ellipse-height');
    console.log(height);

    // Alert
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }

    // Total Calculate
    const area = base * height;
    setFieldText('ellipse-area', area);

    // Add To Calculation Entry
    addToCalculationEntry('Ellipse', area);
    
    // Add To Decemal Number
    const areaTwoDecimal = area.toFixed(2);
    setFieldText('ellipse-area', areaTwoDecimal);
}



///***  Input Value  Ata Age Korte Hobe ***////
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldsValue = inputField.value;
    const value = parseFloat(inputFieldsValue);
    return value;
}



///*** Set Span Or Paragraph ***///
function setFieldText(elementId, area){
const element = document.getElementById(elementId, area);
element.innerText = area;
}



///*** Function To Calculation Entry ***///
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success mb-2 btn-sm">convert</button>`
    calculationEntry.appendChild(p); 
}
   


  