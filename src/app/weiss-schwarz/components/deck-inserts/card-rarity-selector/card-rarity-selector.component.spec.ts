import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardRaritySelectorComponent} from './form-card.component';

describe('FormCardComponent', () => {
    let component: CardRaritySelectorComponent;
    let fixture: ComponentFixture<CardRaritySelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardRaritySelectorComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardRaritySelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
