// ============================================================================
// FOX-HAX: Firefox Privacy & Performance Configuration
// Version: 2025.1
// Target: Firefox 146+
// ============================================================================
// This file configures Firefox for maximum privacy, security, and performance.
// Preferences are organized by category for easy navigation.
// ============================================================================

user_pref("browser.aboutConfig.showWarning", false);

// =============================================================================
// SECTION 1: TELEMETRY & DATA COLLECTION
// =============================================================================

// Unified Telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.prioping.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.pioneerID", "");
user_pref("toolkit.telemetry.log.dump", "Fatal");
user_pref("toolkit.telemetry.log.level", "Fatal");

// Coverage & Experiments
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("network.allow-experiments", false);
user_pref("app.shield.optoutstudies.enabled", false);

// Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.usage.uploadEnabled", false);

// Crash Reporting
user_pref("breakpad.reportURL", "");
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.chrome.errorReporter.infoURL", "");

// Activity Stream Telemetry
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);

// =============================================================================
// SECTION 2: MOZILLA SERVICES & PROMOTIONS
// =============================================================================

// Normandy/Shield
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.user_id", "");
user_pref("app.normandy.shieldLearnMoreUrl", "");

// Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.api", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Firefox Account
// user_pref("identity.fxaccounts.enabled", false);
// user_pref("identity.fxaccounts.autoconfig.uri", "");

// VPN Promotions
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.vpn.enabled", false);

// Other Promotions
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.shopping.experience2023.enabled", false);

// CFR (Contextual Feature Recommender)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Extension Recommendations
user_pref("browser.discovery.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("lightweightThemes.getMoreURL", "");
user_pref("browser.topsites.useRemoteSetting", false);

// =============================================================================
// SECTION 3: AI FEATURES (Firefox 130+)
// =============================================================================

user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);

// =============================================================================
// SECTION 4: UI & APPEARANCE
// =============================================================================

// Density & Mode
user_pref("browser.uidensity", 1);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.use_system_colors", false);
user_pref("browser.in-content.dark-mode", true);
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("ui.prefersReducedMotion", 1);
user_pref("devtools.theme", "dark");
user_pref("widget.chrome.allow-gtk-dark-theme", true);

// Custom CSS
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);

// Tabs
user_pref("browser.tabs.tabMinWidth", 100);
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInTabs", false);
user_pref("browser.tabs.closeTabByDblclick", true);
user_pref("browser.tabs.loadInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);

// Bookmarks
user_pref("browser.toolbars.bookmarks.visibility", "always");
user_pref("browser.bookmarks.openInTabClosesMenu", false);
// user_pref("browser.bookmarks.max_backups", 2);

// Fullscreen
user_pref("full-screen-api.ignore-widgets", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

// Animations
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Focus Ring
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);

// Other UI
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.profiles.enabled", true);
user_pref("browser.download.autohideButton", false);
user_pref("widget.non-native-theme.enabled", false);
user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);
user_pref("browser.privateWindowSeparation.enabled", false);
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// =============================================================================
// SECTION 5: URL BAR & SEARCH
// =============================================================================

// URL Display
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// URL Bar Behavior
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");
user_pref("layout.word_select.stop_at_punctuation", true);

// Search Suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.trending.featureGate", false);

// Feature Gates
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("browser.urlbar.richSuggestions.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);

// Search Engine
user_pref("browser.search.update", false);
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.isUS", true);
user_pref("browser.search.region", "US");
user_pref("browser.search.countryCode", "US");

// Calculator & Converter
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

// =============================================================================
// SECTION 6: NEW TAB PAGE & STARTUP
// =============================================================================

// Startup
user_pref("browser.startup.page", 3);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
// user_pref("startup.homepage_override_url", "");

// New Tab Page
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Startup Performance
user_pref("browser.slowStartup.samples", "0");
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("browser.startup.blankWindow", false);

// =============================================================================
// SECTION 7: PRIVACY & SECURITY
// =============================================================================

// HTTPS-Only Mode
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
// user_pref("dom.security.https_only_mode.upgrade_local", true);

// Enhanced Tracking Protection
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.annotate_channels", false);

// Anti-Fingerprinting
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.bounceTrackingProtection.mode", 1);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);

// Resist Fingerprinting (Tor Uplift - may cause breakage)
// user_pref("privacy.resistFingerprinting", true);
// user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Fingerprinting Alternatives
user_pref("dom.maxHardwareConcurrency", 2);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("media.ondevicechange.enabled", false);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("ui.use_standins_for_native_colors", true);
user_pref("javascript.use_us_english_locale", true);

// Hardware Fingerprinting
user_pref("dom.battery.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("permissions.default.xr", 2);

// Safe Browsing (Disabled for privacy)
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// Safe Browsing Providers (Clear URLs)
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// TLS/SSL
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.enable_kem", true);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("security.ssl.enable_false_start", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.ssl_override_behavior", 1);

// Certificates
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.OCSP.enabled", 1);
// user_pref("security.OCSP.require", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Certificate/Telemetry URLs
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");

// Referer
user_pref("network.http.sendRefererHeader", 2);
user_pref("browser.send_pings", false);

// Cookies & Storage
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("dom.storage.next_gen", true);
user_pref("dom.indexedDB.enabled", true);
user_pref("browser.cache.offline.storage.enable", false);
user_pref("offline-apps.allow_by_default", false);
user_pref("dom.targetBlankNoOpener.enabled", true);
user_pref("network.IDN_show_punycode", true);

// Container Tabs
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);

