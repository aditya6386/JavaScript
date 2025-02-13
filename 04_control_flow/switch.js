// SYNTAX OF SWITCH CASE

// switch (key) {
//     case value:

//     break;

//     default :
//     break;
// }

// const month = "march"

// switch (month){
//     case "jan":
//         console.log("january");
//         break;

//     case "feb":
//         console.log("february");
//         break;

//     case "march":
//         console.log("march");
//         break;

//     default: 
//     console.log("default case");
//     break;
    
        
// }

// tried some operations in switch case

let numb = 100;          //can not be initialized as const

switch ( true ){                     
    case (numb > 10):
        console.log("greater");
        break;
    case (numb === 10):
        console.log("equal");
        break;
    case( numb < 10):
        console.log("lesser");
        break;

    default:
        console.log("default");
        break;
        
}
