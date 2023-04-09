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

## used Bootstrap as css framework
### Include via CDN
When you only need to include Bootstrap’s compiled CSS or JS, you can use [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap). See it in action with our simple [quick start](https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start), or [browse the examples](https://getbootstrap.com/docs/5.3/examples/) to jumpstart your next project. You can also choose to include Popper and our JS [separately](https://getbootstrap.com/docs/5.3/getting-started/introduction/#separate).


### `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">`

### `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>`
