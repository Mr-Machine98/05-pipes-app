import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  localService = inject(LocalService);
  
  nameLower = signal('juan camilo');
  nameUpper = signal('JUAN CAMILO');
  fullName = signal('JuAn CaMiLo');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.localService.changeLocale(locale);
    window.location.reload();
  }

}
