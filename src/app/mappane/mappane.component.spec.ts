import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaneComponent } from './mappane.component';

describe('MappaneComponent', () => {
  let component: MappaneComponent;
  let fixture: ComponentFixture<MappaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MappaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MappaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
