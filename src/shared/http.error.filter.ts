import { Catch, ExceptionFilter, HttpException, ArgumentsHost, Logger } from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const contx = host.switchToHttp();
        const request = contx.getRequest();
        const response = contx.getResponse();
        const status = exception.getStatus();

        const exceptionResponse = {
            code: status,
            timestamp: new Date().toUTCString(),
            path: request.path,
            method: request.method,
            message: exception.message.error || exception.message || null,

        };

        Logger.error(
            `${request.method} ${request.path}`,
            JSON.stringify(exceptionResponse),
            'ExceptionFilter',
        );

        response.status(status).json(exceptionResponse);
    }
}
