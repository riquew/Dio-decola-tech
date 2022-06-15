function precoFinal(x, y){
    let X = x;
    let Y = y;

    var price = 0;

    if (X == 1) {
      price  =  4.00       ;
    }
    else if (X == 2) {
      price  =     4.50      ;
    }
    else if (X ==  3   ) {
      price  =    5.00         ;
    }
    else if (X ==  4  ) {
      price  =  2.00        ;
    }
    else if (X == 5    ) {
      price  =    1.50          ;
    }
    
    let total = parseFloat(price * Y)

    console.log("Total: R$ "  + total.toFixed(2));
}

precoFinal(2, 3)