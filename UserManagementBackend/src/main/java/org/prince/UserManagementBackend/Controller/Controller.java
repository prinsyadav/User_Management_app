package org.prince.UserManagementBackend.Controller;

import org.prince.UserManagementBackend.Model.UserData;
import org.prince.UserManagementBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class Controller {

    @Autowired
    private UserService userService;

    // Method to save user data
    @PostMapping("/save")
    public ResponseEntity<String> saveUser (
            @RequestPart("userData") UserData userData,
            @RequestPart("resumePath") MultipartFile resumePath) throws IOException {
         ResponseEntity.ok(userService.saveUser(userData, resumePath));
         return ResponseEntity.ok("User data saved successfully");
    }

    // Method to get all users
    @GetMapping("/getUsers")
    public Iterable getUsers() {
        return userService.getUsers();
    }

    // Method to get Resume by id
//    @GetMapping("/getResume/{id}")
//    public ResponseEntity<?> getResumeById(@PathVariable Long id) {
//        Object resume = userService.getResumeById(id);
//        if (resume == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Resume not found");
//        }
//        return ResponseEntity.ok(resume);
//    }
}
