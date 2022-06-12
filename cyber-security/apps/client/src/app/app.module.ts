import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS, HttpXsrfTokenExtractor } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XsrfInterceptor } from './xsrf-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'X-XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: XsrfInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
