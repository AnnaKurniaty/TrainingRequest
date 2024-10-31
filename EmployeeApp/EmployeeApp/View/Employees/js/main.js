$(document).ready(function () {
    fetchEmployees();

    function fetchEmployees(searchParams = {}) {
        $.ajax({
            url: 'http://localhost:5096/api/employee',
            method: 'GET',
            data: searchParams,
            success: function (data) {
                $('#employee-table tbody').empty();
                data.forEach(employee => {
                    $('#employee-table tbody').append(`
                        <tr>
                            <td>${employee.nik}</td>
                            <td>${employee.fullName}</td>
                            <td>${employee.gender}</td>
                            <td>${employee.dateOfBirth}</td>
                            <td>${employee.address}</td>
                            <td>${employee.country}</td>
                            <td>
                                <button class="btn btn-warning" onclick="editEmployee('${employee.nik}')">Edit</button>
                                <button class="btn btn-danger" onclick="deleteEmployee('${employee.nik}')">Hapus</button>
                            </td>
                        </tr>
                    `);
                });
            },
            error: function () {
                alert('Gagal mengambil data employee.');
            }
        });
    }

    // Event untuk tombol search
    $('#search-button').click(function () {
        const searchReg = $('#searchReg').val();
        const searchOwner = $('#searchOwner').val();
        const searchParams = {};

        if (searchReg) searchParams.nik = searchReg;
        if (searchOwner) searchParams.fullName = searchOwner;

        fetchEmployees(searchParams); // Panggil fungsi dengan parameter pencarian
    });

    window.editEmployee = function (nik) {
        window.location.href = `edit.html?nomorRegistrasi=${nik}`;
    };

    window.deleteEmployee = function (nik) {
        $.ajax({
            url: `http://localhost:5096/api/employee/${nik}`,
            method: 'DELETE',
            success: function () {
                alert('Employee berhasil dihapus.');
                location.reload();
            },
            error: function () {
                alert('Terjadi kesalahan saat menghapus employee.');
            }
        });
    };
});
