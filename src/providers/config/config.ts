import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    username: "",
    name: ""
  }

  constructor() {
    
  }

  getConfigData(): any{
    return localStorage.getItem("config");
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string){
    
    if(showSlide)
      this.config.showSlide = showSlide;

    if(username)
      this.config.username = username;

    if(name)
      this.config.name = name;

    localStorage.setItem("config", JSON.stringify(this.config));
  }
}
