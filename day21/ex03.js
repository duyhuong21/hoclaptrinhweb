// const a = 10
// const b = 3
// const c = a % b
// console.log(a++ + ++a + a-- - --a)

// const a = 6, b = 5, c = 1;
//f(x) = a * x^2 + bx + c
//denta = b^2 - 4ac
//denta' = b^2 - ac
// x1, x2 = -b +- can(denta)/2a

function ptbac2(a, b, c) {
    if (a === 0) {
        return;
    }
    let delta = b * b - 4 * a * c;
    let candelta = delta ** (1/2)
    if (delta > 0) {
        let x1 = (-b -  candelta)/ (2 * a);
        let x2 = (-b + candelta)/ (2 * a);
        console.log("Phuong trinh co hai nghiem phan biet");
        console.log("x1 =", x1);
        console.log("x2 =", x2);
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("Phuong trinh co nghiem kep");
        console.log("x =", x);
    }
    else {
        console.log("Phuong trinh vo nghiem");
    }
}

ptbac2(6, 5, 1);