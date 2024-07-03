//import { RowID, RowElement } from './interface';
//
//declare module 'crud' {
//  export function insertRow(row: RowElement): number;
//  export function deleteRow(rowId: RowID): undefined;
//  export function updateRow(rowId: RowID, row: RowElement): number;
//}

//import { RowID, RowElement} from './interface';

// declare function insertRow(row: RowElement) : number;
//declare function deleteRow(rowId: RowID): undefined;
//declare function updateRow(rowId: RowID, row: RowElement): number
//
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;
