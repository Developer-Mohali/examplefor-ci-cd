import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-linecharts',
  templateUrl: './linecharts.component.html',
  styleUrls: ['./linecharts.component.css']
})
export class LinechartsComponent implements OnInit {
imgData;
 google: any;
  constructor() { 
 
  }

  ngOnInit(): void {
    this.imgData={
      title: 'Average Temperatures of Cities',
      type: 'LineChart',
      id:'chart_div',
      data: [
           ["Jan",  7.0, -0.2, -0.9, 3.9],
           ["Feb",  6.9, 0.8, 0.6, 4.2],
           ["Mar",  9.5,  5.7, 3.5, 5.7],
           ["Apr",  14.5, 11.3, 8.4, 8.5],
           ["May",  18.2, 17.0, 13.5, 11.9],
           ["Jun",  21.5, 22.0, 17.0, 15.2],
           ["Jul",  25.2, 24.8, 18.6, 17.0],
           ["Aug",  26.5, 24.1, 17.9, 16.6],
           ["Sep",  23.3, 20.1, 14.3, 14.2],
           ["Oct",  18.3, 14.1, 9.0, 10.3],
           ["Nov",  13.9,  8.6, 3.9, 6.6],
           ["Dec",  9.6,  2.5,  1.0, 4.8]
      ],
      columnNames: ["Month", "Tokyo", "New York","Berlin", "Paris"],
      options: {   
         hAxis: {
            title: 'Month'
         },
         vAxis:{
            title: 'Temperature'
         },
       pointSize:5
      },
      width: 550,
      height: 400,
    
    }
 
  }
 
  title = 'html-to-pdf-angular-application';
  public convetToPDF()
  {
  var data = document.getElementById('contentToConvert');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 208;
  var pageHeight = 600;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.save('new-file.pdf'); // Generated PDF
  });
  } 
 

  exportToPdf(){
    var doc = new jsPDF();
    doc.setFontSize(33);
    doc.setFillColor(135, 124,45,0);
    doc.text(this.imgData,20,10);
    
    doc.save('sample.pdf');

}
}
