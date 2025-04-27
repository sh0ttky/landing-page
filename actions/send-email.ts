'use server';

import { type ReactElement } from 'react';
import { Resend } from 'resend';
import CandidatureEmailTemplate from '~/components/emails/candidatures';
import ContactEmailTemplate from '~/components/emails/contact';
import noReplyCandidatureEmail from '~/components/emails/noReplyCandidature';
import noReplyContactEmail from '~/components/emails/noReplyContact';

const resend = new Resend(process.env.RESEND_API_KEY);
const internalEmail1 = process.env.INTERNAL_EMAIL_ONE
const internalEmail2 = process.env.INTERNAL_EMAIL_TWO


export async function SendNoReplyCandidatureEmail(data: { name: string; email: string, position: string }) {
    try {
        await resend.emails.send({
            from: 'no-reply mhtc-embedded <no-reply@mhtc-embedded.com>',
            to: data.email,
            subject: `Merci pour votre candidature ${data.name}`,
            react: noReplyCandidatureEmail({ name: data.name, position: data.position }) as ReactElement,
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to send email' };
    }
}

export async function SendNoReplyContactEmail(data: { name: string; email: string }) {
    try {
        await resend.emails.send({
            from: 'no-reply mhtc-embedded <no-reply@mhtc-embedded.com>',
            to: data.email,
            subject: `Merci pour votre message ${data.name}`,
            react: noReplyContactEmail({ name: data.name }) as ReactElement,
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to send email' };
    }
}
export async function SendInternalCandidatureEmail(data: {
    name: string;
    email: string;
    telephone: string;
    salaire: string;
    position: string;
    message: string;
}) {
    console.log('[SendInternalCandidatureEmail] Starting email sending process');
    console.log('[SendInternalCandidatureEmail] Input data:', JSON.stringify(data, null, 2));

    try {
        if (!internalEmail1 || !internalEmail2) {
            throw new Error('Internal email addresses not configured');
        }

        console.log('[SendInternalCandidatureEmail] Creating email payload');
        const emailPayload = {
            from: 'candidature <contact@mhtc-embedded.com>',
            subject: `Nous avons reçu une candidature de ${data.name}`,
            react: CandidatureEmailTemplate({
                name: data.name,
                email: data.email,
                telephone: data.telephone,
                salaire: data.salaire,
                position: data.position,
                message: data.message,
            }) as ReactElement,
        };

        console.log('[SendInternalCandidatureEmail] Sending to internal team');
        const [result1, result2] = await Promise.all([
            resend.emails.send({ ...emailPayload, to: internalEmail1 }),
            resend.emails.send({ ...emailPayload, to: internalEmail2 })
        ]);

        console.log('[SendInternalCandidatureEmail] Emails sent successfully', {
            result1,
            result2
        });

        return { success: true };
    } catch (error) {
        console.error('[SendInternalCandidatureEmail] Error:', error);

        if (error instanceof Error) {
            return {
                error: 'Failed to send internal emails',
                details: error.message,
                ...('statusCode' in error && { statusCode: error.statusCode })
            };
        }

        return { error: 'Failed to send internal emails' };
    }
}

export async function SendInternalContactEmail(data: {
    name: string;
    email: string;
    motif: string;
    message: string;
}) {
    console.log('[SendInternalContactEmail] Starting email sending process');
    console.log('[SendInternalContactEmail] Input data:', JSON.stringify(data, null, 2));

    try {
        if (!internalEmail1 || !internalEmail2) {
            throw new Error('Internal email addresses not configured');
        }

        console.log('[SendInternalContactEmail] Creating email payload');
        const emailPayload = {
            from: 'Demande de contact <contact@mhtc-embedded.com>',
            subject: `Nouveau message de ${data.name}`,
            react: ContactEmailTemplate({
                name: data.name,
                motif: data.motif,
                email: data.email,
                message: data.message,
            }) as ReactElement,
        };

        console.log('[SendInternalContactEmail] Sending to internal team');
        const [result1, result2] = await Promise.all([
            resend.emails.send({ ...emailPayload, to: internalEmail1 }),
            resend.emails.send({ ...emailPayload, to: internalEmail2 })
        ]);

        console.log('[SendInternalContactEmail] Emails sent successfully', {
            result1,
            result2
        });

        return { success: true };
    } catch (error) {
        console.error('[SendInternalContactEmail] Error:', error);

        if (error instanceof Error) {
            return {
                error: 'Failed to send internal emails',
                details: error.message,
                ...('statusCode' in error && { statusCode: error.statusCode })
            };
        }

        return { error: 'Failed to send internal emails' };
    }
}