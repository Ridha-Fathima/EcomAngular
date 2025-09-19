import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/storage-service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = LocalStorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = LocalStorageService.isAdminLoggedIn();

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
      }
      this.isUserLoggedIn = LocalStorageService.isUserLoggedIn();
      this.isAdminLoggedIn = LocalStorageService.isAdminLoggedIn();
    });
  }

  logout() {
    LocalStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}