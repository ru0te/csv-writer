import { appendFileSync } from 'fs';

export class CSVWriter<T> {
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(',') + '\n';
  }

  private csv: string;

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = '\n';
    console.log('file saved to: ', filename);
  }

  private formatRow(item: T): string {
    return this.columns.map((col) => item[col]).join(',');
  }

  addRows(values: T[]): void {
    let rows = values.map((v) => this.formatRow(v));
    this.csv += rows.join('\n');
  }
}
