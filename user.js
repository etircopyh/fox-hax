// Mozilla User Preferences

/*      >>GENERAL<<        */
    /*      == Browser ==       */
user_pref('app.update.auto', false);
user_pref('app.update.service.enabled', false);
user_pref('app.update.BITS.enabled', false);
user_pref('app.update.url', '');
user_pref('corroborator.enabled', false);
user_pref('browser.slowStartup.samples', '0');
user_pref('browser.slowStartup.maxSamples', 0);
user_pref('browser.slowStartup.notificationDisabled', true);
user_pref('browser.quitShortcut.disabled', true); // Disable Ctrl-Q quit shortcut
user_pref('browser.uidensity', 1); // User Interface density
user_pref('browser.compactmode.show', true); // Show Compact mode
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref('browser.zoom.siteSpecific', true); // Site specific zoom
user_pref('widget.non-native-theme.enabled', false); // Disable non-native widget theme
user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);
user_pref('layout.css.devPixelsPerPx', 1); // Global pages zoom level
user_pref('browser.shell.checkDefaultBrowser', false);
user_pref('browser.shell.didSkipDefaultBrowserCheckOnFirstRun', true);
user_pref('browser.shell.shortcutFavicons', false);
//user_pref('alerts.showFavicons', false);
user_pref("browser.profiles.enabled", true);
user_pref('browser.search.update', false); // Disable search update
user_pref("browser.toolbars.bookmarks.visibility", "always");
//user_pref('browser.bookmarks.max_backups', 2);
user_pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons', false); // Disable CFR
user_pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features', false); // Disable CFR
user_pref('extensions.pocket.enabled', false); // Disable and hide Pocket
user_pref('extensions.pocket.site', '');
user_pref('extensions.pocket.api', '');
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.promo.focus.enabled", false);
user_pref('browser.contentblocking.report.hide_vpn_banner', true);
user_pref('browser.contentblocking.report.show_mobile_app', false);
user_pref('browser.contentblocking.report.lockwise.enabled', false);
user_pref('browser.contentblocking.report.monitor.enabled', false);
user_pref('browser.contentblocking.report.vpn.enabled', false);
user_pref('browser.messaging-system.whatsNewPanel.enabled', false); // What's New [FF70+]
//user_pref('identity.fxaccounts.enabled', false); // Disable and hide Firefox Accounts and Sync
//user_pref("identity.fxaccounts.autoconfig.uri", "");
user_pref('network.manage-offline-status', false); // See bugzilla 620472
user_pref('reader.parse-on-load.enabled', false); // 'Reader View'
user_pref('reader.color_scheme', 'dark'); // Reader View Dark Color scheme
//user_pref('xpinstall.signatures.required', false); // Enforced extension signing
user_pref('browser.backspace_action', 2); // 0 = previous page, 1 = scroll up, 2 = do nothing
user_pref('browser.display.use_system_colors', false); // Enforce no system colors
user_pref('browser.tabs.insertAfterCurrent', true); // Open new tab right after current
user_pref('browser.tabs.closeWindowWithLastTab', false);
user_pref('browser.tabs.loadBookmarksInTabs', false); // Open bookmarks in a new tab
user_pref('browser.urlbar.decodeURLsOnCopy', true); // See bugzilla 1320061
user_pref('general.autoScroll', true); // Middle-click enabling auto-scrolling
user_pref('ui.key.menuAccessKey', 0); // Disable alt key toggling the menu bar
user_pref('ui.context_menus_after_mouseup', true); // Disable stupid GTK context menu behavior
//user_pref('view_source.tab', false); // View 'page/selection source' in a new window
//user_pref('accessibility.typeaheadfind', true); // Enable 'Find As You Type'
user_pref('clipboard.autocopy', false); // Disable autocopy default [LINUX]
user_pref('layout.spellcheckDefault', 2); // 0 = none, 1 = multi-line, 2 = multi-line & single-line
user_pref('browser.privatebrowsing.forceMediaMemoryCache', true); // Disable media cache from writing to disk in Private Browsing
user_pref('media.memory_cache_max_size', 65536);
    /*      == Crash reports ==     */
user_pref('breakpad.reportURL', '');
user_pref('toolkit.crashreporter.infoURL', '');
user_pref('browser.chrome.errorReporter.infoURL', '');
user_pref('browser.tabs.crashReporting.sendReport', false);
user_pref('browser.crashReports.unsubmittedCheck.enabled', false);
user_pref('browser.crashReports.unsubmittedCheck.autoSubmit2', false);

user_pref("browser.download.open_pdf_attachments_inline", true);
/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
    /*      == Appearance ==        */
user_pref('browser.download.autohideButton', false); // Always display Downloads button
user_pref('toolkit.cosmeticAnimations.enabled', false); // Disable some animations
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true); // Allow userChrome/userContent
user_pref('svg.context-properties.content.enabled', true);
user_pref('browser.tabs.tabMinWidth', 100); // Tabs width
//user_pref('browser.tabs.drawInTitlebar', false); // Client-Side Decoration
user_pref('browser.in-content.dark-mode', true); // Dark Mode
user_pref('ui.systemUsesDarkTheme', 1);
user_pref('ui.prefersReducedMotion', 1);
user_pref('devtools.theme', 'dark'); // DevTools Dark Mode
// Dark input fields fix (for Plasma DE)
user_pref('widget.chrome.allow-gtk-dark-theme', true);
    /*      == Add-ons ==       */
user_pref('plugin.state.java', 0); // Disable Java NPAPI plugin
// System Add-ons
user_pref('app.normandy.first_run', false);
user_pref('app.normandy.enabled', false); // Disable Normandy/Shield
user_pref('app.normandy.api_url', '');
user_pref('app.normandy.user_id', '');
user_pref('app.normandy.shieldLearnMoreUrl', '');
user_pref('extensions.abuseReport.enabled', false);
user_pref('extensions.checkCompatibility', false); // Disable extensions compatibility checks
//user_pref('extensions.systemAddon.update.enabled', false); // Disable system add-ons autoupdate
//user_pref('extensions.systemAddon.update.url', '');
//user_pref('extensions.screenshots.disabled', true); // Disable Screenshots
user_pref('extensions.screenshots.upload-disabled', true); // Disable uploading to the Screenshots server
//user_pref('extensions.formautofill.addresses.enabled', false); // Disable Form Autofill
//user_pref('extensions.formautofill.available', 'off');
//user_pref('extensions.formautofill.creditCards.enabled', false);
//user_pref('extensions.formautofill.creditCards.available', false);
//user_pref("middlemouse.contentLoadURL", "");
user_pref('extensions.webcompat-reporter.enabled', false); // Disable Web Compatibility Reporter
user_pref('extensions.webcompat-reporter.newIssueEndpoint', '');
user_pref('extensions.webcompat.enable_shims', true); // [HIDDEN PREF] [DEFAULT: true]
user_pref('extensions.webcompat.enable_picture_in_picture_overrides', false);
user_pref('extensions.webcompat.perform_injections', false);
user_pref('extensions.webcompat.perform_ua_overrides', false);
user_pref('browser.ping-centre.telemetry', false);
    /*      == Media ==     */
