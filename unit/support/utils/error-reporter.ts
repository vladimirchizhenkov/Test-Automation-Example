import { operation } from '../constants/types';

export class ErrorReporter {
    public static report = (typeOperation: operation) => `Wrong ${typeOperation} of numbers`;
}