// Window Protection
user_pref("privacy.window.name.update.enabled", true);
user_pref("privacy.spoof_english", 2);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
// user_pref("privacy.firstparty.isolate", true);

// CSP
user_pref("security.csp.enable", true);
user_pref("security.dialog_enable_delay", 1000);

// Mixed Content
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);

// Notifications
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.shortcuts", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("dom.webnotifications.enabled", false);

// Other Security
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_maximum", 4);
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.vibrator.enabled", false);
user_pref("javascript.options.shared_memory", false);

// Query Stripping
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");

// URL Classifier
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("urlclassifier.trackingTable", "");

// WebChannel
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("services.settings.server", "https://%.invalid");

// Accessibility
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.typeaheadfind.flashBar", 0);

// Beacon
user_pref("beacon.enabled", false);

// =============================================================================
// SECTION 8: NETWORKING
// =============================================================================

// DNS
user_pref("network.dns.disablePrefetch", true);
// user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dnsCacheExpirationGracePeriod", 240);

// DNS-over-HTTPS
// user_pref("network.trr.mode", 2);
// user_pref("network.trr.bootstrapAddress", "1.1.1.1");
// user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare (non-Mozilla)\", \"url\": \"https://cloudflare-dns.com/dns-query\" },{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"Google\", \"url\": \"https://dns.google/dns-query\" },{ \"name\": \"Cisco/OpenDNS\", \"url\": \"https://doh.opendns.com/dns-query\" },{ \"name\": \"Adguard\", \"url\": \"https://dns.adguard.com/dns-query\" },{ \"name\": \"Adguard Family Protection\", \"url\": \"https://dns-family.adguard.com/dns-query\" },{ \"name\": \"DNSWarden Adblock\", \"url\": \"https://doh.dnswarden.com/adblock\" },{ \"name\": \"DNSWarden Uncensored\", \"url\": \"https://doh.dnswarden.com/uncensored\" },{ \"name\": \"SecureDNS\", \"url\": \"https://doh.securedns.eu/dns-query\" },{ \"name\": \"AppliedPrivacy\", \"url\": \"https://doh.appliedprivacy.net/query\" },{ \"name\": \"Digitale Gesellschaft (CH)\", \"url\": \"https://dns.digitale-gesellschaft.ch/dns-query\" }, { \"name\": \"Quad9\", \"url\": \"https://dns.quad9.net/dns-query\" }]");

// Prefetching
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);
// user_pref("network.predictor.enabled", false);
// user_pref("network.predictor.enable-prefetch", false);

// HTTP
user_pref("network.http.http3.enable", false);
user_pref("network.http.enable_compression_dictionaries", true);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.max-persistent-connections-per-proxy", 48);
user_pref("network.http.max-start-delay", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.pacing.requests.min-parallelism", 10);
user_pref("network.http.pacing.requests.burst", 14);
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.fetchpriority.enabled", true);
user_pref("network.early-hints.enabled", true);

// SSL/TLS Tokens
user_pref("network.ssl_tokens_cache_capacity", 10240);

// Proxy
user_pref("network.proxy.type", 0);
user_pref("network.proxy.socks_remote_dns", true);

// GIO
user_pref("network.gio.supported-protocols", "");

// Network Status
user_pref("network.manage-offline-status", false);
// user_pref("network.captive-portal-service.enabled", false);
// user_pref("network.connectivity-service.enabled", false);
// user_pref("captivedetect.canonicalURL", "");

// =============================================================================
// SECTION 9: WEBRTC & MEDIA
// =============================================================================

// WebRTC (IP Leak Protection)
// user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Screen Sharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// Audio Processing
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.aec_enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.getusermedia.hpf_enabled", false);

// Camera & Microphone
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);

