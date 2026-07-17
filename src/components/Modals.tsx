import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Shield, 
  ArrowRight, 
  Zap, 
  Target, 
  Lock, 
  Info, 
  Star, 
  Download, 
  Plus, 
  Minus, 
  TrendingUp, 
  TrendingDown, 
  Coins, 
  Activity, 
  CheckCircle2, 
  Scale,
  Award,
  Upload,
  FileCheck2,
  AlertTriangle
} from 'lucide-react';
import { Contract } from '../types';
import { useTranslation } from '../context/LanguageContext';
import { useCurrency } from '../context/CurrencyContext';
import { simulatePDFDownload } from '../utils/download';
import { CONTRACTS } from '../types';
import { getSafeImageUrl } from '../utils/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence mode="sync">
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-surface-dim/90 backdrop-blur-sm z-[200]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-[201] p-0 sm:p-6"
          >
            <div className="bg-surface-dim border border-white/10 w-full max-w-2xl pointer-events-auto relative shadow-2xl h-full sm:h-auto max-h-screen sm:max-h-[85vh] md:max-h-[92vh] font-mono custom-scrollbar flex flex-col sm:rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5 sticky top-0 z-20 backdrop-blur-xl shrink-0">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{title}</span>
                <button onClick={onClose} className="text-on-surface-variant hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-4 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                {children}
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-cyan/30 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-cyan/30 pointer-events-none" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const ContractDetailModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  contract: Contract | null;
  onViewFull?: (contract: Contract) => void;
}> = ({ isOpen, onClose, contract, onViewFull }) => {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();
  if (!contract) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`REGISTRY_INTEL: ${contract.registryIndex}`}>
       <div className="space-y-6">
          <div className="aspect-[16/9] w-full relative rounded-2xl overflow-hidden border border-white/10 mb-4 shadow-xl">
             <img 
               src={getSafeImageUrl(contract.image, contract.category)} 
               className="w-full h-full object-cover" 
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
             <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                   <span className="text-[10px] font-black uppercase text-primary-cyan px-3 py-1 bg-primary-cyan/10 border border-primary-cyan/20 rounded-md tracking-[0.2em]">{contract.category}</span>
                   <h3 className="text-2xl font-black text-white mt-3 uppercase tracking-tighter leading-none">{contract.name}</h3>
                </div>
                <div className="text-sm font-black text-accent-gold uppercase font-mono tracking-widest">
                   {contract.rarity}
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-1">CONSOLIDATED SCORE</div>
                <div className="text-xl font-black text-primary-cyan">{contract.totalScore || 750}/1000</div>
             </div>
             <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-1">{t('ESTIMATED VALUATION', 'VALORISATION ESTIMÉE')}</div>
                <div className="text-xl font-black text-emerald-400">{formatPrice(contract.unitValue)}</div>
             </div>
          </div>
          
          <p className="text-xs text-white/60 leading-relaxed text-justify px-1">{contract.description}</p>
          
          <div className="pt-2">
             <button 
                onClick={() => { onClose(); if (onViewFull) onViewFull(contract); }}
                className="w-full py-4 bg-primary-cyan text-surface-dim font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-all shadow-lg active:scale-95"
             >
                {t('VIEW FULL CERTIFICATION', 'VOIR LA FICHE COMPLÈTE')}
             </button>
          </div>
       </div>
    </Modal>
  );
};

