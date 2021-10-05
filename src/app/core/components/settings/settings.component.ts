import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnDestroy {
  user!: string;
  private userSubscription: Subscription;

  userControl: FormControl = new FormControl('');

  constructor(private userService: UserService) {
    this.userSubscription = this.userService.user$.subscribe((value) => {
      this.user = value;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  checkUser(username: string): void {
    this.userService.checkIfExists(username).subscribe(
      (_) => {
        this.userService.setUser(username);
      },
      (err) => {
        if (err.status === 404) {
          this.userControl.setErrors({ notFound: true });
        }
      }
    );
  }
}
