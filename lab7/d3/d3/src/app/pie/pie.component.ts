import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  private data = [];
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

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
        this.createColors();
        this.drawChart();
    });
    
  }

  private createSvg(): void {
      this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {
      // this.colors = d3.scaleOrdinal()
      // .domain(this.data.map(d => d.type_1.toString()))
      // .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawChart(): void {
      // Compute the position of each group on the pie:
      const pie = d3.pie<any>().value((d: any) => Number(d.type_1));

      // Build the pie chart
      this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

      // Add labels
      const labelLocation = d3.arc()
      .innerRadius(100)
      .outerRadius(this.radius);

      this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }
}
