import { Component, OnInit } from '@angular/core'
import { MoviesService } from './movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe(res => {
      console.log(res)
    })
  }

}
