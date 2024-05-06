import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor/instructor';
import { InstructorService } from '../instructor/instructor.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-or-update-instructor',
    templateUrl: './add-or-update-instructor.component.html'
})
export class AddInstructorComponent implements OnInit {

    instructor: Instructor = {
        firstName: '',
        lastName: '',
        dateOfHire: new Date()
    };
    submitted = false;

    constructor(
        private instructorService: InstructorService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    saveInstructor(): void {
        const data = {
            firstName: this.instructor.firstName,
            lastName: this.instructor.lastName,
            dateOfHire: this.instructor.dateOfHire
        };

        this.instructorService.create(data)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.submitted = true;
                    this.router.navigate(['/instructor']);
                },
                error: (e) => console.error(e)
            });
    }

}