export const ProfessionalOnboardingModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onVerify: (data: any) => void;
  isVerifying: boolean;
}> = ({ isOpen, onClose, onVerify, isVerifying }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    entityName: '',
    registrationNumber: '',
    authority: 'EU Markets',
    authorizedSignatory: '',
    uploadedDocs: false
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      onVerify(formData);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="PROFESSIONAL_ONBOARDING: CERTIFIED_VALIDATOR">
       <div className="space-y-6">
         <div className="flex gap-2 items-center justify-between border-b border-white/5 pb-4">
           {[1, 2, 3].map(i => (
             <div key={i} className="flex-1 flex items-center gap-2">
               <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${step >= i ? 'bg-primary-cyan text-surface-dim' : 'bg-white/5 text-white/35 border border-white/10'}`}>
                 {i}
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-white/40 hidden sm:inline">
                 {i === 1 ? 'Credentials' : i === 2 ? 'Audit Scope' : 'Validation Bond'}
               </span>
             </div>
           ))}
         </div>

         {step === 1 && (
           <div className="space-y-4">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">{t('IDENTITY & REGULATORY CREDENTIALS', 'IDENTITÉ & CRÉDENTIALS RÉGLEMENTAIRES')}</h3>
              <p className="text-[10px] text-white/50 leading-relaxed">{t('Certified valuation requires formal institutional identification.', 'L\'évaluation certifiée nécessite une identification institutionnelle formelle.')}</p>
              
              <div className="space-y-3 pt-2">
                <input 
                  placeholder={t('ENTITY / INSTITUTION NAME', 'NOM DE L\'ENTITÉ / INSTITUTION')}
                  className="w-full bg-black/40 border border-white/10 p-4 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-primary-cyan"
                  value={formData.entityName}
                  onChange={e => setFormData({...formData, entityName: e.target.value})}
                />
                <input 
                  placeholder={t('REGISTRATION OR LEI NUMBER', 'NUMÉRO D\'ENREGISTREMENT OU LEI')}
                  className="w-full bg-black/40 border border-white/10 p-4 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-primary-cyan"
                  value={formData.registrationNumber}
                  onChange={e => setFormData({...formData, registrationNumber: e.target.value})}
                />
                <select 
                  className="w-full bg-black/40 border border-white/10 p-4 text-white text-xs focus:outline-none focus:border-primary-cyan"
                  value={formData.authority}
                  onChange={e => setFormData({...formData, authority: e.target.value})}
                >
                  <option value="EU Markets">EU Markets (MIFID II compliance)</option>
                  <option value="EU (MiCA)">EU (MiCA Registry)</option>
                  <option value="US (SEC)">US (SEC Institutional broker)</option>
                  <option value="UK (FCA)">UK (FCA Authorised firm)</option>
                </select>
              </div>
           </div>
         )}

         {step === 2 && (
           <div className="space-y-4">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">{t('VALUATION AUDIT SCOPE', 'PÉRIMÈTRE DE L\'AUDIT D\'ÉVALUATION')}</h3>
              <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl space-y-3">
                 <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white/70">MICA COMPLIANCE AUDITING</span>
                    <input type="checkbox" defaultChecked className="accent-primary-cyan" />
                 </div>
                 <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white/70">KIND-OF-ART VALUATION OVERSIGHT</span>
                    <input type="checkbox" defaultChecked className="accent-primary-cyan" />
                 </div>
                 <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white/70">SECONDARY MARKET FRACTIONS CLEARANCE</span>
                    <input type="checkbox" defaultChecked className="accent-primary-cyan" />
                 </div>
              </div>
              <div className="border border-dashed border-white/10 p-6 flex flex-col items-center justify-center gap-3 bg-black/40 rounded-xl cursor-pointer" onClick={() => setFormData({...formData, uploadedDocs: true})}>
                 <Upload size={24} className={formData.uploadedDocs ? 'text-primary-cyan' : 'text-white/35'} />
                 <span className="text-[10px] font-black uppercase text-white tracking-widest">
                   {formData.uploadedDocs ? 'REGULATORY_CREDENTIALS_SECURED.PDF' : 'Upload Corporate Registry PDF'}
                 </span>
              </div>
           </div>
         )}

         {step === 3 && (
           <div className="space-y-4 text-center">
              <Award size={48} className="mx-auto text-accent-gold" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">{t('STAKING VALIDATION BOND', 'DÉPÔT DE SÉCURITÉ DE VALIDATION')}</h3>
              <p className="text-[10px] text-white/50 max-w-sm mx-auto leading-relaxed">
                 {t('Certified validators must lock 5,000 LYA as a security bond to protect ecosystem co-owners from grading fraud.', 'Les validateurs agréés doivent bloquer un cautionnement de 5 000 LYA pour protéger le registre d\'évaluation contre l\'incompétence.')}
              </p>
              <div className="p-4 bg-accent-gold/5 border border-accent-gold/20 text-accent-gold text-xs font-black uppercase tracking-widest rounded-xl max-w-xs mx-auto">
                 {t('STAKE BOND: 10,000 LYA LOCKED', 'ENGAGER CAUTION: 5 000 LYA BLOQUÉS')}
              </div>
           </div>
         )}

         <button 
           onClick={handleNext}
           disabled={step === 1 && (!formData.entityName || !formData.registrationNumber)}
           className="w-full py-4.5 bg-primary-cyan text-surface-dim font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all rounded-xl disabled:opacity-45 disabled:pointer-events-none"
         >
           {step === 3 ? t('CONFIRM & APPLY LICENSE', 'VALIDER ET ACTIVER LA LICENCE') : t('CONTINUE', 'CONTINUER')}
         </button>
       </div>
    </Modal>
  );
};

export const FeatureShowcaseModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
}> = ({ isOpen, onClose, featureName }) => {
  const { t } = useTranslation();

  const getPlanDetails = () => {
    switch (featureName.toUpperCase()) {
      case 'CREATOR':
        return {
          title: t('CREATOR TIER ACCESS', 'ACCÈS AU FORFAIT CRÉATEUR'),
          badge: t('CREATORS, PRODUCERS & WRITERS', 'CRÉATEURS, PRODUCTEURS & AUTEURS'),
          description: t(
            'Designed specifically for independent creative professionals—including filmmakers, musicians, writers, choreographers, and designers—to register up to 4 intellectual property contracts, track project valuations, and initiate peer-to-peer funding streams.',
            'Conçu spécifiquement pour les professionnels de la création—cinéastes, musiciens, auteurs, chorégraphes et designers indépendants—pour inscrire jusqu\'à 4 contrats de propriété intellectuelle, suivre la valorisation de leurs droits, et lancer des financements en peer-to-peer.'
          ),
          feature1: t('Basic Indexing System', 'Protocole d\'Indexation Standard'),
          feature1Value: t('UP TO 4 CONTRACTS', 'JUSQU\'À 4 CONTRATS'),
          feature2: t('Peer-to-Peer Transfer Fees', 'Part commissions d\'échange P2P'),
          feature2Value: '5.0%',
        };
      case 'INVESTOR':
        return {
          title: t('INVESTOR TIER ACCESS', 'ACCÈS AU FORFAIT INVESTISSEUR'),
          badge: t('IP ASSOCIATES, ACQUIRERS & PATRONS', 'SOCIÉS DES DROITS D\'AUTEUR & ACQUÉREURS'),
          description: t(
            'Optimized for financial backers, independent co-producers, and IP acquisition funds looking to build a high-yield portfolio across music catalogs, film revenue shares, podcast rights, and multidisciplinary projects.',
            'Idéal pour les financeurs, coproducteurs indépendants et fonds d\'acquisition de droits d\'auteur cherchant à bâtir un portefeuille à haut rendement basé sur des catalogues musicaux, partages de recettes cinématographiques, podcasts, et créations multidisciplinaires.'
          ),
          feature1: t('Project Performance Tracking', 'Suivi de Performance Projet'),
          feature1Value: t('UNLIMITED PROJECTS', 'PROJETS ILLIMITÉS'),
          feature2: t('Preferential Trading Fees', 'Frais d\'Échanges Préférentiels'),
          feature2Value: '3.0%',
        };
      case 'PRO':
        return {
          title: t('PRO PERSONAL CONTRACTS', 'CONTRATS PRO PERSONNEL'),
          badge: t('IP BROKERS, SHOWRUNNERS & AGENTS', 'COURTIERS DE PI, AGENTS & DIFFUSEURS'),
          description: t(
            'High-caliber specialized workspace engineered for executive producers, showrunners, talent agents, and creative asset syndicators. Gain advanced financial audit structures, white-label client models, and privileged transaction terms.',
            'Espace de travail de haut calibre conçu pour les producteurs délégués, showrunners, agents artistiques et syndicateurs d\'actifs créatifs. Bénéficiez d\'audits financiers robustes, de rapports en marque blanche pour vos clients, et de conditions d\'échange privilégiées.'
          ),
          feature1: t('White-label Reporting Suite', 'Rapports en Marque Blanche'),
          feature1Value: t('ENABLED', 'INSTALLÉ'),
          feature2: t('Professional Trading Fees', 'Frais d\'Échange Professionnels'),
          feature2Value: '2.0%',
        };
      case 'PRO_ENTERPRISE':
      case 'PRO_ENTERPRISE_HIGHLIGHT':
      case 'INSTITUTIONAL Enterprise':
        return {
          title: t('INSTITUTIONAL ENTERPRISE TIER', 'ACCÈS INFRASTRUCTURE INSTITUTIONNELLE'),
          badge: t('STUDIOS, LABELS & MAJOR PUBLISHERS', 'STUDIOS, LABELS & MAISONS D\'ÉDITING'),
          description: t(
            'Strategic enterprise solutions for major film studios, streaming networks, massive record labels, and global book publishers. Unlock high-performance custom validation nodes, complete library/catalog migrations, and robust liquidity-backing bridges.',
            'Solutions stratégiques d\'entreprise pour les grands studios de cinéma, plateformes de streaming, labels de musique majeurs et maisons d\'édition globales. Bénéficiez de nœuds de validation haute performance, de migrations de catalogues complets et de passerelles de liquiditées.'
          ),
          feature1: t('Sovereign Node Ownership', 'Nœud de Validation Souverain'),
          feature1Value: t('DEDICATED NODE', 'NŒUD DÉDIÉ 24/7'),
          feature2: t('Custom Valuation Pipelines', 'Indicateurs d\'Évaluation Sur-Mesure'),
          feature2Value: t('ON-DEMAND AUDIT', 'AUDIT À LA DEMANDE'),
        };
      default:
        return {
          title: t('ADVANCED ECOSYSTEM UTILITIES', 'CAPACITÉS TECHNOLOGIQUES LYA'),
          badge: t('ECOSYSTEM ACCESS', 'ACCÈS ÉCOSYSTÈME'),
          description: t(
            'Gain elite privileges across our distributed creative industries ledger, including real-time valuation updates and automated regulatory compliance pipelines verified by validation nodes.',
            'Bénéficiez de privilèges d\'élite sur notre registre décentralisé d\'industries créatives, incluant les rapports de valorisation en temps réel et la conformité automatisée vérifiée par nos validateurs agréés.'
          ),
          feature1: t('Dynamic Liquidity Multiplexer', 'Multiplexeur de Liquidité Dynamique'),
          feature1Value: t('ACTIVE', 'ACTIF'),
          feature2: t('Clearing Fee Ledger Cap', 'Plafond des Frais de Compensation'),
          feature2Value: '0.15% MAX',
        };
    }
  };

  const details = getPlanDetails();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`FEATURE_HIGHLIGHT: ${featureName.toUpperCase()}`}>
      <div className="space-y-6">
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center gap-4">
          <div className="p-4 bg-primary-cyan/20 rounded-2xl text-primary-cyan">
             <Zap size={24} className="animate-pulse" />
          </div>
          <div>
             <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none mb-1">
               {details.title}
             </h3>
             <span className="text-xs text-accent-gold uppercase font-mono tracking-widest">{details.badge}</span>
          </div>
        </div>

        <p className="text-xs text-white/60 leading-relaxed text-justify">
          {details.description}
        </p>

        <div className="space-y-3">
          <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between text-[10px]">
             <span className="text-white/70 uppercase tracking-widest font-black">{details.feature1}</span>
             <span className="text-emerald-400 font-bold uppercase font-mono font-black">{details.feature1Value}</span>
          </div>
          <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between text-[10px]">
             <span className="text-white/70 uppercase tracking-widest font-black">{details.feature2}</span>
             <span className="text-emerald-400 font-bold uppercase font-mono font-black">{details.feature2Value}</span>
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="w-full py-4.5 bg-primary-cyan text-surface-dim uppercase font-black tracking-widest text-[10px] rounded-xl active:scale-95"
        >
          {t('Acknowledge', 'Compris')}
        </button>
      </div>
    </Modal>
  );
};

export const ComplianceCertificateModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  contractId: string | null;
}> = ({ isOpen, onClose, contractId }) => {
  const { t } = useTranslation();
  
  const currentContract = CONTRACTS.find(c => c.id === contractId) || CONTRACTS[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`COMPLIANCE_CERTIFICATE: MiCA_LIC_00832`}>
      <div className="space-y-6">
        <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
          <div className="p-4 bg-emerald-500/20 text-emerald-400 rounded-2xl">
             <FileCheck2 size={24} />
          </div>
          <div>
             <h3 className="text-sm font-black text-white uppercase tracking-widest">
               REGULATORY COMPLIANCE PASS
             </h3>
             <span className="text-xs text-emerald-400 uppercase font-mono tracking-widest">EU DIRECT CONTRACT COMPLIANT (MiCA)</span>
          </div>
        </div>

        <div className="p-5 bg-black/40 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px]">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">REG INDEX:</span>
            <span className="text-white font-bold">{currentContract.registryIndex}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">JURISDICTION:</span>
            <span className="text-white font-bold">{currentContract.jurisdiction || 'EU Markets'}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">CREATION HASH:</span>
            <span className="text-white font-bold font-mono">0x4F8A...E31C</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
             <span className="text-white/40">VALIDATOR BOARD:</span>
             <span className="text-accent-gold font-bold">LOUVRE_DIGITAL_0x1</span>
          </div>
          <div className="flex justify-between text-emerald-400 font-bold">
            <span>STATUS:</span>
            <span>VERIFIED COMPLIANT (MiCA V3)</span>
          </div>
        </div>

        <p className="text-xs text-white/50 leading-relaxed text-center italic">
          "This fractioned contractual asset certifies compliance with the European Markets in Crypto-Assets regulation, guaranteeing direct contractual rights to intellectual property cash flows."
        </p>

        <button 
          onClick={() => {
            simulatePDFDownload(currentContract.name, "Compliance Certificate - " + currentContract.name + "\nMiCA License Ref: MiCA_LIC_00832\nVerified Compliant MiCA Asset");
          }}
          className="w-full py-4.5 bg-white text-surface-dim hover:bg-primary-cyan uppercase font-black tracking-widest text-[10px] rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Download size={12} />
          {t('DOWNLOAD PROSPECTUS', 'TÉLÉCHARGER LE CERTIFICAT MiCA')}
        </button>
      </div>
    </Modal>
  );
};
