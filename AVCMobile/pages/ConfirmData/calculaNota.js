import { grade } from "../App";

export const gradeTotal = grade.reduce((acc, val) => (acc ?? 0) + (val ?? 0), 0);
