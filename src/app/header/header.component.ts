import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() onNavigate = new EventEmitter<string>();

  onNavigateClicked(s:string){
    this.onNavigate.emit(s);
  }
}
