import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pStatus : string = "Product Not Added Yet !!!";
  pinfo : string = "The product is Added";
  pNo : number = 0;
  isDisabled : string = this.pStatus;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      
    }, 4000);
  }

  // onKeyUp(e:any){
  //   console.log(e.target.value)
  // }

  onAddproduct(eve: Event){
    
   this.pNo++;
   this.pStatus = `${this.pNo} The product is Added`
   

  }

  onDeleteproduct(eve:Event){
    this.pNo--;
    this.pStatus = `${this.pNo} The product is Added`
    if(this.pNo <=0){
      this.pStatus = "Product Not Added Yet !!!";
    }
  }


}
