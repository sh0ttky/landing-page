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

interface noReplyCandidatureEmailProps {
    name: string | null;
    position?: string;
}

export default function noReplyCandidatureEmail({ name, position }: noReplyCandidatureEmailProps) {
    return (
        <Html>
            <Head>
                <title>Confirmation de réception de votre candidature</title>
            </Head>
            <Preview>Nous avons bien reçu votre candidature à MHTC - Embedded</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-gray-900 font-sans">
                    <Container className="max-w-[900px] my-0 mx-auto pt-5 pb-12 px-0">
                        <Link href="https://www.mhtc-embedded.com" className="flex items-center text-gray-800">
                            <Img
                                src="https://www.mhtc-embedded.com/logo.png"
                                width="32"
                                height="32"
                                alt="MHTC"
                                className="mr-1 -ml-1"
                            />
                            <Heading as="h1" className="text-3xl font-bold m-0">
                                MHTC - Embedded
                            </Heading>
                        </Link>

                        <Section className="mt-8">
                            <Text className="text-xl">
                                Bonjour <strong>{typeof name === 'string' ? name : 'Candidat'}</strong>,
                            </Text>

                            <Text className="text-md mt-4">
                                Nous avons bien reçu votre candidature {position ? `au poste de ${position}` : ''} et vous remercions de l'intérêt que vous portez à MHTC - Embedded.
                            </Text>

                            <Text className="text-md mt-4">
                                Nous allons l'étudier avec la plus grande attention et nous ne manquerons pas de vous contacter si votre profil correspond à nos besoins actuels.
                            </Text>

                            <Text className="text-md mt-4">
                                Sans nouvelles de notre part dans un délai de deux semaines, veuillez considérer que nous ne sommes pas en mesure de donner suite favorable à votre candidature pour le moment.
                            </Text>

                            <Text className="text-md mt-6">
                                Bien cordialement,
                            </Text>
                            <Text className="text-md">
                                L'équipe de recrutement MHTC - Embedded
                            </Text>
                        </Section>

                        <Section className="mt-8 border-t border-gray-200 pt-4">
                            <Text className="text-sm text-gray-600 text-center">
                                <Link href="https://www.mhtc-embedded.com" className="underline text-gray-600 underline-offset-2">
                                    MHTC - Embedded
                                </Link> ・ Tous droits réservés
                            </Text>
                            <Text className="text-xs text-gray-500 text-center mt-2">
                                Ceci est un message automatique, merci de ne pas y répondre.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}