import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-visualization1',
  templateUrl: './visualization1.component.html',
  styleUrls: ['./visualization1.component.css']
})
export class Visualization1Component implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.get_request();
  }

  get_request(): void {
    let content = "";
    let Pokemon_data_temp;
    // var elem = document.getElementById(`Output`);
    // elem!.innerHTML = content;
    // var str = (<HTMLInputElement>document.getElementById("userInput")).value; 
    this.httpService.testGet(`http://localhost:3000/db`).subscribe((data) =>{
        // console.log(data);
        let test = data as JSON;
        let Pokemon: string = JSON.stringify(test);
        Pokemon_data_temp = JSON.parse(Pokemon);
        // this.multiple_line(content, Pokemon_data);
        console.log(Pokemon_data_temp);
    });

  }
}
