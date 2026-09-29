import React, { useState } from 'react';
import { getApiKey, setApiKey } from '../lib/apiKey';

const ApiKeyField: React.FC = () => {
    const [value, setValue] = useState(getApiKey());
    const [saved, setSaved] = useState(false);

    const save = () => {
        setApiKey(value);
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
    };

    return (
        <section className="bg-[var(--app-bg)]/50 p-6 rounded-2xl border border-[var(--app-border)] space-y-3 mb-6">
            <label className="text-[10px] font-[Oswald] tracking-widest text-[var(--app-text-muted)] uppercase">GEMINI API ANAHTARI</label>
            <div className="flex gap-2">
                <input
                    type="password"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="AIza..."
                    className="flex-1 bg-[var(--app-surface)] border border-[var(--app-border)] rounded-xl px-4 py-3 text-xs"
                />
                <button onClick={save} className="px-5 bg-[var(--app-accent)] text-[var(--app-on-accent)] font-[Oswald] text-xs font-bold uppercase rounded-xl">
                    {saved ? 'KAYDEDİLDİ' : 'KAYDET'}
                </button>
            </div>
            <p className="text-[10px] text-[var(--app-text-muted)]">Anahtar yalnızca bu cihazda saklanır. aistudio.google.com/apikey adresinden alınır.</p>
        </section>
    );
};

export default ApiKeyField;
