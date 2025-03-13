import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getHistory(): Observable<any> {
    return this.http.get(`${this.API_URL}/history/`);
  }

  addHistory(video: { video_id: string; }): Observable<any> {
    return this.http.post(`${this.API_URL}/history/`, video);
  }

  getBookmarks(): Observable<any> {
    return this.http.get(`${this.API_URL}/bookmarks/`);
  }

  addBookmark(video: { video_id: string; }): Observable<any> {
    return this.http.post(`${this.API_URL}/bookmarks/`, video);
  }
}