import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalHelpComponent } from './shared/components/modal-help/modal-help.component';
import { WebSpeechComponent } from './web-speech/web-speech.component';
@Component({
  selector: 'wsa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public dialog: MatDialog) {}

  openHelp(): void {
    this.dialog.open(ModalHelpComponent);
  }
  sidenav(): void {
    this.dialog.open(WebSpeechComponent);
  }
  
}
