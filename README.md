# CSV Writer

The project implements a generic `CSVWriter` class that formats structured object arrays into CSV rows and writes them to files.

## Project Structure

- `src/index.ts` — Contains the core generic `CSVWriter<T>` class, utilizing `keyof T` constraints to ensure type-safe column mapping.
- `src/PaymentWriter.ts` — Implements `CSVWriter` for `Payment` records and exports them to `./data/payments.csv`.
- `src/EmployeeWriter.ts` — Implements `CSVWriter` for `Employee` records and exports them to `./data/employees.csv`.

## Core TypeScript Features Used

1. **Generics (`<T>`)**: Allows `CSVWriter` to work with any data shape (e.g., `Payment`, `Employee`) while maintaining strict type safety.
2. **`keyof` Operator**: Restricts columns to only be valid keys of the provided generic interface (`(keyof T)[]`).
3. **Parameter Properties**: Shorthand syntax for declaring and initializing class members directly inside the constructor.
4. **Node.js Integration**: Uses `fs.appendFileSync` to save generated CSV strings directly to the local file system.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Install the project dependencies and Node type definitions:

```bash
npm install
```

### Running the Scripts

You can compile and run the writers using `ts-node`:

```bash
npx ts-node src/PaymentWriter.ts
npx ts-node src/EmployeeWriter.ts
```
