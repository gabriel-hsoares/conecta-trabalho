# Conecta Trabalho — MVP funcional

Versão com perfis separados e botões funcionais usando estado local.

## Funcionalidades implementadas

### Trabalhador
- Escolher perfil trabalhador
- Ver dashboard
- Editar e salvar perfil
- Gerar currículo demonstrativo
- Ver vagas
- Candidatar-se
- Ver candidaturas
- Ver cursos
- Inscrever-se em cursos

### Empresa
- Escolher perfil empresa
- Ver dashboard
- Cadastrar nova vaga
- Ver vagas publicadas
- Ver banco de talentos
- Abrir modal de candidato
- Contatar candidato

## Rodar

```bash
npm install --legacy-peer-deps
npm run dev
```

## Testes e build

```bash
npm run lint
npm run test
npm run build
```

## Ações reversíveis

- Candidatar-se / cancelar candidatura
- Inscrever-se em curso / cancelar inscrição
- Publicar vaga / cancelar cadastro / encerrar vaga
- Contatar candidato / cancelar contato
- Salvar perfil / cancelar alterações


## Currículo em PDF

A tela **Meu perfil** gera um currículo em PDF automaticamente com:

- Nome
- Telefone/WhatsApp
- E-mail
- Bairro/comunidade
- Área de interesse
- Escolaridade
- Habilidades
- Cursos inscritos na plataforma
- Índice de empregabilidade

Dependência utilizada: `jspdf`.