user_pref('media.getusermedia.screensharing.enabled', false); // Disable screensharing
user_pref('media.getusermedia.browser.enabled', false);
user_pref('media.getusermedia.audiocapture.enabled', false);
// Disable WebRTC audio post processing
user_pref('media.getusermedia.agc_enabled', false);
user_pref('media.getusermedia.aec_enabled', false);
user_pref('media.getusermedia.noise_enabled', false);
user_pref('media.getusermedia.hpf_enabled', false);
user_pref('permissions.default.camera', 2); // Block camera access
user_pref('permissions.default.microphone', 2); // Block microphone access
user_pref('permissions.default.xr', 2); // Block virtual reality devices
user_pref('media.default_volume', '0.6'); // Set default HTML5 media volume
user_pref('full-screen-api.ignore-widgets', true); // Borderless fullscreen
// Autoplay
//user_pref('image.animation_mode', 'none'); // GIF animation mode: 'none' 'once' 'normal'
user_pref('media.autoplay.default', 5); // Disable Autoplay
user_pref('media.autoplay.block-event.enabled', true);
user_pref('media.autoplay.block-webaudio', true);
user_pref('media.autoplay.blocking_policy', 2); // Disable autoplay of HTML5 media if you interacted with the site
//user_pref('media.autoplay.enabled.user-gestures-needed', false);
user_pref('media.block-autoplay-until-in-foreground', true);
user_pref('media.hls.enabled', true); // Enable HLS
//user_pref('media.peerconnection.enabled', false); //Disable WebRTC
user_pref('media.peerconnection.ice.default_address_only', true); // Limit WebRTC IP leaks if using WebRTC
user_pref('media.peerconnection.ice.no_host', true);
user_pref('media.peerconnection.ice.proxy_only_if_behind_proxy', true);
// Codecs
//user_pref('media.mediasource.enabled', true);
//user_pref('media.peerconnection.video.vp9_enabled', false);
//user_pref('media.encoder.webm.enabled', false);
//user_pref('media.mediasource.webm.audio.enabled', false);
user_pref('media.mediasource.mp4.enabled', true);
//user_pref('media.mediasource.webm.enabled', false);
//user_pref('media.webm.enabled', false);
user_pref('media.mediasource.ignore_codecs', true); // Enable H.264 MSE, amongst other things
user_pref('media.mediasource.experimental.enabled', true);
user_pref('media.rdd-vpx.enabled', false); // Work around sandboxing bug (https://bugzilla.mozilla.org/show_bug.cgi?id=1673184)
    /*      == Downloads ==     */
//user_pref('browser.download.folderList', 2); // Downloads directory
user_pref('browser.download.saveLinkAsFilenameTimeout', 1000); // 'Save Link as ...' option timeout
user_pref('browser.download.useDownloadDir', false); // Enforce user interaction for security by always asking where to download
user_pref('browser.download.alwaysOpenPanel', false); // Disable downloads panel opening on every download
user_pref('browser.download.manager.addToRecentDocs', false); // Disable adding downloads to the system's 'recent documents' list
//user_pref('browser.download.forbid_open_with', true); // Disable 'open with' in download dialog
    /*      == New Tab Page ==      */
