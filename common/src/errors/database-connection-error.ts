import { CustomError } from "./custom-error";
export class DatabaseConnectionError extends CustomError {
     reason = "Error connecting DB";
     statusCode = 500;
     constructor() {
          super('Error connecting DB');
          Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
     }
     serializeErrors() {
          return [{ message: this.reason }];
     }
}
