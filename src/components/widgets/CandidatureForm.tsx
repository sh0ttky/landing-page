'use client'
import { ContentProps } from '~/shared/types';
import { SendInternalCandidatureEmail, SendNoReplyCandidatureEmail } from 'actions/send-email';
import { getS3Url, uploadToS3 } from 'actions/awsS3';
import { useRef, useState } from 'react';
import { Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';
import Headline from '../common/Headline';

interface CandidatureFormProps extends ContentProps {
    position?: string;
}

const CandidatureForm = ({
    header,
    position
}: CandidatureFormProps) => {
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : null);
    };

    const handleJobApplicationSubmit = async (formData: any) => {
        setIsSubmitting(true);
        let cvUrl = '';

        try {
            if (formData.resume) {
                setIsUploading(true);
                try {
                    const { file_key } = await uploadToS3(formData.resume);
                    cvUrl = getS3Url(file_key);
                    toast.success('CV téléchargé avec succès');
                } catch (error) {
                    console.error('CV upload failed:', error);
                    setUploadError('Échec du téléchargement du CV. Veuillez réessayer.');
                    toast.error('Échec du téléchargement du CV');
                    return false;
                } finally {
                    setIsUploading(false);
                }
            }

            const noReplyPromise = SendNoReplyCandidatureEmail({
                name: formData.name,
                email: formData.email,
                position: position!
            });

            const internalPromise = SendInternalCandidatureEmail({
                name: formData.name,
                email: formData.email,
                telephone: formData.phone,
                salaire: formData.salaryExpectation,
                position: position!,
                message: `${formData.message}\n\nCV: ${cvUrl || 'Aucun cv'}`
            });

            toast.promise(Promise.all([noReplyPromise, internalPromise]), {
                loading: 'Envoi de votre candidature...',
                success: () => {
                    return 'Candidature envoyée avec succès!';
                },
                error: () => {
                    return "Une erreur s'est produite. Veuillez réessayer.";
                }
            });

            const [noReplyResult, internalResult] = await Promise.all([noReplyPromise, internalPromise]);
            return internalResult.success && noReplyResult.success;
        } catch (error) {
            console.error('erreur:', error);
            toast.error("Une erreur s'est produite");
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative py-12 md:py-16 lg:py-20 text-default max-w-7xl bg-inherit mx-auto">
            {header && <Headline header={header} titleClass="text-md sm:text-2xl" />}
            <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-900">
                    {position ? `Postuler au poste de ${position}` : 'Postuler à un emploi'}
                </h3>
                {uploadError && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                        {uploadError}
                    </div>
                )}
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const formData = new FormData(form);

                        const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
                        if (fileInput?.files?.[0]) {
                            formData.append('resume', fileInput.files[0]);
                        }

                        const success = await handleJobApplicationSubmit(Object.fromEntries(formData));
                        if (success) {
                            form.reset();
                            setFileName(null);
                        }
                    }}
                >

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nom complet <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full border border-gray-300  shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full border border-gray-300  shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Téléphone <span className="text-red-700">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="mt-1 block w-full border border-gray-300  shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="salaryExpectation" className="block text-sm font-medium text-gray-700">
                                Prétentions salariales
                            </label>
                            <select
                                id="salaryExpectation"
                                name="salaryExpectation"
                                className="mt-1 block w-full border border-gray-300  shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            >
                                <option value="">Sélectionnez une fourchette</option>
                                <option value="30k-40k">30 000€ - 40 000€</option>
                                <option value="40k-50k">40 000€ - 50 000€</option>
                                <option value="50k-60k">50 000€ - 60 000€</option>
                                <option value="60k-70k">60 000€ - 70 000€</option>
                                <option value="70k-80k">70 000€ - 80 000€</option>
                                <option value="80k+">80 000€ et plus</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Vos motivations
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full border border-gray-300  shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                CV (PDF, DOC, DOCX) <span className="text-red-700">*</span>
                            </label>
                            <div className="mt-1 flex items-center">
                                <label
                                    htmlFor="resume"
                                    className={`cursor-pointer flex items-center gap-2 bg-blue-50 text-blue-900 hover:bg-blue-100 border border-gray-300 rounded-md py-2 px-4 text-sm font-semibold mr-4 ${isUploading ? 'opacity-75' : ''
                                        }`}
                                >
                                    {isUploading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Téléchargement...
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="h-4 w-4" />
                                            Choisir un fichier
                                        </>
                                    )}
                                </label>
                                <span className="text-sm text-gray-500">
                                    {fileName || 'Aucun fichier sélectionné'}
                                </span>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    required
                                    onChange={handleFileChange}
                                    className="hidden"
                                    lang="fr-FR"
                                    disabled={isUploading}
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex justify-center items-center gap-2 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    'Envoyer ma candidature'
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CandidatureForm;