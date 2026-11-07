import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name = signal('Juan Camilo');
  upperCase = signal(false);
  heroes = signal(heroes)
}
