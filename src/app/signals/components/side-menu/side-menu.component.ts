import { Component, signal } from '@angular/core';

interface MenuItem{
  title: string;
  route: string;
}

@Component({
  selector: ' side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter'},
    { title: 'Usuario', route: 'user-info'},
    { title: 'Mutacion', route: 'properties'},
  ]);


  // public menuItems: MenuItem[] = [
    // { title: 'Counter', route: 'counter'},
    // { title: 'Usuario', route: 'user-info'},
    // { title: 'Mutacion', route: 'properties'},
  // ]

}
