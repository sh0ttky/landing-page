import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text
} from '@react-email/components';


interface noReplyContactEmailProps {
    name: string | null;
}

export default function noReplyContactEmail({ name }: noReplyContactEmailProps) {
    return (
        <Html>
            <Head>
                <title>Confirmation de réception du message</title>
            </Head>
            <Preview>Merci d’avoir contacté MHTC - Embedded. Nous avons bien reçu votre message.</Preview>
            <Tailwind>
                <Body className="bg-white text-gray-900 font-sans">
                    <Container className="max-w-[480px] my-0 mx-auto pt-5 pb-12 px-0">
                        <Link href="https://www.mhtc-embedded.com" className="flex items-center text-gray-800">
                            <Img
                                src="https://www.mhtc-embedded.com/logo.png"
                                width="32"
                                height="32"
                                alt="mhtc"
                                className="mr-1 -ml-1"
                            />
                            <Heading as="h1" className="text-3xl font-bold m-0">
                                MHTC - Embedded
                            </Heading>
                        </Link>

                        <Text className="text-xl mt-6">
                            Bonjour <strong>{typeof name === 'string' ? name : 'Utilisateur'}</strong>,
                        </Text>
                        <Text className="text-md">
                            Nous avons bien reçu votre message. Un membre de notre équipe vous répondra dans les plus brefs délais.
                        </Text>

                        <Section className="mt-4 border border-gray-300 rounded-md p-4 bg-gray-50">
                            <Text className="text-sm text-gray-600">
                                Ceci est un e-mail automatique de confirmation. Merci de ne pas y répondre.
                            </Text>
                        </Section>

                        <Text className="text-gray-500 text-xs text-center mt-5">
                            <Link
                                href="https://www.mhtc-embedded.com"
                                className="underline text-gray-500 underline-offset-2"
                            >
                                MHTC - Embedded
                            </Link> ・ Tous droits réservés
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