// Autoplay
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.block-event.enabled", true);
user_pref("media.autoplay.block-webaudio", true);
user_pref("media.autoplay.blocking_policy", 2);
user_pref("media.block-autoplay-until-in-foreground", true);

// Codecs
user_pref("media.hls.enabled", true);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.ignore_codecs", true);
user_pref("media.mediasource.experimental.enabled", true);
user_pref("media.rdd-vpx.enabled", false);

// Hardware Decoding
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.gpu-process-decoder", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

// Volume
user_pref("media.default_volume", "0.6");

// Picture-in-Picture
user_pref("media.videocontrols.picture-in-picture.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);

// Media Cache
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

// Web Speech
user_pref("media.webspeech.synth.enabled", false);

// Private Browsing Media
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// user_pref("media.memory_cache_max_size", 65536);

// =============================================================================
// SECTION 10: WEBGL & GRAPHICS
// =============================================================================

// WebGL (Disabled for privacy)
user_pref("webgl.disabled", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.msaa-samples", 0);

// WebGPU
user_pref("dom.webgpu.enabled", true);
// user_pref("gfx.webgpu.force-enabled", true);
// user_pref("dom.webgpu.indirect-dispatch.enabled", true);

// WebRender
// user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
// user_pref("gfx.webrender.compositor.force-enabled", true);

// GPU Process
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);
// user_pref("layers.acceleration.force-enabled", true);

// Canvas
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);

// Fonts
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("font.name-list.emoji", "emoji");

// Image Cache
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);

// D3D/Tiles
user_pref("layers.geometry.d3d11.enabled", false);
user_pref("layers.enable-tiles", true);

// Windows-specific (commented)
// user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true);
// user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true);
// user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true);
// user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true);

// =============================================================================
// SECTION 11: PERFORMANCE & CACHE
// =============================================================================

// Performance Settings
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);

// Process Management
user_pref("fission.autostart", true);
user_pref("fission.webContentIsolationStrategy", 0);
user_pref("dom.ipc.processCount", 1);
user_pref("dom.ipc.processCount.webIsolated", 1);
user_pref("dom.ipc.processPrelaunch.fission.number", 1);
user_pref("dom.ipc.keepProcessesAlive.privilegedabout", 0);
user_pref("extensions.webextensions.remote", false);

// Tab Unloading
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000);
user_pref("browser.low_commit_space_threshold_mb", 4096);
user_pref("browser.low_commit_space_threshold_percent", 13);

// Session Restore
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.interval", 30000);
// user_pref("browser.sessionstore.restore_on_demand", true);
// user_pref("browser.sessionstore.restore_tabs_lazily", true);

// Back/Forward Cache
user_pref("browser.sessionhistory.max_total_viewers", 4);
user_pref("browser.sessionstore.max_tabs_undo", 10);

// Disk Cache
// user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.capacity", 524288);
user_pref("browser.cache.disk.max_entry_size", 51200);
user_pref("browser.cache.disk.metadata_memory_limit", 500);
user_pref("browser.cache.frecency_half_life_hours", 4);
user_pref("browser.cache.jsbc_compression_level", 3);
// user_pref("browser.cache.disk.parent_directory", "/run/user/1000/firefox-cache");

// Memory Cache
user_pref("browser.cache.memory.capacity", 131072);
user_pref("browser.cache.memory.max_entry_size", 153600);
// user_pref("browser.cache.memory.enable", true);

// iFrame Lazy Loading
user_pref("dom.iframe_lazy_loading.enabled", true);

// Sandbox
user_pref("security.sandbox.content.level", 0);
// user_pref("security.sandbox.content.level", 2);

// Windows-specific (commented)
// user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// =============================================================================
// SECTION 12: DOWNLOADS
// =============================================================================

user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.saveLinkAsFilenameTimeout", 1000);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.download.open_pdf_attachments_inline", true);
// user_pref("browser.download.folderList", 2);
// user_pref("browser.download.forbid_open_with", true);

// =============================================================================
// SECTION 13: PDF.JS
// =============================================================================

// user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
user_pref("pdfjs.enabledCache.state", false);

// =============================================================================
// SECTION 14: EXTENSIONS
// =============================================================================

