```markdown
# Changelog

Alle relevanten Änderungen am KIEZFIT-Projekt werden hier nach Versionen
dokumentiert.

Das Changelog beschreibt die Entwicklung auf Versionsebene. Die detaillierte
Aufgaben-, Pull-Request- und Commit-Historie bleibt im GitHub-Repository
nachvollziehbar.

---

## [0.1.0] - 2026-09-10

Erster stabiler Projektstand der KIEZFIT-Website.

### Added

- Responsive KIEZFIT-Landingpage
- Hero-Bereich
- Studio-Bereich mit individueller Studio-Landkarte
- Leistungen-Bereich
- Kurse-Bereich
- Mitgliedschaften-Bereich
- Kontakt-Bereich
- Footer
- Responsive Navigation
- Mobiles Hamburger-Menü
- Scroll-Navigation
- vorbereitete Login-Struktur
- vorbereitete Struktur für einen späteren Mitgliederbereich
- Projektdokumentation mit:
  - Roadmap
  - Progress
  - Design
  - Technical
  - Decisions
  - Issues
  - Milestones

### Changed

- CSS-Struktur in mehrere Verantwortungsbereiche aufgeteilt
- zentrales CSS-Variablensystem eingeführt
- Responsive Layouts für verschiedene Bildschirmgrößen umgesetzt
- JavaScript-Struktur bereinigt und vereinfacht
- Navigation und Interaktionen strukturiert
- Accessibility-Grundlagen integriert

### Performance

- große Bildassets optimiert
- `hero.webp` komprimiert
- `studio.webp` komprimiert
- Bilddateien auf WebP optimiert
- Dateigröße der zentralen Bildassets deutlich reduziert

### Testing

- Browser- und Funktionstests durchgeführt
- Scroll-Navigation geprüft
- Hamburger-Menü geprüft
- Navigation auf mobilen Geräten geprüft
- `aria-expanded`-Verhalten geprüft
- Repository-Struktur geprüft
- `.gitignore` geprüft
- doppelte Login-Datei entfernt

### Documentation

- Dokumentationsstruktur vollständig neu aufgebaut
- Roadmap für zukünftige Versionen erstellt
- aktueller Projektstand dokumentiert
- Design-System dokumentiert
- technische Architektur dokumentiert
- wichtige Entwicklungsentscheidungen dokumentiert
- Issues und Milestones dokumentiert

### Known Issues

- `--color-card` wird in `sections.css` verwendet, ist aber aktuell nicht
  in `base.css` definiert.
- Die Prüfung und mögliche Bereinigung dieses Punktes ist für Version
  `0.1.1` vorgesehen.
- Login, Registrierung und Mitgliederbereich sind vorbereitet, aber noch
  nicht funktional implementiert.

---

## [0.1.1] - Geplant

Nächster Entwicklungsstand nach dem Abschluss von Version 0.1.0.

### Planned

- technische Bereinigung offener Punkte
- Prüfung und Korrektur der CSS-Variable `--color-card`
- weitere strukturelle Optimierungen
- Überarbeitung und Erweiterung bestehender Seiten
- Vorbereitung weiterer funktionaler Komponenten

Weitere Inhalte werden nach Abschluss der Planung ergänzt.

---

## [0.2.0] - Geplant

Erweiterung der öffentlichen Website.

### Planned

- zusätzliche Seiten und Inhalte
- Ausbau der bestehenden Website-Struktur
- weiterführende Nutzerinteraktionen
- Vorbereitung der späteren Mitgliederfunktionen

Die konkreten Änderungen werden vor Beginn der Entwicklung festgelegt.

---

## Versionierung

KIEZFIT verwendet eine versionsorientierte Entwicklung.

- `0.1.x` – Stabilisierung und kleinere Weiterentwicklungen
- `0.2.x` – Ausbau der Website
- `0.3.x` – Interaktive Funktionen
- `0.4.x` – Mitgliederbereich
- `0.5.x` – Backend und Daten
- `1.0.0` – vollständige KIEZFIT-Plattform

Die Roadmap beschreibt die geplante Entwicklung ausführlicher.

---

## Hinweise

Das Changelog wird bei zukünftigen Releases erweitert.

Einträge sollen sich auf tatsächlich umgesetzte Änderungen beziehen.
Unfertige oder lediglich geplante Funktionen werden entsprechend als
geplant gekennzeichnet.

Die vollständige technische Historie des Projekts ist über GitHub mit
Issues, Pull Requests und Commits nachvollziehbar.
```
