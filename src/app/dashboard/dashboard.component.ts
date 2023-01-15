import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tile } from './dashboard.type';

@Component({
  selector: 'lurisan-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public topTiles: Tile[] = [
    {
      hover: {
        image: 'aim',
        title: 'aim',
        linkType: 'modal',
        link: '#'
      },
      noHover: {
        image: 'aim',
        title: 'aim',
        description: 'Make my mark in the wide world'
      },
    },
    {
      hover: {
        image: 'vision',
        title: 'vision',
        linkType: 'modal',
        link: '#'
      },
      noHover: {
        image: 'vision',
        title: 'vision',
        description: 'Build a world to be a better place'
      },
    },
    {
      hover: {
        image: 'resume',
        title: 'resume',
        linkType: 'link',
        link: 'online-resume'
      },
      noHover: {
        image: 'resume',
        title: 'Resume',
        description: 'View online or download resume for future'
      },
    },
    {
      hover: {
        image: 'blog',
        title: 'blog',
        linkType: 'link',
        link: 'blog'
      },
      noHover: {
        image: 'blog',
        title: 'blog',
        description: 'Read my journey till now'
      },
    },
  ];

  public bottomTiles: Tile[] = [
    {
      hover: {
        image: 'project',
        title: 'projects',
        linkType: 'link',
        link: 'projects'
      },
      noHover: {
        image: 'project',
        title: 'projects',
        description: 'Engineers are always building'
      },
    },
    {
      hover: {
        image: 'education',
        title: 'education',
        linkType: 'modal',
        link: '#'
      },
      noHover: {
        image: 'education',
        title: 'education',
        description: 'Plain graduate with whole lot of industry exposure'
      },
    },
    {
      hover: {
        image: 'work',
        title: 'Work Experience',
        linkType: 'modal',
        link: '#'
      },
      noHover: {
        image: 'work',
        title: 'Work Experience',
        description: 'Been working for almost 4+ years now'
      },
    },
    {
      hover: {
        image: 'achievement',
        title: 'achievements',
        linkType: 'modal',
        link: '#'
      },
      noHover: {
        image: 'achievement',
        title: 'achievements',
        description: 'Somethings to show-off'
      },
    },
  ];

  constructor(private router: Router) { }

  public linkClicked(status: boolean, link: string) {

    if (status) this.router.navigateByUrl('/' + link)
  }
}
