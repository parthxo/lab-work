// to activate the heoght propery set

// Here document.documentElement refers to the top level element (:root in css terms) and style.setProperty allows us to set the value of any custom property. We pass in the name of the property and the value we wish to assign. In this case, the value is the value of the myHeight element plus a % symbol.
//
// Notice that now, when the slider is adjusted, the height of the <div> element responds. We have a transition on the element so the change is animated.
//
// Try setting the step attribute of the <input> to a large value such as “25”. Every time the <input> element steps to the next value, the input event is triggered, our custom --height property is updated which changes the <div> css height property and the transition property animates the change.

"use strict";

myHeight.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});


// to activate the bg and fg colour for website

myBG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--fg-colour', myFG.value);
});


// for login form

const checkConfirmation = (ev) => {
 if (myPassword.value != myConfirmation.value) {
  myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
 } else {
  myConfirmation.setCustomValidity('');
 }
};

myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);

login.addEventListener('submit', ev => {
 alert(`logged in as ${myUser.value}`)
 login.reset();
 ev.preventDefault();
});
