import {Component, OnInit} from '@angular/core';
import {DjangoClientService} from '../django-client/django-client.service';
import {GameChart} from '../django-client/Classes';

@Component({
  selector: 'app-game-chart',
  templateUrl: './game-chart.component.html',
  styleUrls: ['./game-chart.component.css']
})
export class GameChartComponent implements OnInit {
  interval: any;

  // lineChart
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  updated = false;
  lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        time: {
          unit: 'day'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
  };
  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(2,117,216,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = false;
  lineChartType = 'line';


  constructor(private djangoClientService: DjangoClientService) {
  }

  ngOnInit() {
    this.getGameChart();
    this.interval = setInterval(() => {
      this.getGameChart();
    }, 15000);
  }

  getGameChart() {
    return this.djangoClientService.getGameChart().subscribe((data: GameChart[]) => {
      this.lineChartLabels = data['days'];
      const _lineChartData: Array<any> = new Array(1);
      for (let i = 0; i < _lineChartData.length; i++) {
        _lineChartData[i] = {data: new Array(data['counts'].length), label: this.lineChartLabels[i]};
        for (let j = 0; j < data['counts'].length; j++) {
          _lineChartData[i].data[j] = data['counts'][j];
        }
      }
      this.lineChartData = _lineChartData;
      this.updated = true;
      console.log(data['days']);
      console.log(this.lineChartData);
      console.log(this.lineChartLabels);

    });
  }

}
