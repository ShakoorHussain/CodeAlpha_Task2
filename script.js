document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    // Stores the current input string
    let currentInput = '';
    
    // Update the calculator display
    function updateDisplay(value) {
      display.textContent = value;
    }
    
    // Add event listeners for each button
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value === 'C') {
          // Clear the display and reset input
          currentInput = '';
          updateDisplay('0');
        } else if (value === '=') {
          try {
            // Evaluate the arithmetic expression and update the display
            const result = eval(currentInput);
            currentInput = result.toString();
            updateDisplay(currentInput);
          } catch (error) {
            updateDisplay('Error');
            currentInput = '';
          }
        } else {
          // Append the clicked button's value to the current input
          currentInput += value;
          updateDisplay(currentInput);
        }
      });
    });
  });
  