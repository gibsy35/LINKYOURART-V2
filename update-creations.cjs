const fs = require('fs');

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

const updatedCreations = `const INITIAL_CREATIONS: Creation[] = [
  {
    id: 'cre-1',
    title: 'Aura of Silence',
    artist: 'Elena Rostova',
    category: 'Arts Plastiques',
    description: 'Une sculpture minimaliste sculptée dans un bloc unique de marbre blanc de Carrare, explorant la dualité du vide et de la masse solide.',
    descriptionEn: 'A minimalist sculpture carved from a single block of white Carrara marble, exploring the duality of void and solid mass.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'certified',
    createdAt: '2026-02-15',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=800&q=80',
    lyaScore: 892,
    pillars: {
      provenance: 235,
      quality: 185,
      legal: 140,
      digital: 165,
      history: 167
    },
    certificationTier: 'Institutional',
    certifiedAt: '2026-03-01',
    certificateId: 'LYA-2026-AR091',
    expertRemarks: 'Dossier d\\\'une clarté exemplaire. La provenance physique est attestée par un acte notarié de la galerie d\\\'origine à Milan. L\\\'intégrité physique de la pierre est certifiée exempte de micro-fissures.',
    expertRemarksEn: 'An exemplarily clear dossier. The physical provenance is verified by a notarized deed from the original gallery in Milan. The physical integrity of the stone is certified free of micro-cracks.',
    estimatedValuation: 45000,
    milestones: [
      { date: '2026-02-15', title: 'Dépôt initial', desc: 'Création enregistrée dans le registre avec hash d\\\'authenticité.', descEn: 'Creation registered in the ledger with authenticity hash.', done: true },
      { date: '2026-02-17', title: 'Audit IA complété', desc: 'Analyse documentaire de provenance validée à 92%.', descEn: 'Documentary analysis of provenance validated at 92%.', done: true },
      { date: '2026-02-22', title: 'Revue Experts initiée', desc: 'Assigné au comité d\\\'évaluation fine arts EU.', descEn: 'Assigned to the EU fine arts evaluation committee.', done: true },
      { date: '2026-03-01', title: 'Certification émise', desc: 'Label LYA certifié avec score de 892/1000.', descEn: 'LYA certified label with score of 892/1000.', done: true }
    ],
    documents: [
      { name: 'Deed_of_Provenance_Rostova_2026.pdf', type: 'Acte de Provenance', status: 'verified' },
      { name: 'High_Res_3D_Scan_Metadata.json', type: 'Empreinte Digitale', status: 'verified' },
      { name: 'Carrara_Quarry_Extraction_Cert.pdf', type: 'Origine des Matériaux', status: 'verified' }
    ]
  },
  {
    id: 'cre-2',
    title: 'Shadows of Paris',
    artist: 'Thibault Laurent',
    category: 'Séries TV',
    description: 'Une bible de série dramatique et pilote écrit de 52 minutes pour une série noire policière au cœur des catacombes de Paris. Audité pour l\\\'originalité du scénario et les pré-achats de diffusion.',
    descriptionEn: 'A drama series bible and written 52-minute pilot for a noir detective series in the heart of Paris catacombs. Audited for script originality and pre-sale broadcast agreements.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'certified',
    createdAt: '2026-05-10',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    lyaScore: 915,
    pillars: {
      provenance: 240,
      quality: 180,
      legal: 145,
      digital: 175,
      history: 175
    },
    certificationTier: 'Institutional',
    certifiedAt: '2026-06-02',
    certificateId: 'LYA-2026-SP450',
    expertRemarks: 'Dépôt légal SACD certifié et chaînes de droits d\\\'auteur intégralement auditées et validées. Intégration de contrats de coproduction avec des diffuseurs majeurs d\\\'Europe Centrale.',
    expertRemarksEn: 'Certified SACD legal deposit and fully audited copyright chain of custody. Integrated co-production contracts with major Central European broadcasters.',
    estimatedValuation: 125000,
    milestones: [
      { date: '2026-05-10', title: 'Dépôt initial', desc: 'Scénario, bible de production et contrats enregistrés.', descEn: 'Screenplay, production bible, and contracts recorded.', done: true },
      { date: '2026-05-15', title: 'Audit IA complété', desc: 'Détection d\\\'originalité textuelle et conformité du plan de financement validés à 96%.', descEn: 'Textual originality detection and financing plan compliance validated at 96%.', done: true },
      { date: '2026-05-22', title: 'Revue Experts initiée', desc: 'Analysé par le collège d\\\'experts Industries Créatives et Audiovisuelles EU.', descEn: 'Analyzed by the EU Creative Industries and Audiovisual expert board.', done: true },
      { date: '2026-06-02', title: 'Certification émise', desc: 'Série TV auditée et certifiée avec LYA Score de 915/1000.', descEn: 'TV series audited and certified with LYA Score of 915/1000.', done: true }
    ],
    documents: [
      { name: 'Bible_Shadows_Of_Paris_V3.pdf', type: 'Livrable Artistique', status: 'verified' },
      { name: 'SACD_Author_Registration_2026.pdf', type: 'Dépôt de Droits d\\\'Auteur', status: 'verified' },
      { name: 'CoProduction_Agreement_Signed.pdf', type: 'Accord de Coproduction', status: 'verified' }
    ]
  },
  {
    id: 'cre-3',
    title: 'Chronicles of Light',
    artist: 'Marcus Vance',
    category: 'Arts Numériques',
    description: 'Une installation vidéo algorithmique autonome qui génère des flux visuels infinis basés sur les données en temps réel des vents solaires de la NASA.',
    descriptionEn: 'An autonomous algorithmic video installation generating infinite visual streams based on real-time solar wind data from NASA.',
    jurisdiction: 'US (SEC Compliant Track)',
    status: 'under_review',
    createdAt: '2026-07-01',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    lyaScore: null,
    pillars: {
      provenance: 210,
      quality: 160,
      legal: 120,
      digital: 190,
      history: 110
    },
    certificationTier: null,
    certifiedAt: null,
    certificateId: null,
    expertRemarks: null,
    expertRemarksEn: null,
    estimatedValuation: null,
    milestones: [
      { date: '2026-07-01', title: 'Dépôt initial', desc: 'Code source et paramètres d\\\'exécution archivés.', descEn: 'Source code and runtime parameters archived.', done: true },
      { date: '2026-07-03', title: 'Audit IA complété', desc: 'L\\\'IA a identifié une excellente traçabilité du code mais recommande de lier un contrat de licence.', descEn: 'AI identified excellent code traceability but recommends attaching a licensing contract.', done: true },
      { date: '2026-07-10', title: 'Revue Experts initiée', desc: 'Attribution aux auditeurs d\\\'art numérique US.', descEn: 'Allocated to US digital art auditors.', done: true },
      { date: '2026-07-15', title: 'Certification finale', desc: 'En attente de signature de l\\\'expert en chef.', descEn: 'Awaiting chief expert signature.', done: false }
    ],
    documents: [
      { name: 'Smart_Contract_Source_Code.sol', type: 'Code d\\\'Origine', status: 'verified' },
      { name: 'IP_Ownership_Declaration.pdf', type: 'Propriété Intellectuelle', status: 'verified' },
      { name: 'NASA_API_Integration_Agreement.pdf', type: 'Accord Partenaire', status: 'pending' }
    ]
  },
  {
    id: 'cre-4',
    title: 'Echoes of Tomorrow',
    artist: 'Sarah Jenkins',
    category: 'Podcast',
    description: 'Saison 1 d\\\'un podcast d\\\'investigation de 12 épisodes sur l\\\'impact social de l\\\'informatique quantique. Une production audio immersive certifiée pour ses droits de propriété intellectuelle.',
    descriptionEn: 'Season 1 of a 12-episode investigative podcast on the social impact of quantum computing. An immersive audio production certified for intellectual property rights.',
    jurisdiction: 'Global (Unrestricted)',
    status: 'certified',
    createdAt: '2026-04-18',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    lyaScore: 845,
    pillars: {
      provenance: 210,
      quality: 170,
      legal: 135,
      digital: 160,
      history: 170
    },
    certificationTier: 'Premium',
    certifiedAt: '2026-05-05',
    certificateId: 'LYA-2026-ET773',
    expertRemarks: 'Dossier impeccable de cession de droits pour tous les intervenants et compositeurs sonores. Excellente qualité de mastering audio attestée par le collège technique.',
    expertRemarksEn: 'Impeccable rights assignment files for all speakers and sound composers. Excellent audio mastering quality certified by the technical committee.',
    estimatedValuation: 28000,
    milestones: [
      { date: '2026-04-18', title: 'Dépôt initial', desc: 'Enregistrement audio master et fiches d\\\'identité des intervenants.', descEn: 'Master audio recording and speakers identity files registered.', done: true },
      { date: '2026-04-20', title: 'Audit IA complété', desc: 'Vérification du plagiat sonore et linguistique valide.', descEn: 'Acoustic and linguistic plagiarism checks validated.', done: true },
      { date: '2026-04-29', title: 'Revue Experts initiée', desc: 'Assigné aux auditeurs des médias sonores numériques.', descEn: 'Assigned to digital audio media auditors.', done: true },
      { date: '2026-05-05', title: 'Certification émise', desc: 'Podcast officiellement certifié avec LYA Score de 845/1000.', descEn: 'Podcast officially certified with LYA Score of 845/1000.', done: true }
    ],
    documents: [
      { name: 'Podcast_Master_Audio_S1.wav', type: 'Audio Source', status: 'verified' },
      { name: 'IP_Releases_All_Guests.pdf', type: 'Cession de Droits Invités', status: 'verified' },
      { name: 'Soundtrack_Licensing_Contracts.pdf', type: 'Contrats de Licence Musique', status: 'verified' }
    ]
  },
  {
    id: 'cre-5',
    title: 'Metamorphosis V',
    artist: 'Jin-Woo Park',
    category: 'Arts Plastiques',
    description: 'Peinture de grand format explorant l\\\'altération de la matière par superposition de pigments naturels et de fils de cuivre tressés.',
    descriptionEn: 'A large-format painting exploring the alteration of matter through layering natural pigments and braided copper wires.',
    jurisdiction: 'Global (Unrestricted)',
    status: 'audit_completed',
    createdAt: '2026-07-08',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    lyaScore: null,
    pillars: {
      provenance: 180,
      quality: 175,
      legal: 110,
      digital: 120,
      history: 140
    },
    certificationTier: null,
    certifiedAt: null,
    certificateId: null,
    expertRemarks: null,
    expertRemarksEn: null,
    estimatedValuation: null,
    milestones: [
      { date: '2026-07-08', title: 'Dépôt initial', desc: 'Dossier d\\\'œuvre d\\\'art physique créé.', descEn: 'Physical artwork dossier created.', done: true },
      { date: '2026-07-09', title: 'Audit IA complété', desc: 'Rapport généré. Score estimé à ~725 points.', descEn: 'Report generated. Estimated score around 725 points.', done: true },
      { date: '2026-07-12', title: 'Revue Experts initiée', desc: 'En attente de validation d\\\'assignation.', descEn: 'Awaiting assignment validation.', done: false },
      { date: '2026-07-20', title: 'Certification finale', desc: 'Validation réglementaire et technique.', descEn: 'Regulatory and technical validation.', done: false }
    ],
    documents: [
      { name: 'Studio_Certificate_JinWoo.pdf', type: 'Certificat d\\\'Atelier', status: 'verified' },
      { name: 'Spectrometry_Analysis_Copper.pdf', type: 'Analyse Spectrométrique', status: 'verified' }
    ]
  },
  {
    id: 'cre-6',
    title: 'Neon Symphony',
    artist: 'DJ Kaelen',
    category: 'Musique',
    description: 'Une œuvre musicale électronique conceptuelle de 45 minutes fusionnant synthétiseurs analogiques rétro et techniques d\\\'enregistrement binaural tridimensionnel.',
    descriptionEn: 'A 45-minute conceptual electronic musical work fusing retro analog synthesizers and three-dimensional binaural recording techniques.',
    jurisdiction: 'US (SEC Compliant Track)',
    status: 'certified',
    createdAt: '2026-03-22',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    lyaScore: 880,
    pillars: {
      provenance: 220,
      quality: 185,
      legal: 130,
      digital: 175,
      history: 170
    },
    certificationTier: 'Premium',
    certifiedAt: '2026-04-10',
    certificateId: 'LYA-2026-NS880',
    expertRemarks: 'Analyse d\\\'empreinte sonore effectuée. Score de qualité acoustique supérieur à la moyenne. Les fiches de métadonnées audio sont stockées avec hachage sur IPFS.',
    expertRemarksEn: 'Sound fingerprint analysis performed. Acoustic quality score above average. Audio metadata sheets are stored with hashes on IPFS.',
    estimatedValuation: 35000,
    milestones: [
      { date: '2026-03-22', title: 'Dépôt initial', desc: 'Fichier master audio FLAC 96kHz et feuilles d\\\'enregistrement déposés.', descEn: 'FLAC 96kHz master audio file and recording log sheets deposited.', done: true },
      { date: '2026-03-25', title: 'Audit IA complété', desc: 'Rapport d\\\'empreintes acoustiques validé.', descEn: 'Acoustic fingerprint report validated.', done: true },
      { date: '2026-03-30', title: 'Revue Experts initiée', desc: 'Assigné aux auditeurs musicaux US.', descEn: 'Assigned to US music auditors.', done: true },
      { date: '2026-04-10', title: 'Certification émise', desc: 'Œuvre de musique électronique certifiée.', descEn: 'Electronic musical work certified.', done: true }
    ],
    documents: [
      { name: 'Neon_Symphony_Binaural_Master.flac', type: 'Audio Master', status: 'verified' },
      { name: 'Copyright_US_Library_Congress_Cert.pdf', type: 'Enregistrement Copyright', status: 'verified' }
    ]
  },
  {
    id: 'cre-7',
    title: 'L\\\'Éphémère',
    artist: 'Claire Dubois',
    category: 'Photographie',
    description: 'Une série de 5 tirages photographiques argentiques capturant le brouillard matinal sur les rives de la Seine. Tirages limités à 3 exemplaires physiques numérotés et authentifiés.',
    descriptionEn: 'A series of 5 analog photography prints capturing the morning fog on the banks of the Seine. Limited edition of 3 physical prints, numbered and authenticated.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'certified',
    createdAt: '2026-01-20',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    lyaScore: 905,
    pillars: {
      provenance: 245,
      quality: 180,
      legal: 140,
      digital: 160,
      history: 180
    },
    certificationTier: 'Institutional',
    certifiedAt: '2026-02-12',
    certificateId: 'LYA-2026-LE905',
    expertRemarks: 'Tirages signés à la main. La plaque négative originale a été détruite devant huissier certifié pour garantir l\\\'unicité stricte de l\\\'édition de 3 tirages.',
    expertRemarksEn: 'Hand-signed prints. The original negative plate was destroyed before a certified bailiff to guarantee the strict uniqueness of the 3-print edition.',
    estimatedValuation: 18000,
    milestones: [
      { date: '2026-01-20', title: 'Dépôt initial', desc: 'Formulaire de tirage photographique d\\\'art et négatif enregistrés.', descEn: 'Fine art photography print form and negative registered.', done: true },
      { date: '2026-01-24', title: 'Audit IA complété', desc: 'Confirmation de la rareté et analyse de l\\\'acte d\\\'huissier.', descEn: 'Rarity confirmation and bailiff act analysis.', done: true },
      { date: '2026-02-02', title: 'Revue Experts initiée', desc: 'Assigné au collège d\\\'experts d\\\'art photographique.', descEn: 'Assigned to the photographic art expert committee.', done: true },
      { date: '2026-02-12', title: 'Certification émise', desc: 'Série photographique d\\\'art officiellement certifiée.', descEn: 'Fine art photography series officially certified.', done: true }
    ],
    documents: [
      { name: 'Photographic_Bailiff_Act_Signed.pdf', type: 'Acte d\\\'Huissier de Destruction', status: 'verified' },
      { name: 'Certificate_of_Argentic_Tirage_1_of_3.pdf', type: 'Certificat d\\\'Authenticité d\\\'Édition', status: 'verified' }
    ]
  },
  {
    id: 'cre-8',
    title: 'La Traversée de la Nuit',
    artist: 'Sophia Moretti',
    category: 'Films',
    description: 'Scénario complet, storyboard de production et contrat d\\\'option de distribution pour un projet de long-métrage de fiction cinématographique européen.',
    descriptionEn: 'Complete screenplay, production storyboard, and distribution option agreement for a European feature fiction film project.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'under_review',
    createdAt: '2026-07-10',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    lyaScore: null,
    pillars: {
      provenance: 220,
      quality: 165,
      legal: 130,
      digital: 150,
      history: 120
    },
    certificationTier: null,
    certifiedAt: null,
    certificateId: null,
    expertRemarks: null,
    expertRemarksEn: null,
    estimatedValuation: null,
    milestones: [
      { date: '2026-07-10', title: 'Dépôt initial', desc: 'Dossier de production cinématographique enregistré.', descEn: 'Film production dossier recorded.', done: true },
      { date: '2026-07-12', title: 'Audit IA complété', desc: 'Conformité des contrats d\\\'adaptation littéraire validée.', descEn: 'Literary adaptation contracts compliance validated.', done: true },
      { date: '2026-07-13', title: 'Revue Experts initiée', desc: 'Sujet assigné au collège Cinéma & Audiovisuel.', descEn: 'Subject assigned to the Cinema & Audiovisual board.', done: true },
      { date: '2026-07-25', title: 'Certification finale', desc: 'Attribution du score définitif.', descEn: 'Awaiting final score attribution.', done: false }
    ],
    documents: [
      { name: 'Script_La_Traversee_De_La_Nuit_V5.pdf', type: 'Scénario Cinématographique', status: 'verified' },
      { name: 'Literary_Adaptation_Option_Agreement.pdf', type: 'Contrat d\\\'Option d\\\'Adaptation', status: 'verified' }
    ]
  },
  {
    id: 'cre-9',
    title: 'L\\\'Éveil du Phoenix',
    artist: 'Maya Lin / Cie Rhéia',
    category: 'Arts du Spectacle Vivant',
    description: 'Une performance chorégraphique contemporaine hybridant danseurs physiques, captation de mouvement en temps réel (Mocap) et scénographie lumineuse générative interactive.',
    descriptionEn: 'A contemporary choreographic performance hybridizing physical dancers, real-time motion capture (Mocap), and interactive generative lighting scenography.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'certified',
    createdAt: '2026-06-15',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    lyaScore: 928,
    pillars: {
      provenance: 240,
      quality: 190,
      legal: 145,
      digital: 178,
      history: 175
    },
    certificationTier: 'Institutional',
    certifiedAt: '2026-07-01',
    certificateId: 'LYA-2026-EP928',
    expertRemarks: 'Dossier d\\\'écriture chorégraphique et fiches techniques de plateau validées. Contrats d\\\'engagement des artistes et de cession de droits pour l\\\'œuvre visuelle temps-réel déposés.',
    expertRemarksEn: 'Choreographic writing folder and technical stage specs validated. Artist engagement and copyright assignment contracts for the real-time visual work deposited.',
    estimatedValuation: 85000,
    milestones: [
      { date: '2026-06-15', title: 'Dépôt initial', desc: 'Dossier de production, chorégraphie et fiches d\\\'identité des artistes.', descEn: 'Production dossier, choreography, and artists identity sheets.', done: true },
      { date: '2026-06-20', title: 'Audit IA complété', desc: 'Vérification de l\\\'originalité scénique et des licences d\\\'outils numériques.', descEn: 'Scenic originality and digital tool licensing check.', done: true },
      { date: '2026-06-25', title: 'Revue Experts initiée', desc: 'Assigné au collège Arts du Spectacle & Scène.', descEn: 'Assigned to the Performing Arts & Stage board.', done: true },
      { date: '2026-07-01', title: 'Certification émise', desc: 'Performance scénique officiellement certifiée avec un score d\\\'excellence de 928/1000.', descEn: 'Stage performance officially certified with an excellence score of 928/1000.', done: true }
    ],
    documents: [
      { name: 'Dossier_Choregraphique_Eveil_Phoenix.pdf', type: 'Livrable Scénique', status: 'verified' },
      { name: 'Mocap_Integration_Workflow.pdf', type: 'Spécifications Techniques', status: 'verified' },
      { name: 'Artist_Contracts_CoProduction_Signed.pdf', type: 'Contrats Droits d\\\'Auteur', status: 'verified' }
    ]
  },
  {
    id: 'cre-10',
    title: 'Symphonie des Étoiles',
    artist: 'Aurélien Solis',
    category: 'Musique',
    description: 'Un album de musique classique contemporaine néo-minimaliste enregistré à la Philharmonie avec un orchestre de chambre et synthétiseurs modulaires.',
    descriptionEn: 'A neo-minimalist contemporary classical music album recorded at the Philharmonic with a chamber orchestra and modular synthesizers.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'certified',
    createdAt: '2026-05-02',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    lyaScore: 895,
    pillars: {
      provenance: 230,
      quality: 180,
      legal: 135,
      digital: 170,
      history: 180
    },
    certificationTier: 'Premium',
    certifiedAt: '2026-05-20',
    certificateId: 'LYA-2026-SE895',
    expertRemarks: 'Enregistrement de haute fidélité. Les contrats de cession des musiciens d\\\'orchestre ont été audités et sont pleinement conformes au droit de propriété européen.',
    expertRemarksEn: 'High fidelity recording. Orchestral musicians assignment contracts have been audited and fully comply with European property law.',
    estimatedValuation: 42000,
    milestones: [
      { date: '2026-05-02', title: 'Dépôt initial', desc: 'Dépôt des partitions numériques et des masters d\\\'enregistrement.', descEn: 'Digital sheet music and master recordings deposited.', done: true },
      { date: '2026-05-08', title: 'Audit IA complété', desc: 'Reconnaissance d\\\'empreinte mélodique validée sans litige.', descEn: 'Melodic fingerprint recognition validated without dispute.', done: true },
      { date: '2026-05-14', title: 'Revue Experts initiée', desc: 'Assigné aux experts en composition musicale classique.', descEn: 'Assigned to classical music composition experts.', done: true },
      { date: '2026-05-20', title: 'Certification émise', desc: 'Album certifié avec mention Premium.', descEn: 'Album certified with Premium mention.', done: true }
    ],
    documents: [
      { name: 'Symphony_Full_Orchestral_Score.pdf', type: 'Partitions', status: 'verified' },
      { name: 'Philharmonic_Recording_Session_Rights.pdf', type: 'Cession de Droits Orchestre', status: 'verified' }
    ]
  },
  {
    id: 'cre-11',
    title: 'Le Paradoxe Temporel',
    artist: 'Maxime Duroc & Lucie Ferret',
    category: 'Séries TV',
    description: 'Dossier complet de présentation (pitch deck), bible de série de science-fiction (10 épisodes de 52 min), scénarios des épisodes 1 et 2, ainsi qu\\\'un plan de coproduction internationale en Europe.',
    descriptionEn: 'Complete pitch deck, science-fiction series bible (10 x 52-minute episodes), episodes 1 and 2 scripts, and international co-production plan in Europe.',
    jurisdiction: 'EU (MiCA Ready)',
    status: 'under_review',
    createdAt: '2026-07-11',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    lyaScore: null,
    pillars: {
      provenance: 215,
      quality: 170,
      legal: 130,
      digital: 140,
      history: 110
    },
    certificationTier: null,
    certifiedAt: null,
    certificateId: null,
    expertRemarks: null,
    expertRemarksEn: null,
    estimatedValuation: null,
    milestones: [
      { date: '2026-07-11', title: 'Dépôt initial', desc: 'Présentation de la bible artistique et du scénario pilote.', descEn: 'Artistic bible and pilot script presentation.', done: true },
      { date: '2026-07-13', title: 'Audit IA complété', desc: 'Analyse d\\\'originalité narrative effectuée avec un taux de confiance de 98%.', descEn: 'Narrative originality analysis performed with a 98% confidence rate.', done: true },
      { date: '2026-07-14', title: 'Revue Experts initiée', desc: 'En cours d\\\'évaluation par le collège de scénaristes de télévision.', descEn: 'Awaiting television screenwriters committee evaluation.', done: true }
    ],
    documents: [
      { name: 'Bible_Saison1_Paradoxe_Temporel.pdf', type: 'Bible Artistique', status: 'verified' },
      { name: 'Script_Ep1_Pilote.pdf', type: 'Scénario Épisode 1', status: 'verified' }
    ]
  },
  {
    id: 'cre-12',
    title: 'Les Profondeurs de l\\\'Arctique',
    artist: 'Nils Amundsen',
    category: 'Podcast',
    description: 'Une série de reportages audio immersifs en conditions extrêmes sur l\\\'Arctique, combinant paysages sonores capturés en hydrophone et interviews de climatologues de renommée mondiale.',
    descriptionEn: 'A series of immersive audio reports in extreme Arctic conditions, combining hydrophone soundscapes and interviews with world-renowned climatologists.',
    jurisdiction: 'Global (Unrestricted)',
    status: 'certified',
    createdAt: '2026-02-10',
    image: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=800&q=80',
    lyaScore: 865,
    pillars: {
      provenance: 220,
      quality: 175,
      legal: 130,
      digital: 170,
      history: 170
    },
    certificationTier: 'Premium',
    certifiedAt: '2026-03-01',
    certificateId: 'LYA-2026-PA865',
    expertRemarks: 'Excellents enregistrements originaux sur le terrain. Fiches d\\\'autorisation d\\\'interview claires et conformes pour tous les scientifiques intervenants.',
    expertRemarksEn: 'Excellent original field recordings. Clear and compliant interview authorization sheets for all participating scientists.',
    estimatedValuation: 24000,
    milestones: [
      { date: '2026-02-10', title: 'Dépôt initial', desc: 'Master audio de 6 épisodes déposés et fiches d\\\'identité d\\\'intervenants.', descEn: 'Master audio of 6 episodes deposited and speaker identity files.', done: true },
      { date: '2026-02-15', title: 'Audit IA complété', desc: 'Revue sonore et d\\\'originalité textuelle sans incident.', descEn: 'Acoustic and textual originality review passed without incident.', done: true },
      { date: '2026-02-22', title: 'Revue Experts initiée', desc: 'Assigné aux auditeurs documentaires et médias sonores.', descEn: 'Assigned to documentary and sound media auditors.', done: true },
      { date: '2026-03-01', title: 'Certification émise', desc: 'Podcast certifié dans la catégorie Documentaires Immersifs.', descEn: 'Podcast certified in the Immersive Documentaries category.', done: true }
    ],
    documents: [
      { name: 'Arctique_Episode_1_Master.wav', type: 'Audio Master', status: 'verified' },
      { name: 'Interview_Release_Form_All_Scientists.pdf', type: 'Cession de Droits', status: 'verified' }
    ]
  },
  {
    id: 'cre-13',
    title: 'Silent Horizon',
    artist: 'Yuki Sato',
    category: 'Photographie',
    description: 'Une collection d\\\'art de 12 clichés argentiques noir et blanc représentant le minimalisme de l\\\'architecture moderne de Tokyo. Certificats d\\\'authenticité de tirage limités.',
    descriptionEn: 'An art collection of 12 black and white analog prints showcasing the minimalism of modern Tokyo architecture. Limited prints authenticity certificates.',
    jurisdiction: 'Global (Unrestricted)',
    status: 'certified',
    createdAt: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    lyaScore: 918,
    pillars: {
      provenance: 240,
      quality: 185,
      legal: 140,
      digital: 168,
      history: 185
    },
    certificationTier: 'Institutional',
    certifiedAt: '2026-03-18',
    certificateId: 'LYA-2026-SH918',
    expertRemarks: 'La collection a fait l\\\'objet d\\\'un dépôt d\\\'originalité de plaques négatives. Tirages d\\\'art validés par notre conseil technique pour la qualité du papier baryté.',
    expertRemarksEn: 'The collection has undergone negative plate originality deposit. Fine art prints validated by our technical board for fiber-based baryta paper quality.',
    estimatedValuation: 16000,
    milestones: [
      { date: '2026-03-01', title: 'Dépôt initial', desc: 'Scans haute résolution et fiches de tirages argentiques.', descEn: 'High-resolution scans and analog prints logging sheets.', done: true },
      { date: '2026-03-05', title: 'Audit IA complété', desc: 'Originalité visuelle analysée et certifiée à 99%.', descEn: 'Visual originality analyzed and certified at 99%.', done: true },
      { date: '2026-03-10', title: 'Revue Experts initiée', desc: 'Assigné aux auditeurs en photographie d\\\'art contemporain.', descEn: 'Assigned to contemporary photographic art auditors.', done: true },
      { date: '2026-03-18', title: 'Certification émise', desc: 'Collection d\\\'art photographique certifiée Institutional LYA.', descEn: 'Photographic art collection certified Institutional LYA.', done: true }
    ],
    documents: [
      { name: 'Silent_Horizon_Plates_1_to_12_Scans.pdf', type: 'Scans de Contrôle', status: 'verified' },
      { name: 'Authenticity_Prints_Certificate_Signed.pdf', type: 'Certificat de Tirage', status: 'verified' }
    ]
  }
];`;

const startIndex = content.indexOf('const INITIAL_CREATIONS: Creation[] = [');
if (startIndex === -1) {
  console.error("Could not find INITIAL_CREATIONS start in App.tsx");
  process.exit(1);
}

const endIndex = content.indexOf('const INITIAL_PROPOSALS: Proposal[] = [');
if (endIndex === -1) {
  console.error("Could not find INITIAL_PROPOSALS start in App.tsx");
  process.exit(1);
}

// Slice out the old creations array and slide in the new one
const before = content.slice(0, startIndex);
const after = content.slice(endIndex);

content = before + updatedCreations + '\n\n' + after;

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully updated INITIAL_CREATIONS with English translations!");
