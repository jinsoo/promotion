# Y Communication Brand Design Guide

> Generated from slide deck analysis | Canvas Design System

---

## 1. Brand Identity

### 1.1 Core Philosophy

> "조직의 DNA를 분석하고, 비즈니스의 격을 설계합니다."

We analyze organizational DNA and design business excellence through premium communication solutions.

### 1.2 Brand Essence

- **Tone**: Professional, Sophisticated, Trustworthy
- **Voice**: Expert, Confident, Warm
- **Positioning**: Premium Speech & Media Consulting Partner

---

## 2. Color Palette

### 2.1 Primary Colors

```css
/* Deep Black - Background Base */
--color-bg-primary: #1a1a1a;
--color-bg-secondary: #1f1f1f;
--color-bg-tertiary: #222222;
--color-bg-card: #242424;

/* Champagne Gold - Accent & Highlight */
--color-gold-primary: #c9a962;
--color-gold-light: rgba(201, 169, 98, 0.3);
--color-gold-subtle: rgba(201, 169, 98, 0.1);
--color-gold-bg: rgba(201, 169, 98, 0.03);
```

### 2.2 Color Usage Guidelines

- **Background**: `#1a1a1a` — All slide backgrounds
- **Text Primary**: `#ffffff` — Headlines, body text
- **Text Secondary**: `rgba(255,255,255,0.7)` — Descriptions, subtext
- **Accent/Gold**: `#c9a962` — Key highlights, borders, icons
- **Borders**: `rgba(255,255,255,0.1)` — Dividers, card borders

### 2.3 Gradient Alternatives

When gradients are needed, use solid color layering instead:

```css
/* Instead of gradient, use opacity layers */
.bg-layer-1 {
  background-color: #222;
  opacity: 0.5;
}

.bg-layer-2 {
  background-color: #2d3436;
  opacity: 0.3;
}
```

---

## 3. Typography

### 3.1 Font Families

```css
/* Korean Serif - Headlines, Quotes */
--font-serif-kr: 'Noto Serif KR', serif;

/* Korean Sans-serif - Body, UI */
--font-sans-kr: 'Noto Sans KR', sans-serif;

/* English/Latin - Modern, Clean */
--font-montserrat: 'Montserrat', sans-serif;

/* Handwritten - Signatures */
--font-script: 'La Belle Aurore', cursive;
```

### 3.2 Type Scale

| Usage           | Font Size | Weight   | Line Height | Letter Spacing |
|:----------------|:----------|:---------|:------------|:---------------|
| Hero Title      | 56-64px   | 700      | 1.2         | -0.02em        |
| Section Title   | 42-48px   | 700      | 1.2         | -0.02em        |
| Card Title      | 20-24px   | 700      | 1.3         | -0.01em        |
| Body Text       | 16-18px   | 300-400  | 1.6-2.0     | -0.01em        |
| Caption/Label   | 12-14px   | 500-600  | 1.4         | 0.2-0.4em      |
| English Labels  | 12-14px   | 500-600  | 1.4         | 0.3-0.5em      |

### 3.3 Typography Rules

1. **Headlines**: Use Noto Serif KR for Korean headlines to convey sophistication
2. **English Labels**: Always use Montserrat with uppercase + wide letter-spacing (0.3-0.5em)
3. **Emphasis**: Use gold color (`#c9a962`) instead of bold for key phrases
4. **Quotes**: Use italic Noto Serif KR with increased line-height (1.4-1.5)

---

## 4. Layout System

### 4.1 Canvas Specifications

```text
Slide Size: 1280 x 720px (16:9)
Safe Area: 60-80px padding from edges
Content Width: 1120px (with 80px padding)
Content Height: 600px (with 60px padding)
```

### 4.2 Grid System

**Three-Column Grid** (for partner/client lists):

```css
grid-template-columns: repeat(3, 1fr);
gap: 30px;
```

**Two-Column Grid** (for content cards):

```css
grid-template-columns: repeat(2, 1fr);
gap: 25px;
```

**Split Panel** (for profile/info sections):

