// console.log('123');
// var sinhvien = {
//     maSinhVien: '',
//     tenSinhVien: '',
//     loaiSinhVien: '',
//     diemToan: '',
//     diemLy: '',
//     diemHoa: '',
//     diemRenLuyen: '',
//     tinhDiemTrungBinh: function() {
//         return (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan)) / 3;
//     }

// }

// Khởi Tạo mảng trong javascript
var arrSinhVien = [];
// Cách 2 Sử dụng mảng để quản lý dữ liệu người dùng nhập vào 

//Bước 1 :
document.querySelector('#btnXacNhan').onclick = function() {
        // new là cấp phát vùng nhớ mới trong RAM 
        var sv = new SinhVien();
        // Lấy thông tin của người dùng 
        sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
        sv.maSinhVien = document.querySelector('#maSinhVien').value;
        sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
        sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
        sv.diemToan = document.querySelector('#diemToan').value;
        sv.diemLy = document.querySelector('#diemLy').value;
        sv.diemHoa = document.querySelector('#diemHoa').value;
        // console.log(sv)

        //ĐƯa đối tượng sinh viên vào mảng
        arrSinhVien.push(sv);
        // console.log('arrSinhVien', arrSinhVien);
        taoBang();
    }
    //Từ mảng dữ liệu sinh ra giao diện = ham renderTable
    var taoBang = function() {
        var contentTable = '';
        for (var index = 0; index < arrSinhVien.length; index++) {
            //Mỗi lần duyệt lấy ra đối tượng sunh viên từ mảng sinh viên
            var obSinhVien = arrSinhVien[index];
            //Lấy dữ liêu jsinh viên tạo ta các chuỗi thẻ tr
            contentTable += `
                    <tr>
                        <td>${obSinhVien.maSinhVien}</td>
                        <td>${obSinhVien.tenSinhVien}</td>
                        <td>${obSinhVien.loaiSinhVien}</td>
                        <td>${obSinhVien.tinhDiemTrungBinh()}</td>
                        <td>${obSinhVien.diemRenLuyen}</td>
                    </tr>
        `
        };
        document.querySelector('#tbSinhVien').innerHTML = contentTable;
        document.querySelector('#tbSinhVien').style.textAlign = 'center';

    }
    // // Cách 1 tọa giao diện = DOM
    // // Cài đặt xử lý xác nhận

// document.querySelector('#btnXacNhan').onclick = function() {

//     // Lấy thông tin của người dùng 
//     sinhvien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
//     sinhvien.maSinhVien = document.querySelector('#maSinhVien').value;
//     sinhvien.tenSinhVien = document.querySelector('#tenSinhVien').value;
//     sinhvien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
//     sinhvien.diemToan = document.querySelector('#diemToan').value;
//     sinhvien.diemLy = document.querySelector('#diemLy').value;
//     sinhvien.diemHoa = document.querySelector('#diemHoa').value;
//     // console.log(sinhvien);
//     // Hiển thị thông tin sinh viên 
//     // Tạo thẻ trong javascript
//     // Tạo thẻ tr
//     var trSinhVien = document.createElement("tr");
//     trSinhVien.style.textAlign = 'center';
//     //Tạo thẻ td và nội dung
//     var tdMaSinhVien = document.createElement('td');
//     tdMaSinhVien.innerHTML = sinhvien.maSinhVien;
//     var tdTenSinhVien = document.createElement('td');
//     tdTenSinhVien.innerHTML = sinhvien.tenSinhVien;
//     var tdLoaiSinhVien = document.createElement('td');
//     tdLoaiSinhVien.innerHTML = sinhvien.loaiSinhVien;
//     var tdDiemTrungBinh = document.createElement('td');
//     tdDiemTrungBinh.innerHTML = sinhvien.tinhDiemTrungBinh();
//     var tdDiemRenLuyen = document.createElement('td');
//     tdDiemRenLuyen.innerHTML = sinhvien.diemRenLuyen;
//     // tạo thẻ td cho button
//     var tdButtonXoa = document.createElement('td');x```
//     // Tạo button
//     var btnXoa = document.createElement('button');
//     btnXoa.innerHTML = 'Xóa';
//     btnXoa.className = 'btn btn-danger';
//     tdButtonXoa.appendChild(btnXoa);


//     //Chèn các thẻ td vào thẻ trSinhvien
//     trSinhVien.appendChild(tdMaSinhVien);
//     trSinhVien.appendChild(tdTenSinhVien);
//     trSinhVien.appendChild(tdLoaiSinhVien);
//     trSinhVien.appendChild(tdDiemTrungBinh);
//     trSinhVien.appendChild(tdDiemRenLuyen);
//     trSinhVien.appendChild(tdButtonXoa);

//     //Dom đến thẻ tBody#tblSinhVien => chèn thẻ trSinhVien vào
//     document.getElementById('tbSinhVien').appendChild(trSinhVien);

// }