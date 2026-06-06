# Como o projeto atende à atividade

Esta versão do MVP possui botões funcionais e fluxos separados por perfil.

## Usabilidade implementada

Antes, o usuário via tudo. Agora:
- Trabalhador vê vagas, cursos, perfil e candidaturas.
- Empresa vê cadastro de vagas e banco de talentos.

## Funcionalidades com feedback

- Candidatar-se a vaga
- Inscrever-se em curso
- Salvar perfil
- Gerar currículo demonstrativo
- Publicar vaga
- Ver candidato
- Contatar candidato

## Testes de carga e estresse

Usar k6:

```bash
npm run build
npm run preview
npm run loadtest
```

## CI/CD

Arquivo:

```txt
.github/workflows/ci.yml
```

Etapas:
- install
- lint
- test
- build

## Deploy

Estratégia sugerida: Vercel.

## KPIs

Tela "Indicadores e KPIs".
