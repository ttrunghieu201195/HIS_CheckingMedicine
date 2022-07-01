const listHoatChat = [];
const listThuoc = [];

const selectedRow = null

n = 1;
x = 0;


//Insert the data
function insertNewRecord() {


    var table = document.getElementById("show").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    const hoatchat1 = document.getElementById("hoatchat").value;
    const test = listHoatChat.find(item => item === hoatchat1);
    console.log(test);
    if (test) {
        //document.getElementById("thai1").innerHTML = "du lieu nhap da bi trung";
        //alert("dulieutrung")
        //console.log(test);
    } else {
        let id;
        if (listThuoc.length <= 0) {
            id = 1;

        } else {
            id = listThuoc.length + 1;
        }

        listHoatChat[x] = hoatchat1;
        const name = document.getElementById("name").value;
        const hoatchat = document.getElementById("hoatchat").value;
        const dvt = document.getElementById("dvt").value;
        const dangthuoc = document.getElementById("dangthuoc").value;
        const cachdung = document.getElementById("cachdung").value;
        const ngay = document.getElementById("ngay").value;
        const soluong = document.getElementById("soluong").value;
        const dongia = document.getElementById("dongia").value;
        const thanhtien = parseInt(soluong) * parseInt(dongia);

        const tam = { id, name, hoatchat, dvt, dangthuoc, cachdung, ngay, soluong, dongia, thanhtien }
        listThuoc.push(tam);


        document.getElementById('myTBody').innerHTML = listThuoc.map(user =>
            `<tr id="auto">
                                <td id="stt">${user.id}</td>
                                <td id="name1">${user.name} </td>
                                <td id="hoatchat1">${user.hoatchat}</td> 
                                <td id="dvt1">${user.dvt}</td>
                                <td id="dangthuoc1">${user.dangthuoc}</td>
                                <td id="cachdung1">${user.cachdung}</td>
                                <td id="ngay1">${user.ngay}</td>
                                <td id="soluong1">${user.soluong}</td>
                                <td id="dongia1">${user.dongia}</td>
                                <td id="thanhtien1">${user.thanhtien}</td>
                                <td>
                                    <input type="button" onclick="onDelete(this);" name="button" class="buttonn button2" value="Xoá">
                                </td>
                            </tr>`
        ).join('')
    }


}

function closePopup() {
    popup.classList.remove("open-popup");
}



//Delete the data
function onDelete(tr) {
    if (confirm('Do you want to delete this record?')) {
        row = tr.parentElement.parentElement;
        document.getElementById('show').deleteRow(row.rowIndex);

    }
}