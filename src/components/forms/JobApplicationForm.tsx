"use client";

import { useState, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Loader2, Globe, FileText, CheckCircle2, Upload, ChevronDown, X, AlertCircle } from "lucide-react";
import { countryCodes } from "@/lib/countries";

const sources = [
    "LinkedIn",
    "Google Search",
    "Instagram",
    "Twitter (X)",
    "Facebook",
    "Glassdoor",
    "Friend / Referral",
    "Company Website",
    "Other"
];

interface JobApplicationFormProps {
    jobTitle: string;
    jobId: string;
}

export function JobApplicationForm({ jobTitle, jobId }: JobApplicationFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        source: "",
        otherSource: ""
    });

    const [files, setFiles] = useState<{
        resume: File | null;
        coverLetter: File | null;
    }>({
        resume: null,
        coverLetter: null
    });

    const [errors, setErrors] = useState<{
        resume?: string;
        coverLetter?: string;
    }>({});

    const resumeInputRef = useRef<HTMLInputElement>(null);
    const coverLetterInputRef = useRef<HTMLInputElement>(null);

    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'coverLetter') => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!allowedTypes.includes(file.type)) {
            setErrors(prev => ({ ...prev, [type]: "Please upload a PDF or Word document (.doc, .docx)" }));
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, [type]: "File size must be less than 5MB" }));
            return;
        }

        setErrors(prev => ({ ...prev, [type]: undefined }));
        setFiles(prev => ({ ...prev, [type]: file }));
    };

    const removeFile = (type: 'resume' | 'coverLetter') => {
        setFiles(prev => ({ ...prev, [type]: null }));
        if (type === 'resume' && resumeInputRef.current) resumeInputRef.current.value = "";
        if (type === 'coverLetter' && coverLetterInputRef.current) coverLetterInputRef.current.value = "";
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!files.resume) {
            setErrors(prev => ({ ...prev, resume: "Resume is required" }));
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call as actual file upload would need a backend/signed URL
            // In a real app, we would use FormData to send files to an endpoint
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log("Submitting application for:", jobTitle);
            console.log("Form Data:", formData);
            console.log("Files:", files);

            setIsSubmitted(true);
            setIsLoading(false);
        } catch (error) {
            console.error("Submission Error:", error);
            setIsLoading(false);
            alert("Something went wrong. Please try again or email us at careers@valiun.tech");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
            ...(id === "source" && value !== "Other" ? { otherSource: "" } : {})
        }));
    };

    if (isSubmitted) {
        return (
            <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-xl"
            >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Application Received!</h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto mb-10">
                    Thank you for applying for the <span className="text-blue-400 font-semibold">{jobTitle}</span> position. Our team will review your profile and get back to you soon.
                </p>
                <Button href="/company/careers" variant="outline" size="lg" className="rounded-2xl">
                    Back to Careers
                </Button>
            </m.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/[0.08] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider">First Name</label>
                    <input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 hover:bg-white/[0.05]"
                        placeholder="John"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider">Last Name</label>
                    <input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 hover:bg-white/[0.05]"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider">Email Address</label>
                <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 hover:bg-white/[0.05]"
                    placeholder="john@example.com"
                />
            </div>

            <div className="space-y-2 relative z-10">
                <label htmlFor="phone" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider">Phone Number</label>
                <div className="flex gap-0 rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] focus-within:ring-2 focus-within:ring-blue-500/50 transition-all group/phone hover:bg-white/[0.05]">
                    <div className="relative flex items-center group/country border-r border-white/10">
                        <select
                            id="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="appearance-none bg-transparent pl-5 pr-10 py-4 text-white focus:outline-none cursor-pointer text-sm font-medium z-10"
                        >
                            {countryCodes.map(c => (
                                <option key={`${c.code}-${c.dial_code}`} value={c.dial_code} className="bg-neutral-900">
                                    {c.flag} {c.code} {c.dial_code}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 w-4 h-4 text-slate-500 pointer-events-none group-focus-within/country:text-blue-400 transition-colors" />
                    </div>
                    <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-grow bg-transparent px-6 py-4 text-white focus:outline-none placeholder:text-slate-600"
                        placeholder="123 456 7890"
                    />
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <label htmlFor="source" className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider">How did you hear about us?</label>
                <div className="relative group/select">
                    <select
                        id="source"
                        required
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer group-hover/select:bg-white/[0.05]"
                    >
                        <option value="" disabled className="text-slate-600">Select an option...</option>
                        {sources.map(s => (
                            <option key={s} value={s} className="bg-neutral-900">{s}</option>
                        ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-focus-within/select:text-blue-400 transition-colors">
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {formData.source === "Other" && (
                    <m.div
                        key="other-source-field"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden relative z-10"
                    >
                        <div className="space-y-2 pb-2">
                            <label htmlFor="otherSource" className="text-xs font-medium text-blue-400 ml-1">Please specify</label>
                            <input
                                id="otherSource"
                                required
                                value={formData.otherSource}
                                onChange={handleChange}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 hover:bg-white/[0.05]"
                                placeholder="Specify where you heard about us..."
                            />
                        </div>
                    </m.div>
                )}
            </AnimatePresence>

            {/* File Uploads */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {/* Resume Upload */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider block">Resume (PDF, DOC) *</label>
                    <div
                        onClick={() => resumeInputRef.current?.click()}
                        className={`relative group/upload cursor-pointer p-6 rounded-2xl border-2 border-dashed transition-all duration-300 ${files.resume
                                ? 'bg-blue-500/5 border-blue-500/30'
                                : 'bg-white/[0.02] border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04]'
                            }`}
                    >
                        <input
                            type="file"
                            ref={resumeInputRef}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'resume')}
                        />

                        {files.resume ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-sm font-medium text-white truncate">{files.resume.name}</p>
                                        <p className="text-[10px] text-slate-500">{(files.resume.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); removeFile('resume'); }}
                                    className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-2">
                                <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3 group-hover/upload:text-blue-400 transition-colors" />
                                <p className="text-sm font-medium text-slate-400">Upload Resume</p>
                                <p className="text-[10px] text-slate-600 mt-1">PDF or DOC up to 5MB</p>
                            </div>
                        )}
                    </div>
                    {errors.resume && (
                        <p className="text-xs text-red-400 mt-1 ml-1 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.resume}
                        </p>
                    )}
                </div>

                {/* Cover Letter Upload */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-400 ml-1 uppercase tracking-wider block">Cover Letter (Optional)</label>
                    <div
                        onClick={() => coverLetterInputRef.current?.click()}
                        className={`relative group/upload cursor-pointer p-6 rounded-2xl border-2 border-dashed transition-all duration-300 ${files.coverLetter
                                ? 'bg-purple-500/5 border-purple-500/30'
                                : 'bg-white/[0.02] border-white/10 hover:border-purple-500/40 hover:bg-white/[0.04]'
                            }`}
                    >
                        <input
                            type="file"
                            ref={coverLetterInputRef}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'coverLetter')}
                        />

                        {files.coverLetter ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-sm font-medium text-white truncate">{files.coverLetter.name}</p>
                                        <p className="text-[10px] text-slate-500">{(files.coverLetter.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); removeFile('coverLetter'); }}
                                    className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-2">
                                <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3 group-hover/upload:text-purple-400 transition-colors" />
                                <p className="text-sm font-medium text-slate-400">Upload Cover Letter</p>
                                <p className="text-[10px] text-slate-600 mt-1">PDF or DOC up to 5MB</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full h-16 text-xl font-bold rounded-2xl relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all bg-gradient-to-r from-blue-600 to-purple-600 border-none"
                isLoading={isLoading}
            >
                Submit Application
            </Button>

            <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest relative z-10">
                By submitting, you agree to our processing of your personal data.
            </p>
        </form>
    );
}
