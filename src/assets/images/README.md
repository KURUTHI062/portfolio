# Project Screenshots & Assets

Place your project screenshot images here in `src/assets/images/` or in `public/projects/`.

### Recommended Image Specifications:
- **Format:** WebP, PNG, or JPG
- **Aspect Ratio:** 16:9 or 16:10 (e.g., 1200x675 or 1280x800)
- **File Naming Suggestion:**
  - `direct-bridge.png`
  - `insureflow-ai.png`
  - `career-adviser.png`
  - `examination-system.png`
  - `portfolio.png`

### Linking Images in Projects:
Update `src/data/projects.js` to reference the image for each project object:
```javascript
import directBridgeImg from '../assets/images/direct-bridge.png';

// Inside projects array:
{
  id: "direct-bridge",
  image: directBridgeImg,
  // ...
}
```
