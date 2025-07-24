
let searchProduct = (str) => 
    {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let jsonObj = JSON.parse(this.responseText);
            let tablebody = document.getElementById("tbody");
            tablebody.innerHTML = "";

            jsonObj.forEach((element, index) => {
                let row = document.createElement("tr");

                let col = document.createElement("td");
                col.innerHTML = index + 1;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = element.name;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = element.category;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "₹ " + element.price;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = element.quantity;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML =
                    "<a href='/deleteProd?id=" + element.id +
                    "'><i class='fa-solid fa-xmark' style='color:red;'></i> DELETE</a>";
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML =
                    "<a href='/update?id=" + element.id +
                    "&name=" + element.name +
                    "&category=" + element.category +
                    "&price=" + element.price +
                    "&quantity=" + element.quantity +
                    "'><i class='fa-solid fa-pen-to-square'></i> UPDATE</a>";
                row.appendChild(col);

                tablebody.appendChild(row);
            });
        }
    };
    xhttp.open("get", "/searchProduct?name=" + str, true); 
    xhttp.send();
};