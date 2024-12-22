async function getTableData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const responce = await fetch(url);
    const datarecieved = responce.json();

    console.log(datarecieved)

    return datarecieved

}



async function showStudentData() {
    const studentData = await getTableData();
    const tableBody = document.querySelector(".table-body");
    for (data of studentData) {
        const tableRow = document.createElement("tr");
        tableRow.className = "table-row";

        tableRow.innerHTML = `
            <td class="table-students-data">${data.id}</td>
            <td class="table-students-data">${data.name}</td>
            <td class="table-students-data">${data.username}</td>
            <td class="table-students-data">${data.email}</td>
            <td class="table-students-data">${data.phone}</td>
            <td class="table-students-data">${data.website}</td>
            `
        tableBody.appendChild(tableRow);
    }

}


document.addEventListener("DOMContentLoaded", showStudentData());