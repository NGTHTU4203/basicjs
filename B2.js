function helloWorld() {
    console.log('Hello World!')
    }
//helloWorld()

function hovaten() {
    console.log('Nghuyen Thanh Tu')
    }
//hovaten()

function b1c() {
    let text = "*";
    for (let i = 1; i < 5; i++) 
            {
            console.log(text*5)
            }
        }
//b1c()

function b1d() {
    let n = 6;
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
        string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
//b1d()

function b1e() {
    console.log('  * *   * *  ')
    console.log('*     *     *')
    console.log('*           *')
    console.log('  *       *  ')
    console.log('    *   *    ')
    console.log('      *      ')
}
//b1e()

function b2() {
    let a=10
    console.log(a)
    //b
    let b='10'
    console.log(b)
    //c
    a=a*2
    console.log(a)
    //d
    const pi = 3.14
    console.log(pi)
}
//b2()

function b2tt() {
    let dienthoai={
    ten:'Iphone 14',
    hangsanxuat:'Apple',
    mau:'Trang',
    gia:'1000 USD'
    }
    console.log(dienthoai)
    dienthoai.gia='750 USD'
    console.log(dienthoai)
    dienthoai.ten=dienthoai.ten + ' promax'
    console.log(dienthoai)
}
//b2tt()
const pi=3.14
function tong(a, b) {
    const tong2so = a + b
    return tong2so
}
tong() 
console.log(tong(5,2))
function hieu(a, b) {
    const hieu2so = a - b
    return hieu2so
}
hieu()
console.log(hieu(5,2))
function tich(a, b) {
    const tich2so = a * b
    return tich2so
}
tich()
console.log(tich(5,2))
function thuong(a, b) {
    const thuong2so = a / b
    return thuong2so
}
thuong()
console.log(thuong(5,2))

function b3C1(x,y,z){
    b3c1=x**2+2*x+1
    return b3c1
}
b3C1()

console.log('x^2 + 2x + 1 =',b3C1(5,4,3))
function b3C2(x,y,z){
    b3c2=x**3 - 3*x*y -5*y +3*(y**2)
    return b3c2
}
b3C2()
console.log('x^3 - 3xy - 5y + 3y^2 =',b3C2(5,4,3))

function b3C3(x,y,z){
    b3c3=x**3 - 3*x*y -5*y +3*(y**2)
    return b3c3
}
b3C3()
console.log('(xy)^2 - 2x^2*y + 13y =',b3C3(5,4,3))

function b3C4(x,y,z){
    b3c4=4*(x**3)+3*x*y+y**2-(2*(x**2)-3*y)
    return b3c4
}
b3C4()
console.log('4x^3 + 3xy + y^2 - (2x^2 - 3y) =',b3C4(5,4,3))

function b3C5(x,y,z){
    b3c5=4*(x**3)+3*x*y+y**2-(2*(x**2)-3*y)
    return b3c5
}
b3C5()
console.log('(5x^2 / 4xy) + y^2 =',b3C5(5,5,5))

function b3C6(x,y,z){
    b3c6=x**2 - (2*x*y*z/y**2+5*x)-2*(y**2)+4*x*(z**3)+z**3
    return b3c6
}
b3C6()
console.log('x^2 - 2zxy / y^2 + 5x - 2y^2 + 4xz^3 + z^3 =',b3C6(5,4,3))

function chu_vi_htr(duong_kinh){
    cv=duong_kinh*pi
    return cv
}
chu_vi_htr()
console.log('Chu vi hinh tron',chu_vi_htr(5))

function dien_tich_htr(duong_kinh){
    dt=(duong_kinh/2)**2*pi
    return dt
}
dien_tich_htr()
console.log('Dien tich hinh tron',dien_tich_htr(5))

function chu_vi_hcn(cd,cr){
    cv_hcn=(cd+cr)*2
    return cv_hcn
}
chu_vi_hcn()
console.log('Chu vi hinh chu nhat',chu_vi_hcn(5,2))

function dien_tich_hcn(cd,cr){
    dt_hcn=cd*cr
    return dt_hcn
}
chu_vi_hcn()
console.log('Dien tich hinh chu nhat',dien_tich_hcn(5,2))

function b3f(s,t){
    t=t/60
    v=s/t
    return v
}
b3f()
console.log('Van toc =',b3f(120,130))











