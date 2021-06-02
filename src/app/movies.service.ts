import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  url = 'https://ghibliapi.herokuapp.com'

  getAllMovies() {
    return this.http.get(`${this.url}/films`)
  }
}
