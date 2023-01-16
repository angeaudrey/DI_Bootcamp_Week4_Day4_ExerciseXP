import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 monContact = new Contact();


  ngOnInit(): void {
  }

  submitting(form: NgForm) {
    console.log( this.monContact );
  }
}

class Contact {
  name: string | undefined;
  email: string | undefined;
  messaage: string | undefined;

}
