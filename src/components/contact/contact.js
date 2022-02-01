import React from "react";
import { useState } from "react";
import { validateEmail } from "../../helpers/helpers";
import './assets/styles/contact.css'

const Contact = () => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        e.target(setFocused(true));
    };
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'comment') {
            setComment(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('email or name is not valid, please try again!');
            return;
        } else {
            setErrorMessage('');
        }

        setName('');
        setComment('');
        setEmail('');
    };

    return (
        <div>
            <div className="text-center p-4 col-sm-12 col-md-6 col-lg-4 m-auto">
                <form className="form bg-dark m-2 p-5 rounded-3">
                    <div>
                        <h4
                            className="text-light text-start">name :</h4>
                        <input
                            className="text-dark col-10 fs-5 border border-warning rounded-3 p-2"
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="first last"
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required
                            minLength={2}
                        />
                        <span className="error">{name.length > 0 ? 'please enter a valid name' : ' '}</span>
                    </div>
                    <div>
                        <h4 className="text-light mt-4 text-start">email :</h4>
                        <input
                            className="text-dark col-10 fs-5 border border-warning rounded-3 p-2"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="your@email.com"
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required
                        />
                        <span className="error">{email.length > 0 ? 'please enter a valid email' : ' '}</span>
                    </div>
                    <div>
                        <h4 className="text-light mt-4 text-start">comment :</h4>
                        <textarea
                            rows="3"
                            className="text-dark col-10 fs-5 border border-warning rounded-3 p-2"
                            value={comment}
                            name="comment"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="a fun and cool comment"
                            onBlur={handleFocus}
                            focused={focused.toString()}
                            required
                            minLength={2}
                        />
                        <span className="error">{comment.length > 0 ? 'please enter a valid comment' : ' '}</span>
                    </div>
                    <div>
                        <button
                            className="col-6 btn btn-info btn-lg mt-4 fw-bold rounded-3"
                            type="button"
                            onClick={handleFormSubmit}
                            onChange={handleInputChange}
                        >
                            enter
                        </button>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text text-danger fs-5 mt-5">{errorMessage}</p>
                        </div>
                    )}
                </form>

            </div>
        </div>
    );
};

export default Contact;