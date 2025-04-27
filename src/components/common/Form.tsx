'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';
import { SendInternalContactEmail, SendNoReplyContactEmail } from 'actions/send-email';

interface FormInputValues {
  [key: string]: string;
}

const Form = ({
  title,
  description,
  inputs,
  radioBtns,
  textarea,
  checkboxes,
  btn,
  btnPosition,
  containerClass,
}: FormProps) => {
  const [inputValues, setInputValues] = useState<FormInputValues>({});
  const [radioBtnValue, setRadioBtnValue] = useState<string>('');
  const [textareaValues, setTextareaValues] = useState<string>('');
  const [checkedState, setCheckedState] = useState<boolean[]>(
    checkboxes ? new Array(checkboxes.length).fill(false) : []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });
      return newValues;
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = {
        name: inputValues['name'] || '',
        email: inputValues['email'] || '',
        motif: radioBtnValue || '',
        message: textareaValues || '',
      };

      console.log('Submitting form data:', formData);

      // Send both emails sequentially
      const internalResult = await SendInternalContactEmail(formData);
      const noReplyResult = await SendNoReplyContactEmail({
        name: formData.name,
        email: formData.email
      });

      console.log('Email results:', {
        internal: internalResult,
        noReply: noReplyResult
      });

      // Handle results
      if (internalResult.error && noReplyResult.error) {
        setSubmitStatus({ error: 'Failed to send both emails' });
      } else if (internalResult.error) {
        setSubmitStatus({ error: 'Failed to send internal notification' });
      } else if (noReplyResult.error) {
        setSubmitStatus({
          success: true, // Still consider it success for user
          error: 'Confirmation email failed - we received your message'
        });
        // Reset form since main email succeeded
        resetForm();
      } else {
        setSubmitStatus({ success: true });
        resetForm();
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        error: 'Failed to process your request',

      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to reset form
  const resetForm = () => {
    setInputValues({});
    setRadioBtnValue('');
    setTextareaValues('');
    setCheckedState(checkboxes ? new Array(checkboxes.length).fill(false) : []);
  };

  return (
    <form id="contactForm" className={twMerge('', containerClass)} onSubmit={handleSubmit}>
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-lg  font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <div className="mb-6">
        {/* Inputs */}
        <div className="mx-0 mb-1 sm:mb-4">
          {/* Name Input */}
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={inputValues['name'] || ''}
              onChange={changeInputValueHandler}
              placeholder="Your name"
              className="mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={inputValues['email'] || ''}
              onChange={changeInputValueHandler}
              placeholder="Your email"
              className="mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              required
            />
          </div>
        </div>
        {/* Radio buttons */}
        {radioBtns && (
          <div className="mx-0 mb-1 sm:mb-3">
            <span className="pb-1 text-xs uppercase tracking-wider">{radioBtns?.label}</span>
            <div className="flex flex-wrap">
              {radioBtns.radios.map(({ label }, index) => (
                <div key={`radio-btn-${index}`} className="mr-4 items-baseline">
                  <input
                    id={label}
                    type="radio"
                    name="motif" // Same name for all radios in a group
                    value={label} // Send actual label as value
                    checked={radioBtnValue === label}
                    onChange={changeRadioBtnsHandler}
                    className="cursor-pointer"
                  />
                  <label htmlFor={label} className="ml-2">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Textarea */}
        {textarea && (
          <div className={`mx-0 mb-1 sm:mb-4`}>
            <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
              {textarea.label}
            </label>
            <textarea
              id={textarea.name}
              name={textarea.name}
              cols={textarea.cols}
              rows={textarea.rows}
              value={textareaValues}
              onChange={(e) => changeTextareaHandler(e)}
              placeholder={textarea.placeholder}
              className="mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            />
          </div>
        )}
        {/* Checkboxes */}
        {checkboxes && (
          <div className="mx-0 mb-1 sm:mb-4">
            {checkboxes.map(({ label }, index) => (
              <div key={`checkbox-${index}`} className="mx-0 my-1 flex items-baseline">
                <input
                  id={label}
                  type="checkbox"
                  name={label}
                  checked={checkedState[index]}
                  onChange={() => changeCheckboxHandler(index)}
                  className="cursor-pointer"
                />
                <label htmlFor={label} className="ml-2">
                  {label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      {btn && (
        <div
          className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
          <button type="submit" className="  bg-blue-900 text-white m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi...' : btn.title}
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
