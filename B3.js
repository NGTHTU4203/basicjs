function KTamduong(n)
{
    if (n<0){
        console.log('Sp n la so am')}
    else if (n>0){
        console.log('Sp n la so duong')}
    else { console.log('So n khong am khong duong')}
}
KTamduong(5)

function KTchanle(n)
{
    if (n%2==0){
        console.log('So n la so chan')}
    else { 
        console.log('So n la so le')}
}
KTchanle(5)

function KTsolonnhat(a,b,c){
    max=a
    if (max<b){ 
        max=b
    }
    else (max<c)
    { 
        max=c
    }
    console.log('So lon nhat la: ',max)
}
KTsolonnhat(1,2,3)

function kiem_tra_nam_nhuan(nam)
{
    // nếu năm chia hết cho 100
    // thì kiểm tra nó có chia hết cho 400 hay không
    if (nam % 100 == 0)
    {
        // nêu chia hết cho 400 thì là năm nhuận
        if (nam % 400 == 0){
            return console.log(nam,'là năm nhuận');
        }
        else { // ngược lại không phải năm nhuận
            return console.log(nam,'không phải là năm nhuận');
        }
    }
    else if (nam % 4 == 0){ // trường hợp chia hết cho 4 thì là năm nhuận
        return console.log(nam,'là năm nhuận');
    }
    else { // cuối cùng trường hợp không phải năm nhuận
        return console.log(nam,'không phải là năm nhuận');
    }
}
kiem_tra_nam_nhuan(2024)

function KTkitu(n){
    if (n==['a','o','e','u','i']){ console.log(n,"la nguyen am")}
    else {console.log(n,'la phu am')}
}
KTkitu('m')
//B2
function phuong_trinh_bac_2(a,b,c){
    if (a==0 && b==0){
        console.log('Phuong trinh vo nghiem')
    }
    else if (a==0 && b!=0){
        x=(-c)/b
        console.log('Phuong trinh co 1 nghiem x =',x)
    }
    else {
        let delta=(b*b)-(4*a*c)
        console.log(delta)
        if (delta<0){
            console.log('Phuong trinh vo nghiem')
        }
        else if (delta==0)
        {
            const x3=(-b)/(2*a)
            console.log('Phuong trinh co nghiem kep x=',x3)       
        }
        else if(delta>0)
        {
            x1=(-b+(Math.sqrt(delta)))/(2*a)
            console.log('Phuong trinh co 2 nghiem x1 =',x1)   
            x2=(-b-(Math.sqrt(delta)))/(2*a)    
            console.log('Phuong trinh co 2 nghiem x2 =',x2)
        }
    }
}
phuong_trinh_bac_2(0,0,1)
phuong_trinh_bac_2(0,2,1)
phuong_trinh_bac_2(1,-4,4)
phuong_trinh_bac_2(4,-2,-6)
//B2b
function KTthunhapvathue(luong){
    let thue=luong
    if (luong>15){
        thue=luong*0.2
    }
    else if (luong>8 && luong<15){
        thue=luong*0.15
    }
    else if (luong<8){
        thue=luong*0
    }
    console.log('Muc luong :',luong)
    console.log('Muc thue :',thue)
    console.log('Muc luong nhan duoc :',luong-thue)

}
KTthunhapvathue(10)
//B2c
function xep_hang_hoc_luc(diem){
    if (diem<5){
        return'hang F'
    }
    else if (diem>=5 && diem<7){
        return'hang C'
    }
    else if (diem>=7 && diem<9){
        return'hang B'
    }
    else if (diem>=9){
        return'hang A'
    }
}
xep_hang_hoc_luc(9.5)
//B2d
function gia_cuoc_dien_thoai(sophut){
    let tong
    const phi_co_dinh = 25000
    if(sophut>200)
        phi=(sophut-200)*200+150*400+50*600;
    else if(sophut>50){
        phi=(sophut-50)*400+50*600
    }
    else {
        phi=sophut*600;
    }
    tong=phi+phi_co_dinh;
    console.log('Ban da goi',sophut,'phut.')
    console.log('So tien phai nop cua ban la:',tong)
}
gia_cuoc_dien_thoai(195)










