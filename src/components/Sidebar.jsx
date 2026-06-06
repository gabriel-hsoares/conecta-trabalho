import React from 'react';

export default function Sidebar({ menuItems, activePage, onNavigate, profileType, onResetAccess }) {
  const profileName = profileType === 'company' ? 'Empresa' : 'Trabalhador';

  return (
    <aside className="sidebar" aria-label="Menu principal">
      <div className="brand">
        <div className="brand-icon" aria-hidden="true">CT</div>
        <div>
          <strong>Conecta</strong>
          <span>{profileName}</span>
        </div>
      </div>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              className={`nav-button ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              type="button"
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button className="change-profile" type="button" onClick={onResetAccess}>
        Trocar tipo de acesso
      </button>
    </aside>
  );
}
