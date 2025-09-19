import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { LoginComponent } from './components/login/login.component';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { PostProductComponent } from './post-product/post-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    PostProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UserModule
  ],
  providers: [
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: NZ_ICONS, useValue: [UserOutline, LockOutline] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
