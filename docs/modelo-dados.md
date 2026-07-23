# Modelo de Dados
## ETP Inteligente - Core Normativo

**Versão:** 1.0.0

---

# 1. Objetivo

Este documento define o modelo de dados oficial do Core Normativo do ETP Inteligente.

O objetivo é padronizar a estrutura do Firestore para garantir consistência, escalabilidade e facilidade de manutenção.

Toda implementação deverá seguir este documento.

---

# 2. Princípios

A modelagem foi construída seguindo os seguintes princípios:

- Fonte única da verdade.
- Dados estruturados.
- Baixo acoplamento.
- Alta escalabilidade.
- Histórico completo.
- Versionamento.
- Compatibilidade com IA.

---

# 3. Arquitetura Geral

O banco será dividido em dois grupos.

## Dados de configuração

Coleções pequenas.

- core
- categorias
- assuntos
- fontes
- sincronizacao
- logs

## Dados de conhecimento

Coleções grandes.

- knowledge
- relacionamentos
- alteracoes
- alertas

---

# 4. Coleções

## core

Responsável pelas configurações do sistema.

Documentos:

- configuracoes
- sincronizacao
- sistema
- metadados

---

## categorias

Lista dos tipos de documentos.

Exemplos:

- Constituição
- Lei
- Decreto
- Instrução Normativa
- Portaria
- Resolução
- Acórdão
- Parecer
- Manual
- Guia
- Nota Técnica

---

## assuntos

Lista de assuntos utilizados para classificação.

Exemplos:

- Planejamento
- ETP
- PCA
- Pesquisa de Preços
- Contratação Direta
- Dispensa
- Inexigibilidade
- Fiscalização
- Gestão Contratual
- Sanções
- IMR

---

## fontes

Fontes oficiais monitoradas.

Exemplos:

- Planalto
- DOU
- PNCP
- Compras.gov.br
- TCU
- AGU
- CGU

---

# 5. Coleção Principal

## knowledge

Todo documento jurídico será armazenado nesta coleção.

Cada documento representa um objeto de conhecimento.

Exemplos:

Lei.

Decreto.

Manual.

Acórdão.

Parecer.

Nota Técnica.

---

# 6. Estrutura do Documento

Campos obrigatórios.

| Campo | Tipo |
|--------|------|
| id | string |
| tipo | string |
| categoria | string |
| titulo | string |
| numero | string |
| ano | number |
| status | string |
| ementa | string |
| fonte | string |
| url | string |
| idioma | string |
| versao | number |
| hash | string |
| ativo | boolean |
| publicadoEm | timestamp |
| atualizadoEm | timestamp |
| criadoEm | timestamp |

---

# 7. Classificação

Todo documento deverá possuir classificação.

Campos.

- assuntos
- palavrasChave
- orgao
- esfera
- area
- modulo

---

# 8. Estrutura Interna

Cada documento poderá possuir subcoleções.

sections

articles

attachments

history

references

---

# 9. Articles

Subcoleção responsável pelos artigos.

Campos.

| Campo | Tipo |
|--------|------|
| numero | string |
| titulo | string |
| texto | string |
| ordem | number |
| vigente | boolean |
| hash | string |

---

# 10. References

Relacionamentos entre documentos.

Exemplos.

Lei regulamentada por Decreto.

Acórdão interpreta Lei.

Manual explica artigo.

Parecer fundamenta decisão.

---

# 11. Alterações

Toda alteração será registrada.

Campos.

- documento
- versão anterior
- versão nova
- data
- descrição
- artigos alterados

---

# 12. Alertas

Utilizado para informar alterações aos sistemas consumidores.

Exemplos.

Nova Lei.

Novo Decreto.

Novo Acórdão.

Nova IN.

---

# 13. Versionamento

Nenhuma alteração substituirá definitivamente uma versão anterior.

Todo documento possuirá histórico.

---

# 14. Regras

Nunca excluir documentos.

Nunca remover histórico.

Nunca alterar manualmente documentos sincronizados.

Toda alteração deverá possuir origem.

---

# 15. Próxima Etapa

Após aprovação deste modelo será iniciada a implementação das coleções no Firestore e dos scripts de importação.