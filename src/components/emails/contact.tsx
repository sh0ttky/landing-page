import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    motif: string;
    message: string;
}

export default function ContactEmailTemplate({
    name,
    email,
    motif,
    message,
}: EmailTemplateProps) {
    return (
        <div>
            <h1>Contact</h1>
            <div>De: {name}</div>
            <div>Email: {email}</div>
            <div>Motif: {motif}</div>
            <div>Le message:</div>
            <div>{message}</div>
        </div>
    );
}