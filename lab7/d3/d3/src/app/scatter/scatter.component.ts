import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  private data = [];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

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
        // console.log(Pokemon_data_temp);
        this.data = Pokemon_data_temp;
        // console.log(this.data);
  




        this.createSvg();
        this.drawPlot();
    });
    
  }

  private createSvg(): void {
      this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")")
      

      this.svg.append("text")
      .text("Scatter Plot of Pokemon Defense and HP");
  }

  private drawPlot(): void {
      // Add X axis
      const x = d3.scaleLinear()
      .domain([1, 200])
      .range([ 0, this.width ]);
      this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));
      // .text("Pokemon Defense Stats");
      

      // Add Y axis
      const y = d3.scaleLinear()
      .domain([0, 200])
      .range([ this.height, 0]);
      this.svg.append("g")
      .call(d3.axisLeft(y));
      // .text("Pokemon HP Stats");

      // Add dots
      const dots = this.svg.append('g');
      dots.selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.defense))
      .attr("cy", (d: any) => y(d.hp))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "#69b3a2");

      // Add labels
      dots.selectAll("text")
      .data(this.data)
      .enter()
      .append("text")
      .text((d: any) => d.Framework)
      .attr("x", (d: any) => x(d.defense))
      .attr("y", (d: any) => y(d.hp))


      this.svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", this.width)
      .attr("y", this.height - 20)
      .text("Pokemon Defense Stats");

      this.svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("x", -30)
      .attr("y", -45)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Pokemon HP stats");
  }

  
}
