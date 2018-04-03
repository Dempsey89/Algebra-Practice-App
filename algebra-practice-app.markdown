Algebra practice app
--------------------
Continuing with number themed apps I created an app to practice basic algebra. 

The first thing I had to do was create a function that would occur every time I wanted a new algebra equation to populate. I did this by makng 2 variables that took a random value between 0 and 1, and then created an if statement stating that if it was 0, it would be a suntraction problem and if else it would be addition. I then had 2 more variables that took on random values from 0 to 9, and created if. else statements based on whether it was an addition or subtraction equation. 

Something that tripped me up for a little bit was when I created the function for the enter button. I ended up realizing that I had to put this function within the function that started the equation to begin with, since the variables created were local to that function. If I tried to make the variables global I do not know of a way to generate new values for them when I want a new equation. 

To create the enter function I just made an if then statement making sure the value entered in the input area equaled the value for the answer. If it did, I created a pop up box that congratulated the user, a button that gives the option to do another prolem. I else, I added a message that informed the user the answer was wrong. 

Making the messages appear that informed the user if they were right or not was done by creating an array of 3 sayings for if they were wrong and 3 for if they were right. And depending on whether they were right or wrong a random saying would display based on a math.random function. (I made sure to add magic 8 bal sayings to each array because theyre funny to me.)

I also made a hepl button, that displayed a message in the same area the message for correct answers took place, that showed the correct formula to slove the problem you were working on based off of the random number genreated at the beginning of the function. This also had to be added to the original function because of the local variables. 

The last thing I did that was tricky for this app was made the input bar accept only numbers again, but this time added more to the function so that the user could still change highlighted text and delete the character next to where the cursor is in the input area. For this to work I again created a variable that whose value was the regualr expression for anything that is a number, then made an if statement that made it so if the value was not part of that variable, it would return false. 

A [Pen](https://codepen.io/Dempsey85/pen/MoKRKR) by [Max Dempsey](https://codepen.io/Dempsey85) on [CodePen](https://codepen.io).

[License](https://codepen.io/Dempsey85/pen/MoKRKR/license).