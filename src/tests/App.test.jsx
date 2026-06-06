import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';

describe('Conecta Trabalho funcional', () => {
  it('exibe a tela inicial com escolha de perfil', () => {
    render(<App />);
    expect(screen.getByText(/Sou trabalhador/i)).toBeInTheDocument();
    expect(screen.getByText(/Sou empresa/i)).toBeInTheDocument();
  });

  it('trabalhador consegue se candidatar a uma vaga', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Acessar como trabalhador/i }));
    await user.click(await screen.findByRole('button', { name: /^Vagas$/i }));
    await user.click(await screen.findAllByRole('button', { name: /Candidatar-se/i })[0]);

    expect(await screen.findByText(/Candidatura enviada/i)).toBeInTheDocument();
  });

  it('empresa consegue publicar uma vaga', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Acessar como empresa/i }));
    await user.click(await screen.findByRole('button', { name: /Minhas vagas/i }));

    await user.type(await screen.findByLabelText(/Cargo/i), 'Repositor');
    await user.type(screen.getByLabelText(/Empresa/i), 'Mercado Teste');
    await user.type(screen.getByLabelText(/Salário/i), 'R$ 1.500');
    await user.click(screen.getByRole('button', { name: /Publicar vaga/i }));

    expect(await screen.findByText(/Repositor/i)).toBeInTheDocument();
  });
});
