import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private data = [];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.get_request()
    
    // Comment out the line above and uncomment the line below when you're
    // ready to try fetching JSON from a REST API endpoint.
    // Comment out the private data [] above too.
    // d3.json('https://api.jsonbin.io/b/5eee6a5397cb753b4d149343').then((data: any) => this.drawBars(data));
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
        // console.log(Pokemon_data_temp);
        this.data = Pokemon_data_temp;
        // console.log(this.data);
  




        this.createSvg();
        this.drawBars(this.data);
    });
    
  }

  private createSvg(): void {
      this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

      this.svg.append("text")
      .text("Bar Graph of Pokemon Types and their height");
  }

  private drawBars(data: any[]): void {
      console.log(this.data);
      // Create the X-axis band scale
      const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.type_1))
      .padding(0.2);

      // Draw the X-axis on the DOM
      this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

      // Create the Y-axis band scale
      const y = d3.scaleLinear()
      .domain([0, 100])
      .range([this.height, 0]);

      // Draw the Y-axis on the DOM
      this.svg.append("g")
      .call(d3.axisLeft(y));
      

      this.svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", this.width)
      .attr("y", this.height - 60)
      .text("Pokemon Types");

      this.svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("x", -30)
      .attr("y", -45)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Pokemon total height");

      // Create and fill the bars
      this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.type_1))
      .attr("y", (d: any) => y(d.height_m))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.height_m))
      .attr("fill", "#d04a35");
  }
}
