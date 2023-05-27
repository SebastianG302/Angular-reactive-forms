import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator ,ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailValidator implements AsyncGenerator {
    next(...args: [] | [unknown]): Promise<IteratorResult<unknown, any>> {
        throw new Error('Method not implemented.');
    }
    return(value: any): Promise<IteratorResult<unknown, any>> {
        throw new Error('Method not implemented.');
    }
    throw(e: any): Promise<IteratorResult<unknown, any>> {
        throw new Error('Method not implemented.');
    }
    [Symbol.asyncIterator](): AsyncGenerator<unknown, any, unknown> {
        throw new Error('Method not implemented.');
    }

    
}