user_pref('browser.startup.homepage', 'about:blank'); // Set HOME+NEWWINDOW page: about:home=Activity Stream (default), custom URL, about:blank
//user_pref('browser.newtabpage.enabled', false); // Set NEWTAB page: true=Activity Stream (default), false=blank page
//user_pref('browser.newtab.preload', false); [DEFAULT: true]
//user_pref('browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts', ''); // Disable pinned Top Sites
user_pref('browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar', true); // Search bar within NTP
user_pref('browser.newtabpage.activity-stream.telemetry', false); // Disable Activity Stream telemetry
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.filterAdult', false);
user_pref('browser.newtabpage.activity-stream.feeds.snippets', false); // Disable Snippets
user_pref('browser.newtabpage.activity-stream.feeds.section.topstories', false); // Disable 'Recommended by Pocket'
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}");
//user_pref('browser.newtabpage.activity-stream.feeds.topsites', false); // Disable Activity Stream Top Sites
user_pref('browser.newtabpage.activity-stream.section.highlights.includePocket', false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref('browser.newtabpage.activity-stream.showSponsored', false); // Disable sponsored content
user_pref('browser.newtabpage.activity-stream.showSponsoredTopSites', false);
user_pref('browser.newtabpage.activity-stream.feeds.discoverystreamfeed', false);
user_pref('browser.newtabpage.activity-stream.default.sites', ''); // Clear default topsites (with possibility to add your own)
user_pref('browser.aboutHomeSnippets.updateUrl', '');
    /*      == URL bar ==       */
//user_pref('keyword.enabled', false); // Disable location bar using search
user_pref('browser.fixup.hide_user_pass', true);
user_pref('browser.urlbar.trimURLs', false); // Display full URL in address bar
user_pref('browser.urlbar.groupLabels.enabled', false);
// URL bar mouse-clicks behavior
user_pref('browser.urlbar.clickSelectsAll', true);
user_pref('browser.urlbar.doubleClickSelectsAll', false);
user_pref('layout.word_select.stop_at_punctuation', true);
user_pref('browser.urlbar.matchBuckets', 'general:5,suggestion:Infinity');
// Disable MegaBar
user_pref('browser.urlbar.openViewOnFocus', false);
user_pref('browser.urlbar.suggest.topsites', false);
// Disable live search suggestions
//user_pref('browser.search.suggest.enabled', false);
user_pref('browser.urlbar.suggest.quicksuggest', false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref('browser.urlbar.suggest.quicksuggest.sponsored', false);
user_pref('browser.urlbar.speculativeConnect.enabled', false); // Disable location bar making speculative connections
// Disable location bar suggestion types
//user_pref('browser.urlbar.suggest.history', false);
//user_pref('browser.urlbar.suggest.bookmark', false);
//user_pref('browser.urlbar.suggest.openpage', false);
//user_pref('browser.urlbar.suggest.searches', false);
//user_pref('browser.urlbar.suggest.engines', false);
user_pref('browser.urlbar.suggest.calculator', true); // Integrated calculator
user_pref('browser.urlbar.unitConversion.enabled', true); // Integrated unit convertor
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("browser.urlbar.richSuggestions.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false); // [DEFAULT: false]
    /*      == Other ==     */
// Misc
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("services.settings.server", "https://%.invalid");
user_pref('accessibility.force_disabled', 1); // Prevent accessibility services from accessing your browser
user_pref('accessibility.typeaheadfind.flashBar', 0);
//user_pref('browser.sessionstore.privacy_level', 0); // Store extra session data: 0 = for any site 1 = for unencrypted (non-HTTPS) sites only 2 = Never
user_pref('browser.sessionstore.interval', 30000); // Minimum interval between session save operations (ms)
user_pref('beacon.enabled', false); // Disable sending additional analytics to web servers
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+] // Remove temp files opened from non-PB windows with an external application
user_pref('browser.helperApps.deleteTempFileOnExit', true); // Remove temp files opened with an external application
user_pref('browser.pagethumbnails.capturing_disabled', true); // Disable page thumbnail collection
user_pref('browser.uitour.enabled', false); // Disable UITour backend so there is no chance that a remote page can use it
user_pref('browser.uitour.url', '');
user_pref('dom.webnotifications.enabled', false);
//user_pref('devtools.chrome.enabled', false); // Disable various developer tools in browser context
user_pref('devtools.console.stdout.chrome', false);
user_pref("browser.dom.window.dump.enabled", false);
// Disable WebIDE to prevent remote debugging and ADB extension download
user_pref('devtools.debugger.remote-enabled', false);
user_pref('devtools.selfxss.count', 0);
user_pref('devtools.webide.enabled', false);
user_pref('devtools.webide.autoinstallADBExtension', false);
user_pref('devtools.webide.autoinstallFxdtAdapters', false);
user_pref('devtools.debugger.force-local', true);
user_pref('devtools.performance.recording.ui-base-url', 'http://localhost:55555'); // Default Value : https://profiler.firefox.com
user_pref('devtools.devices.url', '');
user_pref('devtools.remote.adb.extensionURL', '');
user_pref('devtools.remote.adb.extensionID', ''); // default adb@mozilla.org
user_pref('mathml.disabled', true); // Disable MathML
//user_pref('svg.disabled', true); // Disable in-content SVG
//user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [DEFAULT: false NON-LINUX]
user_pref('permissions.default.shortcuts', 2); // Disable websites overriding Firefox's keyboard shortcuts
user_pref('permissions.manager.defaultsUrl', ''); // Remove special permissions for certain mozilla domains
user_pref('webchannel.allowObject.urlWhitelist', ''); // Remove webchannel whitelist
//user_pref('pdfjs.disabled', false); // PDF Reader
user_pref('pdfjs.enableScripting', false);
user_pref('pdfjs.previousHandler.alwaysAskBeforeHandling', true);
user_pref('pdfjs.enabledCache.state', false);
user_pref('network.http.windows-sso.enabled', false); // Disable automatic authentication on Microsoft sites
// Disable Windows jumplist [WINDOWS]
user_pref('browser.taskbar.lists.enabled', false);
user_pref('browser.taskbar.lists.frequent.enabled', false);
user_pref('browser.taskbar.lists.recent.enabled', false);
user_pref('browser.taskbar.lists.tasks.enabled', false);

/*      >>INTERFACE<<       */
    /*      == Language ==        */
user_pref('intl.locale.requested', 'en-US'); // Firefox language
user_pref('intl.accept_languages', 'en-US, en'); // Preferred language for displaying web-pages
user_pref('intl.locale.matchOS', false); // Don't use OS values to determine locale, force using Firefox locale setting
user_pref('intl.regional_prefs.use_os_locales', false); // Use APP locale over OS locale in regional preferences
    /*      == Homepage ==        */
user_pref('browser.startup.homepage_override.mstone', 'ignore'); // Master switch
user_pref('startup.homepage_welcome_url', '');
user_pref('startup.homepage_welcome_url.additional', '');
//user_pref('startup.homepage_override_url', ''); // What's New page after updates
user_pref('browser.startup.page', 3); // START page: 0 = blank, 1 = home, 2 = last visited page, 3 = resume previous session
    /*      == Secure Pages Indication ==        */
user_pref('security.ssl.treat_unsafe_negotiation_as_broken', true); // Display warning (red padlock) for 'broken security'
user_pref('browser.ssl_override_behavior', 1); // Control 'Add Security Exception' dialog on SSL warnings: 0 = do neither 1 = pre-populate url 2 = pre-populate url + pre-fetch cert (default)
user_pref('browser.xul.error_pages.expert_bad_cert', true); // Display advanced information on Insecure Connection warning pages
// Display 'insecure' icon and 'Not Secure' text on HTTP sites
//user_pref('security.insecure_connection_icon.enabled', true);
//user_pref('security.insecure_connection_text.enabled', true);
//user_pref('security.insecure_connection_icon.pbmode.enabled', true);
//user_pref('security.insecure_connection_text.pbmode.enabled', true);
    /*      == Warnings ==        */
user_pref('browser.tabs.warnOnCloseOtherTabs', false);
user_pref('browser.tabs.warnOnOpen', false);
//user_pref('browser.tabs.warnOnQuitShortcut', false);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref('full-screen-api.warning.delay', -1);
user_pref('full-screen-api.warning.timeout', 0);
user_pref('browser.aboutConfig.showWarning', false);
user_pref("browser.preferences.moreFromMozilla", false);
    /*      == Picture-in-Picture ==        */
user_pref('media.videocontrols.picture-in-picture.enabled', true);
user_pref('media.videocontrols.picture-in-picture.video-toggle.enabled', true);
//user_pref('media.videocontrols.picture-in-picture.video-toggle.always-show', true);
/*      == Fonts ==     */
//user_pref('browser.display.use_document_fonts', 0); // Disable websites choosing fonts (0=block, 1=allow) NOTE: Can break some PDFs
// Disable icon fonts (glyphs) and local fallback rendering
//user_pref('gfx.downloadable_fonts.enabled', false);
//user_pref('gfx.downloadable_fonts.fallback_delay', -1);
user_pref('font.name-list.emoji', 'emoji'); // Change Firefox emoji set (default = 'Twemoji Mozilla', system set = 'emoji')
user_pref('gfx.font_rendering.opentype_svg.enabled', false); // Disable rendering of SVG OpenType fonts
user_pref('gfx.font_rendering.graphite.enabled', false); // Disable graphite
//user_pref('layout.css.font-loading-api.enabled', false); // Disable Font Face loading (from external resources like Google Fonts)
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false);

/*      >>PERFORMANCE<<     */
    /*      == General ==        */
//user_pref('gfx.webrender.all', true); // Enable WebRender
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
//user_pref("gfx.webrender.software.opengl", true); // LINUX
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
//user_pref("gfx.webrender.super-resolution.nvidia", true)
//user_pref("gfx.webrender.compositor.force-enabled", true);
//user_pref('layers.acceleration.force-enabled', true);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);
//user_pref("layers.mlgpu.enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
//user_pref("media.hardware-video-decoding.force-enabled", true);
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true); // DEFAULT
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true); // enforce
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true); // DEFAULT
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true);
//user_pref('layout.frame_rate', 60); // Pages FPS
//user_pref('canvas.capturestream.enabled', false); // Disable Canvas
user_pref('gfx.canvas.accelerated', true);
user_pref("dom.webgpu.enabled", true);
//user_pref("gfx.webgpu.force-enabled", true);
//user_pref("dom.webgpu.indirect-dispatch.enabled", true);
user_pref("media.gpu-process-decoder", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("dom.iframe_lazy_loading.enabled", true); // DEFAULT [FF121+]
/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);
// WebGL
user_pref('webgl.disabled', true);
user_pref('webgl.disable-extensions', true);
user_pref('webgl.msaa-samples', 0);
user_pref('layers.geometry.d3d11.enabled', false); // Disable usage of D3D11
user_pref('layers.enable-tiles', true); // Tiles
user_pref('browser.preferences.defaultPerformanceSettings.enabled', false); // Disable Firefox 'recommended' performance settings
// Limit process amount
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false); // Disable eff mode for background tabs [WINDOWS]
user_pref("fission.webContentIsolationStrategy", 0);
user_pref('dom.ipc.processCount', 1); // Adjust Web Content process limit
user_pref("dom.ipc.processCount.webIsolated", 1); // default=4; Isolated Web Content
user_pref("dom.ipc.processPrelaunch.fission.number", 1); // default=3; Process Preallocation Cache
user_pref('extensions.webextensions.remote', false);
user_pref('dom.ipc.keepProcessesAlive.privilegedabout', 0);
user_pref('browser.tabs.unloadOnLowMemory', true); // Tabs discarding
user_pref("browser.low_commit_space_threshold_mb", 4096); // default=200; WINDOWS LINUX
user_pref("browser.low_commit_space_threshold_percent", 13); // default=5; LINUX
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000
user_pref('security.sandbox.content.level', 0); // Sandbox content level (Optimal = 2)
user_pref('fission.autostart', true); // [DEFAULT] Site isolation for security (Fission)
// TABS
//user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionstore.restore_tabs_lazily", true);
// Wayland VA-API
//user_pref('widget.wayland-dmabuf-vaapi.enabled', true);
//user_pref('media.ffvpx.enabled', false); // Disable bundled FFmpeg
    /*      == Cache ==        */
