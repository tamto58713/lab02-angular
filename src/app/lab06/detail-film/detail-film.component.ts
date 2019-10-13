import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private http: HttpClient) {  }

  film 
  films = {results: []}
  loaded
  async fetch(url) {
    return await new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: {results: []}) => {
        this.films = data
        console.log(this.films)
        resolve(this.films)
        this.loaded = Promise.resolve(true);
      })
    })
  }

  async ngOnInit() {

    await this.fetch("https://swapi.co/api/films/")

    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      if (!id) {
        this.location.replaceState("/lab06/1")
        id = 1
      }

      this.film = this.films.results.filter(film => {
        return film.episode_id === id
      })[0]
    
      console.log(this.film)

      
    })
  }

}
