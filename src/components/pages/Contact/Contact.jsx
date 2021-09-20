import React from 'react';
import * as S from './Contact.styles';
import LinkView from './LinkView';
const Contact = () => {
    return (
        <S.ContactContainer id="contact">
            <h1>Let's get in touch!</h1>
            <h3>Have questions?</h3>
            <h3>Want references for my various positions?</h3>
            <h3>Need a chocolate chip cookie recipe?</h3>
            <h3>All you have to do is let me know!</h3>
            <p>Below are links to my social profiles and my email, feel free to reach out about anything and everything!</p>
            <LinkView />
        </S.ContactContainer>
    );
}

export default Contact;