
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { downloadLegalDocument } from '../utils/premiumDownload';
import { PageHeader } from '../components/ui/PageHeader';
import { Shield, Lock, FileText, Scale, Globe, AlertCircle, Target, MessageSquare, HelpCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface LegalViewProps {
  type: 'TERMS' | 'PRIVACY' | 'REGISTRY' | 'OUR_MODEL' | 'FAQ' | 'MENTIONS';
  onNotify: (msg: string) => void;
  onViewChange?: (view: any) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNotify, onViewChange }) => {
  const { t } = useTranslation();
  const [activeFaqTab, setActiveFaqTab] = React.useState('General');

  const faqThemes = [
    { id: 'General', label: t('General', 'Général') },
    { id: 'Creators', label: t('Creators', 'Créateurs') },
    { id: 'Mécènes & Partenaires', label: t('Patrons & Partners', 'Mécènes & Partenaires') },
    { id: 'Professionals', label: t('Professionals', 'Professionnels') },
    { id: 'Public', label: t('Public', 'Public') },
    { id: 'Security', label: t('Security', 'Sécurité') }
  ];

  const content = {
    TERMS: {
      title: t('Terms of Service', 'Conditions Générales d\'Utilisation'),
      subtitle: t('LYA Ecosystem Global Framework', 'Cadre Global de l\'Écosystème LYA'),
      sections: [
        {
          title: t('1. Philosophy & Accessibility', '1. Philosophie & Accessibilité'),
          text: t('LinkYourArt (LYA) is an inclusive ecosystem open to creators, partenaires créatifs, professionals, and the general public. We break down the barriers of the traditional art world to offer everyone a place in the creative economy. Our model is based on simplicity and fairness.', 'LinkYourArt (LYA) est un écosystème inclusif ouvert aux créateurs, aux partenaires créatifs, aux professionnels et au grand public. Nous brisons les barrières du monde de l\'art traditionnel pour offrir à chacun une place dans l\'économie de la création. Notre modèle repose sur la simplicité et l\'équité.')
        },
        {
          title: t('2. The LYA Certification Standard', '2. Le Standard de Certification LYA'),
          text: t('LYA uses a proprietary certification methodology (the LYA Score) to objectively evaluate creative projects across five certified dimensions. This certification standard is a quality and traceability tool. It does not constitute a financial instrument, security, or regulated investment product under applicable frameworks such as MiCA or SEC regulations.', 'LYA utilise une méthodologie de certification propriétaire (le Score LYA) pour évaluer objectivement les projets créatifs selon cinq dimensions certifiées. Ce standard de certification est un outil de qualité et de traçabilité. Il ne constitue ni un instrument financier, ni un titre, ni un produit d\'investissement réglementé au sens des cadres applicables tels que MiCA ou la SEC.')
        },
        {
          title: t('3. Participation for All', '3. Participation pour Tous'),
          text: t('Whether you are a world-renowned artist, a professional collector, or simply an art enthusiast, LYA offers you tools tailored to your needs. The platform makes objective creative certification accessible to everyone, with simple and transparent rules, regardless of professional status or financial background.', 'Que vous soyez un artiste de renommée mondiale, un collectionneur professionnel ou simplement un passionné d\'art, LYA vous propose des outils adaptés à vos besoins. La plateforme rend la certification créative objective accessible à tous, avec des règles claires et transparentes, indépendamment du statut professionnel ou du profil financier.')
        },
        {
          title: t('4. Transparency & Security', '4. Transparence & Sécurité'),
          text: t('Integrity is at the heart of LYA. Every creation and every certification is registered in our immutable registry. This ensures total transparency for all participants, guaranteeing that everyone\'s rights are protected and respected within our ecosystem.', 'L\'intégrité est au cœur de LYA. Chaque création et chaque certification est enregistrée dans notre registre immuable. Cela assure une transparence totale pour tous les participants, garantissant que les droits de chacun sont protégés et respectés au sein de notre écosystème.')
        },
        {
          title: t('5. A Standard for the Creative Economy', '5. Un Standard pour l\'Économie Créative'),
          text: t('LYA gives creators and those who support them a shared, objective language to talk about creative value. We believe art deserves the same rigor of evaluation as any other asset class, built specifically for the realities of creative projects and delivered in full compliance with applicable regulations.', 'LYA offre aux créateurs et à ceux qui les soutiennent un langage commun et objectif pour parler de la valeur créative. Nous pensons que l\'art mérite la même rigueur d\'évaluation que n\'importe quelle autre classe d\'actifs, pensée spécifiquement pour les réalités des projets créatifs et proposée dans le plein respect des réglementations applicables.')
        }
      ]
    },
    PRIVACY: {
      title: t('Privacy Policy', 'Politique de Confidentialité'),
      subtitle: t('Respect for Your Data and Independence', 'Respect de vos Données et Indépendance'),
      sections: [
        {
          title: t('1. Ethical Data Use', '1. Utilisation Éthique'),
          text: t('Your data belongs to you. We only collect the information necessary for the operation of the LYA ecosystem. Unlike financial systems that track every movement for external audits, LYA protects your privacy within its independent network.', 'Vos données vous appartiennent. Nous ne collectons que les informations nécessaires au fonctionnement de l\'écosystème LYA. Contrairement aux systèmes financiers qui traquent chaque mouvement pour des audits externes, LYA préserve votre vie privée au sein de son réseau indépendant.')
        },
        {
          title: t('2. Secure Storage', '2. Stockage Sécurisé'),
          text: t('We use modern encryption standards to ensure that your personal information remains confidential. Our infrastructure is designed to be robust and independent, ensuring the continuity of the ecosystem and the safety of your holdings.', 'Nous utilisons des standards de cryptage modernes pour assurer que vos informations personnelles restent confidentielles. Notre infrastructure est conçue pour être robuste et indépendante, assurant la continuité de l\'écosystème.')
        },
        {
          title: t('3. Full Control', '3. Contrôle Total'),
          text: t('You have complete control over your profile and your transactions. LYA is a platform that serves the creative community, and we strive to make data management as simple and intuitive as possible for all users, without the complexity of traditional administrative systems.', 'Vous avez un contrôle total sur votre profil et vos transactions. LYA est une plateforme au service de la communauté créative, et nous mettons tout en œuvre pour que la gestion des données soit simple et intuitive, sans la complexité des systèmes administratifs classiques.')
        }
      ]
    },
    REGISTRY: {
      title: t('Creative Registry', 'Registre Créatif'),
      subtitle: t('The Living Memory of the LYA Ecosystem', 'La Mémoire Vivante de l\'Écosystème LYA'),
      sections: [
        {
          title: t('1. Universal Rights Registry', '1. Registre de Droits Universel'),
          text: t('The LYA Registry is not a registre financier, but a creative one. It documents the ownership and history of each indexed project, ensuring that every creator and partenaire créatif has an immutable proof of their rights, transparent and accessible to everyone.', 'Le Registre LYA n\'est pas un livre de comptes financier, mais un registre créatif. Il documente la propriété et l\'historique de chaque projet indexé, assurant que chaque créateur et partenaire créatif possède une preuve immuable de ses droits.')
        },
        {
          title: t('2. Beyond Traditional Audits', '2. Au-delà des Audits Classiques'),
          text: t('Because we operate independently of MICA and SEC, our registry follows its own rules of transparency and artistic integrity. Validation is done by the community and creative experts, but also with the intervention of high-performance AI tools and specialized human audits, focusing on the quality and success of the projects rather than on financial bureaucracy.', 'Parce que nous opérons indépendamment de MICA et de la SEC, notre registre suit ses propres règles de transparence et d\'intégrité artistique. La validation se fait par la communauté et les experts créatifs, mais aussi avec l\'intervention de certains outils IA haute performance et d\'audits humains spécialisés.')
        }
      ]
    },
    MENTIONS: {
      title: t('Legal Mentions', 'Mentions Légales'),
      subtitle: t('Corporate Information', 'Informations Corporatives'),
      sections: [
        {
          title: t('1. Identity', '1. Identité'),
          text: t('LINKYOURART SASU, based in READING, United Kingdom. Founded by Jean-Baptiste LEQUIME. LINKYOURART SASU is an independent platform dedicated to the creative economy. Contact: contact@linkyourart.com', 'LINKYOURART SASU, basé à READING, United Kingdom. Fondée par Jean-Baptiste LEQUIME. LINKYOURART SASU est une plateforme indépendante dédiée à l\'économie créative. Contact : contact@linkyourart.com')
        },
        {
          title: t('2. Hosting', '2. Hébergement'),
          text: t('LinkYourArt is hosted by Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) and uses Firebase by Google LLC for database and authentication services. Data is stored in accordance with GDPR requirements.', 'LinkYourArt est hébergé par Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis) et utilise Firebase de Google LLC pour les services de base de données et d\'authentification. Les données sont stockées conformément aux exigences du RGPD.')
        },
        {
          title: t('3. Intellectual Property', '3. Propriété Intellectuelle'),
          text: t('All content on LinkYourArt (logo, name, design, LYA Score algorithm and certification methodology) is the exclusive property of LINKYOURART SASU. Any reproduction, even partial, is prohibited without prior written authorization. Creative projects registered on the platform remain the exclusive property of their creators.', 'Tous les contenus de LinkYourArt (logo, nom, design, algorithme LYA Score, méthodologie de certification) sont la propriété exclusive de LINKYOURART SASU. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable. Les projets créatifs enregistrés sur la plateforme restent la propriété exclusive de leurs créateurs.')
        },
        {
          title: t('4. Personal Data & GDPR', '4. Données Personnelles & RGPD'),
          text: t('LinkYourArt collects and processes personal data (name, email, role, wallet data) solely for the purpose of operating the platform. In accordance with GDPR, you have the right to access, rectify, delete and port your data. Data Protection Officer contact: contact@linkyourart.com — Your data is never sold to third parties.', 'LinkYourArt collecte et traite des données personnelles (nom, email, rôle, données de portefeuille) uniquement dans le cadre du fonctionnement de la plateforme. Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et de portabilité de vos données. Contact DPO : contact@linkyourart.com — Vos données ne sont jamais vendues à des tiers.')
        },
        {
          title: t('5. Cookies', '5. Cookies'),
          text: t('LinkYourArt uses only essential technical cookies necessary for authentication and platform operation (Firebase session, language preference, currency preference). No advertising or tracking cookies are used. You can disable cookies in your browser settings, but some features may no longer work correctly.', 'LinkYourArt utilise uniquement des cookies techniques essentiels nécessaires à l\'authentification et au fonctionnement de la plateforme (session Firebase, préférence de langue, préférence de devise). Aucun cookie publicitaire ou de traçage n\'est utilisé. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais certaines fonctionnalités pourraient ne plus fonctionner correctement.')
        },
        {
          title: t('6. Limitation of Liability', '6. Limitation de Responsabilité'),
          text: t('LinkYourArt acts as a certification and evaluation platform connecting creators, patrons and professionals. The LYA Score is an objective quality index and does not constitute a financial instrument, security, or regulated investment product. LinkYourArt cannot be held liable for a creative project failing to achieve its stated objectives. Supporting a creative project is a gesture of patronage and is undertaken at your own discretion.', 'LinkYourArt agit en tant que plateforme de certification et d\'évaluation reliant créateurs, mécènes et professionnels. Le Score LYA est un indice de qualité objectif et ne constitue ni un instrument financier, ni un titre, ni un produit d\'investissement réglementé. LinkYourArt ne peut être tenu responsable si un projet créatif n\'atteint pas les objectifs annoncés. Soutenir un projet créatif relève d\'une démarche de mécénat, entreprise à votre entière discrétion.')
        },
        {
          title: t('7. Withdrawal Right', '7. Droit de Rétractation'),
          text: t('The 14-day withdrawal right applies to the first payment made for a certification service or subscription, provided the corresponding audit or certification process has not yet started. Once a certification process has started, payments are final. Withdrawal requests must be sent to contact@linkyourart.com within the applicable period.', 'Le droit de rétractation de 14 jours s\'applique au premier paiement effectué pour un service de certification ou un abonnement, à condition que le processus d\'audit ou de certification correspondant n\'ait pas encore débuté. Une fois le processus de certification engagé, les paiements sont définitifs. Les demandes de rétractation doivent être envoyées à contact@linkyourart.com dans le délai applicable.')
        }
      ]
    },
    OUR_MODEL: {
      title: t('Our Model', 'Notre Modèle'),
      subtitle: t('A New Standard for Global Creation', 'Un Nouveau Standard pour la Création Mondiale'),
      sections: [
        {
          title: t('1. Simple & For Everyone', '1. Simple & Pour Tous'),
          text: t('The LYA Score turns complex creative evaluation into a simple, transparent standard. This allows anyone—artist, collector, or casual fan—to understand and follow a project\'s certified progress. No need for professional status or financial background; certification becomes a language that belongs to everyone.', 'Le Score LYA transforme l\'évaluation créative complexe en un standard simple et transparent. Cela permet à n\'importe qui—artiste, collectionneur ou simple fan—de comprendre et de suivre la progression certifiée d\'un projet. Nul besoin de statut professionnel ou de profil financier ; la certification devient un langage qui appartient à tous.')
        },
        {
          title: t('2. A Standard Built for Compliance', '2. Un Standard Pensé pour la Conformité'),
          text: t('We designed our certification standard with regulatory clarity as a founding principle, not an afterthought. Our current offering focuses on objective certification and evaluation, deliberately excluding negotiable financial instruments while we work with legal counsel on the appropriate framework for any future economic layer.', 'Nous avons conçu notre standard de certification avec la clarté réglementaire comme principe fondateur, pas comme une réflexion après-coup. Notre offre actuelle se concentre sur la certification et l\'évaluation objectives, en excluant délibérément tout instrument financier négociable, le temps de travailler avec nos conseils juridiques sur le cadre approprié pour une éventuelle couche économique future.')
        },
        {
          title: t('3. Collaborative Success', '3. Un Succès Collaboratif'),
          text: t('LinkYourArt is a bridge. We unite creators who need visibility and validation with a community that wants to discover and support new works. This model ensures that recognition is shared and grounded in objective, verifiable certification.', 'LinkYourArt est un pont. Nous unissons les créateurs qui ont besoin de visibilité et de validation avec une communauté qui veut découvrir et soutenir des œuvres nouvelles. Ce modèle garantit que la reconnaissance est partagée et ancrée dans une certification objective et vérifiable.')
        }
      ]
    },
    FAQ: {
      title: t('FAQ & Support', 'FAQ & Support'),
      subtitle: t('Simple Answers for Your Journey', 'Des Réponses Simples pour votre Parcours'),
      sections: [] // Handled by tabs
    }
  };

  const faqContent = {
    General: [
      { 
        q: t('What is LinkYourArt (LYA)?', 'Qu\'est-ce que LinkYourArt (LYA) ?'), 
        a: t('LYA is a creative certification ecosystem where creators, patrons and professionals connect around objective, verifiable evaluation of artistic projects. It is a platform that makes rigorous creative certification accessible to everyone.', 'LYA est un écosystème de certification créative où créateurs, mécènes et professionnels se rencontrent autour d\'une évaluation objective et vérifiable des projets artistiques. C\'est une plateforme qui rend la certification créative rigoureuse accessible à tous.') 
      },
      { 
        q: t('Who can use LYA?', 'Qui peut utiliser LYA ?'), 
        a: t('Everyone! LYA is designed for creators, creative partners, professionals, and the general public. We offer a simple and fair model for all actors in the artistic world.', 'Tout le monde ! LYA est conçu pour les créateurs, partenaires créatifs, professionnels et le grand public. Nous proposons un modèle simple et équitable pour tous les acteurs du monde artistique.') 
      },
      { 
        q: t('Is LYA regulated like a bank or by MICA/SEC?', 'LYA est-elle réglementée par MICA ou la SEC ?'), 
        a: t('LYA is a certification and evaluation platform, not a financial institution. Our current offering (certification, LYA Score, registry) does not involve negotiable financial instruments and is built with regulatory clarity as a founding principle. We work with legal counsel on an ongoing basis to ensure our offering remains compliant as the platform evolves.', 'LYA est une plateforme de certification et d\'évaluation, pas un établissement financier. Notre offre actuelle (certification, Score LYA, registre) n\'implique aucun instrument financier négociable et a été conçue avec la clarté réglementaire comme principe fondateur. Nous travaillons en continu avec nos conseils juridiques pour garantir la conformité de notre offre à mesure que la plateforme évolue.') 
      },
      { 
        q: t('What are the platform fees?', 'Quels sont les frais de la plateforme ?'), 
        a: t('Transparency is key. Fees apply to certification services (a fixed fee depending on the certification tier) and to the Pro subscription for advanced features. There are no hidden transaction fees.', 'La transparence est essentielle. Des frais s\'appliquent aux services de certification (un tarif fixe selon le palier de certification) et à l\'abonnement Pro pour les fonctionnalités avancées. Aucun frais de transaction caché.') 
      }
    ],
    Security: [
      { 
        q: t('Is my support secure?', 'Mon soutien est-il sécurisé ?'), 
        a: t('All rights and certifications are registered in our secure, immutable registry. Our focus is on the integrity of the certification process and the protection of creative rights data.', 'Tous les droits et certifications sont enregistrés dans notre registre sécurisé et immuable. Notre priorité est l\'intégrité du processus de certification et la protection des données relatives aux droits créatifs.') 
      },
      {
        q: t('Is my personal data protected?', 'Mes données personnelles sont-elles protégées ?'),
        a: t('Yes. LYA uses AES-256 encryption and never shares your data with third parties. You can request deletion of your account and all associated data at any time.', 'Oui. LYA utilise le chiffrement AES-256 et ne partage jamais vos données avec des tiers. Vous pouvez demander la suppression de votre compte et de toutes les données associées à tout moment.')
      }
    ],
    Creators: [
      {
        q: t('How do I submit a creative project?', 'Comment soumettre un projet créatif ?'),
        a: t('Go to the LinkArt section and fill in your project details: title, category, description, budget and milestones. Once submitted, your project enters the LYA validation queue.', 'Rendez-vous dans la section LinkArt et renseignez les détails de votre projet : titre, catégorie, description, budget et jalons. Une fois soumis, votre projet entre dans la file de validation LYA.')
      },
      {
        q: t('What types of projects are accepted?', 'Quels types de projets sont acceptés ?'),
        a: t('LYA accepts all creative industries: cinema, music, visual arts, architecture, gaming, fashion, photography, literature and more. Any project with commercial potential and documented creative rights can be submitted.', 'LYA accepte toutes les industries créatives : cinéma, musique, arts visuels, architecture, gaming, mode, photographie, littérature et plus encore. Tout projet avec un potentiel commercial et des droits créatifs documentés peut être soumis.')
      },
      {
        q: t('How is the LYA Score calculated for my project?', 'Comment est calculé le Score LYA pour mon projet ?'),
        a: t('The LYA Score (0-1000) combines 5 dimensions: Creative Quality (25%), Market Potential (25%), Legal Compliance (20%), Innovation Index (15%) and Growth Trajectory (15%). It is evaluated by certified Professional validators and updated as milestones are completed.', 'Le Score LYA (0-1000) combine 5 dimensions : Qualité Créative (25%), Potentiel de Marché (25%), Conformité Juridique (20%), Indice d\'Innovation (15%) et Trajectoire de Croissance (15%). Il est évalué par des validateurs Professionnels certifiés et mis à jour au fil des jalons.')
      },
      {
        q: t('Do I keep full creative control of my project?', 'Est-ce que je garde le contrôle créatif de mon projet ?'),
        a: t('Absolutely. Creators retain all moral rights and creative control. Patrons only receive economic participation rights as defined in each project\'s certified contract terms.', 'Absolument. Les créateurs conservent tous leurs droits moraux et le contrôle créatif. Les mécènes ne reçoivent que des droits de participation économique tels que définis dans les conditions contractuelles certifiées de chaque projet.')
      }
    ],
    "Mécènes & Partenaires": [
      {
        q: t('How do I support a creative project?', 'Comment soutenir un projet créatif ?'),
        a: t('Browse the Registry to discover certified projects. Each project displays its LYA Score, audit status and certified milestones. You can support a project directly according to the terms defined in its certified contract.', 'Parcourez le Registre pour découvrir des projets certifiés. Chaque projet affiche son Score LYA, son statut d\'audit et ses jalons certifiés. Vous pouvez soutenir un projet directement selon les modalités définies dans son contrat certifié.')
      },
      {
        q: t('What do I gain by supporting a project?', 'Qu\'est-ce que j\'obtiens en soutenant un projet ?'),
        a: t('Support terms are defined individually in each project\'s certified contract, which may include revenue participation triggered by verified milestone completions. The LYA Score reflects the project\'s certified quality and progress, not a tradeable market value.', 'Les modalités de soutien sont définies individuellement dans le contrat certifié de chaque projet, qui peut inclure une participation aux revenus déclenchée par la complétion de jalons vérifiés. Le Score LYA reflète la qualité et la progression certifiées du projet, pas une valeur de marché négociable.')
      },
      {
        q: t('Can I transfer my participation to someone else?', 'Puis-je transférer ma participation à quelqu\'un d\'autre ?'),
        a: t('Participation transfers are not currently supported on LinkYourArt. This capability is documented for a future phase, subject to regulatory clearance.', 'Les transferts de participation ne sont pas disponibles actuellement sur LinkYourArt. Cette fonctionnalité est documentée pour une phase future, sous réserve d\'autorisation réglementaire.')
      }
    ],
    Professionals: [
      {
        q: t('How do I become a validated Professional on LYA?', 'Comment devenir un Professionnel validé sur LYA ?'),
        a: t('Submit a Professional Verification request in the Apply for Verification section. Provide your professional credentials, portfolio and references. Validation is reviewed by the LYA committee within 5 to 10 business days.', 'Soumettez une demande de Vérification Professionnelle dans la section Postuler à la Vérification. Fournissez vos accréditations professionnelles, portfolio et références. La validation est examinée par le comité LYA sous 5 à 10 jours ouvrés.')
      },
      {
        q: t('What does Pro status unlock?', 'Qu\'est-ce que le statut Pro débloque ?'),
        a: t('Pro status gives access to: the Validation hub to evaluate projects and earn fees, the Lounge Pro for professional networking, advanced AI analytics, governance voting rights and API access.', 'Le statut Pro donne accès à : le hub de Validation pour évaluer les projets et percevoir des honoraires, le Lounge Pro pour le réseautage professionnel, les analyses IA avancées, les droits de vote en gouvernance et l\'accès API.')
      },
      {
        q: t('How are Professional validators compensated?', 'Comment les validateurs Professionnels sont-ils rémunérés ?'),
        a: t('Validators earn a validation fee (percentage of the contract value) for each project they evaluate. Fees are paid directly and distributed automatically upon completion of the validation process.', 'Les validateurs perçoivent des honoraires de validation (pourcentage de la valeur du contrat) pour chaque projet évalué. Les honoraires sont versés directement et distribués automatiquement à la complétion du processus de validation.')
      }
    ],
    Public: [
      {
        q: t('Do I need an account to browse LYA?', 'Ai-je besoin d\'un compte pour naviguer sur LYA ?'),
        a: t('No. The home page and Registry are accessible in read-only mode without an account. To support a project, submit a project or interact with the platform, you need to create a free account.', 'Non. La page d\'accueil et le Registre sont accessibles en lecture seule sans compte. Pour soutenir un projet, soumettre un projet ou interagir avec la plateforme, vous devez créer un compte gratuit.')
      },
      {
        q: t('Is LYA free to use?', 'LYA est-il gratuit ?'),
        a: t('Creating an account and browsing the platform is completely free. Fees only apply to certification services and Pro subscription for advanced features.', 'La création d\'un compte et la navigation sur la plateforme sont entièrement gratuites. Des frais s\'appliquent uniquement aux services de certification et à l\'abonnement Pro pour les fonctionnalités avancées.')
      },
      {
        q: t('In which countries is LYA available?', 'Dans quels pays LYA est-il disponible ?'),
        a: t('LYA is available worldwide. The platform currently supports contracts under French Law, English Law and US Federal IP frameworks, with more jurisdictions being added regularly.', 'LYA est disponible dans le monde entier. La plateforme supporte actuellement les contrats sous droit français, droit anglais et cadres de PI fédéraux américains, avec d\'autres juridictions ajoutées régulièrement.')
      }
    ]
  };

  const activeContent = content[type];

  return (
    <div className="min-h-screen pb-24 relative overflow-hidden bg-surface-dim">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-cyan/10 to-transparent opacity-30" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-cyan/20 to-transparent" />
      </div>

      <div className="relative z-10">
        <PageHeader 
          titleWhite={activeContent.title.split(' ')[0]}
          titleAccent={activeContent.title.split(' ').slice(1).join(' ')}
          description={activeContent.subtitle}
          accentColor="text-primary-cyan"
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-end gap-8 -mt-32 mb-12 relative z-20">
          <div className="flex flex-wrap gap-4">
            <div className="px-4 sm:px-8 py-4 sm:py-5 bg-surface-dim/80 border border-white/10 rounded-2xl backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[10px] text-primary-cyan uppercase tracking-[0.2em] font-black mb-1 opacity-70">{t('Ecosystem Status', 'Statut de l\'Écosystème')}</div>
              <div className="text-3xl font-black text-white tracking-tighter uppercase">{t('Active & Secure', 'ACTIF & SÉCURISÉ')}</div>
            </div>
            <div className="px-4 sm:px-8 py-4 sm:py-5 bg-surface-dim/80 border border-white/10 rounded-2xl backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[10px] text-accent-gold uppercase tracking-[0.2em] font-black mb-1 opacity-70">{t('Protocol Version', 'Version du Protocole')}</div>
              <div className="text-3xl font-black text-white tracking-tighter uppercase">V4.2.0</div>
            </div>
          </div>
        </div>

        {type === 'FAQ' && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-8 md:mb-16 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              {faqThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveFaqTab(theme.id)}
                  className={`px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all duration-500 relative overflow-hidden group ${
                    activeFaqTab === theme.id 
                      ? 'text-surface-dim' 
                      : 'text-on-surface-variant hover:text-white'
                  }`}
                >
                  {activeFaqTab === theme.id && (
                    <div className="absolute inset-0 bg-primary-cyan shadow-[0_0_40px_rgba(0,224,255,0.4)]" />
                  )}
                  <span className="relative z-10">{theme.label}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFaqTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-2"
                >
                  {(faqContent[activeFaqTab as keyof typeof faqContent] || []).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="group relative"
                    >
                      {/* Depth Effect Background */}
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-cyan/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative glass-panel p-10 rounded-[2.5rem] border-white/10 bg-surface-dim/40 hover:bg-surface-dim/60 hover:border-primary-cyan/30 transition-all duration-500 shadow-2xl h-full flex flex-col gap-6">
                        <div className="flex gap-6 items-start">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-cyan/20 to-primary-cyan/5 border border-primary-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                            <HelpCircle size={24} className="text-primary-cyan shadow-[0_0_15px_rgba(0,224,255,0.5)]" />
                          </div>
                          <h3 className="text-xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-primary-cyan transition-colors duration-500 pt-1">
                            {item.q}
                          </h3>
                        </div>
                        <p className="text-base text-gray-400 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-all duration-500 text-justify">
                          {item.a}
                        </p>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-1 h-1 rounded-full bg-primary-cyan animate-pulse" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {type !== 'FAQ' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {activeContent.sections.map((section, i) => (
              <motion.section 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-cyan/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative glass-panel p-12 rounded-[3rem] border-white/10 bg-surface-dim/60 hover:bg-surface-dim/80 hover:border-primary-cyan/30 transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col h-full">
                  {/* Dynamic Abstract Background Elements */}
                  <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <div className="absolute top-10 right-10 w-80 h-80 border border-white/10 rounded-full rotate-45 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000" />
                  </div>
                  
                  <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-[0.15] border-white/5 transition-all group-hover:scale-110 duration-1000 rotate-12">
                    {type === 'TERMS' ? <Scale size={180} /> : <Lock size={180} />}
                  </div>

                  <div className="flex items-center gap-6 mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary-cyan/10 border border-primary-cyan/20 flex items-center justify-center text-primary-cyan group-hover:shadow-[0_0_20px_rgba(0,224,255,0.3)] transition-shadow">
                      <div className="w-3 h-3 rounded-full bg-primary-cyan animate-pulse shadow-[0_0_10px_rgba(0,224,255,0.8)]" />
                    </div>
                    <h2 className="text-2xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-primary-cyan transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-base text-gray-400 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity relative z-10 text-justify">
                    {section.text}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>
        )}

        <footer className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Shield className="text-primary-cyan" size={24} />
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white">{t('Verified by LYA Legal', 'Vérifié par LYA Legal')}</div>
              <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Hash: 0x82f...a92e</div>
            </div>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => {
                const content = document.querySelector('article')?.innerText || 'LYA Legal Document';
                downloadLegalDocument('LYA Registry Terms', content);
                onNotify('DOCUMENT DOWNLOADED');
              }}
              className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors"
            >
              {t('Download PDF', 'Télécharger PDF')}
            </button>
            <button 
              onClick={() => onViewChange('LEGAL_MENTIONS')}
              className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors"
            >
              {t('Archive Access', 'Accès Archives')}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
