import { Component, OnInit, ViewChildren } from '@angular/core'
import { MoviesService } from '../../movies.service'

@Component({
  selector: 'app-movies-showcase',
  templateUrl: './movies-showcase.component.html',
  styleUrls: ['./movies-showcase.component.sass']
})
export class MoviesShowcaseComponent implements OnInit {

  allMovies: any
  selectedMovie: any
  showDetails = false
  showDetailsInMobile = false

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe(res => {
      console.log('films', res)
      this.allMovies = res
    })

    this.moviesService.getAllPeople().subscribe(res => {
      console.log('people', res)
    })
  }

  openDetails(i: any) {
    this.selectedMovie = this.allMovies[i]
    this.showDetails = true
  }

  toggleReadMore(i: any) {
    this.selectedMovie = this.allMovies[i]
    this.showDetailsInMobile = !this.showDetailsInMobile
  }

}
