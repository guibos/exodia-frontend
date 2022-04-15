import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormPlaySetComponent} from './form-play-set.component';

describe('FormPlaySetComponent', () => {
    let component: FormPlaySetComponent;
    let fixture: ComponentFixture<FormPlaySetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormPlaySetComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormPlaySetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
