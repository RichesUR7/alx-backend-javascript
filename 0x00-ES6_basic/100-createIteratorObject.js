export default function createIteratorObject(report) {
  const iterator = [];
  for (const employee in report.allEmployees) {
    if (report.allEmployees[employee]) {
      iterator.push(...report.allEmployees[employee]);
    }
  }
  return iterator;
}
