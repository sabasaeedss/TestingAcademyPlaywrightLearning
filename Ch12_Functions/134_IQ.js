let g_x = 10;


//nested scope |blocked scope

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); //alowed here

        inner();
        console.log(y);
    }
}