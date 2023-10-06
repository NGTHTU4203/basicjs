arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
//B1
const do_dai_mang=arr.length
function cau1a(arr){
    let i=0
    while(i<do_dai_mang){
        console.log("Phan thu thu %s = %s",i+1,arr[i])
        i++
    }
}
//cau1a(arr)

function cau1b(arr){
    let i=0
    let tong =0
    while(i<do_dai_mang){
        tong=tong+arr[i]
        i++
    }
    console.log('Tong cua mang =',tong)
}
//cau1b(arr)

function cau1c(arr){
    let i=0
    let max =arr[0]
    let min =arr[0]
    while(i<do_dai_mang){
        if (max < arr[i])
            max = arr[i]
        if (min > arr[i])
            min = arr[i]
        i++
    }
    console.log(max)
    console.log(min)
}
//cau1c(arr)

function cau1c(arr){
    let i=0
    let max =arr[0]
    let min =arr[0]
    while(i<do_dai_mang){
        if (max < arr[i])
            max = arr[i]
        if (min > arr[i])
            min = arr[i]
        i++
    }
    console.log(max)
    console.log(min)
}
//cau1c(arr)

function cau1d(arr){
    let i=0
    let tong =0
    while(i<do_dai_mang){
        tong=tong+arr[i]
        i++
    }
    console.log('Trung binh cong cua mang =',tong/do_dai_mang)
}
//cau1d(arr)

function cau1e(arr){
    let i=0
    let j=do_dai_mang-1
    while (i<j){
        temp = arr[i]
        arr[i]  = arr[j]
        arr[j] = temp
        i++
        j--
    }
    console.log(arr)
}
//cau1e(arr)

function cau1f(arr){
    let i=0
    const tan_suat_xh={}
    while(i<do_dai_mang){
        const phan_tu_thu_i=arr[i]
        tan_suat_xh[phan_tu_thu_i]=(tan_suat_xh[phan_tu_thu_i] ||0)+1
        i++
    }
    console.log('===>',tan_suat_xh)
}
//cau1f(arr)

function cau1g(arr){
    let i=do_dai_mang-1
    while(i>=0){
        arr[i+1]=arr[i]
        i--
    }
    arr[0]=177
    console.log(arr)
}
//cau1g(arr)

function cau1h(arr){
    let check_tang_dan=true
    let i=do_dai_mang-1
    console.log(arr)
    while (i>=0){
        if(arr[i+1]<arr[i])
            {check_tang_dan=false
                break}
        i--
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
//cau1h(arr)



function cau1_kh(arr){
    console.log("Danh sach so chan")
    i=0
    while (i<do_dai_mang){
        if(arr[i] % 2 == 0)
            console.log(arr[i])

        i++
    }
    console.log("Danh sach so le")
    j=0
    while (j<do_dai_mang){
        if(arr[j] % 2 != 0)
            console.log(arr[j])

        j++
    }
}
cau1_kh(arr)

function sapXepTangDan(arr) {
    let i = 0;

    while (i < do_dai_mang - 1) {
        let j = i + 1;

        while (j < do_dai_mang) {
            // So sánh các cặp phần tử và hoán đổi nếu cần
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            j++;
        }

        i++;
    }
    console.log(arr)
}
sapXepTangDan(arr)

function sapXepGiamDan(arr) {
    let i = 0;

    while (i < do_dai_mang - 1) {
        let j = i + 1;

        while (j < do_dai_mang) {
            // So sánh các cặp phần tử và hoán đổi nếu cần
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            j++;
        }

        i++;
    }
    console.log(arr)
}
sapXepGiamDan(arr)


