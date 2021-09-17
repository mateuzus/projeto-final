import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ModalCotacaoComponent } from './modal-cotacao.component';
import { DataBrPipe } from '../pipes';
import { ConversorService } from '../services';
import { HttpClient } from '@angular/common/http';

describe('ModalCotacaoComponent', () => {
  let component: ModalCotacaoComponent;
  let fixture: ComponentFixture<ModalCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalCotacaoComponent, 
        DataBrPipe 
      ],
      providers: [
        ConversorService
      ],
      imports: [
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
