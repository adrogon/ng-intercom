# ng-intercom

This is an Intercom wrapper for Angular 2+ with dependency injection for universal applications.

It supports all intercom methods.

## Installation

This package is on NPM, so just run `npm install ng-intercom`.

## Configuration

```ts
// Add the module

import { IntercomModule } from 'ng-intercom';

import { AppComponent } from './app';

@NgModule({
  imports: [
    IntercomModule.forRoot()
  ]
})
export class AppModule{}

```

```ts
// App
...
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app',
  template: `...`
})
export class AppComponent implements OnInit {
  constructor(
    private intercom: Intercom
  ){}

  ngOnInit() {
    this.intercom.init({
      app_id: <app_id>,
      // Supports all optional configuration.
      widget: {
        "activator": "#intercom" 
      }
    });
  }
}
```
