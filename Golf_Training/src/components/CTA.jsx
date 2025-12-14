import React, { useCallback, useEffect, useState } from 'react';
import { useI18n } from '../i18n/LanguageContext';

const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxRPsJoottFBse-O9FE1WcpWG3ugZtN8eg033rgMGe2SFoJFD17j6lruMYwwQdInUKg/exec';

const CTA = () => {
    const { t } = useI18n();
    const { cta } = t;

    const buildInitialForm = useCallback(() => ({
        name: '',
        country: '',
        age: '',
        language: cta.form.languageOptions[0] || '',
        track: cta.form.trackOptions[0] || '',
        messenger: '',
        email: '',
    }), [cta]);

    const [form, setForm] = useState(buildInitialForm);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [error, setError] = useState('');

    useEffect(() => {
        setForm(buildInitialForm());
        setStatus('idle');
        setError('');
    }, [buildInitialForm]);

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        if (status !== 'idle') {
            setStatus('idle');
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setError('');

        try {
            const response = await fetch(SHEET_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    submittedAt: new Date().toISOString(),
                }),
            });

            // If we can read the response, ensure it isn't an HTML error page.
            if (response.type !== 'opaque') {
                const text = await response.text();
                const isErrorPage = text.includes('Exception') || text.includes('Error') || text.includes('TypeError');
                if (!response.ok || isErrorPage) {
                    throw new Error(`Submission failed: ${response.status}`);
                }
            }

            setStatus('success');
            setForm(buildInitialForm());
            return;
        } catch (err) {
            console.warn('Primary submit failed, retrying with no-cors FormData', err);
            try {
                const fallbackBody = new FormData();
                Object.entries({
                    ...form,
                    submittedAt: new Date().toISOString(),
                }).forEach(([key, value]) => fallbackBody.append(key, value));

                await fetch(SHEET_ENDPOINT, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: fallbackBody,
                });

                setStatus('success');
                setForm(buildInitialForm());
            } catch (secondErr) {
                console.error('Failed to submit form to Google Sheets', secondErr);
                setStatus('error');
                setError(cta.errorMessage);
            }
        }
    };

    return (
        <section id="consultation" className="section cta-section">
            <div className="container">
                <div className="cta-container">
                    <div className="cta-text">
                        <h2 className="section-title text-white">{cta.title}</h2>
                        <p className="section-subtitle text-white-opacity">
                            {cta.subtitle}
                        </p>
                    </div>

                    <form className="cta-form" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="form-status success">{cta.successMessage}</div>
                        )}
                        {status === 'error' && (
                            <div className="form-status error">{error || cta.errorMessage}</div>
                        )}

                        <div className="form-group">
                            <label>{cta.form.nameLabel}</label>
                            <input
                                type="text"
                                placeholder={cta.form.namePlaceholder}
                                value={form.name}
                                onChange={handleChange('name')}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>{cta.form.countryLabel}</label>
                                <input
                                    type="text"
                                    placeholder={cta.form.countryPlaceholder}
                                    value={form.country}
                                    onChange={handleChange('country')}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>{cta.form.ageLabel}</label>
                                <input
                                    type="number"
                                    placeholder={cta.form.agePlaceholder}
                                    value={form.age}
                                    onChange={handleChange('age')}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>{cta.form.languageLabel}</label>
                            <select value={form.language} onChange={handleChange('language')}>
                                {cta.form.languageOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>{cta.form.trackLabel}</label>
                            <select value={form.track} onChange={handleChange('track')}>
                                {cta.form.trackOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>{cta.form.messengerLabel}</label>
                                <input
                                    type="text"
                                    placeholder={cta.form.messengerPlaceholder}
                                    value={form.messenger}
                                    onChange={handleChange('messenger')}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>{cta.form.emailLabel}</label>
                                <input
                                    type="email"
                                    placeholder={cta.form.emailPlaceholder}
                                    value={form.email}
                                    onChange={handleChange('email')}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-submit" disabled={status === 'submitting'}>
                            {status === 'submitting' ? (cta.submittingText || cta.submitText) : cta.submitText}
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
        .cta-section {
          background: linear-gradient(120deg, var(--primary) 0%, #0d4c38 60%, var(--primary-light) 100%);
          color: white;
        }
        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .text-white { color: white; }
        .text-white-opacity { color: rgba(255,255,255,0.9); }
        
        .cta-form {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          color: var(--dark);
          margin-top: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        input, select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          font-family: inherit;
        }
        input:focus, select:focus {
          outline: none;
          border-color: var(--primary);
        }
        .form-status {
          padding: 12px 14px;
          border-radius: 6px;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .form-status.success {
          background: rgba(22, 163, 74, 0.12);
          color: #166534;
          border: 1px solid rgba(22, 163, 74, 0.3);
        }
        .form-status.error {
          background: rgba(220, 38, 38, 0.12);
          color: #b91c1c;
          border: 1px solid rgba(220, 38, 38, 0.3);
        }
        .btn-submit {
          width: 100%;
          background: var(--primary);
          color: white;
          padding: 16px;
          font-size: 1.1rem;
          margin-top: 1rem;
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-submit:hover {
          background: var(--primary-light);
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; gap: 0; }
        }
      `}</style>
        </section>
    );
};

export default CTA;
