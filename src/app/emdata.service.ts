import { Injectable } from '@angular/core';

@Injectable()
export class EmdataService {

  constructor() { }
  getEmployees() {
    return [
      { "id": 1,"name":"saeed","gender":"Male"},
       {" id ": 2, "name": "zaid","gender":"Male"},
      {"id":3,"name":"arhum","gender":"Male"}
    ];
  }

}
