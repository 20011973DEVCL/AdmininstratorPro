import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.css'
})
export class DonaComponent{


  @Input() title: string='Sin Titulo';
  @Input('labels') doughnutChartLabels: string[] = ['Label 1','Label 2','Label 3' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [1, 2, 3],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

}
