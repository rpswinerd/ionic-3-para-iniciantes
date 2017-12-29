import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Rodrigo Perez Swinerd",
    data: "December 28, 2017",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 86,
    qntd_comments: 29,
    time_comment: "12:26"
  }
  public nomeUsuario: string = "Rodrigo Swinerd";

  public lista_filmes: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FeedPage');
    // this.somaDoisNumeros(10, 10);
    this.movieProvider.getLatestMovies().subscribe(data=>{      
      this.lista_filmes = (data as any).results;
    }, error=>{
      console.log(error);
    });
  }

}
