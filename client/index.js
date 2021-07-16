//Menampilkan Tabel dengan GET
$('.showData').on('click', function (event) {
    console.log("Hello World");

    $.getJSON('http://localhost:3080/show', function (data) {

        console.log(data);
        $('#showTabel').html(
            `  <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Form Factor</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>` +
            data.map(row => `<tr>
                <td>${row.id_case}</td>
                <td>${row.name}</td>
                <td>${row.form_factor}</td>
                <td>${row.brand}</td>
                <td>${row.price}</td>
            </tr>`)
        );
    });
});

//Mengganti value dari input pada modal Edit
$('#chooseID').on('click', function (event) {
    // console.log("Hello World");
    var inputVal = document.getElementById("editID").value;
    console.log(inputVal);
    $.getJSON(`http://localhost:3080/editID/${inputVal}`, function (data) {
        document.getElementById("editName").setAttribute('value', data[0].name);
        document.getElementById("editFF").setAttribute('value', data[0].form_factor);
        document.getElementById("editBrand").setAttribute('value', data[0].brand);
        document.getElementById("editPrice").setAttribute('value', data[0].price);
    });
});

//Mengirim data baru yang akan dimasukkan dengan POST
const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://localhost:3080/tambah', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});

//Menutup Modal ketika tombol submit ditekan
$('#postSubmit').click(function () {
    $('#exampleModal').modal('hide');
});

$('#submitEdit').click(function () {
    $('#exampleModal2').modal('hide');
});
$('#deleteSubmit').click(function () {
    $('#exampleModal3').modal('hide');
});

//Mengupdate data casing dengan metode PUT
const editForm = document.getElementById('editCase');
editForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(editForm).entries()
    const response = await fetch('http://localhost:3080/ganti', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});


//Menghapus data casing dengan DELETE
const delForm = document.getElementById('delForm');
delForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(delForm).entries()
    const response = await fetch('http://localhost:3080/hapus', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});
