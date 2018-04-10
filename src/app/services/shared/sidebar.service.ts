import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Pages',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Graphs', url: '/graph1' }
      ]
    }
  ];

  constructor() { }

}
