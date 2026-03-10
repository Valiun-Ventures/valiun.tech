"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { X, Shield } from "lucide-react";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [hasConsented, setHasConsented] = useState<boolean | null>(null);

    useEffect(() => {
        // Check localStorage for existing consent
        const consent = localStorage.getItem("valiun_cookie_consent");

        if (consent === "true") {
            setHasConsented(true);
        } else if (consent === "false") {
            setHasConsented(false);
        } else {
            // No consent found, show banner
            const timer = setTimeout(() => setShowBanner(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("valiun_cookie_consent", "true");
        setHasConsented(true);
        setShowBanner(false);
        // We trigger an event just in case other components need to know instantly
        window.dispatchEvent(new Event("cookieConsentAccepted"));
    };

    const handleReject = () => {
        localStorage.setItem("valiun_cookie_consent", "false");
        setHasConsented(false);
        setShowBanner(false);
    };

    return (
        <>
            {/* Conditional Injection of Tracking Scripts */}
            {hasConsented === true && (
                <>
                    {/* Google Tag (gtag.js) */}
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-LLLCNMRSHD"
                        strategy="afterInteractive"
                    />
                    <Script id="google-tag" strategy="afterInteractive">
                        {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'G-LLLCNMRSHD');
                        `}
                    </Script>

                    {/* Microsoft Clarity */}
                    <Script id="microsoft-clarity" strategy="afterInteractive">
                        {`
                          (function(c,l,a,r,i,t,y){
                              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                          })(window, document, "clarity", "script", "vk8ziyettl");
                        `}
                    </Script>
                </>
            )}

            {/* Cookie Banner UI */}
            <AnimatePresence>
                {showBanner && (
                    <m.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 md:left-6 md:right-auto md:bottom-6 md:max-w-[420px]"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] p-6">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3ca2fa]/10 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                            <Shield className="w-5 h-5 text-[#3ca2fa]" />
                                        </div>
                                        <h3 className="text-white font-semibold text-lg">Your Privacy</h3>
                                    </div>
                                    <button
                                        onClick={handleReject}
                                        className="text-gray-400 hover:text-white transition-colors p-1"
                                        aria-label="Close"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                    We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept All", you consent to our use of non-essential cookies.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="flex-1 bg-white text-black font-bold py-2.5 px-4 rounded-xl hover:bg-[#3ca2fa] hover:text-white transition-all duration-300 text-sm transform hover:-translate-y-0.5"
                                    >
                                        Accept All
                                    </button>
                                    <button
                                        onClick={handleReject}
                                        className="flex-1 bg-white/5 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm"
                                    >
                                        Reject Non-Essential
                                    </button>
                                </div>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
