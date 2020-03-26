class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
};

class EmpTable {
    getCode() {
        let  x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.body.appendChild(x);

        for(let i = 0; i < employees.length; i++) {

            let y = document.createElement("TR");
            y.setAttribute("id", "myTr" + i);
            document.getElementById("myTable").appendChild(y);

            let z = document.createElement("TD");
            let t = document.createTextNode(employees[i].name);
            z.appendChild(t);
            document.getElementById("myTr" + i).appendChild(z);

            let a = document.createElement("TD");
            let b = document.createTextNode(employees[i].position);
            a.appendChild(b);
            document.getElementById("myTr" + i).appendChild(a);
        };
    };
};

let employees = [
    new Employee('Ivan', 'manager'),
    new Employee('Brad', 'cashier'),
    new Employee('Hannah', 'accountant')
];

let result = new EmpTable();

result.getCode();
