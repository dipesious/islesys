import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { DependencyService } from 'src/app/services/dependency.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent implements OnInit {

  link = "LINK HERE";
  CTA = "";

  constructor(
    private dialogRef: MatDialogRef<DemandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public auth:AuthService,
    public depends: DependencyService,
    public resource:ResourceService
  ) { 
    console.log(data)

    this.CTA = `
${data.sector == 'icon' ? 'Download':'' }
${data.sector == 'map' ? 'Download':'' }
${data.sector == 'dataset' ? (
  (data.state == 'JS DATASET' ? 'JS File':'') + (data.state == 'COPY DATASET' ? 'Copy JS':'') + ""
) : '' }
${data.sector == 'palette' ? 'Copy HEX':'' }
${data.sector == 'gradient' ? (
  (data.state == 'JPEG GRADIENT' ? '16:9 JPEG':'') + (data.state == 'CSS GRADIENT' ? 'Copy CSS':'') + ""
) : '' }
${data.sector == 'pattern' ? (
  (data.state == 'JPEG PATTERN' ? '16:9 JPEG':'') + (data.state == 'CSS PATTERN' ? 'Copy CSS':'') + ""
) : '' }
${data.sector == 'font' ? (
  (data.state == 'ZIP FILE' ? 'Download':'') + (data.state == 'IMPORT URL' ? 'Copy CSS':'') + ""
) : '' }
${data.sector == 'color' ? 'Copy HEX':'' }
`;
//${data.title}
    this.link = `<a href="https://islesys.com/
${data.sector == 'icon' ? 'icons':'' }
${data.sector == 'map' ? 'maps':'' }
${data.sector == 'dataset' ? 'datasets':'' }
${data.sector == 'palette' ? 'palettes':'' }
${data.sector == 'gradient' ? 'gradients':'' }
${data.sector == 'pattern' ? 'patterns':'' }
${data.sector == 'font' ? 'fonts':'' }
${data.sector == 'shade' ? 'shades':'' }
">High quality ${
(data.sector == 'icon' ? 'icons':'') +
(data.sector == 'map' ? 'maps':'' ) +
(data.sector == 'dataset' ? 'datasets':'' ) +
(data.sector == 'palette' ? 'palettes':'' ) +
(data.sector == 'gradient' ? 'gradients':'' ) +
(data.sector == 'pattern' ? 'patterns':'' ) +
(data.sector == 'font' ? 'fonts':'' ) +
(data.sector == 'shade' ? 'shades':'') 
} from islesys.com</a>`;

  }

  ngOnInit(): void {
  }

  downloadNOW(w:string){
    this.dialogRef.close({type:w})
  }

  getSuport(){
    this.dialogRef.close({type:"getHelp"})
  }
}
