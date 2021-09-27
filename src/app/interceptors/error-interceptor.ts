
import { Injectable, Component } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


    constructor(private confirmationService: ConfirmationService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError(error => {
                    console.log(error)
                    /* let errorObj = error;
                     if (errorObj.error) {
                         errorObj = errorObj.error;
                     }
                     let e: any;
                     if ( !errorObj.status || errorObj.status != undefined) {
                         if (this.isJson(errorObj)) {
                             e = this.convertError(errorObj);
                         }
                         errorObj = e;
                     }*/
                    switch (error.status) {
                        case 200: this.handle200();
                            break;
                        case 403: this.handle403();
                            break;
                        case 401: this.handle401();
                            break;
                        case 422: this.handle422(error);
                            break;
                        case 500: this.handle500(error);
                            break;
                        case 0: this.handle0();
                            break;
                        default:
                            this.handleDefaultError(error);
                    }
                    return throwError(error);
                })) as any;
    }



    public convertError(error: any) {
        return JSON.parse(error);
    }

    public async handle0() {
        this.confirmationService.confirm({
            header: 'teste',
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //confirm action
            },
            reject: () => {
                //reject action
            }
        });

    }

    public async handle200() {
        console.log('entrando no 200')
        this.confirmationService.confirm({
            header: 'teste',
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //confirm action
            },
            reject: () => {
                //reject action
            }
        });
    }

    public async handle403() {

    }

    public async handle401() {

    }

    public handle422(errorObj: any) {
        this.confirmationService.confirm({
            header: 'teste',
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //confirm action
            },
            reject: () => {
                //reject action
            }
        });
    }

    public handle500(error: any) {
        this.confirmationService.confirm({
            header: 'teste',
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //confirm action
            },
            reject: () => {
                //reject action
            }
        });
    }

    public handleDefaultError(errorObj: any) {
        this.confirmationService.confirm({
            header: 'teste',
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //confirm action
            },
            reject: () => {
                //reject action
            }
        });
    }

    private listErrors(messages: any) {
        this.confirmationService.confirm({
            header: 'teste',
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                //confirm action
            },
            reject: () => {
                //reject action
            }
        });

    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
