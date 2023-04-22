import { NONE_TYPE } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template : `<p class="cn">
//   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas tenetur in sapiente quaerat ratione doloremque atque laboriosam officiis ducimus ea labore, dignissimos iusto pariatur aut!
// </p>`,
  styleUrls: ['./app.component.scss'],
  // encapsulation : ViewEncapsulation.None, 
  // styles : [
  //   `
  //   .cn{
  //     background-color: red;
  //   }
  

  //   `
  // ]
})
export class AppComponent {
  title = 'databinding';
  pName : string = "SAMSUNG";
  pCost : number = 18000;
  pmodel : string = "M11"
}
