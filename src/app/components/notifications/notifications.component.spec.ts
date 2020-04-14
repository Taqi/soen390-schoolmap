import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { NotificationsComponent } from './notifications.component';
import {By} from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async(() => {
TestBed.configureTestingModule({
      declarations: [ NotificationsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), RouterModule.forRoot([]), HttpClientModule],
      providers: [HttpClient, LocalNotifications]
    }).compileComponents();

  fixture = TestBed.createComponent(NotificationsComponent);
  component = fixture.componentInstance;
  fixture.autoDetectChanges();


  }));

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should contain a the able/disable text', () => {
   const de = fixture.debugElement.query(By.css('.lines'));
    expect(de.nativeElement.textContent).toContain('Allow notifications');
  });

  xit('when Clicked is called it should', () => {
    spyOn(component, 'Clicked');
    component.Clicked();
    expect(component.Clicked).toHaveBeenCalled();
});

  xit('when refreshEvents is called it should', () => {
    spyOn(component, 'refreshEvents');
    component.refreshEvents();
    expect(component.refreshEvents).toHaveBeenCalled();
});

  xit('when ngOnInit is called it should', () => {
    spyOn(component, 'ngOnInit');

    component.ngOnInit();

    expect(component.ngOnInit).toHaveBeenCalled();
});

xit('when onChange is called it should', () => {
  spyOn(component, 'onChange');

  component.onChange(15);

  expect(component.onChange).toHaveBeenCalledWith(15);
});

  xit('should create a sample notification alert using showAlert()', () => {
    spyOn(component, 'showAlert');
    component.showAlert('ex','ex','ex');

    expect(component.showAlert).toHaveBeenCalled();
  });

  xit('should load all UI elements to the screen', () => {
    fixture.autoDetectChanges();
    let el = fixture.debugElement.query(By.all());
    console.log(el);
    expect(el).toBeTruthy();
  });

});


