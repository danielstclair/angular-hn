import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import { HackerNewsAPIService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { routing } from './app.routes';
import { CommentComponent } from './comment/comment.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent,
    CommentComponent,
    CommentTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HackerNewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }