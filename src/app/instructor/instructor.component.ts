import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Instructor } from './instructor';
import { InstructorService } from './instructor.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  @ViewChild('instructorDetailsModal') modal!: ElementRef;

    instructors?: Instructor[];
    selectedInstructor?: Instructor;

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  ngAfterViewInit(): void {
    // Ensure modal is available before trying to show it
    this.openDetailsModal(this.selectedInstructor!);
  }

  retrieveTutorials(): void {
    this.instructorService.getAll()
      .subscribe({
        next: (data) => {
          this.instructors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  openDetailsModal(instructor: Instructor): void {
    this.selectedInstructor = instructor;
    if (this.modal) {
      const modalElement = this.modal.nativeElement as HTMLElement;
      (modalElement as any).modal('show');
    }
  }
}