package com.example.demo.Controller;

import com.example.demo.contact.Contact;
import com.example.demo.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    public ResponseEntity<String> submitForm(@RequestBody Contact contactData) {
        contactRepository.save(contactData);
        return ResponseEntity.ok("Form submitted successfully!");
    }

}
