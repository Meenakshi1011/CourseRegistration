package com.example.Course.Registration.System.service;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;
import com.example.Course.Registration.System.repository.CourseRepo;
import com.example.Course.Registration.System.repository.CourseRegistryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private CourseRegistryRepo courseRegistryRepo;

    public List<Course> availableCourses() {
        return courseRepo.findAll();
    }

    public String enrollCourse(String name, String emailID, String courseName) {
        // Create a CourseRegistry object
        CourseRegistry courseRegistry = new CourseRegistry(name, emailID, courseName);

        // Save it using the repository
        courseRegistryRepo.save(courseRegistry);

        return "Enrollment successful for " + name + " in " + courseName;
    }


    public List<CourseRegistry> enrolledStudents() {
        return courseRegistryRepo.findAll();
    }
}
