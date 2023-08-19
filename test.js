function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);


     // get triangle height value

     const heightField = document.getElementById('triangle-hieght');
     const heightValueText = heightField.value;
     const height = parseFloat(heightValueText);
     console.log(height);

    //
     if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
     }
     baseField.value = '';
     heightField.value = '';
     //
     const shahin = 0.5 * base * height;
     
     // Show triangle area
    
     const areaSpan = document.getElementById('triangle-area');
     areaSpan.innerText = shahin;
 
}
