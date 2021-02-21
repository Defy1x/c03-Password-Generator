# Table of Contents:
* [Project Description](#Project)
* [Deployed Links](#Links)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)

# Project:
## Title:
# c03-Password-Generator

## Description:
As for our third week of homework for this assignment we (Columbia Engineering Bootcamp students) were given the following user story below and acceptance criteria:

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The key focus of this project was to combine the javascript fundamentals we learned in week three of Columbia coding bootcamp to generate a password with a few options when the user is prompted. I (Casandra McDonald) first started by creating a git repo and setting up my local folder structure. The HTML and CSS were already supplied. I started building off the given Javascript and began working on the logic on the generate password function. The user is asked to supply the number of characters with a few validation checks, then they are prompted to say yes or no to additional options for the password. If the user selects yes then the password will add those characters from a stored array and then randomize them. Finally, the password will appear on the html page as long as it is not undefined. Lastly, I styled the CSS for this page for my favorite Sith lord. Vader.

Thanks for reading!

#Links
## Deployed Link:
https://defy1x.github.io/c03-Password-Generator/index.html

#Usage
## Final screenshot
![This is the final deployed screenshot of the password generator](requirements/screenshot.png)

This is my Darth Vader Password Generator. I am very proud of this.

#Credits
Thank you to everyone who participated on the group zoom call on Wednesday 2/17/2021 within Columbia Bootcamp.

#License
MIT License

Copyright (c) 2021 Casandra McDonald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
