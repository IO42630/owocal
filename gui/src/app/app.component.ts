import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['task', 'prio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'gui';
}

export interface Element {
  task: string;
  prio: number;
}

const ELEMENT_DATA: Element[] = [
  {task: 'Task Foo', prio: 1},
  {task: 'Task Bar', prio: 2},
];
