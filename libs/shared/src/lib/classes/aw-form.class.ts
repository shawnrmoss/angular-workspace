import { Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

// From Feature
import { Functions } from '../helpers';

export abstract class AwFormContainer {
  canDeactivate = true;

  constructor() {}

  onDirty(isDirty: boolean) {
    this.canDeactivate = !isDirty;
  }
}

export abstract class AwForm implements OnInit {
  @Output() create = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter<string>();
  @Output() dirty = new EventEmitter<boolean>();

  form: FormGroup;
  dirtyListener: Subscription;
  initValue: any;

  // Dirty in this case will mean unchanged
  ngOnInit() {
    this.dirtyListener = this.form.valueChanges.subscribe(val => {
      if (this.initValue === undefined) {
        this.initValue = val;
      } else {
        this.dirty.emit(JSON.stringify(this.initValue) !== JSON.stringify(val));
      }
    });
  }

  clearDirty() {
    this.dirtyListener.unsubscribe();
    this.dirty.emit(false);
  }

  save(originalValue: any, form: FormGroup): void {
    const { value, valid, dirty } = form;

    this.clearDirty();

    if (dirty && valid) {
      const mergedValue = Functions.mergeDeep(originalValue, value);
      if (originalValue && originalValue.id) {
        this.update.emit(mergedValue);
      } else {
        this.create.emit(mergedValue);
      }
    }
  }

  handleCancel(): void {
    this.clearDirty();
    this.clearForm(this.form);
    this.cancel.emit();
  }

  handleDelete(id: string): void {
    this.clearDirty();
    this.delete.emit(id);
    this.clearForm(this.form);
  }

  clearForm(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      if (form.get(key) instanceof FormGroup) {
        this.clearForm(<FormGroup>form.get(key));
      } else if (form.get(key) instanceof FormArray) {
        (<FormArray>form.get(key)).controls.forEach(formGroup => {
          this.clearForm(<FormGroup>formGroup);
        });
      } else {
        this.clearFormControl(<FormControl>form.get(key));
      }
    });
  }

  clearFormControl(control: FormControl) {
    control.setErrors(null);
    control.setValue(null, { onlySelf: true, emitEvent: false });
    control.markAsPristine();
    control.markAsUntouched();
  }
}
