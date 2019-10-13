import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import axios from 'axios'
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private http:HttpClient) { 
    
  }
  films = []

  loaded: Promise<boolean>

  // async fetch(url) {
  //   return await new Promise((resolve, reject) => {
  //     axios.get("https://swapi.co/api/films/")
  //     .then((res) => {
  //       resolve(res.data)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  //   })
  // }

  async fetch(url) {
    return await new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: {results: []}) => {
        this.films = data.results
        console.log(this.films)
        resolve(this.films)
        this.loaded = Promise.resolve(true);
      })
  })

  }

  ngOnInit() {
    // console.log(this.fetch("https://swapi.co/api/films/")
    //   .then(data => {
    //     return data
    //   })
    // )
    this.fetch("https://swapi.co/api/films/") 

  }

}
