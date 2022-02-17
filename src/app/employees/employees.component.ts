import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  position !: number;
  employees = [
    {
    "id": 1,
    "name": "Perge Béla",
    "positionId": 1
    },
    {
    "id": 2,
    "name": "Mészáros Viktor",
    "positionId": 3
    },
    {
    "id": 3,
    "name": "Orbán Lőrinc",
    "positionId": 3
    },
    {
    "id": 4,
    "name": "Tony Stark",
    "positionId": 1
    },
    {
    "id": 5,
    "name": "Kicsi Putyin",
    "positionId": 2
    },
    {
    "id": 6,
    "name": "Perge Mari",
    "positionId": 2
    },
    {
    "id": 7,
    "name": "Rabsz Olga",
    "positionId": 4
    },
    {
    "id": 8,
    "name": "Teszt Elek",
    "positionId": 3
    },
    {
    "id": 9,
    "name": "Vicc Elek",
    "positionId": 4
    },
    {
    "id": 10,
    "name": "Szájer Józsi",
    "positionId": 2
    },
];

  constructor() { }

  ngOnInit(): void {
    
  }

}
