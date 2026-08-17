# Student Grade Calculator

A simple JavaScript program that calculates a student's final score, determines their grade, checks their pass/fail status, and provides feedback based on their performance.

## About the Project

This project was created as a practical JavaScript exercise to apply the fundamental concepts covered in class:

* Variables
* Arithmetic operators
* Functions
* Conditional statements (`if`, `else if`, `else`)
* Console output using `console.log()`

The program uses separate scores for a test, assignment, and examination. The scores contribute to a final score out of 100 based on the following weighting:

| Assessment | Weight |
| ---------- | -----: |
| Test       |    20% |
| Assignment |    20% |
| Exam       |    60% |

## Grading System

| Score        | Grade |
| ------------ | ----- |
| 70 and above | A     |
| 60–69        | B     |
| 50–59        | C     |
| 45–49        | D     |
| 40–44        | E     |
| Below 40     | F     |

A score of **40 or above** is considered a pass.

## Features

The program:

1. Stores the student's name and individual assessment scores.
2. Calculates the student's final score.
3. Determines the appropriate letter grade.
4. Determines whether the student passed or failed.
5. Provides performance feedback.
6. Displays the complete result in the browser console.

## Testing

The program was tested using different scores to verify that it correctly changes:

* Final score
* Grade
* Pass/fail status
* Feedback

Boundary scores such as 70, 60, 50, 45, 40, and scores below 40 can be used to test the grading conditions.

## Technologies Used

* JavaScript
* HTML

