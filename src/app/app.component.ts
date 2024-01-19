import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent, CheckSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dio-angular-life-cycles2';

	isAliveCheckSample:Boolean = true;

	disposeCheckSample(): void {
		this.isAliveCheckSample = !this.isAliveCheckSample
	}

}
