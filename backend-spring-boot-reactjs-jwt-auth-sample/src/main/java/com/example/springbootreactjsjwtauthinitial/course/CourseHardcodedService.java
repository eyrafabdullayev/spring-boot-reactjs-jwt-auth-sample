package com.example.springbootreactjsjwtauthinitial.course;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseHardcodedService {

    private static List<Course> courses = new ArrayList<>();
    private static long idCounter = 0;

    static {
        courses.add(new Course(++idCounter, "admin", "Spring Boot and React tutorial"));
        courses.add(new Course(++idCounter, "admin", "Spring Boot and Angular tutorial"));
        courses.add(new Course(++idCounter, "admin", "Docker and Linux containers tutorial"));
    }

    public List<Course> findAll() {
        return courses;
    }
}
