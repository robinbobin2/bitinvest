
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { LOCALE_ID } from '@angular/core';

import { CryptoComponent } from './crypto/crypto.component';
import { CmcComponent } from './cmc/cmc.component';
import { ExmoComponent } from './exmo/exmo.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { ImportPipe } from './import.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { StriphtmlPipe } from './striphtml.pipe';
import { ExcerptPipe } from './excerpt.pipe';
import {SidebarResolverService} from './sidebar-resolver.service';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { TopIcoComponent } from './sidebar/top-ico/top-ico.component';
import {CommentsService} from "./comments.service";
import { ClickOutsideDirective } from './click-outside.directive';
import { Chart2Component } from './crypto/chart2/chart2.component';
import { Chart3Component } from './crypto/chart3/chart3.component';
import {NewsResolverService} from "./news/news-resolver.service";
import { BannerComponent } from './sidebar/banner/banner.component';
import { CryptoFilterComponent } from './crypto-filter/crypto-filter.component';
import { MiningFilterComponent } from './mining-filter/mining-filter.component';
import { IcoFilterComponent } from './ico-filter/ico-filter.component';
import { ExchangeFilterComponent } from './exchange-filter/exchange-filter.component';
import { NewsFilterComponent } from './news-filter/news-filter.component';
import { AnalyticsFilterComponent } from './analytics-filter/analytics-filter.component';
import { ReviewFilterComponent } from './review-filter/review-filter.component';
import { InterviewFilterComponent } from './interview-filter/interview-filter.component';
import { Chart4Component } from './crypto/chart4/chart4.component';
import { Chart5Component } from './crypto/chart5/chart5.component';
import { Chart6Component } from './crypto/chart6/chart6.component';

const appRoutes: Routes = [

  {

    path:'crypto/:sym', component: CryptoComponent, children: [

      {
      path:'news', component:CryptoComponent
     },
     {
      path:'about', component:CryptoComponent
     },
     {
      path:'graph', component:CryptoComponent
     },
     {
      path:'comments', component:CryptoComponent
     },
     {
      path:'analytics', component:CryptoComponent
     }
    ]
  },

    {
        path: 'crypto-filter', component: CryptoFilterComponent
    },
    {
        path: 'mining-filter', component: MiningFilterComponent
    },

    {
        path: 'ico-filter', component: IcoFilterComponent
    },

    {
        path: 'exchange-filter', component: ExchangeFilterComponent
    },
    {
        path: 'news-filter', component: NewsFilterComponent
    },

    {
        path: 'analytics-filter', component: AnalyticsFilterComponent
    },

    {
        path: 'review-filter', component: ReviewFilterComponent
    },

    {
        path: 'interview-filter', component: ReviewFilterComponent
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

  },
  {
      path:'exchanges', component:ExchangesComponent
  },
  {
      path:'exchange/:name', component:ExchangeComponent
  },

    
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
    PortfolioComponent,
    ImportPipe,
    SafeHtmlPipe,
    StriphtmlPipe,
    ExcerptPipe,
    ExchangesComponent,
    ExchangeComponent,
    TopIcoComponent,
    ClickOutsideDirective,
    Chart2Component,
    Chart3Component,
    BannerComponent,
    CryptoFilterComponent,
    MiningFilterComponent,
    IcoFilterComponent,
    ExchangeFilterComponent,
    NewsFilterComponent,
    AnalyticsFilterComponent,
    ReviewFilterComponent,
    InterviewFilterComponent,
    Chart4Component,
    Chart5Component,
    Chart6Component
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
      InfiniteScrollModule
    
    // MarketsComponent,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    OrderPipe,
      InfiniteScrollModule
  ],
  providers: [HttpClientModule, OrderPipe, SidebarResolverService, CommentsService, NewsResolverService, InfiniteScrollModule, { provide: LOCALE_ID, useValue: "ru-RU" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);