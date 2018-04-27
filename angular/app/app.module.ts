// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";

import { CryptoComponent } from './crypto/crypto.component';
import { CmcComponent } from './cmc/cmc.component';
import { ExmoComponent } from './exmo/exmo.component';
// import { MarketsComponent } from './markets/markets.component';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './news/header/header.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { AllNewsComponent } from './news/all-news/all-news.component';
import { CategoriesComponent } from './categories/categories.component';
import { MasonryModule } from 'angular2-masonry';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AllAnalyticsComponent } from './analytics/all-analytics/all-analytics.component';
import { AnalyticsDetailComponent } from './analytics/analytics-detail/analytics-detail.component';
import { AnalyticsCategoriesComponent } from './analytics-categories/analytics-categories.component';
import { InterviewComponent } from './interview/interview.component';
import { AllInterviewComponent } from './interview/all-interview/all-interview.component';
import { InterviewDetailsComponent } from './interview/interview-details/interview-details.component';
import { InterviewCategoriesComponent } from './interview/interview-categories/interview-categories.component';
import { ReviewComponent } from './review/review.component';
import { AllReviewComponent } from './review/all-review/all-review.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { ReviewCategoriesComponent } from './review/review-categories/review-categories.component';
import { CloudMiningComponent } from './cloud-mining/cloud-mining.component';
import { AllCloudMiningComponent } from './cloud-mining/all-cloud-mining/all-cloud-mining.component';
import { CloudMiningDetailComponent } from './cloud-mining/cloud-mining-detail/cloud-mining-detail.component';
import { CryptoAllComponent } from './crypto-all/crypto-all.component';
import { CryptoRootComponent } from './crypto-root/crypto-root.component';
import { OrderPipe } from './order-pipe/ngx-order.pipe';
import { FilterNamePipe } from './filter-name.pipe';
import { IcoProjectComponent } from './ico-project/ico-project.component';
import { IcoProjectAllComponent } from './ico-project/ico-project-all/ico-project-all.component';
import { IcoProjectDetailComponent } from './ico-project/ico-project-detail/ico-project-detail.component';
import { IcoProjectCategoriesComponent } from './ico-project/ico-project-categories/ico-project-categories.component';
import { ShortenPipePipe } from './shorten-pipe.pipe';
import { FilterNameActivePipe } from './filter-name-active.pipe';
import { CloudMiningCategoriesComponent } from './cloud-mining/cloud-mining-categories/cloud-mining-categories.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FilterNameAgePipe } from './filter-name-age.pipe';
import { ChartComponent } from './crypto/chart/chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CloudMiningTopComponent } from './sidebar/cloud-mining-top/cloud-mining-top.component';
import { StocksSidebarComponent } from './sidebar/stocks-sidebar/stocks-sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './profile/portfolio/portfolio.component';


const appRoutes: Routes = [
  {
    path:'crypto/:sym', component: CryptoComponent
  },
  {
      path:'posts', component:NewsComponent, children: [
      
      {
      path:'post/:id', component:NewsDetailComponent
     },
     {
      path:'category/:id', component:CategoriesComponent
     },
     {
      path:'all', component:AllNewsComponent
     }
    ]
  },
  {
      path:'analytics', component:AnalyticsComponent, children: [
      
      {
      path:'item/:id', component:AnalyticsDetailComponent
     },
     {
      path:'category/:id', component:AnalyticsCategoriesComponent
     },
     {
      path:'all', component:AllAnalyticsComponent
     }
    ]
  },
  {
      path:'interview', component:InterviewComponent, children: [
      
      {
      path:'item/:id', component:InterviewDetailsComponent
     },
     {
      path:'category/:id', component:InterviewCategoriesComponent
     },
     {
      path:'all', component:AllInterviewComponent
     }
    ]
  },
    {
      path:'review', component:ReviewComponent, children: [
      
      {
      path:'item/:id', component:ReviewDetailComponent
     },
     {
      path:'category/:id', component:ReviewCategoriesComponent
     },
     {
      path:'all', component:AllReviewComponent
     }
    ]
  },
    {
      path:'ico', component:IcoProjectComponent, children: [
      
      {
      path:'item/:id', component:IcoProjectDetailComponent
     },
     {
      path:'category/:id', component:IcoProjectCategoriesComponent
     },
     {
      path:'all', component:IcoProjectAllComponent
     }
    ]
  },
  {
      path:'cloud-mining', component:CloudMiningComponent, children: [
      
      {
      path:'item/:id', component:CloudMiningDetailComponent
     },
     {
      path:'category/:id', component:CloudMiningCategoriesComponent
     },
     {
      path:'all', component:AllCloudMiningComponent
     }
    ]
  },
  {
      path:'cryptocurrency', component:CryptoRootComponent, children: [
      {
        path: 'all', component:CryptoAllComponent
      },
      {
      path:'cmc', component:CmcComponent
     },
     {
      path:'exmo', component:ExmoComponent
     },
     {
       path:'crypto', component:CryptoComponent
     }
    ]
  },
  {
  path:'profile', component:ProfileComponent, children: [
      {
      path:'edit', component:EditProfileComponent
      },
      {
      path:'portfolio', component:PortfolioComponent
     },
    ]
  }
    
];
@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    CmcComponent,
    ExmoComponent,
    HeaderComponent,
    NewsComponent,
    NewsDetailComponent,
    AllNewsComponent,
    CategoriesComponent,
    AnalyticsComponent,
    AllAnalyticsComponent,
    AnalyticsDetailComponent,
    AnalyticsCategoriesComponent,
    InterviewComponent,
    AllInterviewComponent,
    InterviewDetailsComponent,
    InterviewCategoriesComponent,
    ReviewComponent,
    AllReviewComponent,
    ReviewDetailComponent,
    ReviewCategoriesComponent,
    CloudMiningComponent,
    AllCloudMiningComponent,
    CloudMiningDetailComponent,
    CryptoAllComponent,
    CryptoRootComponent,
    OrderPipe,
    FilterNamePipe,
    IcoProjectComponent,
    IcoProjectAllComponent,
    IcoProjectDetailComponent,
    IcoProjectCategoriesComponent,
    ShortenPipePipe,
    FilterNameActivePipe,
    CloudMiningCategoriesComponent,
    EditProfileComponent,
    FilterNameAgePipe,
    ChartComponent,
    SidebarComponent,
    CloudMiningTopComponent,
    StocksSidebarComponent,
    ProfileComponent,
    PortfolioComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MasonryModule,
    
    // MarketsComponent,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    OrderPipe
  ],
  providers: [HttpClientModule, OrderPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
