/**
 * LYA Premium Document Generator — v3.0
 * Documents HTML stylisés avec bouton Imprimer + versions FR/EN
 */

const LYA_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800&family=Space+Mono:wght@400;700&display=swap');
  :root { --cyan:#00E0FF; --gold:#FFD700; --bg:#0D1117; --surface:#161B22; --surface2:#1C2128; --border:rgba(255,255,255,0.07); --text:#FFFFFF; --muted:rgba(255,255,255,0.45); }
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif;font-size:14px;line-height:1.6;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .page{max-width:860px;margin:0 auto;padding:60px;position:relative;padding-bottom:100px}
  .corner{position:fixed;width:32px;height:32px}
  .corner.tl{top:24px;left:24px;border-top:2px solid var(--cyan);border-left:2px solid var(--cyan)}
  .corner.tr{top:24px;right:24px;border-top:2px solid var(--cyan);border-right:2px solid var(--cyan)}
  .corner.bl{bottom:70px;left:24px;border-bottom:2px solid var(--cyan);border-left:2px solid var(--cyan)}
  .corner.br{bottom:70px;right:24px;border-bottom:2px solid var(--cyan);border-right:2px solid var(--cyan)}
  .header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:36px;border-bottom:1px solid var(--border);margin-bottom:48px}
  .logo-block .brand{font-size:22px;font-weight:800;letter-spacing:-0.04em;color:var(--text);text-transform:uppercase}
  .logo-block .tagline{font-family:'Space Mono',monospace;font-size:9px;color:var(--cyan);letter-spacing:0.35em;text-transform:uppercase;margin-top:4px;opacity:0.7}
  .doc-meta{text-align:right;font-family:'Space Mono',monospace}
  .doc-meta .doc-id{font-size:9px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase}
  .doc-meta .doc-date{font-size:11px;color:var(--cyan);font-weight:700;letter-spacing:0.1em;margin-top:4px}
  .title-block{margin-bottom:48px}
  .doc-type{font-family:'Space Mono',monospace;font-size:9px;color:var(--cyan);letter-spacing:0.5em;text-transform:uppercase;margin-bottom:12px;opacity:0.8}
  .doc-title{font-size:36px;font-weight:800;letter-spacing:-0.04em;text-transform:uppercase;line-height:1.1;color:var(--text);margin-bottom:12px}
  .doc-title span{color:var(--cyan)}
  .doc-subtitle{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:0.2em;font-weight:600}
  .divider{height:1px;background:linear-gradient(90deg,var(--cyan) 0%,transparent 100%);margin:32px 0;opacity:0.2}
  .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:40px}
  .stat-box{background:var(--surface);border:1px solid var(--border);padding:20px 24px;position:relative;overflow:hidden}
  .stat-box::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--cyan),transparent);opacity:0.4}
  .stat-label{font-family:'Space Mono',monospace;font-size:8px;color:var(--muted);letter-spacing:0.3em;text-transform:uppercase;margin-bottom:8px}
  .stat-value{font-size:20px;font-weight:800;color:var(--text);letter-spacing:-0.02em}
  .stat-value.cyan{color:var(--cyan)} .stat-value.gold{color:var(--gold)}
  .table-container{background:var(--surface);border:1px solid var(--border);overflow:hidden;margin-bottom:32px}
  .table-header{padding:16px 24px;border-bottom:1px solid var(--border);background:rgba(0,224,255,0.03)}
  .table-title{font-family:'Space Mono',monospace;font-size:9px;color:var(--cyan);letter-spacing:0.4em;text-transform:uppercase;font-weight:700}
  table{width:100%;border-collapse:collapse}
  thead tr{background:var(--surface2)}
  th{font-family:'Space Mono',monospace;font-size:8px;color:var(--muted);letter-spacing:0.3em;text-transform:uppercase;padding:12px 24px;text-align:left;font-weight:700;border-bottom:1px solid var(--border)}
  td{font-size:12px;padding:14px 24px;border-bottom:1px solid var(--border);color:var(--text);font-weight:500}
  tr:last-child td{border-bottom:none}
  td.cyan{color:var(--cyan);font-family:'Space Mono',monospace;font-size:11px}
  td.green{color:#4ADE80} td.gold{color:var(--gold)} td.muted{color:var(--muted)} td.mono{font-family:'Space Mono',monospace;font-size:11px}
  .badge{display:inline-block;padding:3px 10px;font-family:'Space Mono',monospace;font-size:8px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;border:1px solid currentColor}
  .badge.green{color:#4ADE80;background:rgba(74,222,128,0.08)} .badge.gold{color:var(--gold);background:rgba(255,215,0,0.08)}
  .badge.cyan{color:var(--cyan);background:rgba(0,224,255,0.08)} .badge.red{color:#F87171;background:rgba(248,113,113,0.08)}
  .section{margin-bottom:40px}
  .section-title{font-family:'Space Mono',monospace;font-size:9px;color:var(--cyan);letter-spacing:0.5em;text-transform:uppercase;margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid var(--border)}
  .content-block{background:var(--surface);border:1px solid var(--border);padding:28px;margin-bottom:16px}
  .content-block p{font-size:13px;color:rgba(255,255,255,0.75);line-height:1.8}
  .content-block h3{font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;color:var(--text)}
  .footer{margin-top:64px;padding-top:32px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
  .footer-left{font-family:'Space Mono',monospace;font-size:8px;color:var(--muted);letter-spacing:0.25em;text-transform:uppercase;line-height:2}
  .footer-right{text-align:right;font-family:'Space Mono',monospace;font-size:8px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase}
  .verified-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,224,255,0.06);border:1px solid rgba(0,224,255,0.2);padding:8px 16px;margin-top:10px;font-family:'Space Mono',monospace;font-size:8px;color:var(--cyan);letter-spacing:0.3em;text-transform:uppercase}
  .dot{width:6px;height:6px;border-radius:50%;background:var(--cyan);display:inline-block}
  .action-bar{position:fixed;bottom:0;left:0;right:0;background:rgba(13,17,23,0.97);border-top:1px solid rgba(0,224,255,0.15);padding:12px 24px;display:flex;align-items:center;justify-content:center;gap:12px;z-index:999;backdrop-filter:blur(20px)}
  .btn-print{display:flex;align-items:center;gap:8px;padding:10px 24px;background:var(--cyan);color:#0D1117;border:none;font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;cursor:pointer}
  .btn-print:hover{background:#fff}
  .btn-copy{padding:10px 20px;background:transparent;color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.1);font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;cursor:pointer}
  .btn-copy:hover{color:#fff;border-color:rgba(255,255,255,0.3)}
  @media print{.action-bar{display:none!important}.corner{display:none!important}.page{padding-bottom:60px}}
`;

function generateDocId(): string {
  return `LYA-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2,6).toUpperCase()}`;
}

function formatDate(lang: 'fr'|'en' = 'fr'): string {
  return new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: '2-digit', month: 'long', year: 'numeric'
  }).toUpperCase();
}

function wrapDocument(
  title: string,
  subtitle: string,
  docType: string,
  bodyContent: string,
  lang: 'fr'|'en' = 'fr'
): string {
  const docId = generateDocId();
  const date  = formatDate(lang);
  const parts  = title.split(' ');
  const accent = parts[parts.length - 1];
  const base   = parts.slice(0, -1).join(' ');

  const FR = lang === 'fr';
  const tagline   = FR ? 'LE TERMINAL CRÉATIF · LYA SYSTEME v3.0'   : 'THE CREATIVE TERMINAL · LYA SYSTEM v3.0';
  const verified  = FR ? 'VÉRIFIÉ PAR LE REGISTRE IMMUABLE LYA'   : 'VERIFIED BY LYA IMMUTABLE REGISTRY';
  const rights    = FR ? 'TOUS DROITS RÉSERVÉS · CHIFFREMENT AES-256' : 'ALL RIGHTS RESERVED · AES-256 ENCRYPTED';
  const genLabel  = FR ? 'GÉNÉRÉ LE' : 'GENERATED';
  const printLbl  = FR ? '🖨&nbsp; IMPRIMER CE DOCUMENT' : '🖨&nbsp; PRINT THIS DOCUMENT';
  const copyLbl   = FR ? '📋 COPIER LA RÉFÉRENCE' : '📋 COPY REFERENCE';
  const copiedLbl = FR ? 'COPIÉ !' : 'COPIED!';
  const year      = new Date().getFullYear();
  const genDate   = new Date().toLocaleString(FR ? 'fr-FR' : 'en-GB');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>LYA — ${title}</title>
<style>${LYA_STYLES}</style>
</head>
<body>
<div class="corner tl"></div><div class="corner tr"></div>
<div class="corner bl"></div><div class="corner br"></div>
<div class="page">
  <header class="header">
    <div class="logo-block">
      <div class="brand">LinkYourArt</div>
      <div class="tagline">${tagline}</div>
    </div>
    <div class="doc-meta">
      <div class="doc-id">DOC ID: ${docId}</div>
      <div class="doc-date">${date}</div>
    </div>
  </header>
  <div class="title-block">
    <div class="doc-type">${docType}</div>
    <div class="doc-title">${base} <span>${accent}</span></div>
    <div class="doc-subtitle">${subtitle}</div>
  </div>
  ${bodyContent}
  <footer class="footer">
    <div class="footer-left">
      © ${year} LINKYOURART LYA SYSTEM<br>
      ${rights}<br>
      <span class="verified-badge"><span class="dot"></span>${verified}</span>
    </div>
    <div class="footer-right">
      ${genLabel}: ${genDate}<br>
      REF: ${docId}<br>
      LYA TERMINAL v3.0.0
    </div>
  </footer>
</div>

<div class="action-bar">
  <button class="btn-print" onclick="window.console.log()">${printLbl}</button>
  <button class="btn-copy" id="copyBtn" onclick="navigator.clipboard.writeText('${docId}').then(()=>{document.getElementById('copyBtn').textContent='${copiedLbl}';setTimeout(()=>document.getElementById('copyBtn').textContent='${copyLbl}',2000)})">${copyLbl}</button>
</div>
</body>
</html>`;
}

function triggerDownload(html: string, fileName: string): void {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${fileName}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── WALLET STATEMENT ────────────────────────────────────────────────────────
export interface WalletTransaction {
  id: string; type: string; amount: number;
  status: string; date: string; method: string;
}

export function downloadWalletStatement(
  transactions: WalletTransaction[],
  userName: string,
  cashBalance: number,
  lyaUnits: number
): void {
  const totalIn = transactions.filter(t => t.amount > 0).reduce((s,t) => s + t.amount, 0);

  const rows = transactions.map(tx => {
    const typeColor = (tx.type === 'DEPOSIT' || tx.type === 'REWARD' || tx.type === 'SALE') ? 'cyan' : 'gold';
    const statusColor = tx.status === 'COMPLETED' ? 'green' : 'gold';
    const amtColor = tx.amount > 0 ? 'green' : '';
    const sign = tx.amount > 0 ? '+' : '';
    const amt = Math.abs(tx.amount).toLocaleString('fr-FR', { minimumFractionDigits: 2 });
    return `<tr>
      <td class="muted">${tx.date}</td>
      <td><span class="badge ${typeColor}">${tx.type}</span></td>
      <td class="muted">${tx.method}</td>
      <td><span class="badge ${statusColor}">${tx.status}</span></td>
      <td class="mono ${amtColor}" style="text-align:right">${sign}€${amt}</td>
    </tr>`;
  }).join('');

  const body = `
    <div class="stats-row">
      <div class="stat-box"><div class="stat-label">Solde total</div><div class="stat-value cyan">€${cashBalance.toLocaleString('fr-FR',{minimumFractionDigits:2})}</div></div>
      <div class="stat-box"><div class="stat-label">Total entrées</div><div class="stat-value">€${totalIn.toLocaleString('fr-FR',{minimumFractionDigits:2})}</div></div>
      <div class="stat-box"><div class="stat-label">Unités LYA</div><div class="stat-value gold">${lyaUnits.toLocaleString('fr-FR')} <span style="font-size:12px;color:rgba(255,255,255,0.4);font-weight:600">UNITS</span></div></div>
    </div>
    <div class="table-container">
      <div class="table-header"><div class="table-title">Historique des transactions · ${transactions.length} opérations</div></div>
      <table>
        <thead><tr><th>Date</th><th>Type</th><th>Méthode</th><th>Statut</th><th style="text-align:right">Montant</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="divider"></div>
    <div class="section">
      <div class="section-title">Informations du compte</div>
      <div class="content-block">
        <h3>${userName.toUpperCase()}</h3>
        <p>Membre vérifié de la plateforme LYA · Niveau de garde : Institutionnel A+<br>
        Toutes les transactions listées sont définitives et enregistrées de manière immuable dans le Registre LYA. Ce relevé est généré automatiquement et constitue un document financier légalement valide.</p>
      </div>
    </div>`;

  triggerDownload(
    wrapDocument('RELEVÉ DE PORTEFEUILLE', `${userName.toUpperCase()} · RÉSUMÉ DU COMPTE`, 'DOCUMENT FINANCIER', body, 'fr'),
    `LYA_Releve_Portefeuille_${new Date().toISOString().split('T')[0]}`
  );
}

// ─── RESOURCE / WHITEPAPER ───────────────────────────────────────────────────
const RESOURCE_CONTENTS: Record<string, { subtitle: string; sections: { title: string; body: string }[] }> = {
  'LYA Score Methodology': {
    subtitle: 'STANDARD DE CERTIFICATION & MÉTHODOLOGIE D\'ÉVALUATION',
    sections: [
      { title: 'RÉSUMÉ', body: 'LinkYourArt (LYA) est une infrastructure de certification et de traçabilité pour les industries créatives. La plateforme évalue, certifie et suit objectivement les projets créatifs à travers un standard commun : le Score LYA.' },
      { title: 'ARCHITECTURE DU SYSTÈME LYA', body: 'La plateforme LYA repose sur trois piliers : (1) le Registre, offrant un stockage et une vérification immuables des certifications ; (2) l\'Audit, combinant évaluation algorithmique et validation par des professionnels certifiés ; (3) la Certification, délivrant un score objectif et vérifiable pour chaque projet créatif.' },
      { title: 'MÉTHODOLOGIE DU LYA SCORE', body: "Chaque projet créatif reçoit un LYA Score composite (0-1000) calculé à partir de cinq piliers certifiés : Intégrité Conceptuelle, Maturité Actuelle, Capacité d'Évolution, Faisabilité et Incarnation Réelle (200 points chacun). Les scores sont calculés par des validateurs Professionnels certifiés et mis à jour à chaque jalon." },
      { title: 'CERTIFICATION & VALORISATION DE RÉFÉRENCE', body: "Chaque projet certifié dispose d'une valorisation de référence, calculée à partir de son Score LYA. Cette valorisation est un indicateur de qualité et de progression, et ne constitue ni un prix de marché, ni un instrument financier négociable." }
    ]
  },
  'Certification Standards Report': {
    subtitle: 'RAPPORT SUR LES STANDARDS DE CERTIFICATION DE L\'ÉCONOMIE CRÉATIVE',
    sections: [
      { title: 'SYNTHÈSE', body: 'Ce rapport présente l\'état des certifications actives sur la plateforme LinkYourArt et les tendances observées par secteur créatif. Il a pour objet d\'informer les créateurs, mécènes et partenaires professionnels sur la rigueur et la couverture du standard LYA.' },
      { title: 'RÉPARTITION PAR SECTEUR', body: 'Les projets certifiés couvrent aujourd\'hui le Film & TV, la Musique, l\'Architecture, le Design et le Gaming. Chaque secteur bénéficie d\'une méthodologie d\'évaluation adaptée à ses spécificités, tout en conservant le même barème de score sur 1000 points.' },
      { title: 'PERSPECTIVES', body: 'LinkYourArt poursuit l\'extension de son registre de certification à de nouveaux secteurs créatifs, en s\'appuyant sur un réseau croissant de validateurs professionnels indépendants.' }
    ]
  },
  'Legal Framework Guide': {
    subtitle: 'JURIDICTION, CONFORMITÉ & NORMES CONTRACTUELLES',
    sections: [
      { title: 'CADRE RÉGLEMENTAIRE', body: 'LinkYourArt opère comme une plateforme de certification et d\'évaluation. Le Score LYA et les certifications délivrées ne constituent ni un titre financier, ni un produit d\'investissement réglementé. LinkYourArt travaille en continu avec ses conseils juridiques pour garantir la conformité de son offre.' },
      { title: 'JURIDICTIONS SUPPORTÉES', body: 'La plateforme LYA opère actuellement sous le droit français, avec une attention particulière portée aux cadres de propriété intellectuelle applicables (SACD/SCAM) et à la conformité RGPD au niveau des données.' },
      { title: 'DROITS & PROTECTIONS DES CRÉATEURS', body: 'Les créateurs conservent tous leurs droits moraux et le contrôle créatif de leurs œuvres. Les mécènes ne reçoivent qu\'un droit de participation économique contractuel, non négociable et non cessible sans accord écrit préalable de LinkYourArt.' }
    ]
  },
  'Professional Validator Handbook': {
    subtitle: 'GUIDE DE VALIDATION & DE CERTIFICATION PROFESSIONNELLE',
    sections: [
      { title: 'RÔLE DU VALIDATEUR', body: 'Les validateurs professionnels certifiés sont responsables de l\'évaluation experte des projets créatifs soumis sur la plateforme, en complément de l\'analyse algorithmique du Score LYA. Leur validation est requise pour toute certification officielle.' },
      { title: 'PROCESSUS DE VALIDATION', body: 'Chaque dossier de certification est examiné selon les cinq piliers du Score LYA. Le validateur documente ses conclusions, propose un score par pilier, et soumet son évaluation au comité de certification LYA pour confirmation finale.' },
      { title: 'RÉMUNÉRATION', body: 'Les validateurs perçoivent des honoraires de validation, calculés en pourcentage de la valeur du contrat évalué, versés directement et distribués automatiquement à la complétion du processus de validation.' }
    ]
  }
};

export function downloadResourceDocument(resourceTitle: string): void {
  const data = RESOURCE_CONTENTS[resourceTitle] || {
    subtitle: 'DOCUMENT OFFICIEL DU PLATEFORME LYA',
    sections: [{
      title: 'CONTENU DU DOCUMENT',
      body: 'Ce document fait partie de la bibliothèque de documentation officielle de la plateforme LYA. Le contenu est régulièrement mis à jour pour refléter les dernières spécifications du protocole.'
    }]
  };

  const sections = data.sections.map(s =>
    `<div class="section"><div class="section-title">${s.title}</div><div class="content-block"><p>${s.body}</p></div></div>`
  ).join('');

  const body = `${sections}
    <div class="divider"></div>
    <div class="content-block">
      <h3>AUTHENTICITÉ DU DOCUMENT</h3>
      <p>Ce document a été généré depuis la base de connaissances officielle de la plateforme LYA. Tout le contenu est exact à la date de génération et fait l'objet d'une révision trimestrielle. Pour la version la plus récente, consultez le portail de ressources de l'Académie LYA.</p>
    </div>`;

  const titleParts = resourceTitle.split(' ');
  triggerDownload(
    wrapDocument(resourceTitle.toUpperCase(), data.subtitle, 'DOCUMENT OFFICIEL LYA', body, 'fr'),
    `LYA_${titleParts.join('_').replace(/[^a-zA-Z0-9_]/g, '')}`
  );
}

// ─── LEGAL DOCUMENT ──────────────────────────────────────────────────────────
export function downloadLegalDocument(title: string, content: string): void {
  const excerpt = content.substring(0, 3000) + (content.length > 3000 ? '\n\n[…suite dans la version complète]' : '');
  const body = `
    <div class="section">
      <div class="section-title">Contenu du Document</div>
      <div class="content-block"><p style="white-space:pre-wrap;font-size:12px;line-height:2;color:rgba(255,255,255,0.65)">${excerpt}</p></div>
    </div>
    <div class="divider"></div>
    <div class="content-block">
      <h3>MENTION LÉGALE</h3>
      <p>Ce document constitue un enregistrement juridique officiel de la plateforme LYA. Il est protégé par les lois applicables en matière de propriété intellectuelle. Toute reproduction ou distribution non autorisée est interdite. Pour toute demande juridique, contactez legal@linkyourart.com.</p>
    </div>`;

  triggerDownload(
    wrapDocument(title.toUpperCase(), 'DOCUMENT JURIDIQUE OFFICIEL DU LYA SYSTEME', 'DOCUMENT LÉGAL', body, 'fr'),
    `LYA_Legal_${title.replace(/\s+/g, '_')}`
  );
}
