package com.example.Course.Registration.System.controller;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;
import com.example.Course.Registration.System.service.CourseService;
import com.example.Course.Registration.System.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CourseController {

    @Autowired
    CourseService courseservice;

    @Autowired
    EmailSenderService emailSenderService;

    @GetMapping("/courseList")
    public List<Course> availableCourses(){
        return  courseservice.availableCourses();

    }

    @PostMapping("/course/register")
    public String enrollCourse(@RequestBody CourseRegistry request) {
        String response =  courseservice.enrollCourse(
                request.getName(),
                request.getEmailID(),
                request.getCourseName()
        );

        // send confirmation email to the user
        String subject = "Course Registration Successful!";
        String body = "Dear " + request.getName() + ",\n\n" +
                "You have successfully enrolled in the course: " + request.getCourseName() + ".\n" +
                "We’ll contact you soon with more details.\n\n" +
                "Regards,\nEdurole Team";

        emailSenderService.sendEmail(request.getEmailID(),subject,body);
        return response + " (Confirmation email sent to " + request.getEmailID() + ")";
    }

    @Value("${spring.datasource.username}")
    private String dbUsername;

    @Value("${spring.datasource.password}")
    private String dbPassword;




    @PostMapping("/courses/enrolled/login")
    public ResponseEntity<?> enrolledStudents(@RequestBody Map<String,String> body){
        String username = body.get("username");
        String password = body.get("password");

        if(username.equals(dbUsername) &&
                password.equals(dbPassword)) {

            return  ResponseEntity.ok("success");

        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credintials");
        }

    }


    @GetMapping("/courses/enrolled")
    public  List<CourseRegistry>  enrolledStudents(){

        return    courseservice.enrolledStudents();

 }

}

