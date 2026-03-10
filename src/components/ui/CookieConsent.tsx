"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { X, Shield } from "lucide-react";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [hasConsented, setHasConsented] = useState<boolean | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check localStorage for existing consent
        const consent = localStorage.getItem("valiun_cookie_consent");

        if (consent === "true") {
            setHasConsented(true);
        } else if (consent === "false") {
            setHasConsented(false);
        } else {
            // No consent found, show banner immediately
            setShowBanner(true);
        }
    }, []);

    if (!isMounted) return null;

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
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 z-[100] w-full"
                    >
                        <div className="relative w-full overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[20vh] max-h-[40vh]">
                            {/* Ambient Glows */}
                            <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#3ca2fa]/10 rounded-full blur-[60px] pointer-events-none -translate-y-1/2" />
                            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#bc13fe]/10 rounded-full blur-[60px] pointer-events-none translate-y-1/2" />

                            {/* Left Text Content */}
                            <div className="relative z-10 flex-1 w-full flex flex-col items-start gap-4 max-w-4xl">
                                <div className="flex items-center gap-3 w-full justify-between md:justify-start">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                                            <Shield className="w-6 h-6 text-[#3ca2fa]" />
                                        </div>
                                        <h3 className="text-white font-bold text-xl md:text-2xl">Your Privacy</h3>
                                    </div>
                                    {/* Mobile Close Button */}
                                    <button
                                        onClick={handleReject}
                                        className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
                                        aria-label="Close"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <p className="text-sm md:text-base text-gray-400 leading-relaxed md:pr-12">
                                    We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept All", you consent to our use of non-essential cookies.
                                </p>
                            </div>

                            {/* Right Action Buttons */}
                            <div className="relative z-10 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 w-full md:w-auto min-w-[300px]">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 lg:flex-none uppercase tracking-wide bg-gradient-to-r from-[#3ca2fa] to-[#bc13fe] text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(60,162,250,0.2)] hover:scale-105"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleReject}
                                    className="flex-1 lg:flex-none uppercase tracking-wide bg-white/5 text-white font-semibold py-4 px-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm"
                                >
                                    Reject All
                                </button>
                            </div>

                            {/* Desktop Close Button */}
                            <button
                                onClick={handleReject}
                                className="hidden md:flex absolute top-6 right-6 lg:top-8 lg:right-8 text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 items-center justify-center"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
