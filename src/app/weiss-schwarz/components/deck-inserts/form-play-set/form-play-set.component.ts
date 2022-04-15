import {Component, forwardRef, OnInit} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArray,
    FormBuilder,
    FormControl,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
    Validators
} from "@angular/forms";
import {TouchCallbackFn} from "../../../../main/types/touch-callback-fn";
import {ChangeCallbackFn} from "../../../../main/types/change-callback-fn";


@Component({
    selector: 'app-form-play-set',
    templateUrl: './form-play-set.component.html',
    styleUrls: ['./form-play-set.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormPlaySetComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FormPlaySetComponent),
            multi: true
        }
    ]
})
export class FormPlaySetComponent implements OnInit, ControlValueAccessor, Validator {
    playSetArrayForm: FormArray

    constructor(private _formBuilder: FormBuilder) {
        this.playSetArrayForm = this._formBuilder.array([])
    }

    ngOnInit(): void {
        this.addPlaySet()
    }

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.playSetArrayForm.valid) {
            return null;
        }
        return {invalidForm: {valid: false, message: 'There are problems in one or more play set'}};
    }

    writeValue(val: any): void {
        if (val) {
            this.playSetArrayForm.setValue(val, {emitEvent: false});
        }
    }

    registerOnChange(fn: ChangeCallbackFn<object>): void {
        this.playSetArrayForm.valueChanges.subscribe(fn);

    }

    registerOnTouched(fn: TouchCallbackFn): void {
        this._onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        if (isDisabled) {
            this.playSetArrayForm.disable();
        } else {
            this.playSetArrayForm.enable();
        }
    }

    addPlaySet() {
        let playSetForm = this._formBuilder.group({
            quantity: new FormControl(1, [Validators.required]),
            cardRarity: new FormControl('', [Validators.required]),
        });
        this.playSetArrayForm.push(playSetForm);
    }

    removePlaySet(index: number) {
        this.playSetArrayForm.removeAt(index);
    }

    private _onTouched: () => void = () => {
    };

}
