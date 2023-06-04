---
layout: post
title: freeCodeCamp
categories: "courses"
header_link: "#text"
---

{% include toc.html %}


<section id="text">

## Introduction
freeCodeCamp consists of 10 different modules. These cover front-end and back-end development topics.
Only those module that I have so far completed are contained here.

## Responsive Web Design
This module covers the basics of HTML and CSS. Including accessibility and responsive considerations. Both Flexbox and CSS Grid are covered.

There are 5 projects at the end of this module. For each there are a series of requirements that must be met.

The recommendation was to use simple HTML and CSS only.

### Tribute Page
The task here is to make a tribute page to anyone of your own choosing.

It had to include an image with caption, a main content section covering the subject of the page and a link to an external source of information on the subject of the page.

In addition I chose to add a timeline feature that splits the main content area and either responsively stacks or forms a row.

I also added a card gallery item implemented using the Flickity JavaScript slider library.

### Survey Form
This task was to make a demo responsive HTML survey form.

It had to include a title and descript as well as the following form elements. Name filed, email field, number field, dropdown, radio buttions, checkboxes and a textarea.

For this project I used a gym theme and the form is a fitness goal survey for newly registered gym members.

I also chose to implement a CSS only parallax effect.

### Product Landing Page
The brief was to create a demo product landing page.

It had to include a header section with an image, a fixed navigation bar, a video embed, an email input form that submits to a static page provided by freeCodeCamp and some media queries.

With this project I used a fake business that sells power banks called 'Zeus Power' as my theme.

I also chose to setup and include Font Awesome icons.

### Technical Documentation Page
The requirement for this project was to create a technical documentation page.

It had to contain a main document section with a number of code elements and a navigation section that is always visible and left-aligned on regular sized devices.

For this project I chose to create a summary technical documentation page for the Python web framework Flask.

Additionally, I decided to add some simple JavaScript that highlights the link a reader clicked in the navigation section.

### Personal Portfolio Webpage
The final project was to create a single portfolio page.

It had to include a projects section containing projects tiles connecting to one or more projects. As well as a fixed navigation bar and a link to either a GitHub or freeCodeCamp profile.

For this project I decided to create a draft or basic template for my own portfolio site containing a summary of all of the other projects from this module.

I chose to use iframes for the tiles instead of static images so that any changes made to the projects would be reflected in this summary without the need to add new static images. The visitor can visit the live project page by clicking the tile, this is implemented in a way that also prevents the visitor from interracting with the project via the iframe.

This was then used as the foundation for this portfolio site.

## JavaScript Algorithms and Data Structures
The second module covers the fundamental of JavaScript and includes sections on Object Oriented and Functional Programming.

This knowledge is then brought together and tested through five projects that require you to create a simple program to complete a specified task.

These projects include only JavaScript and do not form live web based projects.

The simple programs are described below.

### Palindrome Checker
This program simply returns true if supplied a palindrome.

This include both words or sentences that are spelled the same forwards and backwards. The requirement was to ignore punctuation, case and spacing.

My approach was to use a regex to extract only the alpha-numeric characters.

Then to join and push the result to lowercase.

To reverse the resulting string and then to compare both forward and backward strings for strick equality.

Finally, based on the result of this to return either true or false.

### Roman Numeral Converter
Simply, this program should take any regular base-10 integer and return the roman numeral version of that number.

To do this I first declared a multi-dimensional array storing each possible Roman numeral with the corresponsing base-10 equivalent. This was arranged in order from highest (1000) to lowest (1).

Then I setup a while loop. The loop takes the user input integer and a counter variable. 

The loop runs until the integer is 0. Each time it runs it checks that whether the numeral in the i'th position is larger than or the same as the number that is being converted.

If this is true that number is pushed to a new array (list) and the base-10 equivalent is subtracted from the number.

By incrementing the counter variable each time each appropriate Roman numeral can be subtracted from the number and added to the tracker list until the number is 0.

The conditional (if) clause to check if the numeral is less than or equal to the current value of the number being converted prevents that number from becoming less than 0, which would cause an infinite loop.

The final step joins each numeral in the list together and retruns that.

### Caesar's Cipher
Caesar's cipher is a simple shift cipher. That is a number is set as the key and each letter of the message is moved that number of places forward in the alphabet. So if the key is 13 and the input is SERR the output is FREE.

This program is meant to take an encoded uppercase string (collection of one or more alphabetic characters) with a key of '13' and return the decoded string.

Special characters (spaces, punctuation etc.) must not be changed.

To achieve this first I split the input string into an array (list) of only alphabetic characters.

The program then loops over every character in this array. 

First it is checked whether the character is an uppercase letter.

If it is not the character is left unchanged, as it will be a special character.

However, if it is the character is converted into its ASCII numerical equivalent. 

Then 65 is subtracted from this number as ASCII value for A is 65. Then 13 is added to the resulting number.

Following that the remainder of that number divided by 26 is found. The is so that letters less that 13 spaces from the end of the alphabet can be correctly wrapped round to the correct letter.

65 can then be added back to the number to get the correct ASCII value which can then be converted back to a character.

The result can then be returned which will be the decoded version of the input encoded message.

### Telephone Number Validator
To pass this program must return true is an input string looks to be a valid US phone number. The valid number formats are given.

To complete this project I converted the acceptable patterns into regex patterns.

Then each of these patterns is tested against the input telephone number. If there is a match between the accepted formats and the input telephone number format then the program returns true. If there is no match it return false.

### Cash Register
This program should be able to take the purchase price of an item, the actual chash given and a list of the coins in the till and respond either with the change due or a message that their is not enough cash in the till to give change.

Additionally, if removing the change results in an empty till the till status should be closed. If there is still change left then the status should be open.

First I created a multi-dimensional array(list of lists) containing the name of each coin and the value.

Then I calculated and converted the change due from decimal to an integer value (by multiplying by 100).

This then allowed me to loop through every available coin / note in the till from largest to smallest.

Each time there was a coin or note in the till that could be used this would be subtracted for as many time as possible for that coin or note.

Once that coin or note became zero the program moves on to the next smallest coin or note.

This continues until the change due amount is 0. The coins or notes given as change are stored in a list.

Finally the new till is check to see if it is empty, but adding up all the coins or notes left. Based on this the correct status is given.

If there is not enough change in the till or not the correct change in the till the correct status is given for this.

Finally the new till values and status are returned.

## Front End Development Libraries
This module covers a series of popular front-end web frameworks.

It includes sections on Bootstrap, jQuery, SASS, React and Redux.

There are 5 projects to complete in this module.

To complete these projects any of the technologies so far covered can be used.

### Random Quote Machine
This project was to create a web based tool that will display a random quote and its author both on load and on a button click.

It had to include a section containing the quote, a section with the author, a button to generate a new quote / author and a link to share the quote on twitter.

For this project I chose to use Bootstrap, SASS and jQuery. I chose to implement Bootstrap via the CDN and then to used higher specificity SASS to customise any Bootstrap styling.

For the quotes, I created a github gist containing 100 quotes arranged as 5 groups of 20.

This was so that I could add a feature that allows the user to select a quote from a particular category or any quote from the file.

The themes I chose were famous, inspirational , motivational, seasons and literary quotes.

In addition, I added the ability to copy the quote and author to the device clipboard.

This marks the extent of my progress so far with freeCodeCamp.
</section>