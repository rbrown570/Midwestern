import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Contact } from 'src/_models/contact';
import { AppService } from 'src/_services/app.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  contact!: Contact;
  constructor(private fb: FormBuilder, private appservice: AppService) { }

  ngOnInit(): void {
    this.createContactForm();
  }
  createContactForm() {
    this.contactForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  addNewContact() {
    this.contact = Object.assign({}, this.contactForm.value);
    this.appservice.addContact(this.contact).subscribe( next => {
      this.contactForm.reset();
    }, error => {
      console.log(error);
    });
  }
  get firstname() { return this.contactForm.get('first_name'); }
  get lastname() { return this.contactForm.get('last_name'); }
  get title() { return this.contactForm.get('title'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
