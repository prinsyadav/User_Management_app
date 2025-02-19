package org.prince.UserManagementBackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String contact;
    private String gender;
    private String subjects;
    private String resumePath;
    private String url;
    private String selectedOption;
    private String about;

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getContact() {
        return contact;
    }

    public String getGender() {
        return gender;
    }

    public String getSubjects() {
        return subjects;
    }

    public String getResumePath() {
        return resumePath;
    }

    public String getUrl() {
        return url;
    }

    public String getSelectedOption() {
        return selectedOption;
    }

    public String getAbout() {
        return about;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setSubjects(String subjects) {
        this.subjects = subjects;
    }

    public void setResumePath(String resumePath) {
        this.resumePath = resumePath;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setSelectedOption(String selectedOption) {
        this.selectedOption = selectedOption;
    }

    public void setAbout(String about) {
        this.about = about;
    }
}
