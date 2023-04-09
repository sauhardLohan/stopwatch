# stopwatch
stopwatch app

## To show animation of stopwatch
For animation I have created a circular div with left side having white background color and right side having green background color
and created two semi-circular divs named filler rotator with background color same as right side i.e green and hider-rotator with white background color
the hider-rotator and filler-rotator both having position as absolute and positioned such that they coincide with the right side
now when the timer starts hider-rotator starts rotating and hence the green background of filler-rotator starts showing with every second
after 30 second pass and hider-rotator has rotated 180 degrees the filler-rotator starts rotating with it's z-index increased so that it is visible
hence after 30 seconds the green background of right side and the filler rotator gives the effect of the green color incresing and
after another 30seconds the filler-rotator rotates 180degrees and this animation continues on going until stop or reset button is clicked
