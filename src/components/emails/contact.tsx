import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export default function EmailTemplate({
    name,
    email,
    message,
}: EmailTemplateProps) {
    return (
        <div>
            <h1>Contact form</h1>
            <div>From: {name}</div>
            <div>Email: {email}</div>
            <div>Message:</div>
            <div>{message}</div>
            <hr />
            <div>a message sent from the contact form.</div>
        </div>
    );
}