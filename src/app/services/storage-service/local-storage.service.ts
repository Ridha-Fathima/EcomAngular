import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private static readonly TOKEN = 'I_token';
  private static readonly USERID = 'I_user';
  private static readonly USERROLE = 'I_role';

  saveUserId(userid: any) {
    localStorage.setItem(LocalStorageService.USERID, JSON.stringify(userid));
  }

  saveUserRole(userRole: string) {
    localStorage.setItem(LocalStorageService.USERROLE, userRole);
  }

  saveToken(token: string) {
    localStorage.setItem(LocalStorageService.TOKEN, token);
  }

  static getUser(): any {
    const data = localStorage.getItem(this.USERID);
    return data ? JSON.parse(data) : null;
  }

  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN);
  }

  static getUserRole(): string {
    return localStorage.getItem(this.USERROLE) ?? '';
  }

  static hasToken(): boolean {
    return !!this.getToken();
  }

  static isUserLoggedIn(): boolean {
    return this.hasToken() && this.getUserRole() === 'USER';
  }

  static isAdminLoggedIn(): boolean {
    return this.hasToken() && this.getUserRole() === 'ADMIN';
  }

  static signOut(): void {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.USERID);
    localStorage.removeItem(this.USERROLE);
  }
}
