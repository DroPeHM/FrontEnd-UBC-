# Farda Nova

Site estático em HTML, CSS e JavaScript, pronto para hospedagem na Vercel.

## Deploy pela Vercel

1. Importe este repositório em [vercel.com/new](https://vercel.com/new).
2. Mantenha a raiz do projeto como **Root Directory**.
3. Não configure build command, output directory ou variáveis de ambiente: o projeto é estático.
4. Clique em **Deploy**.

O arquivo `vercel.json` configura a página inicial e atalhos para as páginas do site. A entrada principal é `/` e redireciona para o fluxo inicial após a tela de carregamento.

## Desenvolvimento local

Como os arquivos usam caminhos relativos, sirva a pasta pela raiz do projeto com um servidor HTTP. Por exemplo:

```bash
python -m http.server 3000
```

Depois, abra <http://localhost:3000>.
