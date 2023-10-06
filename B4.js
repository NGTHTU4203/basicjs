let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let do_dai_mang = arr.length
for (let i=0; i < do_dai_mang ;i++){
    console.log("Phan thu thu %s = %s",i+1,arr[i])
}

tong=0
for (let i=0; i < do_dai_mang ;i++){
    tong=tong+arr[i]
}
console.log(tong)

function min_max(arr){
    max=arr[0]
    for (i = 1; i < arr.length; i++)
        if (max < arr[i])
            max = arr[i]
        if (min > arr[i])
            min = arr[i]
        console.log(max)
        console.log(min)
}
min_max(arr)


function trung_binh(arr){
    tong=0
    for(i=0; i<arr.length; i++)
    {
        tong = tong + arr[i];
    }
    console.log('Trung binh cong:',tong/arr.length)
}
trung_binh(arr)

function dao_nguoc(arr)
{
    console.log(arr)
/*Đảo ngược mảng trong Java bằng vòng lặp*/
    for (i = 0, j = arr.length - 1; i < j; i++, j--){
        /*Tạo biến temp và tiến hành hoán đổi phần tử*/
        temp = arr[i];
        arr[i]  = arr[j];
        arr[j] = temp;
    }
    console.log(arr)
}
dao_nguoc(arr)

function tang_giam(arr){
    temp = arr[0];
        for (i = 0 ; i < arr.length - 1; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    console.log(arr)
    /*Đảo ngược mảng trong Java bằng vòng lặp*/
    for (i = 0, j = arr.length - 1; i < j; i++, j--){
        /*Tạo biến temp và tiến hành hoán đổi phần tử*/
        temp = arr[i];
        arr[i]  = arr[j];
        arr[j] = temp;
    }
    console.log(arr)
}
tang_giam(arr)
let arr1 = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

function chen(arr1){
    for(i = arr1.length-1;i>=0; i--)
        {
            arr1[i+1]=arr1[i]
        }
    arr1[0]=117
    console.log(arr1)
}
chen(arr1)

function chen_c2(arr1){
    let check_tang_dan=true
    for(i = arr1.length-1;i>=0; i--)
        {
            if(arr1[i+1]<arr1[i])
                check_tang_dan=false
                break
        }
    if (check_tang_dan ===true)
        {
            console.log('Mang tang dan')
        }
    else 
        {
            console.log('Mang khong tang dan')
        }
}
chen_c2(arr1)


function chan_le(arr){
    console.log('Danh sach so chan')
    for(i = 0; i < arr.length; i++)
	{
		if(arr[i] % 2 == 0)
            console.log(arr[i])
    }
    console.log('Danh sach so le')
    for(i = 0; i < arr.length; i++)
	{
		if(arr[i] % 2 != 0)
            console.log(arr[i])
    }
}
chan_le(arr)

function so_lan_xh(arr){
    const tan_suat_xh={}
    for(i = 0; i < arr.length; i++)
    {
        const phan_tu_thu_i=arr[i]
        tan_suat_xh[phan_tu_thu_i]=(tan_suat_xh[phan_tu_thu_i] ||0)+1
    }
    console.log('===>',tan_suat_xh)
}
so_lan_xh(arr)

function co_phai_tang_dan_hay_ko(arr){
    for(i = 0; i < arr.length; i++)
        {
            if (arr[i]<arr[i+1])
                return "Mang tang dan"
            else {return "Khong phai mang tang dan"}
        }
}
console.log(co_phai_tang_dan_hay_ko(arr))

//B2
arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0,14]
function cap_so_tong_bang_10(arr2){
    for(i = 0; i < arr2.length; i++)
        for (j = i + 1; j < arr2.length; j++){
            if(arr2[i]+arr2[j]==10)
                console.log(arr2[i],arr2[j])
    }
}
cap_so_tong_bang_10(arr2)

function xoa_trung_nhau(arr2){
    var newArr = []
    for (var i = 0; i < arr2.length; i++) {
        if (newArr.indexOf(arr2[i]) === -1) {
        newArr.push(arr2[i])
        }
    }
    return newArr
}
console.log(xoa_trung_nhau(arr2))

function    tinh_tong_n_so_dau_tien(n){
    tong=0
    for(i = 0; i <=n ; i++){
        tong+=i
    }
    console.log(tong)
}
tinh_tong_n_so_dau_tien(200)

function tinh_tong(arr2){
    temp = arr2[0];
        for (i = 0 ; i < arr2.length - 1; i++) {
            for (j = i + 1; j < arr2.length; j++) {
                if (arr2[i] < arr2[j]) {
                    temp = arr2[j];
                    arr2[j] = arr2[i];
                    arr2[i] = temp;
                }
            }
        }
    console.log(arr2)
    tong=arr2[0]+arr2[1]+arr2[2]
    console.log(arr2[0],'+',arr2[1],'+',arr2[2],'=',tong)
}
tinh_tong(arr2)