```css
/* Left Panel - 40% */
.left-panel {
  width: 40%;
  padding: 60px 50px;
}

/* Right Panel - 60% */
.right-panel {
  width: 60%;
  padding: 80px 80px 80px 60px;
}
```

### 4.3 Spacing Scale

| Token        | Value    | Usage                               |
|:-------------|:---------|:------------------------------------|
| `--space-xs` | 8px      | Small gaps                          |
| `--space-sm` | 12-15px  | Tag gaps, card internal spacing     |
| `--space-md` | 25-30px  | Card gaps, section spacing          |
| `--space-lg` | 50-60px  | Major section spacing               |
| `--space-xl` | 70-80px  | Hero section padding                |

---

## 5. Components

### 5.1 Card Component

```css
.info-card {
  background-color: #242424;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-top: 3-4px solid #c9a962;
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: rgba(201, 169, 98, 0.5);
  background-color: #2a2a2a;
  transform: translateY(-5px) to translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### 5.2 Icon Wrapper

```css
.icon-wrapper {
    width: 56-70px;
    height: 56-70px;
    background-color: rgba(201, 169, 98, 0.1);
    border: 1px solid rgba(201, 169, 98, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a962;
    font-size: 24-32px;
}
```

### 5.3 Label Badge

```css
.label-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 0.3em;
    color: #c9a962;
    text-transform: uppercase;
    font-weight: 600;
}
```

### 5.4 Divider Elements

```css
/* Simple Line Divider */
.divider {
    width: 60-80px;
    height: 2-3px;
    background-color: #c9a962;
}

/* Diamond Divider */
.divider-diamond {
    width: 8px;
    height: 8px;
    background-color: #c9a962;
    transform: rotate(45deg);
}
```

### 5.5 Stats/Highlight Bar

```css
.stats-bar {
    background-color: #2d3436;
    border-left: 4px solid #c9a962;
    border-radius: 4-8px;
    padding: 15-40px;
    display: flex;
    justify-content: space-between;
}
```

---

## 6. Decorative Elements

### 6.1 Border Frame

```css
.border-frame {
    position: absolute;
    top: 30px; left: 30px; right: 30px; bottom: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
}
```

### 6.2 Corner Accents

```css
/* Top-Left Corner */
.gold-accent-corner {
    position: absolute;
    top: 40px; left: 40px;
    width: 100px; height: 100px;
    border-top: 2px solid #c9a962;
    border-left: 2px solid #c9a962;
    opacity: 0.5;
}
```

### 6.3 Background Circles

```css
.bg-circle {
    position: absolute;
    width: 500-800px;
    height: 500-800px;
    border-radius: 50%;
    background-color: rgba(201, 169, 98, 0.03);
    /* OR */
    border: 1px solid rgba(201, 169, 98, 0.05-0.1);
}
```

### 6.4 Vertical Accent Line

```css
.gold-accent-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 80-120px;
    background-color: #c9a962;
}
```

---

## 7. Slide Templates

### 7.1 Title Slide (Slide 1)

**Purpose**: Opening statement with company name

**Structure**:

- Center-aligned content
- Gold accent line at top
- Main headline with gold highlighted keyword
- Sub-description with lighter opacity
- Company name with divider above

**Key Elements**:

```html
<div class="gold-accent-top"></div>
<h1 class="main-headline">
    조직의 DNA를 분석하고,
    <span class="highlight">비즈니스의 격을</span> 설계합니다.
