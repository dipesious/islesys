import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/services/resource.service';
import { SeoService } from 'src/app/services/seo.service';
import { DemandComponent } from '../../demand/demand.component';

@Component({
  selector: 'app-list-shades',
  templateUrl: './list-shades.component.html',
  styleUrls: ['./list-shades.component.scss']
})
export class ListShadesComponent implements OnInit {


  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  listBranding = [
    {name:"Red", color:"#f44336", list:[ "Power", "Excitement", "Love", "Passion", "Strength", "Energy", "Danger" ], info:"Red stands for passion, excitement and anger. It can signify importance and command attention."},
    {name:"Orange", color:"#ff9800", list:[ "Playfulness", "Cheerfulness", "Friendliness", "Creativity", "Confidence" ], info:"Orange stands for playfulness, vitality and friendliness. It is invigorating and evokes energy."},
    {name:"Yellow", color:"#ffeb3b", list:[ "Playfulness", "Cheerfulness", "Friendliness", "Creativity", "Confidence" ], info:"Yellow evokes happiness, youth and optimism, but can also seem attention-grabbing or affordable."},
    {name:"Green", color:"#4caf50", list:[ "Nature", "Growth", "Freshness", "Wealth", "Health" ], info:"Green evokes stability, prosperity, growth and a connection to nature."},
    {name:"Indego", color:"#3f51b5", list:[ "professionalism", "formality", ], info:"Dark blue stands for professionalism, security and formality. It is mature and trustworthy."},
    {name:"Blue", color:"#2196f3", list:[ "Stablity", "Competence", "Trust", "Loyalty", "Security" ], info:"A light shade of blue exudes tranquility, trust, openness. It can also signify innocence."},
    {name:"Pink", color:"#E91E63", list:[ "Girlish", "femininity", "innocence"], info:"Pink stands for femininity, youth and innocence. It ranges from modern to luxurious."},
    {name:"Purple", color:"#9c27b0", list:[ "Authority", "Sophistication", "Power", "Ambition", "Mystery", "Creativity" ], info:"Purple can signify royalty, creativity and luxury."},
    //{name:"Voilet", color:"#673AB7", list:[ "xxx", ], info:"xxx"},
    //{name:"Cyan", color:"#00BCD4", list:[ "xxx", ], info:"xxx"},
    {name:"Grey", color:"#9e9e9e", list:[ "neutrality", "mature", ], info:"Gray stands for neutrality. It can look subdued, classic, serious, mysterious or mature."},
    {name:"Brown", color:"#795548", list:[ "Ruggoness", "Earthiness", "Warmth" ], info:"Brown creates a rugged, earthy, old-fashioned look or mood."},
    {name:"Black", color:"#000000", list:[ "Power", "Sophistication", "Elegance", "Prestige", "Timelessness", "Value" ], info:"Black evokes a powerful, sophisticated, edgy, luxurious and modern feeling."},
    {name:"White", color:"#ffffff", list:[ "Health", "Cleanliness", "Purity", "Sincerity" ], info:"White evokes cleanliness, virtue, health or simplicity. It can range from affordable to high-end."},
  ]




  constructor(
    public resource: ResourceService,
    public dialog: MatDialog,
    private router: Router, 
    public seo: SeoService,

    ) { }

  ngOnInit(): void {
    let xTitle = "Library of stable color shades";
    let xDescription = "We are building a researched library of stable colors. The shades undertaking by Dipesh Bhoir with over 50k+ shades at your fingertips.";
    let xURL = "https://islesys.com/shades";
    let xImage = "";
    let xKeywords = "shades, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }




  getME(wat:string, name:string, color:string){
    let state = "" + 
    (wat == 'CSS' ? 'CSS COLOR':'') + 
    (wat == 'JPEG' ? 'JPEG COLOR':'') + 
    (wat == 'HEX' ? 'HEX COLOR':'');
    let title = color + " from " + name;

    const dialogRef = this.dialog.open(DemandComponent, {
      width: '90%',
      maxWidth: '750px',
      data: {
        // id,
        title: title, state: state,
        sector:"color"
      },
      panelClass:"downloadClass"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type == "Private"){
        let newData = `${color}`;

        // if(wat == 'CSS'){ this.getCSS() }
        // if(wat == 'JPEG'){ this.getJPEG() }
        if(wat == 'HEX'){ this.resource.copyCLIPBOARD(newData) }

      }

      if(result?.type == 'Community'){
        this.router.navigate(['/cart/upgrade-account']);
      }
      if(result?.type == 'Enterprise'){
        this.router.navigate(['/cart/apply-for-enterprise']);
      }
      if(result?.type == 'getHelp'){
        this.router.navigate(['/getHelp/shades']);
      }
    });
  }



}
