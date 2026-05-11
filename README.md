# shadcn-registry

Registry shadcn personnel — composants premium prêts à installer via `shadcn add <url>`.

## Utiliser un composant

Dans n'importe quel projet shadcn :

```bash
npx shadcn@latest add https://shadcn-registry.vercel.app/r/hero-saas.json
```

Le composant et ses dépendances (motion, lucide-react, et le composant `button` de shadcn) sont installés automatiquement.

## Composants disponibles

| Nom         | Type  | Description                                                   |
| ----------- | ----- | ------------------------------------------------------------- |
| `hero-saas` | block | Hero SaaS premium : badge, titre serif, 2 CTA, Motion stagger |

## Développement

```bash
npm install
npm run build:registry   # génère public/r/*.json depuis registry.json
```

Pour ajouter un nouveau bloc :

1. Crée le fichier dans `registry/new-york/blocks/<name>/<name>.tsx`
2. Ajoute une entrée dans `registry.json`
3. Lance `npm run build:registry`
4. Commit + push — Vercel redéploie automatiquement
