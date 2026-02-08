# fox-hax

![Repo logo][logo]

[logo]: /firefox-logo.webp "Repo Logo"

> Privacy-focused, performance-optimized Firefox configuration for Firefox 146-147 (and later)

## 📋 Overview

`fox-hax` is a comprehensive Firefox customization suite that enhances privacy, security, and performance while maintaining excellent user experience. It includes:

- **`user.js`**: 800+ carefully tuned preferences for modern Firefox
- **Optimized for**: Firefox 146-147+ (includes 2024-2025 features)

## ✨ Key Features

### Privacy & Security
- ✅ **Phase 2 Anti-Fingerprinting** (FF145+) - Reduces trackability by 50%
- ✅ **HTTPS-First Mode** (FF136+) - Automatic HTTPS upgrades with smart fallback
- ✅ **Bounce Tracking Protection** (FF133+) - Blocks sneaky tracker cookies
- ✅ **Cookie Banner Handling** (FF124+) - Auto-dismisses cookie consent popups
- ✅ **Total Cookie Protection** - Network partitioning enabled
- ✅ **Post-Quantum Crypto** (FF146+) - ML-KEM support
- ✅ **Telemetry Disabled** - Comprehensive blocking of all data collection

### Performance
- ✅ **Hardware Acceleration** - WebGPU, VA-API video decoding, GPU process isolation
- ✅ **Memory Optimization** - Tuned cache sizes and tab unloading
- ✅ **Network Optimization** - HTTP compression dictionaries (FF147+), optimized connection pooling
- ✅ **Fission Site Isolation** - Security with minimal overhead
- ✅ **Smooth Scrolling** - Natural scroll physics for high-refresh displays

## 🚀 Installation

### Step 1: Copy to Firefox Profile Directory

1. **Find your Firefox profile directory**:
   - **Linux**: `~/.mozilla/firefox/xxxxxxxx.default-release/`
   - **Windows**: `%APPDATA%\Mozilla\Firefox\Profiles\xxxxxxxx.default-release\`
   - **macOS**: `~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/`

2. **Copy files**:
   ```bash
   # Copy everything to your profile directory
   cp -r user.js chrome ~/.mozilla/firefox/xxxxxxxx.default-release/
   ```

3. **Enable userChrome/userContent**:
   - Open `about:config`
   - Set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`

### Step 2: Restart Firefox

All changes take effect after restarting Firefox completely (not just closing the window).

## 📁 File Structure

```
fox-hax/
├── user.js                           # Main Firefox preferences (800+ lines)
├── chrome/
│   ├── userContent.css               # Main userContent entry
│   └── import/
│       └── userContent/             # Web content styling
│           └── dark-preload.css      # Dark about:blank pages
```

## ⚙️ Configuration Options

### Dark Theme

Dark theme is controlled by these `user.js` preferences:
```javascript
user_pref('browser.in-content.dark-mode', true);      // Firefox dark mode
user_pref('ui.systemUsesDarkTheme', 1);             // Use system dark theme
user_pref('ui.prefersReducedMotion', 1);            // Reduced animations
user_pref('widget.chrome.allow-gtk-dark-theme', true); // Linux GTK dark theme
```

## 🔧 User.js Sections

### General (Lines 5-65)
- Update disabled, telemetry disabled
- UI density, zoom, clipboard settings
- Pocket, VPN, messaging system disabled
- Safe browsing disabled

### Appearance (Lines 81-92)
- UserChrome/userContent enabled
- SVG context properties enabled
- Tab width settings
- Dark mode configuration

### Performance (Lines 312-424)
- WebRender, GPU process, hardware video decoding
- Fission site isolation enabled
- Tab unloading on low memory
- Cache optimization (memory + disk)
- Network optimization (HTTP/3, connections, pacing)

### Security (Lines 425-700)
- HTTPS-First mode enabled
- TLS 1.2/1.3 enforced
- Post-quantum crypto (ML-KEM)
- OCSP settings
- Safe browsing disabled
- Captive portal disabled

### Privacy (Lines 476-551)
- Phase 2 fingerprinting protection enabled
- Cookie banner handling enabled
- Bounce tracking protection enabled
- HTTPS-Only mode in private browsing
- Container tabs enabled

