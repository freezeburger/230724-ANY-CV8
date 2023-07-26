# Usefull Links

Application Management
https://enterprisearchitecture.harvard.edu/application-architecture-checklist

Analisys / Architecture / System Engineering 
https://www.opengroup.org/architecture/togaf7-doc/arch/p4/comp/clists/syseng.htm

Angular Best Practices
https://github.com/typebytes/angular-checklist


# Angular

# Angular Application Design

| Chosse a structure regarding your workflow.
* Producivty     - Silo
* Maintenability - Classification

# Best Practices
* Have a good Module Structure
* Open entry point
* Plan routed component (views)
* Small components ( small files )
* Only usefull comments

# Angular 5 Key Concepts

* `@NgModules`  - Code Organisation
* `@Component`  - View Unit        
* `@Directive`  - Enhancement (optional)
* `@Pipe`       - Transformation Rule
* `@Injectable` (Service) - Logic

# Angular Routing

Invovles:
* `Route` definitions.
* `Router` Service.
* `<router-outlet></router-outlet>`

An application can have *nested* routes.

Top Level Routes a defiend using `forRoot`
Child Routes a defiend using `forChild`

*Lazy loading* ( loading on demand) is achieve trough the dynamic import syntax

```ts
{
    path: 'products', // http://localhost:4200/products
    component: ViewProductCatalogComponent,
    loadChildren:() => import('../domains/product/product.module').then(m => m.ProductModule)
  }
```

## Design Pattern
| A general repeatable **solution** to a *commonly occurring problem* in software design.

### 3 Common Types of Design Pattern
* Creational
  * Factory
  * Singleton
* Behavioral
  * Observer
  * Startegy
* Structural
  * Decorator
  * Facade

## Angular Decorators

There is 19 decorators.
*They can be sorted in 3 categories.*
* Creation
* Communication
* Injection

## Observables

An implementation by `rxjs` of the observer pattern. ( one to many).
A  data source offering subscription.

```ts

const data$ = new Subject();

const subscription = data$.susbscribe( value => console.log(value)) //123

data$.next(123);

```

## Angular Depency Injection

Is the sollicitation of the `Injector` factory to retrieve an `@Injectable` value (*instance, or other*)

**Syntaxe**
```ts
export class ProductConsumerDirective {

  productService = inject(ProductService); // Angular 14

  constructor(
    // @Inject(ProductService) public productService:ProductService
    // public productService:ProductService
  ){}

}

```
## Reactive Programming

Is a declarative programming paradigm concerned with data streams and the propagation of change.
