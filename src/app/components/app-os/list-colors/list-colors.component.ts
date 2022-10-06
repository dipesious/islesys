import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-list-colors',
  templateUrl: './list-colors.component.html',
  styleUrls: ['./list-colors.component.scss']
})
export class ListColorsComponent implements OnInit {

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

  colorz = [
    {name:"Red", p:[
      {n:"50", c:"#FFEBEE"},
      {n:"100", c:"#FFCDD2"},
      {n:"200", c:"#EF9A9A"},
      {n:"300", c:"#E57373"},
      {n:"400", c:"#EF5350"},
      {n:"500", c:"#F44336"},
      {n:"600", c:"#E53935"},
      {n:"700", c:"#D32F2F"},
      {n:"800", c:"#C62828"},
      {n:"900", c:"#B71C1C"},
      {n:"A100", c:"#FF8A80"},
      {n:"A200", c:"#FF5252"},
      {n:"A400", c:"#FF1744"},
      {n:"A700", c:"#D50000"},
    ]},
    {name:"Pink", p:[
      {n:"50", c:"#FCE4EC"},
      {n:"100", c:"#F8BBD0"},
      {n:"200", c:"#F48FB1"},
      {n:"300", c:"#F06292"},
      {n:"400", c:"#EC407A"},
      {n:"500", c:"#E91E63"},
      {n:"600", c:"#D81B60"},
      {n:"700", c:"#C2185B"},
      {n:"800", c:"#AD1457"},
      {n:"900", c:"#880E4F"},
      {n:"A100", c:"#FF80AB"},
      {n:"A200", c:"#FF4081"},
      {n:"A400", c:"#F50057"},
      {n:"A700", c:"#C51162"},
    ]},
    {name:"Purple", p:[
      {n:"50", c:"#F3E5F5"},
      {n:"100", c:"#E1BEE7"},
      {n:"200", c:"#CE93D8"},
      {n:"300", c:"#BA68C8"},
      {n:"400", c:"#AB47BC"},
      {n:"500", c:"#9C27B0"},
      {n:"600", c:"#8E24AA"},
      {n:"700", c:"#7B1FA2"},
      {n:"800", c:"#6A1B9A"},
      {n:"900", c:"#4A148C"},
      {n:"A100", c:"#EA80FC"},
      {n:"A200", c:"#E040FB"},
      {n:"A400", c:"#D500F9"},
      {n:"A700", c:"#AA00FF"},
    ]},
    {name:"Deep Purple", p:[
      {n:"50", c:"#EDE7F6"},
      {n:"100", c:"#D1C4E9"},
      {n:"200", c:"#B39DDB"},
      {n:"300", c:"#9575CD"},
      {n:"400", c:"#7E57C2"},
      {n:"500", c:"#673AB7"},
      {n:"600", c:"#5E35B1"},
      {n:"700", c:"#512DA8"},
      {n:"800", c:"#4527A0"},
      {n:"900", c:"#311B92"},
      {n:"A100", c:"#B388FF"},
      {n:"A200", c:"#7C4DFF"},
      {n:"A400", c:"#651FFF"},
      {n:"A700", c:"#6200EA"},
    ]},
    {name:"Indigo", p:[
      {n:"50", c:"#E8EAF6"},
      {n:"100", c:"#C5CAE9"},
      {n:"200", c:"#9FA8DA"},
      {n:"300", c:"#7986CB"},
      {n:"400", c:"#5C6BC0"},
      {n:"500", c:"#3F51B5"},
      {n:"600", c:"#3949AB"},
      {n:"700", c:"#303F9F"},
      {n:"800", c:"#283593"},
      {n:"900", c:"#1A237E"},
      {n:"A100", c:"#8C9EFF"},
      {n:"A200", c:"#536DFE"},
      {n:"A400", c:"#3D5AFE"},
      {n:"A700", c:"#304FFE"},
    ]},
    {name:"Blue", p:[
      {n:"50", c:"#E3F2FD"},
      {n:"100", c:"#BBDEFB"},
      {n:"200", c:"#90CAF9"},
      {n:"300", c:"#64B5F6"},
      {n:"400", c:"#42A5F5"},
      {n:"500", c:"#2196F3"},
      {n:"600", c:"#1E88E5"},
      {n:"700", c:"#1976D2"},
      {n:"800", c:"#1565C0"},
      {n:"900", c:"#0D47A1"},
      {n:"A100", c:"#82B1FF"},
      {n:"A200", c:"#448AFF"},
      {n:"A400", c:"#2979FF"},
      {n:"A700", c:"#2962FF"},
    ]},
    {name:"Light Blue", p:[
      {n:"50", c:"#E1F5FE"},
      {n:"100", c:"#B3E5FC"},
      {n:"200", c:"#81D4FA"},
      {n:"300", c:"#4FC3F7"},
      {n:"400", c:"#29B6F6"},
      {n:"500", c:"#03A9F4"},
      {n:"600", c:"#039BE5"},
      {n:"700", c:"#0288D1"},
      {n:"800", c:"#0277BD"},
      {n:"900", c:"#01579B"},
      {n:"A100", c:"#80D8FF"},
      {n:"A200", c:"#40C4FF"},
      {n:"A400", c:"#00B0FF"},
      {n:"A700", c:"#0091EA"},
    ]},
    {name:"Cyan 50", p:[
      {n:"50", c:"#E0F7FA"},
      {n:"100", c:"#B2EBF2"},
      {n:"200", c:"#80DEEA"},
      {n:"300", c:"#4DD0E1"},
      {n:"400", c:"#26C6DA"},
      {n:"500", c:"#00BCD4"},
      {n:"600", c:"#00ACC1"},
      {n:"700", c:"#0097A7"},
      {n:"800", c:"#00838F"},
      {n:"900", c:"#006064"},
      {n:"A100", c:"#84FFFF"},
      {n:"A200", c:"#18FFFF"},
      {n:"A400", c:"#00E5FF"},
      {n:"A700", c:"#00B8D4"},
    ]},
    {name:"Teal 50", p:[
      {n:"50", c:"#E0F2F1"},
      {n:"100", c:"#B2DFDB"},
      {n:"200", c:"#80CBC4"},
      {n:"300", c:"#4DB6AC"},
      {n:"400", c:"#26A69A"},
      {n:"500", c:"#009688"},
      {n:"600", c:"#00897B"},
      {n:"700", c:"#00796B"},
      {n:"800", c:"#00695C"},
      {n:"900", c:"#004D40"},
      {n:"A100", c:"#A7FFEB"},
      {n:"A200", c:"#64FFDA"},
      {n:"A400", c:"#1DE9B6"},
      {n:"A700", c:"#00BFA5"},
    ]},
    {name:"Green", p:[
      {n:"50", c:"#E8F5E9"},
      {n:"100", c:"#C8E6C9"},
      {n:"200", c:"#A5D6A7"},
      {n:"300", c:"#81C784"},
      {n:"400", c:"#66BB6A"},
      {n:"500", c:"#4CAF50"},
      {n:"600", c:"#43A047"},
      {n:"700", c:"#388E3C"},
      {n:"800", c:"#2E7D32"},
      {n:"900", c:"#1B5E20"},
      {n:"A100", c:"#B9F6CA"},
      {n:"A200", c:"#69F0AE"},
      {n:"A400", c:"#00E676"},
      {n:"A700", c:"#00C853"},
    ]},
    {name:"Light Green", p:[
      {n:"50", c:"#F1F8E9"},
      {n:"100", c:"#DCEDC8"},
      {n:"200", c:"#C5E1A5"},
      {n:"300", c:"#AED581"},
      {n:"400", c:"#9CCC65"},
      {n:"500", c:"#8BC34A"},
      {n:"600", c:"#7CB342"},
      {n:"700", c:"#689F38"},
      {n:"800", c:"#558B2F"},
      {n:"900", c:"#33691E"},
      {n:"A100", c:"#CCFF90"},
      {n:"A200", c:"#B2FF59"},
      {n:"A400", c:"#76FF03"},
      {n:"A700", c:"#64DD17"},
    ]},
    {name:"Lime", p:[
      {n:"50", c:"#F9FBE7"},
      {n:"100", c:"#F0F4C3"},
      {n:"200", c:"#E6EE9C"},
      {n:"300", c:"#DCE775"},
      {n:"400", c:"#D4E157"},
      {n:"500", c:"#CDDC39"},
      {n:"600", c:"#C0CA33"},
      {n:"700", c:"#AFB42B"},
      {n:"800", c:"#9E9D24"},
      {n:"900", c:"#827717"},
      {n:"A100", c:"#F4FF81"},
      {n:"A200", c:"#EEFF41"},
      {n:"A400", c:"#C6FF00"},
      {n:"A700", c:"#AEEA00"},
    ]},
    {name:"Yellow", p:[
      {n:"50", c:"#FFFDE7"},
      {n:"100", c:"#FFF9C4"},
      {n:"200", c:"#FFF59D"},
      {n:"300", c:"#FFF176"},
      {n:"400", c:"#FFEE58"},
      {n:"500", c:"#FFEB3B"},
      {n:"600", c:"#FDD835"},
      {n:"700", c:"#FBC02D"},
      {n:"800", c:"#F9A825"},
      {n:"900", c:"#F57F17"},
      {n:"A100", c:"#FFFF8D"},
      {n:"A200", c:"#FFFF00"},
      {n:"A400", c:"#FFEA00"},
      {n:"A700", c:"#FFD600"},
    ]},
    {name:"Amber", p:[
      {n:"50", c:"#FFF8E1"},
      {n:"100", c:"#FFECB3"},
      {n:"200", c:"#FFE082"},
      {n:"300", c:"#FFD54F"},
      {n:"400", c:"#FFCA28"},
      {n:"500", c:"#FFC107"},
      {n:"600", c:"#FFB300"},
      {n:"700", c:"#FFA000"},
      {n:"800", c:"#FF8F00"},
      {n:"900", c:"#FF6F00"},
      {n:"A100", c:"#FFE57F"},
      {n:"A200", c:"#FFD740"},
      {n:"A400", c:"#FFC400"},
      {n:"A700", c:"#FFAB00"},
    ]},
    {name:"Orange", p:[
      {n:"50", c:"#FFF3E0"},
      {n:"100", c:"#FFE0B2"},
      {n:"200", c:"#FFCC80"},
      {n:"300", c:"#FFB74D"},
      {n:"400", c:"#FFA726"},
      {n:"500", c:"#FF9800"},
      {n:"600", c:"#FB8C00"},
      {n:"700", c:"#F57C00"},
      {n:"800", c:"#EF6C00"},
      {n:"900", c:"#E65100"},
      {n:"A100", c:"#FFD180"},
      {n:"A200", c:"#FFAB40"},
      {n:"A400", c:"#FF9100"},
      {n:"A700", c:"#FF6D00"},
    ]},
    {name:"Deep Orange", p:[
      {n:"50", c:"#FBE9E7"},
      {n:"100", c:"#FFCCBC"},
      {n:"200", c:"#FFAB91"},
      {n:"300", c:"#FF8A65"},
      {n:"400", c:"#FF7043"},
      {n:"500", c:"#FF5722"},
      {n:"600", c:"#F4511E"},
      {n:"700", c:"#E64A19"},
      {n:"800", c:"#D84315"},
      {n:"900", c:"#BF360C"},
      {n:"A100", c:"#FF9E80"},
      {n:"A200", c:"#FF6E40"},
      {n:"A400", c:"#FF3D00"},
      {n:"A700", c:"#DD2C00"},
    ]},
    {name:"Brown", p:[
      {n:"50", c:"#EFEBE9"},
      {n:"100", c:"#D7CCC8"},
      {n:"200", c:"#BCAAA4"},
      {n:"300", c:"#A1887F"},
      {n:"400", c:"#8D6E63"},
      {n:"500", c:"#795548"},
      {n:"600", c:"#6D4C41"},
      {n:"700", c:"#5D4037"},
      {n:"800", c:"#4E342E"},
      {n:"900", c:"#3E2723"},
    ]},
    {name:"Gray", p:[
      {n:"50", c:"#FAFAFA"},
      {n:"100", c:"#F5F5F5"},
      {n:"200", c:"#EEEEEE"},
      {n:"300", c:"#E0E0E0"},
      {n:"400", c:"#BDBDBD"},
      {n:"500", c:"#9E9E9E"},
      {n:"600", c:"#757575"},
      {n:"700", c:"#616161"},
      {n:"800", c:"#424242"},
      {n:"900", c:"#212121"},
    ]},
    {name:"Blue Gray", p:[
      {n:"50", c:"#ECEFF1"},
      {n:"100", c:"#CFD8DC"},
      {n:"200", c:"#B0BEC5"},
      {n:"300", c:"#90A4AE"},
      {n:"400", c:"#78909C"},
      {n:"500", c:"#607D8B"},
      {n:"600", c:"#546E7A"},
      {n:"700", c:"#455A64"},
      {n:"800", c:"#37474F"},
      {n:"900", c:"#263238"},
    ]},
    {name:"Black & White", p:[
      {n:"Black", c:"#000000"},
      {n:"White", c:"#FFFFFF"},
    ]},
  ]



  constructor(
    public resource: ResourceService,
    ) { }

  ngOnInit(): void {
  }

}