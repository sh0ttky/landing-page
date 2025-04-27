import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    telephone: string;
    salaire: string;
    position: string;
    message: string;
}

export default function CandidatureEmailTemplate({
    name,
    email,
    telephone,
    salaire,
    position,
    message,
}: EmailTemplateProps) {
    return (
        <div>
            <h1>Nouvelle candidature</h1>
            <div>From: {name}</div>
            <div>Email: {email}</div>
            <div>Tel: {telephone}</div>
            <div>Salaire: {salaire}</div>
            <div>poste: {position}</div>
            <div>Motivation:</div>
            <div>{message}</div>
        </div>
    );
}