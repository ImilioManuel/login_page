import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-defaul-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './defaul-login-layout.component.html',
  styleUrl: './defaul-login-layout.component.scss'
})
export class DefaulLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean= true
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
  navigate(){
    this.onNavigate.emit();
  }
}
