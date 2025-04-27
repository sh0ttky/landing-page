---
publishDate: 'Nov 02 2022'
title: 'Sécurité des systèmes embarqués'
description: 'protéger vos devices IoT contre les cyberattaques'
image: '/hacker.jpg'
tags: [markdown, blog]
---

## Introduction
Avec l'explosion de l'IoT (50 milliards d'appareils connectés prévus d'ici 2030), la sécurisation des systèmes embarqués est devenue un enjeu critique. Cet article explore les risques majeurs et les bonnes pratiques pour sécuriser vos dispositifs.

## Les 5 menaces principales

1. **Piratage des firmwares**
   - Injection de code malveillant
   - Dumping de la mémoire flash
   *Exemple : L'attaque Stuxnet contre les PLC industriels*

2. **Attaques par canaux auxiliaires**
   - Analyse de consommation électrique
   - Émissions électromagnétiques
   *Cas documenté : Extraction de clés AES via l'alimentation*

3. **Exploitation des interfaces physiques**
   - UART/JTAG non sécurisés
   - Accès GPIO mal protégés

4. **Attaques réseau**
   - DDoS par botnets IoT (Mirai)
   - Écoute des protocoles sans fil

5. **Vulnérabilités logicielles**
   - Bibliothèques obsolètes
   - Stack overflow dans le RTOS

## 7 Stratégies de protection

### 1. Durcissement matériel
  - Utilisation de MPU/MMU
  - Chiffrement hardware (AES-256, TRNG)

### 2. Sécurité par conception
  - Principe du "Zero Trust" embarqué
  - Bootloader signé (authentification RSA-2048)

### 3. Protection des données
  - Technique Implémentation typique
  - Chiffrement AES-128/256 hardware
  - Intégrité HMAC-SHA256
  - Anti-rejeu Compteurs de séquence

### 4. Mises à jour sécurisées (OTA)
  - Signature cryptographique
  - Rollback protégé
  - Partitionnement A/B

### 5. Surveillance active
  - Détection d'anomalies temps réel
  - Journalisation sécurisée

### 6. Tests de pénétration
  - Outils recommandés :
    - ChipWhisperer (analyse physique)
    - Firmwalker (analyse firmware)

### 7. Certification
  - Normes industrielles :
    - IEC 62443 (industrie)
    - Common Criteria (EAL4+)

## Étude de cas : Produit connecté

### 1. Vulnérabilité trouvée :
  - API cloud non authentifiée
  - Firmware modifiable via UART ouvert

### 2. Correctifs appliqués :
  - Activation du Secure Boot
  - Chiffrement TLS 1.3
  - Désactivation des debug ports

### 3. Outils open-source
  - TrustedFirmware : Suite de sécurité pour ARM
  - OP-TEE : Environnement d'exécution de confiance
  - Themis : Cryptographie embarquée

## Conclusion
La sécurité embarquée nécessite une approche en profondeur (Hardware + Software). Les bonnes pratiques doivent être intégrées dès la phase de conception.
