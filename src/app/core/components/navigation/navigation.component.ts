import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'rotate(90deg)',
        })
      ),
    ]),
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(public userService: UserService) {}
}