</h1>
<div class="company-name">Y COMMUNICATION</div>
```

### 7.2 Quote/Hero Slide (Slide 2)

**Purpose**: Brand statement with visual impact

**Structure**:

- Quote icon at top
- Main quote with line breaks
- Gold divider bar
- English subtitle with wide letter-spacing

### 7.3 Content Grid Slide (Slides 3, 5, 6, 16)

**Purpose**: Display structured information

**Structure**:

- Label text + section title header
- 2x2 or 3-column grid of cards
- Optional stats/note bar at bottom

### 7.4 Split Panel Slide (Slide 4)

**Purpose**: Profile or comparison content

**Structure**:

- 40% left panel: Image/profile info
- 60% right panel: Quote/message content
- Vertical divider between panels

### 7.5 Portfolio/Showcase Slide (Slide 17)

**Purpose**: Service offerings with visual tags

**Structure**:

- Center-aligned title
- Pill-shaped tag buttons with icons
- Highlight box at bottom with key references

### 7.6 Contact CTA Slide (Slide 9)

**Purpose**: Call-to-action with contact info

**Structure**:

- Center-aligned header
- 3 contact cards in horizontal row
- Icon + label + value per card
- Decorative corner accents on hover

### 7.7 Closing Slide (Slide 11)

**Purpose**: Brand reinforcement with thank you

**Structure**:

- Center-aligned everything
- Large company name in gold
- Core brand message
- Divider with diamond
- Copyright footer

---

## 8. Interactive States

### 8.1 Hover Effects

```css
/* Card Lift */
.card:hover {
    transform: translateY(-5px to -10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Icon Fill */
.icon-wrapper:hover {
    background-color: #c9a962;
    color: #1a1a1a;
}

/* Border Glow */
.element:hover {
    border-color: #c9a962;
}
```

### 8.2 Transition Timing

```css
/* Standard */
transition: all 0.3s ease;

/* Subtle */
transition: transform 0.2s ease;

/* Emphasized */
transition: all 0.4s ease;
```

---

## 9. Icon Guidelines

### 9.1 Icon Source

Use **Font Awesome 6.4.0** for all icons:

```html
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
```

### 9.2 Common Icons by Category

| Category | Icons |
| :--- | :--- |
| **Business** | `fa-building`, `fa-briefcase`, `fa-handshake`, `fa-trophy` |
| **Media** | `fa-microphone-alt`, `fa-tv`, `fa-video`, `fa-bullhorn` |
| **Education** | `fa-chalkboard-user`, `fa-graduation-cap`, `fa-book` |
| **Government** | `fa-landmark`, `fa-building-columns` |
| **Contact** | `fa-phone-alt`, `fa-envelope`, `fa-globe` |
| **Abstract** | `fa-bolt`, `fa-magnifying-glass-chart`, `fa-share-nodes` |

---

## 10. Best Practices

### 10.1 DO

1. **Use gold strategically** - Only for key highlights, borders, and icons
2. **Maintain contrast** - Text opacity should not fall below 0.6
3. **Use whitespace generously** - Let content breathe with proper padding
4. **Align elements precisely** - Use flexbox and grid for consistent spacing
5. **Group related content** - Use cards to organize information
6. **Use English labels** - Montserrat, uppercase, wide letter-spacing

### 10.2 DON'T

1. **Overuse gradients** - Stick to solid colors with opacity layers
2. **Mix too many fonts** - Stay within the defined font families
3. **Use bright colors** - Maintain the sophisticated dark theme
4. **Crowd content** - Maintain proper spacing and margins
5. **Use images without frames** - Always add borders or frames to photos
6. **Ignore hierarchy** - Always establish clear visual levels

---

## 11. File Structure for New Slides

```text
docs/slides/
├── [number].html          # Slide files follow numeric order
└── All slides share:
    ├── 1280x720px canvas
    ├── Same CSS framework
    └── Consistent naming conventions
```

---

## 12. CSS Framework (Starter Template)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Slide Title</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;600;700&family=Noto+Sans+KR:wght@300;400;500;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
<style>
    :root {
        --color-bg: #1a1a1a;
        --color-gold: #c9a962;
        --color-text: #ffffff;
        --color-text-secondary: rgba(255, 255, 255, 0.7);
    }
    body {
        margin: 0;
        padding: 0;
        background-color: var(--color-bg);
        font-family: 'Noto Sans KR', sans-serif;
        color: var(--color-text);
        overflow: hidden;
    }
    .slide-container {
        width: 1280px;
        height: 720px;
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: var(--color-bg);
        padding: 60px 80px;
        box-sizing: border-box;
    }
</style>
</head>
<body>
<div class="slide-container">
    <!-- Content here -->
</div>
</body>
</html>
```

---

*This design guide was generated from analysis of 10 existing slides in the Y Communication presentation deck.*
*Last updated: 2026-02-02*
