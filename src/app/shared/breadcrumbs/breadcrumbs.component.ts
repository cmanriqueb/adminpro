import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
label: string = '';
  constructor( private _router: Router,
               public pageTitle: Title,
               public _meta: Meta) {

    this.getDataRoute().subscribe( event => {
        console.log(event);
        this.label = event.title;
        this.pageTitle.setTitle(event.title);
        let descriptionMetaTag: MetaDefinition = {
        name: 'description',
        content: event.title
        };
        this._meta.updateTag(descriptionMetaTag);
        });

  }

  getDataRoute() {
    return this._router.events
    .filter( event => event instanceof ActivationEnd)
    .filter( (event: ActivationEnd) => event.snapshot.firstChild === null )
    .map( (event: ActivationEnd) => event.snapshot.data);
  }

  ngOnInit() {
  }

}
