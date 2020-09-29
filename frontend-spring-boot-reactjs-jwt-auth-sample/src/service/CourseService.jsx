import axios from 'axios'

const API_URL = 'http://localhost:8080'

class CourseService {


    getAllCourses(instructor) {
        return axios.get(`${API_URL}/instructors/${instructor}/courses`)
    }
}

export default new CourseService()