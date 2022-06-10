import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles!: any[];
  loading: boolean = true;
  dataSource = new MatTableDataSource<any>();

  title = 'pagination';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getData('0', '5')

  }

  pageChanged(event: PageEvent) {
    this.loading = true;


    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;

    let previousIndex = event.previousPageIndex;

    let previousSize = pageSize * pageIndex;

    this.getNextData(previousSize, (pageIndex).toString(), pageSize.toString());
  }

  getData(page: string, size: string) {

    this.articleService.getIntervals(page, size)
      .subscribe((response: any) => {
        console.log('response',response.articles)
        this.loading = false;
        this.articles = response.articles;
        this.articles.length = response.size;
        this.dataSource = new MatTableDataSource<any>(this.articles);
        this.dataSource.paginator = this.paginator;
      },
        err => {
          console.log(err);
        }

      )
  }

  getNextData(currentSize: number, page: string, size: string) {

    this.articleService.getIntervals(page, size).subscribe((response: any) => {
      this.loading = false;

      this.articles.length = currentSize;
      this.articles.push(...response.articles);

      this.articles.length = response.size;

      this.dataSource = new MatTableDataSource<any>(this.articles);
      this.dataSource._updateChangeSubscription();
      this.dataSource.paginator = this.paginator;

    })
  }
}