//user_pref('browser.cache.disk.enable', true); // Enable disk cache
//user_pref('browser.cache.disk_cache_ssl', false);
user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
user_pref('browser.cache.disk.capacity', 524288); // Disk cache capacity: -1 = determine dynamically (default), 0 = none, n = memory capacity in kilobytes
user_pref("browser.cache.disk.max_entry_size", 51200);
user_pref("browser.cache.disk.metadata_memory_limit", 500);
user_pref("browser.cache.frecency_half_life_hours", 4);
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("browser.sessionhistory.max_total_viewers", 4);
//user_pref("dom.script_loader.bytecode_cache.enabled", true); // DEFAULT
//user_pref("dom.script_loader.bytecode_cache.strategy", 0); // DEFAULT
//user_pref("browser.cache.disk.preload_chunk_count", 4); // DEFAULT
//user_pref('browser.cache.disk.parent_directory', '/run/user/1000/firefox-cache'); // Write cache to RAM (tmpfs) instead of SSD / HDD
//user_pref('browser.cache.memory.enable', false); // Disable memory cache
//user_pref('browser.cache.memory.capacity', -1); // Memory cache capacity: -1 = determine dynamically (default), 0 = none, n = memory capacity in kilobytes
//user_pref('browser.cache.compression_level', 1); // Cache compression level: 1-9 (CPU dependant)
//user_pref('permissions.memory_only', true) // Disable permissions manager from writing to disk (This means any permission changes are session only)
user_pref("browser.cache.memory.max_entry_size", 153600);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
// NETWORK
user_pref('network.http.http3.enable', false);
user_pref("network.http.enable_compression_dictionaries", true); // [FF147+] Faster page loads via HTTP compression dictionaries
//user_pref("network.buffer.cache.size", 262144);
//user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.max-persistent-connections-per-proxy", 48);
user_pref("network.ssl_tokens_cache_capacity", 10240);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
user_pref("network.http.pacing.requests.burst", 14); // default=10
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dnsCacheExpirationGracePeriod", 240);
//user_pref("network.dns.max_high_priority_threads", 8); // default=5
//user_pref("network.dns.max_any_priority_threads", 3); // DEFAULT
user_pref("network.fetchpriority.enabled", true);
user_pref("network.early-hints.enabled", true);

/*      >>SECURITY<<     */
    /*      == HTTP ==      */
