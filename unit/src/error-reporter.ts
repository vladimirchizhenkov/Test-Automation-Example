import { operation } from './types';

export class ErrorReporter {
    public static report = (typeOperation: operation) => `Wrong ${typeOperation} of numbers`;
}