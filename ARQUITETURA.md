# ETP Inteligente – Core Normativo

**Versão:** 1.0.0
**Status:** Em desenvolvimento
**Última atualização:** 23/07/2026

---

# 1. Visão Geral

O **ETP Inteligente – Core Normativo** é um projeto independente responsável por centralizar, organizar, versionar e disponibilizar informações oficiais relacionadas às contratações públicas e à Administração Pública brasileira.

O objetivo é que todos os sistemas do ecossistema **ETP Inteligente** utilizem uma única fonte de conhecimento, eliminando duplicidade de informações e reduzindo o risco de utilização de normas desatualizadas.

Este projeto **não possui interface para usuários finais**. Sua responsabilidade é fornecer dados estruturados e confiáveis para outros sistemas.

---

# 2. Objetivos

* Manter uma base normativa única.
* Disponibilizar somente normas vigentes.
* Versionar alterações legislativas.
* Automatizar a sincronização com fontes oficiais.
* Fornecer contexto jurídico para a IA.
* Disponibilizar dados através do Firestore.
* Permitir expansão para outros módulos do ecossistema.

---

# 3. Princípios Arquiteturais

## Fonte única da verdade

Toda informação normativa deverá existir apenas neste projeto.

Nenhum outro sistema deverá armazenar cópias próprias das normas.

---

## Baixo acoplamento

Os módulos consumidores nunca conhecerão as fontes oficiais.

Eles consultarão exclusivamente o Core Normativo.

---

## Atualização contínua

A base deverá ser sincronizada periodicamente com as fontes oficiais.

---

## Versionamento

Toda alteração deverá possuir histórico.

Nenhuma atualização poderá sobrescrever informações sem registro.

---

## Modularidade

Cada componente deverá possuir responsabilidade única.

---

# 4. Escopo

## Incluído

* Constituição Federal (dispositivos relevantes)
* Leis Federais
* Leis Complementares
* Decretos
* Instruções Normativas
* Portarias
* Resoluções
* Acórdãos do TCU
* Pareceres da AGU
* Orientações Normativas
* Guias oficiais
* Manuais oficiais
* Notas Técnicas
* Perguntas Frequentes
* Relações entre normas

## Não incluído

* Conteúdo doutrinário
* Opiniões jurídicas particulares
* Blogs
* Fontes não oficiais

---

# 5. Fontes Oficiais

A sincronização deverá utilizar exclusivamente fontes oficiais.

## Governo Federal

* Portal da Legislação (Planalto)
* Diário Oficial da União
* Portal Nacional de Contratações Públicas (PNCP)
* Compras.gov.br

## Órgãos de Controle

* Tribunal de Contas da União (TCU)
* Advocacia-Geral da União (AGU)
* Controladoria-Geral da União (CGU)

Outras fontes oficiais poderão ser adicionadas futuramente.

---

# 6. Estrutura Geral

```
Fontes Oficiais

↓

Sincronizador

↓

Validação

↓

Firestore

↓

Histórico

↓

API de Consulta

↓

Sistemas Consumidores
```

---

# 7. Estrutura do Banco

Coleções principais:

* categorias
* assuntos
* fontes
* normas
* artigos
* alteracoes
* relacionamentos
* alertas
* logs

---

# 8. Modelo Conceitual

Uma norma poderá possuir:

* artigos
* incisos
* parágrafos
* alíneas
* anexos
* palavras-chave
* assuntos
* histórico
* relacionamentos

---

# 9. Processo de Sincronização

1. Consultar fontes oficiais.
2. Identificar alterações.
3. Comparar com a versão armazenada.
4. Atualizar quando necessário.
5. Registrar histórico.
6. Notificar administradores.
7. Disponibilizar a nova versão aos sistemas consumidores.

---

# 10. Versionamento

Cada atualização deverá registrar:

* data;
* fonte;
* versão anterior;
* versão atual;
* artigos alterados;
* descrição da alteração.

Nenhuma informação será perdida.

---

# 11. Segurança

A escrita na base será permitida apenas para processos autorizados.

Os sistemas consumidores terão acesso somente para leitura.

---

# 12. Sistemas Consumidores

Inicialmente:

* ETP Inteligente
* Justificativa da Contratação
* Consulta ao PCA

Futuramente:

* Termo de Referência
* Pesquisa de Preços
* Gestão Contratual
* Fiscalização
* Painel Gerencial
* Assistente Jurídico
* Outros sistemas integrados

---

# 13. Roadmap

## Versão 1.0

* Estrutura do projeto
* Firestore
* Cadastro inicial das normas
* Importação manual

## Versão 2.0

* Sincronização automática
* GitHub Actions
* Histórico de alterações
* Alertas

## Versão 3.0

* Busca semântica
* Classificação automática
* Relacionamento entre normas
* Integração com IA

## Versão 4.0

* API pública do Core Normativo
* Múltiplos sistemas consumidores
* Dashboard de monitoramento
* Indicadores de atualização

---

# 14. Visão de Longo Prazo

O Core Normativo será a principal base de conhecimento do ecossistema ETP Inteligente.

Sua missão será garantir que toda decisão, documento, resposta gerada por IA ou funcionalidade do sistema esteja fundamentada em informações oficiais, atualizadas, versionadas e rastreáveis.

Este projeto deverá ser desenvolvido de forma independente do sistema principal, permitindo evolução contínua sem impactar os módulos já utilizados pelos usuários.
