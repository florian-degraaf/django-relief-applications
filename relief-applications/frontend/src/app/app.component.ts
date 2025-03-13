import { Component, OnInit } from '@angular/core';
import { VideoService } from './services/video.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Add this import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    HttpClientModule  // Add HttpClientModule to imports
  ]
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getHistory().subscribe(
      (data) => {
        console.log('History:', data);
      },
      (error) => {
        console.error('Error fetching history:', error);
      }
    );

    this.videoService.getBookmarks().subscribe(
      (data) => {
        console.log('Bookmarks:', data);
      },
      (error) => {
        console.error('Error fetching bookmarks:', error);
      }
    );

    const video = { video_id: 'Video 6'};
    this.videoService.addHistory(video).subscribe(
      (response) => {
        console.log('Added to history:', response);
      },
      (error) => {
        console.error('Error adding to history:', error);
      }
    );

    this.videoService.addBookmark(video).subscribe(
      (response) => {
        console.log('Added to bookmarks:', response); 
      },
      (error) => {
        console.error('Error adding to bookmarks:', error);
      }
    );
  }
}
