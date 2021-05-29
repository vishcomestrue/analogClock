# Analog Clock
<hr />
## This is a Analog clock made purely using HTML, CSS and Vanilla JS
<br />
<hr />
This works by getting the time using the getHours(), getMinutes(), and getSeconds functions and the hands of the clock which are made using CSS are rotated using transform rotate property!
<br />
The rotation is calculated using 360&#176; for full rotation dividing it by 60 for both minutes and seconds hand. For hour hand, we take the degree rotated by the hand in one hour as 30&#176; and then adding this to current minute by 2. This is because in every minute, the hour hand moves by 0.5&#176; .
<hr />
