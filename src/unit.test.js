import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SignIn from './components/SignIn'

//test block
test("sign in User", () => {
// render the component on virtual dom
render(<SignIn />);

//select the elements you want to interact with
const signInBtn = screen.getByTestId("signIn");

//interact with those elements
fireEvent.click(signInBtn);

//assert the expected result
expect(localStorage).toHave('email');
});