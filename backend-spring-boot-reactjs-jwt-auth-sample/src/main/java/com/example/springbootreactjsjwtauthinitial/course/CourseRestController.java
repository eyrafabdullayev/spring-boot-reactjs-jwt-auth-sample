package com.example.springbootreactjsjwtauthinitial.course;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class CourseRestController {

    private final CourseHardcodedService courseHardcodedService;

    public CourseRestController(CourseHardcodedService courseHardcodedService) {
        this.courseHardcodedService = courseHardcodedService;
    }

    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username) {
        return courseHardcodedService.findAll();
    }
}