//user_pref('network.dns.disableIPv6', true); // Disable IPv6
user_pref('network.http.altsvc.enabled', false); // Disable HTTP Alternative Services
user_pref('network.http.altsvc.oe', false);
user_pref('network.proxy.type', 0); // Disable looking for system proxy
user_pref('network.proxy.socks_remote_dns', true); // Enforce the proxy server to do any DNS lookups when using SOCKS
//user_pref('network.trr.mode', 2); // Enable DNS over HTTPS
//user_pref('network.trr.bootstrapAddress', '1.1.1.1');
//user_pref('network.trr.uri', 'https://cloudflare-dns.com/dns-query'); // DoH Server | https://github.com/curl/curl/wiki/DNS-over-HTTPS
user_pref('network.trr.resolvers', '[{ "name": "Cloudflare (non-Mozilla)", "url": "https://cloudflare-dns.com/dns-query" },{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" },{ "name": "Google", "url": "https://dns.google/dns-query" },{ "name": "Cisco/OpenDNS", "url": "https://doh.opendns.com/dns-query" },{ "name": "Adguard", "url": "https://dns.adguard.com/dns-query" },{ "name": "Adguard Family Protection", "url": "https://dns-family.adguard.com/dns-query" },{ "name": "DNSWarden Adblock", "url": "https://doh.dnswarden.com/adblock" },{ "name": "DNSWarden Uncensored", "url": "https://doh.dnswarden.com/uncensored" },{ "name": "SecureDNS", "url": "https://doh.securedns.eu/dns-query" },{ "name": "AppliedPrivacy", "url": "https://doh.appliedprivacy.net/query" },{ "name": "Digitale Gesellschaft (CH)", "url": "https://dns.digitale-gesellschaft.ch/dns-query" }, { "name": "Quad9", "url": "https://dns.quad9.net/dns-query" }]'); // DoH Resolvers
//user_pref('network.security.esni.enabled', true); // Enable ESNI
//user_pref('network.file.disable_unc_paths', false); // Disable using UNC (Uniform Naming Convention) paths NOTE: Can cause extension storage to fail
user_pref('network.gio.supported-protocols', ''); // Disable GIO as a potential proxy bypass vector
// Cookie Banner handling
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
// Disable resource preloading / prefetch
user_pref('network.dns.disablePrefetch', true);
//user_pref('network.dns.disablePrefetchFromHTTPS', true);
//user_pref('network.predictor.enabled', false);
//user_pref('network.predictor.enable-prefetch', false);
user_pref('network.prefetch-next', false);
user_pref('network.http.speculative-parallel-limit', 0); // Disable connection opening on link-mouseover
user_pref('browser.places.speculativeConnect.enabled', false);
// HTTPS (SSL/TLS / OCSP / CERTS / HPKP / CIPHERS)
//user_pref('security.ssl.require_safe_negotiation', true); // Disable old SSL/TLS 'insecure' renegotiation (vulnerable to a MiTM attack)
// Control TLS versions (Firefox telemetry (April 2019) shows only 0.5% of TLS web traffic uses 1.0 or 1.1) 1=TLS 1.0, 2=TLS 1.1, 3=TLS 1.2, 4=TLS 1.3
user_pref('security.tls.version.min', 3);
user_pref('security.tls.version.max', 4);
user_pref('security.tls.version.fallback-limit', 3);
user_pref('security.ssl.enable_false_start', false); // No Google SSL False Start
user_pref('security.tls.version.enable-deprecated', false); // Enforce TLS 1.0 and 1.1 downgrades as session only
user_pref('security.tls.enable_0rtt_data', false); // Disable TLS1.3 0-RTT
user_pref('security.tls.enable_kem', true); // [FF146+] Enable ML-KEM post-quantum cryptography
user_pref('security.OCSP.enabled', 1);
//user_pref('security.OCSP.require', true); // OCSP fetch: false = soft-fail, true = hard-fail
//user_pref("privacy.partition.network_state.ocsp_cache", true); // [DEFAULT: true FF123+]
//user_pref("privacy.query_stripping.enabled", true); // [FF101+]
user_pref('privacy.query_stripping.strip_list', '__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid')
user_pref('librewolf.uBO.assetBootstrapLocation', 'https://gitlab.com/librewolf-community/browser/source/-/raw/main/assets/uBOAssets.json')
// CERTS / HPKP (HTTP Public Key Pinning)
// Enforce CRLite
user_pref('security.remote_settings.crlite_filters.enabled', true);
user_pref('security.pki.crlite_mode', 2);
//user_pref('security.nocertdb', true); // Disable intermediate certificate caching (fingerprinting attack vector)
user_pref('security.cert_pinning.enforcement_level', 2); // PKP (Public Key Pinning) 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict
// Captive Portal Detection
//user_pref('captivedetect.canonicalURL', '');
//user_pref('network.captive-portal-service.enabled', false);
//user_pref('network.connectivity-service.enabled', false); // Disable Network Connectivity checks
    /*      == Privacy ==       */
user_pref('dom.security.https_only_mode', true); // [FF136+] Enable HTTPS-First mode (upgrades to HTTPS with smart fallback)
user_pref('dom.security.https_only_mode_pbm', true);
//user_pref('dom.security.https_only_mode.upgrade_local', true); // Enable HTTPS-Only mode for local resources (may break local development tools)
user_pref('dom.security.https_only_mode_send_http_background_request', false); // Disable HTTP background requests
    /*      == New Privacy Features (2024-2025) ==       */
