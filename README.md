# Monorepo DS Boilerplate

Um Design System moderno e flexível construído com React, TypeScript e Storybook.

## 📦 Pacotes

O Design System é distribuído como pacotes npm separados:

- [`@monorepo-ds-boilerplate/react`](https://www.npmjs.com/package/@monorepo-ds-boilerplate/react) - Biblioteca de componentes React
- [`@monorepo-ds-boilerplate/tokens`](https://www.npmjs.com/package/@monorepo-ds-boilerplate/tokens) - Design Tokens (cores, espaçamentos, etc)

## 🚀 Instalação

### Instalando os pacotes

```bash
pnpm add @monorepo-ds-boilerplate/react @monorepo-ds-boilerplate/tokens
```

## 💻 Uso

### Importando componentes

```tsx
import { Accordion } from '@monorepo-ds-boilerplate/react';

const MyComponent = () => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Trigger>Título do Accordion</Accordion.Trigger>
        <Accordion.Content>Conteúdo do Accordion</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
```

### Importando tokens

```tsx
import { colors } from '@monorepo-ds-boilerplate/tokens';

const MyComponent = () => {
  return <div style={{ backgroundColor: colors.primary }}>My Component</div>;
};
```
