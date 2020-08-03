import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengaduanPage } from './pengaduan.page';

describe('PengaduanPage', () => {
  let component: PengaduanPage;
  let fixture: ComponentFixture<PengaduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PengaduanPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengaduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