user_pref("privacy.fingerprintingProtection", true); // [FF114+] Enhanced anti-fingerprinting (Phase 2 protections in FF145+)
user_pref("privacy.bounceTrackingProtection.mode", 1); // [FF133+] Bounce tracking protection
user_pref('browser.send_pings', false); // Disable 'Hyperlink auditing'
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]
// DRM
//user_pref('media.eme.enabled', false); // DRM-controlled content playback
//user_pref('browser.eme.ui.enabled', false);
//user_pref('media.gmp-provider.enabled', false); // Disable GMP (Gecko Media Plugins)
//user_pref('media.gmp-manager.url', 'data:text/plain,');
//user_pref('media.gmp-gmpopenh264.enabled', false);
//user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
//user_pref('network.cookie.cookieBehavior', 1); // Cookie behavior: 0 = Accept all cookies 1 = Block third-party cookies 2 = Block all cookies
user_pref('network.cookie.thirdparty.sessionOnly', true); // Set third-party cookies to session-only
user_pref('network.cookie.thirdparty.nonsecureSessionOnly', true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref('urlclassifier.trackingTable', '');
//user_pref('urlclassifier.trackingTable', 'moztest-track-simple,base-track-digest256,content-track-digest256');
//user_pref('network.cookie.lifetimePolicy', 2); // Delete cookies on browser close
//user_pref('dom.storage.enabled', false); // Disable DOM Storage
user_pref('dom.storage.next_gen', true); // Enable Local Storage Next Generation
user_pref('dom.indexedDB.enabled', true); // Enforce IndexedDB (IDB) as enabled
user_pref('browser.cache.offline.storage.enable', false); // Enforce no offline cache storage (appCache)
user_pref('offline-apps.allow_by_default', false); // Enforce websites to ask to store data for offline use
//user_pref('dom.caches.enabled', false); // Disable service worker cache and cache storage
user_pref('dom.targetBlankNoOpener.enabled', true); // Makes rel=noopener implicit
//user_pref('dom.storageManager.enabled', false); // Disable Storage API
//user_pref('dom.storage_access.enabled', false); // Disable Storage Access API
user_pref('network.IDN_show_punycode', true); // Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
user_pref('privacy.userContext.enabled', true); // Enable Container Tabs
user_pref('privacy.userContext.ui.enabled', true); // Enable Container Tabs setting in preferences
user_pref('privacy.usercontext.about_newtab_segregation.enabled', true); // Enable a private container for thumbnail loads
user_pref('privacy.userContext.longPressBehavior', 2); // Set behavior on '+ Tab' button to display container menu: 0=no menu (default), 1=show when clicked, 2=show on long press
user_pref('privacy.window.name.update.enabled', true); // Enable 'window.name' protection
user_pref('privacy.spoof_english', 2); // If Accept-Language should be spoofed by en-US: 0 - will prompt (default), 1 - don't spoof, 2 - spoof
// Referer
user_pref('network.http.sendRefererHeader', 2); // Control when images/links send a referer: 0 = never, 1 = send only when links are clicked, 2 = for links and images (default)
//user_pref('network.http.referer.spoofSource', true); // Enable spoofing a referer
//user_pref('network.http.referer.XOriginPolicy', 0); // Send Referer: 0 = in all cases 1 = to same eTLD sites 2 = only when the full hostnames match
//user_pref('network.http.referer.XOriginTrimmingPolicy', 0); // Info to be sent to header: 0 = full url 1 = URL without query string 2 = scheme, host, and port
//user_pref('network.http.referer.defaultPolicy', 2);
//user_pref('network.http.referer.defaultPolicy.pbmode', 2);
// Security
user_pref('security.csp.enable', true); // Enable CSP (Content Security Policy)
user_pref('security.dialog_enable_delay', 1000); // Enforce a security delay on some confirmation dialogs such as install, open/save
// First Party Isolation
//user_pref('privacy.firstparty.isolate', true); // Enable First Party Isolation
user_pref('privacy.firstparty.isolate.restrict_opener_access', true); // Enforce FPI restriction for window.opener
//user_pref('privacy.firstparty.isolate.block_post_message', true);
//user_pref('privacy.firstparty.isolate.use_site', true); // Enable scheme with FPI
// Service Workers
//user_pref('dom.serviceWorkers.enabled', false); // Disable service workers
//user_pref('dom.push.enabled', false); // Disable Push Notifications. Breaks FF Sync and website notifications
//user_pref('dom.push.connection.enabled', false);
//user_pref('dom.push.serverURL', '');
//user_pref('dom.push.userAgentID', ''); // To remove all notification subscriptions
user_pref('permissions.default.desktop-notification', 2); // Disable desktop notifications
//user_pref('dom.event.contextmenu.enabled', false); // Disable website control over browser right-click context menu NOTE: May cause context menu doubling
//user_pref('dom.event.clipboardevents.enabled', false); // Disable website access to clipboard events/content NOTE: Can break some websites functionality
user_pref('middlemouse.paste', false); // Disable middlemouse paste leaking clipboard content on Linux after autoscroll
//user_pref('dom.allow_cut_copy', false); // Disable clipboard commands (cut/copy) from 'non-privileged' content
user_pref('dom.disable_beforeunload', true); // Disable 'Confirm you want to leave' dialog on page close
user_pref('dom.vibrator.enabled', false); // Disable shaking the screen
//user_pref('javascript.options.asmjs', false); // Disable asmjs
// Disable Ion and baseline JIT to help harden JS against exploits (can cause performance loss)
//user_pref('javascript.options.ion', false);
//user_pref('javascript.options.baselinejit', false);
//user_pref('javascript.options.wasm', false); // Disable WebAssembly
//user_pref('javascript.options.jit_trustedprincipals', true);
user_pref('javascript.options.shared_memory', false);
user_pref('dom.targetBlankNoOpener.enabled', true); // Enable (limited but sufficient) window.opener protection
    /*      == Telemetry >_< ==        */
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.unifiedIsOptIn', false);
user_pref('toolkit.telemetry.enabled', false);
user_pref('toolkit.telemetry.prioping.enabled', false);
user_pref('toolkit.telemetry.server', '');
user_pref('toolkit.telemetry.infoURL', '');
user_pref('toolkit.datacollection.infoURL', '');
user_pref('toolkit.telemetry.log.dump', 'Fatal');
user_pref('toolkit.telemetry.log.level', 'Fatal');
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false);
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false);
user_pref('toolkit.telemetry.shutdownPingSender.enabledFirstSession', false);
user_pref('toolkit.telemetry.updatePing.enabled', false);
user_pref('toolkit.telemetry.bhrPing.enabled', false);
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false);
user_pref('toolkit.telemetry.reportingpolicy.firstRun', false);
user_pref('toolkit.telemetry.coverage.opt-out', true);
user_pref('toolkit.telemetry.cachedClientID', '');
user_pref('toolkit.telemetry.pioneer-new-studies-available', false);
user_pref('toolkit.telemetry.pioneerID', '');
user_pref('experiments.activeExperiment', false);
user_pref('experiments.enabled', false);
user_pref('experiments.supported', false);
user_pref('network.allow-experiments', false);
user_pref('toolkit.coverage.enabled', false);
user_pref('toolkit.coverage.opt-out', true);
user_pref('toolkit.coverage.endpoint.base', '');
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.healthreport.service.enabled', false); // Disable Health Reports
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('datareporting.healthreport.infoURL', '');
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('browser.contentblocking.report.cookie.url', '');
user_pref('browser.contentblocking.report.cryptominer.url', '');
user_pref('browser.contentblocking.report.fingerprinter.url', '');
user_pref('app.shield.optoutstudies.enabled', false);
user_pref('extensions.getAddons.showPane', false); // Disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("lightweightThemes.getMoreURL", "");
user_pref("browser.topsites.useRemoteSetting", false);
user_pref('extensions.htmlaboutaddons.recommendations.enabled', false); // Disable recommendations in about:addons' Extensions and Themes panes
user_pref('extensions.getAddons.cache.enabled', false); // Opt-out of add-on metadata updates
user_pref('browser.discovery.enabled', false); // Disable personalized Extension Recommendations in about:addons and AMO
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false] // Disable shopping experience
    /*      == Windows Preferences (Prevent websites from disabling new window features) ==         */
user_pref('dom.disable_window_move_resize', true); // Prevent scripts from moving and resizing open windows
user_pref('browser.link.open_newwindow', 3); // Open links targeting new windows in a new tab instead 1 = most recent window or tab, 2 = new window, 3 = new tab
user_pref('browser.link.open_newwindow.restriction', 0);
user_pref('dom.disable_open_during_load', true); // Block popup windows
user_pref('dom.popup_maximum', 4);
user_pref('dom.popup_allowed_events', 'click dblclick mousedown pointerdown'); // Limit events that can cause a popup
    /*      == Geolocation ==       */
user_pref('geo.enabled', false); // Location-Aware Browsing
user_pref('permissions.default.geo', 2); // Location permissions: 0 = always ask (default), 1 = allow, 2 = block
user_pref('browser.region.network.url', '');
user_pref('browser.region.update.enabled', false); // Disable region updates
user_pref('browser.search.isUS', true);
user_pref('browser.search.region', 'US'); // US region for search engine
user_pref('browser.search.countryCode', 'US');
user_pref('browser.search.geoip.url', '');
user_pref('browser.search.geoSpecificDefaults', false);
user_pref('browser.search.geoSpecificDefaults.url', '');
user_pref('browser.search.geoip.timeout', 1);
user_pref('browser.search.geoip.url', '');
user_pref('browser.translations.neverTranslateLanguages', 'en,uk,ru');
// Disable using the OS's geolocation service
user_pref('geo.provider.use_corelocation', false); // [MAC]
user_pref('geo.provider.ms-windows-location', false); // [WINDOWS]
user_pref('geo.provider.use_gpsd', false); // [LINUX]
user_pref('geo.provider.use_geoclue', false); // [LINUX]
user_pref('geo.wifi.uri', 'https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%'); // Use Mozilla geolocation service instead of Google when geolocation is enabled
user_pref('geo.provider.network.url', 'https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%');
user_pref('geo.wifi.logging.enabled', false); // Disable logging to console when geolocation is enabled
    /*      == Safe Browsing ==     */