user_pref("plugin.state.java", 0);
user_pref("extensions.abuseReport.enabled", false);
user_pref("extensions.checkCompatibility", false);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");
user_pref("extensions.webcompat.enable_shims", true);
user_pref("extensions.webcompat.enable_picture_in_picture_overrides", false);
user_pref("extensions.webcompat.perform_injections", false);
user_pref("extensions.webcompat.perform_ua_overrides", false);

// Extension Blocklist
user_pref("extensions.blocklist.enabled", true);
user_pref("services.blocklist.update_enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");

// Quarantined Domains
user_pref("extensions.quarantinedDomains.enabled", true);
user_pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com");
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// Extension Scopes (commented)
// user_pref("extensions.enabledScopes", 5);
// user_pref("extensions.autoDisableScopes", 15);
// user_pref("extensions.webextensions.restrictedDomains", "");

// =============================================================================
// SECTION 15: GEOLOCATION
// =============================================================================

user_pref("geo.enabled", false);
user_pref("permissions.default.geo", 2);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.timeout", 1);

// Geolocation Services
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_geoclue", false);
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.wifi.logging.enabled", false);

// =============================================================================
// SECTION 16: LANGUAGE & LOCALE
// =============================================================================

user_pref("intl.locale.requested", "en-US");
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.matchOS", false);
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("javascript.use_us_english_locale", true);
user_pref("browser.translations.neverTranslateLanguages", "en,uk,ru");

// =============================================================================
// SECTION 17: KEYBOARD & INPUT
// =============================================================================

user_pref("general.autoScroll", true);
user_pref("browser.backspace_action", 2);
user_pref("ui.key.menuAccessKey", 0);
user_pref("ui.context_menus_after_mouseup", true);
user_pref("clipboard.autocopy", false);
user_pref("layout.spellcheckDefault", 2);
user_pref("middlemouse.paste", false);
user_pref("middlemouse.contentLoadURL", false);

// Find Bar
user_pref("findbar.highlightAll", true);

// Word Selection
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("layout.word_select.stop_at_punctuation", true);

// =============================================================================
// SECTION 18: WINDOWS-SPECIFIC SETTINGS
// =============================================================================

user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("network.http.windows-sso.enabled", false);

// Windows Features (commented - uncomment if on Windows)
// user_pref("browser.tabs.firefox-view", false);

// =============================================================================
// SECTION 19: DEVELOPER TOOLS
// =============================================================================

user_pref("devtools.console.stdout.chrome", false);
user_pref("browser.dom.window.dump.enabled", false);
user_pref("devtools.selfxss.count", 0);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBExtension", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.performance.recording.ui-base-url", "http://localhost:55555");
user_pref("devtools.devices.url", "");
user_pref("devtools.remote.adb.extensionURL", "");
user_pref("devtools.remote.adb.extensionID", "");

// =============================================================================
// SECTION 20: READER VIEW
// =============================================================================

user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.color_scheme", "dark");

// =============================================================================
// SECTION 21: MATH & FONTS
// =============================================================================

user_pref("mathml.disabled", true);
// user_pref("svg.disabled", true);
// user_pref("browser.display.use_document_fonts", 0);
// user_pref("gfx.downloadable_fonts.enabled", false);
// user_pref("layout.css.font-loading-api.enabled", false);

// =============================================================================
// SECTION 22: COOKIE BANNER HANDLING
// =============================================================================

user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

// =============================================================================
// SECTION 23: SMOOTH SCROLLING (Natural Scrolling V3)
// =============================================================================

user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("mousewheel.min_line_scroll_amount", 10);
user_pref("mousewheel.default.delta_multiplier_y", 300);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80);
user_pref("general.smoothScroll.currentVelocityWeighting", 1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting", 1.0);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);

// =============================================================================
// SECTION 24: EXPERIMENTAL FEATURES
// =============================================================================

user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);

// =============================================================================
// SECTION 25: SANITIZING ON SHUTDOWN (COMMENTED)
// =============================================================================

// Uncomment to clear data on browser close:
// user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// user_pref("privacy.clearOnShutdown.cache", true);
// user_pref("privacy.clearOnShutdown.cookies", true);
// user_pref("privacy.clearOnShutdown.downloads", true);
// user_pref("privacy.clearOnShutdown.formdata", true);
// user_pref("privacy.clearOnShutdown.history", true);
// user_pref("privacy.clearOnShutdown.offlineApps", true);
// user_pref("privacy.clearOnShutdown.sessions", true);
// user_pref("privacy.clearOnShutdown.siteSettings", false);
// user_pref("privacy.sanitize.timeSpan", 0);

// =============================================================================
// END OF CONFIGURATION
// =============================================================================
