# 🎶 TuneMyType — Le quiz de personnalité musicale

Un projet interactif, ludique et UX-driven inspiré par la mission d’[AssessFirst](https://www.assessfirst.com) :  
🎧 _Découvre quel type de collaborateur tu es… en fonction de tes goûts musicaux._

---

## Démo (à venir)

> 💻 Une version déployée sera bientôt disponible ici : ...

---

## Objectif

**TuneMyType** est un quiz de personnalité original qui associe préférences musicales et soft skills.  
Il te guide à travers une série de choix sonores et visuels, puis te révèle ton profil pro (type “Stratège Silencieux”, “Explorateur Créatif”, etc.).

---

## Stack technique

| Catégorie       | Technologie                               |
| --------------- | ----------------------------------------- |
| Framework       | Vue 3 + TypeScript                        |
| UI              | Tailwind CSS                              |
| Architecture UI | Composants headless (inspiré de Radix UI) |
| Audio           | iTunes API (preview des morceaux)         |
| Composabilité   | Composition API + scoped slots            |

---

## Architecture

src/
├─ components/quiz/ → Composants du quiz headless (QuizRoot, QuizOption, etc.)
├─ composables/ → Logique du quiz (useQuizLogic.ts)
├─ data/ → Questions, mapping, profils
├─ views/ → Pages : Accueil, Quiz, Résultat
├─ App.vue / main.ts → Entrée de l’app
├─ style.css → Thème Tailwind + font rétro

---

## Fonctionnalités principales

- **Choix musicaux variés** avec extrait audio
- **Profilage intelligent** via mapping de réponses
- **UI compatible** avec celle d'AssessFirst pour rester dans la continuité
- **Architecture modulaire** (chaque question = composant)
- **Accessibilité** : navigation clavier, ARIA roles

---

## Pourquoi ce projet ?

Plus sympa qu'une lettre de motivation, ce projet a été conçu pour démontrer :

- ma maîtrise du système de versionning GIT et de l'exploitation d'API REST
- ma maîtrise de HTML5, CSS3, Javascript, Typescript, Tailwind
- ma **capacité d'adaptation** aux attentes -> Radix ou similaire demandé donc apprentissage de Reka ( Radix pour Vue)
- ma capacité à **proposer une expérience UX originale**
- ma **rigueur de structuration de composants** dans une architecture scalable
- ma maîtrise de l'anglais

---

## Licence

Ce projet est open-source (MIT).  
Les morceaux utilisés via l’API iTunes ne sont pas stockés et ne servent qu’à des fins de démonstration.

---

## 👨🏿‍💻 Auteur

**Azraël Landres**  
Développeur front-end passionné par le design accessible à tous et les interfaces qui racontent une histoire.  
[Connectons sur linkedin](https://linkedin.com/in/azraellandres)
