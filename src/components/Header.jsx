import React from 'react';

export default function Header({ pageTitle, profileType }) {
  const profileLabel = profileType === 'company' ? 'Perfil empresa' : profileType === 'worker' ? 'Perfil trabalhador' : 'Acesso inicial';

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">ODS 8 • Trabalho Decente e Crescimento Econômico</p>
        <h1>{pageTitle}</h1>
      </div>

      <div className="user-pill" aria-label={profileLabel}>
        <span className="avatar" aria-hidden="true">CT</span>
        <span>{profileLabel}</span>
      </div>
    </header>
  );
}
