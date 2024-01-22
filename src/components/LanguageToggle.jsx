import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = ({ i18n, lngs }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal' }}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/562b22f1b2734e8e044f661ddf650e926992ee1712723c2f6a5120bb70d01ddc?apiKey=cc631e0e5483424798ba2ae7a336a4f4&"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </summary>
            <ul className="language-dropdown p-2 bg-base-100 rounded-box w-52 mt-4 text-black" style={{ margin: '0', padding: '0' }}>
              {Object.keys(lngs).map((locale) => (
                <li key={locale}>
                  <button
                    style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }}
                    type="button"
                    onClick={() => {
                      i18n.changeLanguage(locale);
                      setShowDropdown(false);
                    }}
                  >
                    {lngs[locale].nativeName}
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default LanguageToggle;

