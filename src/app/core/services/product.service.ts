import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, lastValueFrom, of, tap } from 'rxjs';

import { Product } from '../interfaces/product';
import { ReactiveService } from '../patterns/reactive-service';

import { Command, CommandStatus } from '../patterns/command';

import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService implements ReactiveService<Product[]>{

  private readonly endPoint = environment.PRODUCTS_API;
  private http = inject(HttpClient);

  private products$ = new BehaviorSubject<Product[]>([]);
  public data$: Observable<Product[]> = this.products$.asObservable(); // remove 'next()'

  constructor(){
    this.loadFromServer();
  }

  public execute(command: Command): Observable<CommandStatus> {

    const response:CommandStatus = {status:'REJECTED', message:'Could not perform operation'};

    switch (command.type) {
      case 'READ':
        response.status = 'ACCEPTED';
        response.message = 'Loading products from server';
        this.loadFromServer();
        break;
      default:
        break;
    }

    return of(response);
  }

  private loadFromServer(){
    this.http.get<Product[]>(this.endPoint)
             .pipe( tap(console.log) )
             .subscribe( this.publishProducts );
  }

  private publishProducts = (data:Product[]) => {
    this.products$.next(data);
  }

}


