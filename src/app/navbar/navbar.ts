import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  couponCodeSignal=signal<string|null>(null);

  private route=inject(ActivatedRoute);

  ngOnInit():void{
    this.route.queryParamMap.subscribe((res)=>{
      this.couponCodeSignal.set(res.get('couponCode'));
      console.log(this.couponCodeSignal())
    })
  }


}
