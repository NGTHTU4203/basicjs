
//   // B1a
//   console.log('Hello World')
//   // B1b
//   console.log("Nguyen Thanh Tu")
//   // B1c
//   let text = "*";
//   for (let i = 1; i < 5; i++) {
//       console.log(text*5)
//   }
//   //B1d
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
//   //B1e
  console.log('  * *   * *  ')
  console.log('*     *     *')
  console.log('*           *')
  console.log('  *       *  ')
  console.log('    *   *    ')
  console.log('      *      ')

// //B2
//a
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
//e

// //f
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
//B3
a1=100
b1=50
function add(a1,b1){a1}
console.log('a =',a1)
console.log('b =',b1)
console.log('Tong',a1+b1)
console.log('Hieu',a1-b1)
console.log('Tich',a1*b1)
console.log('Thuong',a1/b1)
console.log('Trung binh cong',(a1+b1)/2)

let x = 3, y = 4, z = 6
console.log('x^2 + 2x + 1 =',x**2+2*x+1)
console.log('x^3 - 3xy - 5y + 3y^2 =',x**3 - 3*x*y -5*y +3*(y**2))
console.log('(xy)^2 - 2x^2*y + 13y =',(x*y)**2 - 2*(x**2)*y+13*y)
console.log('4x^3 + 3xy + y^2 - (2x^2 - 3y) =',4*(x**3)+3*x*y+y**2-(2*(x**2)-3*y))
console.log('(5x^2 / 4xy) + y^2 =',(5*(x**2)/(4*x*y))+y**2)
console.log('x^2 - 2zxy / y^2 + 5x - 2y^2 + 4xz^3 + z^3 =',(x**2 - 2*x*y*z)/(y**2+5*x-2*(y**2)+4*x*(z**3)+z**3))

let duong_kinh=5
console.log('Chu vi hinh tron',duong_kinh*pi)
console.log('Dien tich hinh tron',(duong_kinh/2)**2*pi)

let cd=15,cr = 10
console.log('Chu vi hinh chu nhat',(cd+cr)*2)
console.log('Dien tich hinh chu nhat',cd*cr)

let quang_duong1=120
let thoi_gian1=130
console.log('Van toc =',quang_duong1*(thoi_gian1/60))

let van_toc2=60
let thoi_gian2=150
console.log('Quang duong =',van_toc2*thoi_gian2)

let van_toc3=15.2
console.log('Quang duong ca no di trong 3 gio',van_toc3*3)

let thoi_gian4=160/60
let van_toc4=42
console.log('Quang duong AB=',van_toc4*thoi_gian4)


let chieu_dai_doan = 8
let chieu_rong=5
let chieu_cao=6
khoi1=chieu_dai_doan*3*chieu_rong*chieu_cao
khoi2=chieu_dai_doan*chieu_rong*chieu_cao
console.log('The tich khoi 1 =',khoi1)
console.log('The tich khoi 2 =',khoi2)
console.log('The tich khoi =',khoi1+khoi2)






