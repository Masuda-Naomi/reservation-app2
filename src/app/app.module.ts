//import=輸入する（定義）
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';

//@NgModule=構成要素を登録
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//declarations=宣言
//imports=その他(declarationsに入れなかったもの)
//bootstrap=最初に起動するコンポーネントの指定

//export class AppModeule{}=NgModuleの設定情報をAppModuleとして公開
