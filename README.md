# Graded Activities Calculator

## Part A - HTML/CSS

This project includes two files: `calculator.html` and `calculator.css`. The objective is to recreate the layout shown in the provided image as closely as possible. Reasonable assumptions were made regarding fonts, colors, and measurements.

### Files:
- **calculator.html**: Contains the structure of the webpage.
- **calculator.css**: Handles the styling to match the provided design.

### Layout Notes:
- The layout follows the provided image closely.
- Additional HTML elements may be present to support Part B, but the core elements match the design.

## Part B - JavaScript

This part involves adding interactivity to the webpage for calculating graded activities.

### Features:
- **Add Row**: An "ADD ROW" button allows instructors to add more graded activities dynamically.
- **Calculation Modes**: Instructors can choose to calculate either the "Mean of grades" or "Weighted grades".
  - **Mean of grades**: Calculates the average grade by dividing the sum of all grades by the total number of grades.
  - **Weighted grades**: Each grade is multiplied by its corresponding weight before calculating the average.
- **Live Percentage Update**: The percentage column updates in real-time as the user enters grades.

### JavaScript Functions:
- Utilizes functions like `onclick()`, `getElementsByTagName()`, and `getElementsByName()` to handle interactivity and calculations.

### Usability:
- Emphasis is placed on usability and effort, ensuring that the interface is easy to learn and like.
- Bugs and lack of error checking may impact usability, so care was taken to minimize these issues.
