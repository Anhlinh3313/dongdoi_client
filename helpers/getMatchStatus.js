export default (status) => {
    switch(status){
        case 0:
            return 'Chưa đá'
        case 1:
            return 'H1'
        case 2: 
            return 'HT'
        case 3: 
            return 'H2';
        case 4: 
            return 'Hiệp Phụ'
        case 5: 
            return 'Penalty'
        case -1:
            return 'FT'
        case -10: 
            return 'Hủy'
        case -11: 
            return "Chưa xác định"
        case -12:
            return "Hủy"
        case -13:
            return "Gián đoạn"
        case -14:
            return "Hoãn"
    }
}