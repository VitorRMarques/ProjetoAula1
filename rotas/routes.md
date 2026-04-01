# Sistema de Gestão de Despesas e Produtos

## Visão Geral
Este documento descreve a estrutura de rotas e funcionalidades do sistema de gestão financeira e de produtos, incluindo módulos de débito, crédito e controle de estoque.

## Módulos Principais

### 1. Débito (Despesas)
Gerenciamento de saídas financeiras e controle de gastos.

**Funcionalidades:**
- Registro de despesas
- Categorização automática
- Filtros por categoria e data
- Cálculo de totais gastos
- Diferença entre débito e crédito

**Rotas Sugeridas:**
- `/` - Home Débito (Dashboard principal)
- `/debito` - Listagem de despesas
- `/debito/categoria` - Pesquisa por categoria
- `/debito/data` - Pesquisa por data
- `/debito/registro` - Registro de nova despesa

### 2. Crédito (Receitas)
Controle de entradas financeiras e saldos disponíveis.

**Funcionalidades:**
- Controle de créditos disponíveis
- Diferença entre débito e crédito
- Saldos em tempo real

**Rotas Sugeridas:**
- `/credito` - Home Crédito
- `/credito/disponivel` - Créditos disponíveis

### 3. Produtos
Gestão de inventário e controle de estoque.

**Funcionalidades:**
- Adição de itens/produtos
- Localização de itens específicos
- Listagem completa de produtos
- Controle de vendas (diminuição de estoque)
- Diferença entre produtos para gestão e revenda

**Rotas Sugeridas:**
- `/produtos` - Listagem de Produtos Disponíveis
- `/produtos/:id` - Detalhes/Localização de item específico
- `/produtos/adicionar` - Adição de novos itens
- `/produtos/venda` - Controle de vendas e diminuição de estoque

## Estrutura de Navegação Geral

### Home Pages
- `/` - Dashboard principal (Débito)
- `/credito` - Dashboard de Crédito

### Funcionalidades Comuns
- Filtros e buscas integradas em cada módulo
- Relatórios de diferenças (débito vs crédito, gestão vs revenda)

## Considerações Técnicas

### Implementação Angular
- Utilizar componentes standalone
- Implementar lazy loading para módulos
- Usar signals para estado reativo
- Integrar com localStorage para persistência

### Estrutura de Dados
- Modelos separados para Despesa, Produto, Crédito
- Serviços para lógica de negócio
- Validação de formulários reativos

### UI/UX
- Interface responsiva com Tailwind CSS
- Componentes modulares e reutilizáveis
- Navegação intuitiva entre módulos
