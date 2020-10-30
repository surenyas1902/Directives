import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Vacation at the Forest',
      url: 'https://images.unsplash.com/photo-1603655889313-bdf00862dd1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Hillside Road',
      url: 'https://images.unsplash.com/photo-1603663350798-57854804534a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      title: 'Ocean and Mountain meets',
      url: 'https://images.unsplash.com/photo-1603666880615-2adaa7cab50c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Weighs more when you see',
      url: 'https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Vacation at the Forest',
      url: 'https://images.unsplash.com/photo-1603655889313-bdf00862dd1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Hillside Road',
      url: 'https://images.unsplash.com/photo-1603663350798-57854804534a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      title: 'Ocean and Mountain meets',
      url: 'https://images.unsplash.com/photo-1603666880615-2adaa7cab50c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Weighs more when you see',
      url: 'https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Vacation at the Forest',
      url: 'https://images.unsplash.com/photo-1603655889313-bdf00862dd1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Hillside Road',
      url: 'https://images.unsplash.com/photo-1603663350798-57854804534a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      title: 'Ocean and Mountain meets',
      url: 'https://images.unsplash.com/photo-1603666880615-2adaa7cab50c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Weighs more when you see',
      url: 'https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Vacation at the Forest',
      url: 'https://images.unsplash.com/photo-1603655889313-bdf00862dd1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Hillside Road',
      url: 'https://images.unsplash.com/photo-1603663350798-57854804534a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
      title: 'Ocean and Mountain meets',
      url: 'https://images.unsplash.com/photo-1603666880615-2adaa7cab50c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Weighs more when you see',
      url: 'https://images.unsplash.com/photo-1603665409265-bdc00027c217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
