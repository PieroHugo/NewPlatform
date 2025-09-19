import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Source} from '../../news/domain/model/source.entity';

@Injectable({
  providedIn: 'root'
})
export class LogoApi {
  baseUrl = environment.logoProviderApiBaseUrl;
  logoApiKey = environment.logoProviderApiKey;

  constructor() {
  }

  getUrlToLogo(source: Source) {
    //console.log('getUrlToLogo', source);
    //return `${this.baseUrl}${new URL(source.url).hostname}`;
    return `${this.baseUrl}${new URL(source.url).hostname}?token=${this.logoApiKey}`;
  }
}
