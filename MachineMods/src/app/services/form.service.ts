import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Contact {
name: string;
email: string;
message: string;
}

@Injectable({
providedIn: 'root',
})
export class formService {
private apiUrl = 'http://localhost:8080/submitContactForm';

constructor(private http: HttpClient) {}

  submitContactForm(contactData: Contact): Observable<any> {
    return this.http.post('${this.apiUrl}/submitContactForm', contactData);
  }
}
