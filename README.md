# ETP Inteligente — Base Normativa

> O coração do ecossistema ETP Inteligente.

## Visão Geral

A Base Normativa é o núcleo responsável por transformar normas jurídicas em uma base de conhecimento estruturada, organizada e semanticamente compreensível.

Seu objetivo não é apenas armazenar documentos legais, mas interpretar sua estrutura, identificar relações entre dispositivos e disponibilizar essas informações de forma inteligente para todos os demais componentes do sistema.

Enquanto uma legislação tradicional é apenas texto, a Base Normativa converte esse conteúdo em uma estrutura navegável, pesquisável e reutilizável por qualquer módulo da plataforma.

---

# Objetivos

- Centralizar toda a base normativa utilizada pelo sistema.
- Interpretar automaticamente documentos oficiais.
- Estruturar normas em níveis hierárquicos.
- Manter relacionamento entre dispositivos legais.
- Servir como fonte única de conhecimento jurídico.
- Permitir consultas rápidas e contextualizadas.
- Alimentar todos os módulos do ETP Inteligente.

---

# Princípios

A Base Normativa foi concebida seguindo alguns princípios fundamentais.

## Fonte única da verdade

Toda informação normativa deve existir apenas uma vez.

Qualquer módulo consulta a Base Normativa em vez de manter cópias próprias.

---

## Estrutura semântica

O sistema não interpreta uma norma como texto.

Cada documento é convertido em elementos estruturados, como:

- Documento
- Livro
- Título
- Capítulo
- Seção
- Subseção
- Artigo
- Parágrafo
- Inciso
- Alínea
- Item
- Anexo

Esses elementos formam uma árvore normativa navegável.

---

## Independência dos módulos

O ETP, PCA, TR, DFD e futuros componentes nunca acessam diretamente documentos em HTML ou PDF.

Toda comunicação ocorre através da Base Normativa.

Isso garante baixo acoplamento entre os projetos.

---

# Arquitetura

```
                 Portal do Planalto
                        │
                        ▼
                Providers de Importação
                        │
                        ▼
                 Document Factory
                        │
                        ▼
                Parser Estrutural HTML
                        │
                        ▼
               Árvore Hierárquica
                        │
                        ▼
                 Banco de Conhecimento
                        │
       ┌────────────────┼────────────────┐
       ▼                ▼                ▼
      ETP              PCA              TR
                        │
                        ▼
                  Demais módulos
```

---

# Componentes

## Providers

Responsáveis por importar documentos de diferentes fontes oficiais.

Exemplos futuros:

- Portal do Planalto
- TCU
- Senado Federal
- Câmara dos Deputados
- Diário Oficial
- Compras.gov.br

---

## Parser

Interpreta o HTML e identifica automaticamente a estrutura normativa.

Cada elemento é convertido em um nó da árvore.

---

## Core Normativo

Responsável por:

- persistência;
- relacionamento;
- indexação;
- consultas;
- versionamento.

---

## Banco de Dados

A Base Normativa utiliza o Firestore para armazenar:

- documentos;
- nós estruturais;
- relacionamentos;
- referências;
- metadados.

---

# Modelo Conceitual

```
Documento
 ├── Livro
 │    ├── Título
 │    │     ├── Capítulo
 │    │     │      ├── Seção
 │    │     │      │      ├── Subseção
 │    │     │      │      │      ├── Artigo
 │    │     │      │      │      │      ├── Parágrafo
 │    │     │      │      │      │      │      ├── Inciso
 │    │     │      │      │      │      │      │      ├── Alínea
 │    │     │      │      │      │      │      │      └── Item
```

---

# Referências Normativas

Todo dispositivo pode ser identificado por uma referência canônica.

Exemplos:

```
lei-14133-2021

lei-14133-2021:18

lei-14133-2021:18§1

lei-14133-2021:18§1.IV

lei-14133-2021:23§1.a
```

Essa convenção representa o contrato entre a Base Normativa e os demais módulos do sistema.

---

# Objetivos futuros

- Versionamento de normas.
- Relações entre dispositivos.
- Revogações automáticas.
- Histórico legislativo.
- Busca semântica.
- IA especializada em legislação.
- Grafo normativo.
- Consulta por linguagem natural.
- Geração automática de fundamentações.
- Base para agentes inteligentes.

---

# Filosofia

A Base Normativa não foi criada apenas para armazenar leis.

Ela foi concebida para representar conhecimento jurídico de forma estruturada, permitindo que pessoas e sistemas compreendam normas além do texto, preservando sua organização, contexto e relações.

Ela constitui o núcleo de conhecimento sobre o qual todo o ecossistema do ETP Inteligente é construído.
