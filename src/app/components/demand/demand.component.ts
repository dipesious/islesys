import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent implements OnInit {

  link = "LINK HERE";

  constructor(
    private dialogRef: MatDialogRef<DemandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    console.log(data)
    this.link = `<a href="https://islesys.com/
${data.sector == 'icon' ? 'icons':'' }
">${data.title} from Islesys website</a>`
  }

  ngOnInit(): void {
  }

  downloadNOW(w:string){
    this.dialogRef.close({type:w})
  }

}
