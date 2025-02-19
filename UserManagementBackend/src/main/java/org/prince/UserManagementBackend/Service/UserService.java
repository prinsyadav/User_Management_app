package org.prince.UserManagementBackend.Service;

import org.prince.UserManagementBackend.Model.UserData;
import org.prince.UserManagementBackend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    // resume file path
    private final String resumepath = "C:\\Users\\prince\\Documents\\resume\\";

    // method to save user data
    public UserData saveUser(UserData userData, MultipartFile resumePath) throws IOException {
        userData.setFirstName(userData.getFirstName());
        userData.setLastName(userData.getLastName());
        userData.setEmail(userData.getEmail());
        userData.setContact(userData.getContact());
        userData.setGender(userData.getGender());
        userData.setSubjects(userData.getSubjects());

        userData.setResumePath(resumepath + resumePath.getOriginalFilename());
        resumePath.transferTo(new File(userData.getResumePath()));

        userData.setUrl(userData.getUrl());
        userData.setSelectedOption(userData.getSelectedOption());
        userData.setAbout(userData.getAbout());

        userRepo.save(userData);
        return userData;
    }

    // method to get all users
    public Iterable<UserData> getUsers() {
        return userRepo.findAll();
    }

}
