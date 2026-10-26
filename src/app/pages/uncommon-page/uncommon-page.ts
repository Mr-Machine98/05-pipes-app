import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Juan',
  gender: 'male',
  age: 28,
  address: 'Otawa'
}
const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {

  // i18n Select
  client = signal(client1);
  

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }


  // i18Plural
  clientsMap = signal({
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando'
  });
  clients = signal([
    'Maria',
    'Camila',
    'Juan',
    'David',
    'Leidy',
    'Astrid',
    'Natalia'
  ]);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }


}
