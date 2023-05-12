const typedElements = document.querySelectorAll('.typed');

for (let i=0; i < typedElements.length; i++){
    const stringArray =[];

    for (let j=0;j<3;j++){
        const stringAtributo = 'data-string' + j;
        const stringValor = typedElements[i].getAttribute(stringAtributo);

        if(stringValor){
            stringArray.push(stringValor);
        }
    }


new Typed(typedElements[i], {
    strings: stringArray,
    typeSpeed: 40,
    startDelay: 200,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
    
});

}

//background-color: #081b29;