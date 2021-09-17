import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoDaVelhaService } from './shared';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        JogoDaVelhaComponent 
      ],
      providers: [
        
      ]
    })
    .compileComponents();
  });
});
