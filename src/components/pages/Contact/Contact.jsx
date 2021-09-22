import React from 'react';
import * as S from './Contact.styles';
import LinkView from './LinkView';
const Contact = () => {
    return (
        <S.ContactContainer id="contact">
            <h1>Let's get in touch!</h1>
            <p>Have any questions?</p>
            <p>Want references for my various positions?</p>
            <p>Need a chocolate chip cookie recipe?</p>
            <p>All you have to do is let me know!</p>
            <p>Below are links to my social profiles and my email, feel free to reach out about anything and everything!</p>
            <LinkView />
        </S.ContactContainer>
    );
}

export default Contact;