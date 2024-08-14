
console.log("js is running ...");
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "lionel",
  lastName: "messi",
  age: 37,
  location: "Spain"
}
  
const studentB: Student = {
  firstName: "bob",
  lastName: "smith",
  age: 22,
  location: "New York"
}

export const studentsList: Student[] = [studentA, studentB];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
const headerLocation = document.createElement("th");

headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
  });

document.body.appendChild(table);
