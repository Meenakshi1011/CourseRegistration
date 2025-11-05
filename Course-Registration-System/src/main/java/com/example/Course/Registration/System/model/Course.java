package com.example.Course.Registration.System.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Entity
@Data
public class Course {

    @Id
    private String courseId;
    private String courseName;
    private String mentor;
    private int duration;
    private int fees;

    @Lob
    private byte[] image;

}