user_pref('browser.safebrowsing.malware.enabled', false);
user_pref('browser.safebrowsing.phishing.enabled', false);
user_pref('browser.safebrowsing.blockedURIs.enabled', false);
user_pref('browser.safebrowsing.downloads.enabled', false);
user_pref('browser.safebrowsing.downloads.remote.url', '');
user_pref('browser.safebrowsing.downloads.remote.enabled', false);
user_pref('browser.safebrowsing.downloads.remote.block_dangerous', false);
user_pref('browser.safebrowsing.downloads.remote.block_dangerous_host', false);
user_pref('browser.safebrowsing.downloads.remote.block_potentially_unwanted', false);
user_pref('browser.safebrowsing.downloads.remote.block_uncommon', false);
user_pref('browser.safebrowsing.provider.google.reportURL', '');
user_pref('browser.safebrowsing.provider.google.reportMalwareMistakeURL', '');
user_pref('browser.safebrowsing.provider.google.reportPhishMistakeURL', '');
user_pref('browser.safebrowsing.provider.google.gethashURL', '');
user_pref('browser.safebrowsing.provider.google.updateURL', '');
user_pref('browser.safebrowsing.provider.google4.dataSharingURL', '');
user_pref('browser.safebrowsing.provider.google4.reportMalwareMistakeURL', '');
user_pref('browser.safebrowsing.provider.google4.reportPhishMistakeURL', '');
user_pref('browser.safebrowsing.provider.google4.reportURL', '');
user_pref('browser.safebrowsing.provider.google4.gethashURL', '');
user_pref('browser.safebrowsing.provider.google4.updateURL', '');
user_pref('browser.safebrowsing.provider.mozilla.gethashURL', '');
user_pref('browser.safebrowsing.provider.mozilla.updateURL', '');
user_pref('browser.safebrowsing.reportPhishURL', '');
    /*      == RFP (Resist Fingerprinting) ==       */
//user_pref('privacy.resistFingerprinting', true); // Tor Uplift project that makes Firefox more resistant to browser fingerprinting (can cause breakage)
user_pref('privacy.resistFingerprinting.block_mozAddonManager', true); // Disable mozAddonManager Web API
//user_pref('privacy.resistFingerprinting.letterboxing', true); // Enable RFP letterboxing (quite upsetting thing)
//user_pref('privacy.resistFingerprinting.letterboxing.dimensions', ''); // Is only meant for testing, and I recommend you DO NOT USE it
user_pref('browser.startup.blankWindow', false); // Disable showing about:blank as soon as possible during startup
    /*      == RFP Alternatives ==      */
user_pref('dom.maxHardwareConcurrency', 2); // Spoof number of CPU cores
user_pref('dom.enable_resource_timing', false); // Disable resource/navigation timing
user_pref('dom.enable_user_timing', false); // Make sure the User Timing API does not provide a new high resolution timestamp
//user_pref('dom.enable_performance', false); // Disable timing attacks
user_pref('device.sensors.enabled', false); // Disable device sensor API
user_pref('device.sensors.motion.enabled', false);
user_pref('device.sensors.orientation.enabled', false);
//user_pref('browser.zoom.siteSpecific', false); // Disable site specific zoom
user_pref('dom.gamepad.enabled', false); // Disable gamepad API - USB device ID enumeration
user_pref('dom.netinfo.enabled', false); // Disable giving away network info
user_pref('media.webspeech.synth.enabled', false); // Disable the SpeechSynthesis (Text-to-Speech) part of the Web Speech API
//user_pref('media.video_stats.enabled', false); // Disable video statistics - JS performance fingerprinting
user_pref('dom.w3c_touch_events.enabled', 0); // Disable touch events
user_pref('media.ondevicechange.enabled', false); // Disable MediaDevices change detection
user_pref('webgl.enable-debug-renderer-info', false); // Disable WebGL debug info being available to websites
user_pref('ui.use_standins_for_native_colors', true); // Disable exposure of system colors to CSS or canvas
// Tor-like anti-fingerprint overridings
//user_pref('general.useragent.override', 'Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0');
//user_pref('general.buildID.override', '20100101');
//user_pref('browser.startup.homepage_override.buildID', '20100101');
//user_pref('general.appname.override', '');
//user_pref('general.appversion.override', '');
//user_pref('general.platform.override', '');
//user_pref('general.oscpu.override', '');
//user_pref("general.useragent.compatMode.firefox", true);
    /*      == Hardware Fingerprinting ==       */
user_pref('dom.battery.enabled', false); // Disable Battery API
user_pref('dom.vr.enabled', false); // Disable WebVR API
user_pref('dom.telephony.enabled', false); // Disable Telephony API
user_pref('media.navigator.enabled', false);  // Disable media device enumeration
user_pref('media.navigator.video.enabled', false); // Disable WebRTC video capture
user_pref('dom.webaudio.enabled', false); // Disable WebAudio API
    /*      == Mixed content ==     */
user_pref('security.mixed_content.block_active_content', true); // Disable insecure active content on https pages
user_pref('security.mixed_content.block_display_content', true); // Disable insecure passive content (such as images) on https pages
    /*      == Extensions ==        */
//user_pref('extensions.enabledScopes', 5); // Lock down allowed extension directories
//user_pref('extensions.autoDisableScopes', 15);
//user_pref('extensions.webextensions.restrictedDomains', ''); // Disable webextension restrictions on certain mozilla domains (forbid to download extensions)
user_pref("extensions.quarantinedDomains.enabled", true); // [DEFAULT: true]
user_pref('extensions.webextensions.restrictedDomains', 'accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com'); // Removed AMO from restricted domains
user_pref('extensions.postDownloadThirdPartyPrompt', false); // Disable bypassing 3rd party extension install prompts
    /*      == Browser Content Blocking ==      */
user_pref('privacy.donottrackheader.enabled', true); // DONOTTRACKMEDAMN
user_pref('browser.contentblocking.category', 'custom');
//user_pref('privacy.trackingprotection.enabled', true);
user_pref('privacy.trackingprotection.pbmode.enabled', true);
user_pref('privacy.trackingprotection.socialtracking.enabled', true);
//user_pref('privacy.trackingprotection.cryptomining.enabled', true);
//user_pref('privacy.trackingprotection.fingerprinting.enabled', true);
user_pref('privacy.trackingprotection.annotate_channels', false);
// Extension blocklist
user_pref('extensions.blocklist.enabled', true);
user_pref('services.blocklist.update_enabled', true);
user_pref('extensions.blocklist.url', 'https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/');
    /*      == Passwords ==     */
