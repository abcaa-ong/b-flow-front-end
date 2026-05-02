# Contribuição

## Objetivo

Este repositório deve evoluir com clareza, previsibilidade e baixo retrabalho.

## Fluxo de trabalho recomendado

1. Atualizar a `main`
2. Escolher ou assumir uma tarefa
3. Criar uma branch de trabalho
4. Implementar somente o escopo combinado
5. Testar localmente
6. Atualizar a documentação quando necessário
7. Abrir Pull Request
8. Solicitar revisão nos pontos críticos

## Padrão de branches

- `feat/nome-da-feature`
- `fix/nome-do-ajuste`
- `docs/nome-do-documento`
- `refactor/nome-da-melhoria`
- `test/nome-do-teste`

## Padrão de commits

- `feat:`
- `fix:`
- `docs:`
- `refactor:`
- `test:`
- `chore:`

## Responsabilidades do time

- Alan: fundação técnica, arquitetura, integração e revisão da base
- Gleidson: modelagem do domínio, entidades, relacionamentos e migrations
- Kaleb: DTOs, validações, endpoints reais dos formulários e atualização por protocolo
- Anderson: analytics, filtros, anonimização e exportação CSV
- Luiz: revisão técnica, segurança, qualidade e alinhamento com o frontend

## Checklist antes do PR

- projeto sobe localmente
- banco sobe no Docker
- endpoint afetado foi validado
- não há código morto desnecessário
- a documentação foi atualizada se o escopo mudou
- não foram quebrados contratos já combinados

## Regras importantes

- não alterar migrations antigas já aplicadas
- novas mudanças de banco entram como nova migration
- não expor dados pessoais em endpoints públicos
- toda funcionalidade estatística deve respeitar anonimização
- evitar mock permanente em endpoint que já tenha domínio definido