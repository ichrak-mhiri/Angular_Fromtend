import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from './instructor';

const baseUrl = 'http://localhost:8089/api/instructor';

@Injectable({
    providedIn: 'root'
})
export class InstructorService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Instructor[]> {
        return this.http.get<Instructor[]>(baseUrl + "/all");
    }

    get(id: any): Observable<Instructor> {
        return this.http.get<Instructor>(`${baseUrl}/get/${id}`);
    }

    create(data: any): Observable<any> {
        return this.http.post(baseUrl + "/add", data);
    }

    update(data: any): Observable<any> {
        return this.http.put(`${baseUrl}/update`, data);
    }

    //   delete(id: any): Observable<any> {
    //     return this.http.delete(`${baseUrl}/${id}`);
    //   }

    //   deleteAll(): Observable<any> {
    //     return this.http.delete(baseUrl);
    //   }

    //   findByTitle(title: any): Observable<Tutorial[]> {
    //     return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
    //   }
}