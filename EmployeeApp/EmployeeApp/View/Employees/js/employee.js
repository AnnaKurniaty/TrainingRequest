$(document).ready(function () {
    $('#add-employee-form').on('submit', function (event) {
        event.preventDefault();

        const employee = {
            nik: $('#nik').val(),
            fullName: $('#fullName').val(),
            gender: $('#gender').val(),
            dateOfBirth: $('#dateOfBirth').val(),
            address: $('#address').val(),
            country: $('#country').val()
        };

        $.ajax({
            url: 'http://localhost:5127/api/employee',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(employee),
            success: function () {
                alert('Employee berhasil ditambahkan!');
                window.location.href = 'index.html';
            },
            error: function () {
                alert('Terjadi kesalahan saat menambahkan employee.');
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const nomorRegistrasi = urlParams.get('nomorRegistrasi');

    if (nomorRegistrasi) {
        $.ajax({
            url: `http://localhost:5127/api/employee/${nik}`,
            method: 'GET',
            success: function (employee) {
                $('#nik').val(employee.nik);
                $('#fullName').val(employee.fullName);
                $('#gender').val(employee.gender);
                $('#dateOfBirth').val(employee.dateOfBirth);
                $('#address').val(employee.address);
                $('#country').val(employee.country);
            },
            error: function () {
                alert('Terjadi kesalahan saat mengambil data employee.');
            }
        });
    }

    $('#edit-employee-form').on('submit', function (event) {
        event.preventDefault();

        const employee = {
            nik: $('#nik').val(),
            fullName: $('#fullName').val(),
            gender: $('#gender').val(),
            dateOfBirth: $('#dateOfBirth').val(),
            address: $('#address').val(),
            country: $('#country').val()
        };

        $.ajax({
            url: `http://localhost:5127/api/employee/${nik}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(employee),
            success: function () {
                alert('employee berhasil diperbarui!');
                window.location.href = 'index.html';
            },
            error: function () {
                alert('Terjadi kesalahan saat memperbarui employee.');
            }
        });
    });
});
