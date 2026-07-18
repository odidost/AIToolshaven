'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ContentContainer } from "@/components/layout/ContentContainer";
import { categories } from '@/lib/data/categories';
import { toast } from 'sonner';
import { sendSubmissionEmail } from '@/app/actions/submit-tool';
const pricingModels = ["Free", "Freemium", "Paid", "Enterprise"] as const;

export default function SubmitFormPage() {
  return (
    <Suspense fallback={
      <ContentContainer className="py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center py-20">
          <span className="material-symbols-outlined text-4xl text-primary animate-spin block mb-4">progress_activity</span>
          <p className="text-on-surface-variant">Loading form...</p>
        </div>
      </ContentContainer>
    }>
      <SubmitFormContent />
    </Suspense>
  );
}

function SubmitFormContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'standard';

  const [formData, setFormData] = useState({
    toolName: '',
    contactEmail: '',
    websiteUrl: '',
    description: '',
    category: '',
    pricingModel: '' as string,
    price: '',
    tagline: '',
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const planLabels: Record<string, string> = {
    standard: 'Standard (Free)',
    priority: 'Priority Launch ($49)',
    featured: 'Featured Spotlight ($149/mo)',
  };

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!formData.toolName.trim()) newErrors.toolName = 'Tool name is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) newErrors.contactEmail = 'Enter a valid email address';
    if (!formData.websiteUrl.trim()) newErrors.websiteUrl = 'Website URL is required';
    else if (!/^https?:\/\/.+\..+/.test(formData.websiteUrl)) newErrors.websiteUrl = 'Enter a valid URL';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    else if (formData.description.length < 20) newErrors.description = 'Description must be at least 20 characters';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.pricingModel) newErrors.pricingModel = 'Please select a pricing model';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const result = await sendSubmissionEmail({
          ...formData,
          plan: planLabels[plan] || plan,
        });
        if (result.success) {
          setSubmitted(true);
        } else {
          console.warn("Resend delivery failed:", result.error);
          toast.warning(`Warning: Email could not be delivered to aitoolshaven@gmail.com (${result.error}). Proceeding anyway.`);
          setSubmitted(true);
        }
      } catch (err) {
        toast.error("An unexpected error occurred during submission.");
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  function handleDrag(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fileNames = Array.from(e.dataTransfer.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  }

  if (submitted) {
    return (
      <ContentContainer className="py-8 md:py-12">
        <div className="max-w-lg mx-auto text-center py-20">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-secondary text-4xl">check_circle</span>
          </div>
          <h1 className="text-fluid-h2 font-bold text-on-surface mb-3">Submission Received!</h1>
          <p className="text-on-surface-variant mb-2">
            Thank you for submitting <strong>{formData.toolName}</strong>.
          </p>
          <p className="text-on-surface-variant mb-8">
            Our team will review your tool and get back to you within 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              Back to Home
            </Link>
            <Link href="/submit" className="bg-surface border border-outline text-on-surface px-6 py-3 rounded-xl font-bold hover:border-primary transition-colors">
              Submit Another
            </Link>
          </div>
        </div>
      </ContentContainer>
    );
  }

  return (
    <ContentContainer className="py-8 md:py-12">
      <Breadcrumbs items={[
        { label: 'Submit Tool', href: '/submit' },
        { label: 'Submission Form' }
      ]} />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-fluid-h2 font-bold text-on-surface mb-3">Submit a Tool</h1>
          <p className="text-on-surface-variant">
            Fill out the form below to get your AI tool listed on AIToolsHaven.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-sm font-semibold">
            <span className="material-symbols-outlined text-sm">verified</span>
            Plan: {planLabels[plan] || planLabels.standard}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tool Name */}
          <div>
            <label htmlFor="tool-name" className="block text-sm font-semibold text-on-surface mb-2">
              Tool Name <span className="text-red-500">*</span>
            </label>
            <input
              id="tool-name"
              type="text"
              placeholder="e.g. AIToolsHavenWriter"
              value={formData.toolName}
              onChange={(e) => setFormData(prev => ({ ...prev, toolName: e.target.value }))}
              className={`w-full h-12 px-4 rounded-xl border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${errors.toolName ? 'border-red-400' : 'border-outline'}`}
            />
            {errors.toolName && <p className="text-red-500 text-xs mt-1">{errors.toolName}</p>}
          </div>

          {/* Contact Email */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-on-surface mb-2">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              value={formData.contactEmail}
              onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
              className={`w-full h-12 px-4 rounded-xl border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${errors.contactEmail ? 'border-red-400' : 'border-outline'}`}
            />
            {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
          </div>

          {/* Tagline */}
          <div>
            <label htmlFor="tagline" className="block text-sm font-semibold text-on-surface mb-2">
              Tagline
            </label>
            <input
              id="tagline"
              type="text"
              placeholder="A short, catchy tagline for your tool"
              value={formData.tagline}
              onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
              className="w-full h-12 px-4 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>

          {/* Website URL */}
          <div>
            <label htmlFor="website-url" className="block text-sm font-semibold text-on-surface mb-2">
              Website URL <span className="text-red-500">*</span>
            </label>
            <input
              id="website-url"
              type="url"
              placeholder="https://yourtool.com"
              value={formData.websiteUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
              className={`w-full h-12 px-4 rounded-xl border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${errors.websiteUrl ? 'border-red-400' : 'border-outline'}`}
            />
            {errors.websiteUrl && <p className="text-red-500 text-xs mt-1">{errors.websiteUrl}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-on-surface mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              placeholder="Describe what your tool does, who it's for, and what makes it unique..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className={`w-full px-4 py-3 rounded-xl border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none ${errors.description ? 'border-red-400' : 'border-outline'}`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
              <p className="text-xs text-on-surface-variant ml-auto">{formData.description.length} / 500</p>
            </div>
          </div>

          {/* Category & Pricing Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-on-surface mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className={`w-full h-12 px-4 rounded-xl border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm appearance-none cursor-pointer ${errors.category ? 'border-red-400' : 'border-outline'}`}
              >
                <option value="">Select a category...</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
            </div>

            {/* Pricing Model */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">
                Pricing Model <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {pricingModels.map(model => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, pricingModel: model }))}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${formData.pricingModel === model
                        ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                        : 'bg-surface border-outline text-on-surface-variant hover:border-primary'
                      }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
              {errors.pricingModel && <p className="text-red-500 text-xs mt-1">{errors.pricingModel}</p>}
            </div>
          </div>

          {/* Price (conditional) */}
          {(formData.pricingModel === 'Paid' || formData.pricingModel === 'Freemium' || formData.pricingModel === 'Enterprise') && (
            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-on-surface mb-2">
                Price
              </label>
              <input
                id="price"
                type="text"
                placeholder="e.g. $15/mo or Contact Sales"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                className="w-full h-12 px-4 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
            </div>
          )}

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">
              Screenshots & Media
            </label>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative rounded-xl border-2 border-dashed p-8 text-center transition-colors cursor-pointer ${dragActive
                  ? 'border-primary bg-primary-container/30'
                  : 'border-outline hover:border-primary/50 bg-surface'
                }`}
            >
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-40 mb-3 block">cloud_upload</span>
              <p className="text-sm text-on-surface-variant mb-1">
                <strong className="text-on-surface">Drag & drop</strong> files here, or <strong className="text-primary">browse</strong>
              </p>
              <p className="text-xs text-on-surface-variant opacity-60">
                PNG, JPG, GIF, or MP4 up to 10MB each
              </p>
            </div>

            {/* Uploaded file pills */}
            {uploadedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 bg-primary-container text-on-primary-container text-xs font-medium px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-xs">image</span>
                    {file}
                    <button
                      type="button"
                      onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                      className="hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xs">close</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                  Submitting...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">send</span>
                  Submit for Review
                </>
              )}
            </button>
            <Link
              href="/submit"
              className="flex-1 bg-surface border border-outline text-on-surface px-8 py-3.5 rounded-xl font-bold hover:border-primary transition-colors text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </ContentContainer>
  );
}
