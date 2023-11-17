import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {formatDate} from "@angular/common";
import {ImageInformation} from "../../classes/image-information/image-information";

interface AssetGroup {
  urls: string[]
}

interface NGSW {
  assetGroups: AssetGroup[]
}

@Injectable({
  providedIn: 'root'
})
export class NgswService {

  _NGSW_URL = '/ngsw.json'

  constructor(private _http: HttpClient, @Inject(LOCALE_ID) protected localeId: string) {
  }

  public getAssetsUrlsList(): Observable<string[]> {
    return this._http.get<NGSW>(this._NGSW_URL).pipe(
      map(res => res.assetGroups[1].urls)
    )
  }

  public getAssetsUrlsListPath(path: string): Observable<string[]> {
    return this.getAssetsUrlsList().pipe(
      map(res => res.filter(file => file.includes(path)))
    )
  }

  public getImagesAssetsUrlsListPath(path: string): Observable<ImageInformation[]> {
    return this.getAssetsUrlsListPath(path).pipe(
      map(
        urls => {
          return urls.map(url => {
            return this.urlToImageInformation(url)
          })
        })
    )
  }

  private urlToImageInformation(url: string): ImageInformation {
    return new ImageInformation(url, this.getAlt(url))
  }

  private getAlt(url: string): string {
    let alt: string = url.substring(0, url.lastIndexOf('.'))!
    alt = alt.split('/').pop()!
    try {
      let date = new Date(alt.slice(0, 19))
      return `${formatDate(date, 'shortDate', this.localeId)} - ${this.getAltString(alt.slice(20))}`
    } catch (error) {
      return this.getAltString(alt)
    }
  }

  private getAltString(str: string): string {
    return str.replace(/-/g, ' ')
  }
}