//user_pref('signon.rememberSignons', false); // Disable saving passwords
//user_pref('security.ask_for_password', 2); // How often Firefox should ask for the master password: 0 = the first time (default), 1 = every time it's needed, 2 = every n minutes
//user_pref('security.password_lifetime', 5); // How often in minutes Firefox should ask for the master password
//user_pref('signon.autofillForms', false); // Disable auto-filling username & password form fields
//user_pref('signon.formlessCapture.enabled', false); // Disable formless login capture for Password Manager
// PREF: disable Firefox Relay
// Privacy & Security > Passwords > Suggest Firefox Relay email masks to protect your email address
//user_pref("signon.firefoxRelay.feature", "");
user_pref("signon.firefoxRelay.feature", "");
user_pref('network.auth.subresource-http-auth-allow', 1); // HTTP authentication credentials dialogs: 0 = don't allow sub-resources 1 = don't allow cross-origin sub-resources 2 = allow sub-resources (default)
    /*      == Shutdown ==      */
//user_pref('privacy.sanitize.sanitizeOnShutdown', true); // Enable Firefox to clear items on shutdown
//user_pref('privacy.clearOnShutdown.cache', true);
//user_pref('privacy.clearOnShutdown.cookies', true);
//user_pref('privacy.clearOnShutdown.downloads', true);
//user_pref('privacy.clearOnShutdown.formdata', true); // Form & Search History
//user_pref('privacy.clearOnShutdown.history', true); // Browsing & Download History
//user_pref('privacy.clearOnShutdown.offlineApps', true); // Offline Website Data
//user_pref('privacy.clearOnShutdown.sessions', true); // Active Logins
//user_pref('privacy.clearOnShutdown.siteSettings', false); // Site Preferences
// Reset default items to clear with Ctrl-Shift-Del
//user_pref('privacy.cpd.cache', true);
//user_pref('privacy.cpd.cookies', true);
//user_pref('privacy.cpd.downloads', true); // not used, see note above
//user_pref('privacy.cpd.formdata', true); // Form & Search History
//user_pref('privacy.cpd.history', true); // Browsing & Download History
//user_pref('privacy.cpd.offlineApps', true); // Offline Website Data
//user_pref('privacy.cpd.passwords', false); // this is not listed
//user_pref('privacy.cpd.sessions', true); // Active Logins
//user_pref('privacy.cpd.siteSettings', false); // Site Preferences
// Clear Session Restore data when sanitizing on shutdown or manually
//user_pref('privacy.clearOnShutdown.openWindows', true);
//user_pref('privacy.cpd.openWindows', true);
// Reset default 'Time range to clear' for 'Clear Recent History'
// 0=everything, 1=last hour, 2=last two hours, 3=last four hours,
// 4=today, 5=last five minutes, 6=last twenty-four hours
//user_pref('privacy.sanitize.timeSpan', 0);
    /*      == Ciphers ==       */
// Disable 3DES (effective key size < 128)
//user_pref('security.ssl3.rsa_des_ede3_sha', false);
// Disable DHE (Diffie-Hellman Key Exchange)
//user_pref('security.ssl3.dhe_rsa_aes_128_sha', false);
//user_pref('security.ssl3.dhe_rsa_aes_256_sha', false);
/* 1264: Disable the remaining non-modern cipher suites as of FF78 (in order of preferred by FF) */
//user_pref('security.ssl3.ecdhe_ecdsa_aes_256_sha', false);
//user_pref('security.ssl3.ecdhe_ecdsa_aes_128_sha', false);
//user_pref('security.ssl3.ecdhe_rsa_aes_128_sha', false);
//user_pref('security.ssl3.ecdhe_rsa_aes_256_sha', false);
//user_pref('security.ssl3.rsa_aes_128_gcm_sha256', false); // no PFS
//user_pref('security.ssl3.rsa_aes_256_gcm_sha384', false); // no PFS
//user_pref('security.ssl3.rsa_aes_128_sha', false); // no PFS
//user_pref('security.ssl3.rsa_aes_256_sha', false); // no PFS

/**
 * [SET] the following preferences adjusts the smooth scrolling feature of
 * Firefox when using a mouse wheel or keyboard keys to scroll
 */
//user_pref('general.smoothScroll.lines.durationMaxMS', 400);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
//user_pref('general.smoothScroll.lines.durationMinMS', 200);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
//user_pref('general.smoothScroll.mouseWheel.durationMaxMS', 600);    // smooth the start/end of scrolling operations in ms
//user_pref('general.smoothScroll.mouseWheel.durationMinMS', 300);    // smooth the start/end of scrolling operations in ms
//user_pref('general.smoothScroll.other.durationMaxMS', 400);         // smooth the start/end of other scrolling operations in ms
//user_pref('general.smoothScroll.other.durationMinMS', 200);         // smooth the start/end of other scrolling operations in ms
//user_pref('general.smoothScroll.pages.durationMaxMS', 400);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
//user_pref('general.smoothScroll.pages.durationMinMS', 200);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
//user_pref('mousewheel.acceleration.factor', 10);                    // sets acceleration factor if mouse wheel.acceleration.start > -1
//user_pref('mousewheel.acceleration.start', 0);                      // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
//user_pref('mousewheel.default.delta_multiplier_x', 85);             // sets the x-axis step size
//user_pref('mousewheel.default.delta_multiplier_y', 85);             // sets the y-axis step size
//user_pref('mousewheel.default.delta_multiplier_z', 85);             // sets the z-axis step size
//user_pref('mousewheel.min_line_scroll_amount', 10);                 // if the CSS line height is smaller than this value in pixels, each scroll click will scroll this amount

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // 10-40; adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", 1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting", 1.0);
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking


//user_pref("app.support.baseURL", "https://support.librewolf.net/");
//user_pref("browser.search.searchEnginesURL", "https://librewolf.net/docs/faq/#how-do-i-add-a-search-engine");
//user_pref("browser.geolocation.warning.infoURL", "https://librewolf.net/docs/faq/#how-do-i-enable-location-aware-browsing");
//user_pref("app.feedback.baseURL", "https://librewolf.net/#questions");
//user_pref("app.releaseNotesURL", "https://gitlab.com/librewolf-community/browser");
//user_pref("app.releaseNotesURL.aboutDialog", "https://gitlab.com/librewolf-community/browser");
//user_pref("app.update.url.details", "https://gitlab.com/librewolf-community/browser");
//user_pref("app.update.url.manual", "https://gitlab.com/librewolf-community/browser");
