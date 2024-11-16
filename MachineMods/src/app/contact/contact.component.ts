import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { formService } from '../services/form.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: formService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.formService.submitContactForm(contactData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully!', response);
        },
        error: (error) => {
          console.error('There was an error submitting the form!', error);
        },
      });
    }
  }
}
