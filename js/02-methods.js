const playList = {
  name: 'мой плейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
  // getName: function (a) {
  //   console.log('Это getName', a);   // старый вариант записи
  // },
  getName(a) {
    console.log('Это getName', a); // новый вариант записи метода
  },
};

console.log(playList);

playList.getName(2); // - метод обьекта

console.log('--------------------');

const playList1 = {
  name: 'мой плейлист',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    this.trackCount = this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
};

playList1.changeName('Новое имя');
console.log(playList1);

playList1.addTrack('Новый трек 1');
console.log(playList1); // ['track-1', 'track-2', 'track-3', 'Новый трек']

playList1.updateRating(40);
console.log(playList1);

console.log('--------------------');

//* Компания - добавление,удаление

const employee1 = {
  id: 1,
  name: 'Tom',
  salary: 2000,
  bonus: 100,
};

const employee2 = {
  id: 2,
  name: 'John',
  salary: 4000,
};

const employee3 = {
  id: 3,
  name: 'John',
  salary: 4000,
};

const company = {
  employees: [],
  budget: 60000,
  income: 0,
  addEmployee: function (employee) {
    this.employees.push(employee);
  },

  deleteEmployee(id) {
    const newEmployeesList = [];

    for (const employee of this.employees) {
      if (employee.id !== id) {
        newEmployeesList.push(employee);
      }
    }
    this.employees = newEmployeesList;
  },

  calcSalary() {
    let sum = 0;

    for (const employee of this.employees) {
      const bonus = employee.bonus ? employee.bonus : 0;
      sum += employee.salary + bonus;
    }
    return sum;
  },

  calcIncome() {
    const employeeSalary = this.calcSalary();

    this.income = this.budget - employeeSalary;
  },
};

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);

company.deleteEmployee(2);

console.log(company);
// console.log(company.calcSalary());
console.log(company.calcIncome());
console.log(company);

// !!!

const calcSalary1 = company.calcSalary();
console.log(calcSalary1); // 6100

const calcSalary2 = company.calcSalary;
console.log(calcSalary2); // развернет функ-ю calcSalary()

// const calcSalary3 = company.calcSalary;
// console.log(calcSalary3()); // Cannot read properties of undefined (reading 'employees')
