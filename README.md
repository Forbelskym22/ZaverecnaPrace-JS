
# ZaverecnaPrace-JS
Aplikace pro zápis osobních poznámek.

## Instalace

### Instalace Node.js
Pokud ještě nemáte nainstalovaný Node.js, stáhněte si ho z [oficiálních stránek](https://nodejs.org/) a nainstalujte podle pokynů pro vaši platformu (Windows/Mac/Linux).

### Stáhněte a nainstalujte závislosti
Otevřete terminál nebo PowerShell v kořenovém adresáři projektu, kde se nachází soubor `package.json`.

Pro instalaci všech potřebných balíčků spusťte tento příkaz:

```bash
npm install
```

### Spuštění aplikace

#### Vývojový režim
Aplikaci můžete spustit v **vývojovém režimu** pomocí následujícího příkazu:

```bash
npm run dev
```

Tento příkaz spustí server pomocí nástroje **nodemon**, který automaticky restartuje aplikaci při každé změně v kódu.

#### Produkční režim
Pro spuštění **stabilní verze** aplikace použijte příkaz:

```bash
npm start
```

Tento příkaz spustí aplikaci v produkčním režimu, tj. bez automatických restartů.

### .env soubor
Před spuštěním aplikace je potřeba vytvořit soubor `.env` v kořenovém adresáři projektu a přidat do něj následující proměnné:

```
SECRET=secret_pro_session
PORT=port_na_kterem_aplikace_pobezi
SUPABASE_URL=odkaz_na_supabase_databazi
SUPABASE_KEY=klic_k_databazi
```

### Ostatní
Pokud chcete aplikaci spustit a testovat ji na lokálním serveru, otevřete v prohlížeči URL:

```
http://localhost:NNNN
```

kde `NNNN` je port, který si zvolíte v `.env` souboru.
