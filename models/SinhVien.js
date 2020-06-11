// Tạo lớp đối tượng trong javascript
// this : là đại diên jcho đối tượng được tạo từ lớp đối tượng này 
var SinhVien = function() {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.diemRenLuyen = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.tinhDiemTrungBinh = function() {
        return (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan)) / 3;
    }

}