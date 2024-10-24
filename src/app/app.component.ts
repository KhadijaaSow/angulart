import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from "./article/article.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angulartest';
  
  title = 'angulartest';
  comment1 = "velo";
  comment2 = "voiture";
  comment3 = "avion";

  comment4 = "hotel";
  comment5 = "chaussure";
  comment6 = "lit";
  photo1 = "assets/t1.jpeg";
  photo2 = "assets/t2.jpeg";
  photo3 = "assets/t3.jpeg";
  photo4="";
  photo5="";
  photo6="";
  prix1=100;
  prix2=200;
  prix3=300;
  
  message="";
  onaffiche(arg:string){
    this.message="merci d'avoir liker"+arg;
  }

  
}
