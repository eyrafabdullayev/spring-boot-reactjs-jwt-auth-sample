import React, { Component } from 'react'
import CourseService from '../service/CourseService'

const INSTRUCTOR = 'admin' //HARDCODE

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            message: null
        }

        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses()
    }

    refreshCourses() {
        CourseService.getAllCourses(INSTRUCTOR)
        .then((response) => {
            this.setState({courses: response.data})
        })
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course => 
                                    <tr key={course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.description}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