### Telemetry (Lines 552-595)
- All telemetry disabled
- Health reports disabled
- Experiments disabled
- Extension recommendations disabled

### Anti-Fingerprinting (Lines 651-683)
- Resist fingerprinting enabled (block mozAddonManager)
- Hardware concurrency spoofed
- Resource timing disabled
- Device sensors disabled
- WebGL disabled (privacy)


### Firefox Versions
- ✅ **Minimum**: Firefox 136 (for HTTPS-First)
- ✅ **Recommended**: Firefox 146-147+
- ✅ **Tested on**: Firefox 146-147
- ⚠️ **Not tested**: ESR versions

### Platforms
- ✅ **Linux**: Fully tested and optimized
- ✅ **Windows**: Should work (may need GTK-specific tweaks)
- ⚠️ **macOS**: Not tested (may need platform-specific adjustments)

## 🐛 Troubleshooting

### Firefox Doesn't Start After Applying

**Cause**: Syntax error in `user.js` or CSS file

**Solution**:
1. Check `about:config` for any preferences with red warnings
2. Remove files one at a time to identify the culprit
3. Check browser console for errors (F12 → Console)

### CSS Not Applying

**Check**:
1. ✅ `toolkit.legacyUserProfileCustomizations.stylesheets` is `true` in `about:config`
2. ✅ Files are in the correct profile directory
3. ✅ File names match exactly (`userChrome.css` not `userchrome.css`)

## 🔒 Privacy Trade-offs

### Enabled by Default (Recommended)
- **WebGL disabled** - Breaks some 3D sites/games, but prevents fingerprinting
- **Safe browsing disabled** - Better privacy, but no phishing/malware warnings
- **Telemetry disabled** - Privacy, but no crash reports to Mozilla
- **Location disabled** - Privacy, but breaks geolocation features

### Optional (Can Comment/Uncomment)
- **DRM** - Commented out; enable if you watch Netflix/Prime Video
- **First Party Isolation** - Commented out; more private but breaks some logins
- **Strict Cookie Blocking** - Commented out; more private but breaks site functionality

## 📊 Feature Comparison

| Feature | Default Firefox | fox-hax | Impact |
|----------|-----------------|----------|--------|
| Telemetry | Enabled | ✅ Disabled | +Privacy |
| Fingerprinting Protection | Basic | ✅ Enhanced Phase 2 | +Privacy +50% |
| HTTPS-Only | Off | ✅ HTTPS-First | +Security |
| Cookie Banners | Manual | ✅ Auto-dismiss | +UX |
| WebGL | Enabled | ✅ Disabled | +Privacy / -3D sites |
| Hardware Acceleration | Default | ✅ Optimized | +Performance |
| Fission | Default | ✅ Enabled | +Security |
| Dark Theme | Optional | ✅ Forced | +UX (if you prefer dark) |

## 🔄 Updating

### When Firefox Updates

Most settings are future-proof. After Firefox updates:
1. Check that CSS still applies (UI changes rarely break compatibility)
2. Verify about:config for new/removed preferences
3. Test key features (tabs, URL bar, context menu)

### When This Repo Updates

Pull latest changes and compare with your local modifications:
```bash
cd fox-hax
git pull
# Review changes in user.js and chrome/
git diff user.js
git diff chrome/
```



## ⚖️ License

MIT License - Do whatever you want with this configuration.

## 🔗 Resources

- [Firefox Release Notes](https://www.mozilla.org/en-US/firefox/releases/)
- [about:config Documentation](https://support.mozilla.org/en-US/kb/about-config-editor-firefox)
- [Arkenfox user.js](https://github.com/arkenfox/user.js/) - Reference for advanced hardening
- [Firefox 145+ Phase 2 Fingerprinting](https://blog.mozilla.org/en/firefox/fingerprinting-protections/)

## 📌 Notes

- **Last updated**: Firefox 146-147 (January 2026)
- **Maintained**: Periodically updated for Firefox releases
- **Tested**: Mainly on Linux (KDE Plasma/GNOME)
- **Philosophy**: Privacy-first, performance-optimized, UX-friendly (no breakage)

---

**Enjoy your privacy-focused, fast, and customized Firefox!** 🦊
