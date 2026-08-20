"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toolSchema, type ToolFormValues } from "@/lib/validations/tools";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Eye, ArrowLeft, Clock, Copy, MoreVertical, Trash, Plus } from "lucide-react";
import Link from "next/link";
import { saveTool } from "@/lib/actions/tools";
import { scrapeToolAssetsAction } from "@/lib/actions/scraper";
import { useRouter } from "next/navigation";

interface ToolFormProps {
  initialData?: any; // To be fully typed later
  categories: { id: string; name: string }[];
  allWorkflows?: { slug: string; title: string }[];
  allGoals?: { slug: string; title: string }[];
}

export function ToolForm({ initialData, categories, allWorkflows = [], allGoals = [] }: ToolFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isScrapingLogo, setIsScrapingLogo] = useState(false);
  const [isScrapingScreenshot, setIsScrapingScreenshot] = useState(false);
  const [isAutosaving, setIsAutosaving] = useState(false);

  const form = useForm<ToolFormValues>({
    // @ts-ignore
    resolver: zodResolver(toolSchema),
    defaultValues: initialData ? {
      id: initialData.id,
      name: initialData.name || "",
      slug: initialData.slug || "",
      company: initialData.company || "",
      tagline: initialData.tagline || "",
      description: initialData.description || "",
      category_id: initialData.category_id || initialData.categoryId || "",
      additionalCategories: initialData.additionalCategories || [],
      price_model: initialData.price_model || initialData.priceModel || "Free",
      price: initialData.price || "",
      rating: initialData.rating ?? 0,
      review_count: initialData.review_count ?? initialData.reviewCount ?? 0,
      logo_url: initialData.logo_url || initialData.logoUrl || "",
      image_url: initialData.image_url || initialData.imageUrl || "",
      screenshot_url: initialData.screenshot_url || initialData.screenshotUrl || "",
      website_url: initialData.website_url || initialData.websiteUrl || "",
      url: initialData.url || "",
      tags: initialData.tags || [],
      verified: initialData.verified ?? false,
      featured: initialData.featured ?? false,
      popularity: initialData.popularity ?? 0,
      platform: initialData.platform || "",
      api: initialData.api ?? false,
      mobileApp: initialData.mobileApp ?? initialData.mobile_app ?? false,
      openSource: initialData.openSource ?? initialData.open_source ?? false,
      freeTrial: initialData.freeTrial ?? initialData.free_trial ?? false,
      features: initialData.features || [],
      pros: initialData.pros || [],
      cons: initialData.cons || [],
      useCases: initialData.useCases || initialData.use_cases || [],
      pricingPlans: initialData.pricingPlans || initialData.pricing_plans || [],
      bestFor: initialData.bestFor || initialData.best_for || [],
      goals: initialData.goals || [],
      workflows: initialData.workflows || [],
      editorial: initialData.editorial || {},
      status: initialData.status || "Draft",
    } : {
      name: "",
      slug: "",
      tagline: "",
      description: "",
      category_id: "",
      additionalCategories: [],
      price_model: "Free",
      price: "",
      logo_url: "",
      image_url: "",
      screenshot_url: "",
      website_url: "",
      url: "",
      rating: 0,
      review_count: 0,
      tags: [],
      verified: false,
      featured: false,
      popularity: 0,
      platform: "Web",
      api: false,
      mobileApp: false,
      openSource: false,
      freeTrial: false,
      features: [],
      goals: [],
      workflows: [],
      status: "Draft",
    },
  });

  async function onSubmit(data: ToolFormValues) {
    setIsSaving(true);
    try {
      if (initialData?.id && !data.id) {
        data.id = initialData.id;
      }
      const result = await saveTool(data);
      
      if (result.success) {
        toast({
          title: "Tool Saved Successfully",
          description: "The AI tool has been saved to the database.",
        });
        
        // If it was a new tool (no ID in initialData, or slug was "new"), redirect to the edit page
        if ((!initialData?.id || window.location.pathname.endsWith("/new")) && result.slug) {
          router.push(`/admin/cms/tools/${result.slug}`);
        }
      } else {
        toast({
          title: "Error saving tool",
          description: result.error || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error saving tool",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  }

  // A basic autosave trigger can be attached to form.watch() in a useEffect

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit as any, (errors) => {
        const errorFields = Object.keys(errors).join(', ');
        toast({
          title: "Validation Error",
          description: `Please fix the errors in the following fields: ${errorFields}`,
          variant: "destructive",
        });
      })} className="space-y-8">
        
        {/* Top Header Actions */}
        <div className="flex items-center justify-between bg-white p-4 border rounded-lg relative shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/cms/tools">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Link>
            </Button>
            <div>
              <h2 className="text-lg font-bold">{form.watch("name") || "New Tool"}</h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="font-normal">{form.watch("status")}</Badge>
                {isAutosaving && <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> Autosaving...</span>}
                {!isAutosaving && <span>Last saved: Just now</span>}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {form.watch("slug") && (
              <Button variant="outline" size="sm" asChild>
                <a href={`/tool/${form.watch("slug")}`} target="_blank" rel="noreferrer">
                  <Eye className="w-4 h-4 mr-2" /> Preview
                </a>
              </Button>
            )}
            <Button type="submit" disabled={isSaving}>
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-3">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="media">Media & Links</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="editorial">Editorial</TabsTrigger>
                <TabsTrigger value="classification">Classification</TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="general" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                      <CardDescription>The core details of the AI tool.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control as any}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="ChatGPT" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control as any}
                          name="slug"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Slug</FormLabel>
                              <FormControl>
                                <Input placeholder="chatgpt" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control as any}
                        name="tagline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tagline</FormLabel>
                            <FormControl>
                              <Input placeholder="The most advanced AI chatbot" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control as any}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Detailed description of the tool..." 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Media Content */}
                <TabsContent value="media" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Media & Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control as any}
                        name="logo_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Logo URL</FormLabel>
                            <div className="flex gap-4 items-center">
                              <FormControl>
                                <Input placeholder="https://..." {...field} />
                              </FormControl>
                              <div className="relative">
                                <Button type="button" variant="outline" className="relative cursor-pointer">
                                  Upload
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (!file) return;
                                      const formData = new FormData();
                                      formData.append('file', file);
                                      formData.append('slug', form.getValues('slug') || 'unnamed');
                                      formData.append('type', 'logo');
                                      toast({ title: 'Uploading logo...' });
                                      try {
                                        const res = await fetch('/api/admin/assets/upload', {
                                          method: 'POST',
                                          body: formData
                                        });
                                        const data = await res.json();
                                        if (data.success && data.url) {
                                          form.setValue('logo_url', data.url);
                                          toast({ title: 'Logo uploaded successfully' });
                                        } else {
                                          toast({ title: 'Upload failed', description: data.error || '', variant: 'destructive' });
                                        }
                                      } catch (err) {
                                        toast({ title: 'Upload error', variant: 'destructive' });
                                      }
                                    }}
                                  />
                                </Button>
                                <Button
                                  type="button"
                                  variant="secondary"
                                  disabled={isScrapingLogo || !form.watch("website_url")}
                                  onClick={async () => {
                                    setIsScrapingLogo(true);
                                    toast({ title: 'Scraping logo...' });
                                    try {
                                      const res = await scrapeToolAssetsAction(form.watch("website_url") || "", form.watch("slug") || "unnamed", {
                                        existingLogoUrl: form.watch("logo_url"),
                                        forceLogoRefresh: true,
                                        toolId: form.watch("id")
                                      });
                                      if (res.success && res.result?.logoUrl) {
                                        form.setValue('logo_url', res.result.logoUrl);
                                        toast({ title: 'Logo scraped successfully' });
                                      } else {
                                        toast({ title: 'Scrape failed or no logo found', variant: 'destructive' });
                                      }
                                    } catch (err) {
                                      toast({ title: 'Error scraping logo', variant: 'destructive' });
                                    } finally {
                                      setIsScrapingLogo(false);
                                    }
                                  }}
                                >
                                  {isScrapingLogo ? "Scraping..." : "Auto Refresh Logo"}
                                </Button>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control as any}
                        name="image_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Image URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control as any}
                        name="screenshot_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Screenshot URL</FormLabel>
                            <div className="flex gap-4 items-center">
                              <FormControl>
                                <Input placeholder="https://..." {...field} />
                              </FormControl>
                              <div className="relative">
                                <Button type="button" variant="outline" className="relative cursor-pointer">
                                  Upload
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (!file) return;
                                      const formData = new FormData();
                                      formData.append('file', file);
                                      formData.append('slug', form.getValues('slug') || 'unnamed');
                                      formData.append('type', 'screenshot');
                                      toast({ title: 'Uploading screenshot...' });
                                      try {
                                        const res = await fetch('/api/admin/assets/upload', {
                                          method: 'POST',
                                          body: formData
                                        });
                                        const data = await res.json();
                                        if (data.success && data.url) {
                                          form.setValue('screenshot_url', data.url);
                                          toast({ title: 'Screenshot uploaded successfully' });
                                        } else {
                                          toast({ title: 'Upload failed', description: data.error || '', variant: 'destructive' });
                                        }
                                      } catch (err) {
                                        toast({ title: 'Upload error', variant: 'destructive' });
                                      }
                                    }}
                                  />
                                </Button>
                                <Button
                                  type="button"
                                  variant="secondary"
                                  disabled={isScrapingScreenshot || !form.watch("website_url")}
                                  onClick={async () => {
                                    setIsScrapingScreenshot(true);
                                    toast({ title: 'Capturing screenshot...' });
                                    try {
                                      const res = await scrapeToolAssetsAction(form.watch("website_url") || "", form.watch("slug") || "unnamed", {
                                        existingScreenshotUrl: form.watch("screenshot_url"),
                                        forceScreenshotRefresh: true,
                                        toolId: form.watch("id")
                                      });
                                      if (res.success && res.result?.screenshotUrl) {
                                        form.setValue('screenshot_url', res.result.screenshotUrl);
                                        toast({ title: 'Screenshot captured successfully' });
                                      } else {
                                        toast({ title: 'Screenshot capture failed', variant: 'destructive' });
                                      }
                                    } catch (err) {
                                      toast({ title: 'Error capturing screenshot', variant: 'destructive' });
                                    } finally {
                                      setIsScrapingScreenshot(false);
                                    }
                                  }}
                                >
                                  {isScrapingScreenshot ? "Capturing..." : "Auto Refresh Screenshot"}
                                </Button>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control as any}
                        name="website_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control as any}
                        name="url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Affiliate/Reference URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pricing Model</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control as any}
                        name="price_model"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pricing Model</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select price model" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Free">Free</SelectItem>
                                <SelectItem value="Freemium">Freemium</SelectItem>
                                <SelectItem value="Paid">Paid</SelectItem>
                                <SelectItem value="Enterprise">Enterprise</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control as any}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Starting Price Text</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. $20/month or Free" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Detailed Pricing Plans</CardTitle>
                        <Button 
                          type="button" 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            const current = form.getValues("pricingPlans") || [];
                            form.setValue("pricingPlans", [...current, { name: "", price: "", description: "", features: [], recommended: false }]);
                          }}
                        >
                          <Plus className="w-4 h-4 mr-2" /> Add Plan
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {((form.watch("pricingPlans") as any) || []).map((_: any, index: number) => (
                        <div key={index} className="border p-4 rounded-xl space-y-3 relative bg-slate-50/50">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => {
                              const current = form.getValues("pricingPlans") || [];
                              form.setValue("pricingPlans", current.filter((_, i) => i !== index));
                            }}
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <FormField
                              control={form.control as any}
                              name={`pricingPlans.${index}.name`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs font-semibold">Plan Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. Pro Plan" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control as any}
                              name={`pricingPlans.${index}.price`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs font-semibold">Price</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. $29/mo" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control as any}
                            name={`pricingPlans.${index}.description`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-semibold">Description</FormLabel>
                                <FormControl>
                                  <Input placeholder="Best for small teams..." {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control as any}
                            name={`pricingPlans.${index}.recommended`}
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-2">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">Recommend this plan</FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      ))}
                      {(!form.watch("pricingPlans") || form.watch("pricingPlans")?.length === 0) && (
                        <p className="text-sm text-center py-6 text-muted-foreground border-2 border-dashed rounded-xl">No detailed plans added.</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Features & Capabilities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control as any}
                        name="platform"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Supported Platform</FormLabel>
                            <FormControl>
                              <Input placeholder="Web, iOS, Android, Windows" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <FormField
                          control={form.control as any}
                          name="api"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>API Access Available</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control as any}
                          name="mobileApp"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Mobile App Offered</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control as any}
                          name="openSource"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Open Source Codebase</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control as any}
                          name="freeTrial"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Free Trial Option</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Dynamic Key Features List */}
                      <div className="border-t pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-md font-bold">Key Features List</h3>
                            <p className="text-xs text-muted-foreground">Add specific stylized features detailing capabilities.</p>
                          </div>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const currentFeatures = form.getValues("features") || [];
                              form.setValue("features", [...currentFeatures, { title: "", description: "", icon: "done_all" }]);
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" /> Add Feature Item
                          </Button>
                        </div>

                        <div className="space-y-4">
                          {((form.watch("features") as any) || []).map((_: any, index: number) => (
                            <div key={index} className="border p-4 rounded-xl space-y-3 relative bg-slate-50/50">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => {
                                  const currentFeatures = form.getValues("features") || [];
                                  form.setValue("features", currentFeatures.filter((_, i) => i !== index));
                                }}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>

                              <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2">
                                  <FormField
                                    control={form.control as any}
                                    name={`features.${index}.title`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="text-xs font-semibold">Feature Title</FormLabel>
                                        <FormControl>
                                          <Input placeholder="e.g. Auto Captions" {...field} />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div>
                                  <FormField
                                    control={form.control as any}
                                    name={`features.${index}.icon`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="text-xs font-semibold">Icon Identifier</FormLabel>
                                        <FormControl>
                                          <Input placeholder="e.g. done_all, smart_toy" {...field} />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </div>

                              <FormField
                                control={form.control as any}
                                name={`features.${index}.description`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">Feature Description</FormLabel>
                                    <FormControl>
                                      <Textarea placeholder="Explain what the feature does..." className="min-h-[70px]" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                          {(!form.watch("features") || form.watch("features")?.length === 0) && (
                            <p className="text-sm text-center py-6 text-muted-foreground border-2 border-dashed rounded-xl">No feature items added yet.</p>
                          )}
                        </div>
                      </div>

                      {/* Dynamic Pros List */}
                      <div className="border-t pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-md font-bold">Pros List</h3>
                          </div>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const current = form.getValues("pros") || [];
                              form.setValue("pros", [...current, { title: "", description: "" }]);
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" /> Add Pros
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {((form.watch("pros") as any) || []).map((_: any, index: number) => (
                            <div key={index} className="border p-4 rounded-xl space-y-3 relative bg-slate-50/50">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => {
                                  const current = form.getValues("pros") || [];
                                  form.setValue("pros", current.filter((_, i) => i !== index));
                                }}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                              <FormField
                                control={form.control as any}
                                name={`pros.${index}.title`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">Pro Title</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. Incredibly Fast" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control as any}
                                name={`pros.${index}.description`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">Description (Optional)</FormLabel>
                                    <FormControl>
                                      <Textarea placeholder="..." className="min-h-[70px]" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                          {(!form.watch("pros") || form.watch("pros")?.length === 0) && (
                            <p className="text-sm text-center py-6 text-muted-foreground border-2 border-dashed rounded-xl">No pros added yet.</p>
                          )}
                        </div>
                      </div>

                      {/* Dynamic Cons List */}
                      <div className="border-t pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-md font-bold">Cons List</h3>
                          </div>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const current = form.getValues("cons") || [];
                              form.setValue("cons", [...current, { title: "", description: "" }]);
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" /> Add Cons
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {((form.watch("cons") as any) || []).map((_: any, index: number) => (
                            <div key={index} className="border p-4 rounded-xl space-y-3 relative bg-slate-50/50">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => {
                                  const current = form.getValues("cons") || [];
                                  form.setValue("cons", current.filter((_, i) => i !== index));
                                }}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                              <FormField
                                control={form.control as any}
                                name={`cons.${index}.title`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">Con Title</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. Steep Learning Curve" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control as any}
                                name={`cons.${index}.description`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">Description (Optional)</FormLabel>
                                    <FormControl>
                                      <Textarea placeholder="..." className="min-h-[70px]" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                          {(!form.watch("cons") || form.watch("cons")?.length === 0) && (
                            <p className="text-sm text-center py-6 text-muted-foreground border-2 border-dashed rounded-xl">No cons added yet.</p>
                          )}
                        </div>
                      </div>

                      {/* Dynamic UseCases List */}
                      <div className="border-t pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-md font-bold">UseCases List</h3>
                          </div>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const current = form.getValues("useCases") || [];
                              form.setValue("useCases", [...current, { title: "", description: "" }]);
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" /> Add UseCases
                          </Button>
                        </div>
                        <div className="space-y-4">
                          {((form.watch("useCases") as any) || []).map((_: any, index: number) => (
                            <div key={index} className="border p-4 rounded-xl space-y-3 relative bg-slate-50/50">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => {
                                  const current = form.getValues("useCases") || [];
                                  form.setValue("useCases", current.filter((_, i) => i !== index));
                                }}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                              <FormField
                                control={form.control as any}
                                name={`useCases.${index}.title`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">UseCase Title</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. For Content Creators" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control as any}
                                name={`useCases.${index}.description`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-semibold">Description (Optional)</FormLabel>
                                    <FormControl>
                                      <Textarea placeholder="..." className="min-h-[70px]" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                          {(!form.watch("useCases") || form.watch("useCases")?.length === 0) && (
                            <p className="text-sm text-center py-6 text-muted-foreground border-2 border-dashed rounded-xl">No use cases added yet.</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Editorial Tab */}
                <TabsContent value="editorial" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Editorial Review Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control as any}
                          name="rating"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Editorial Rating (0-5)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" min="0" max="5" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control as any}
                          name="review_count"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Review Count</FormLabel>
                              <FormControl>
                                <Input type="number" min="0" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control as any}
                        name="editorial.overview"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Editorial Overview (HTML allowed)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="<p>Full overview...</p>" className="min-h-[150px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control as any}
                        name="editorial.verdict"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expert Verdict (HTML allowed)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="<p>Our verdict...</p>" className="min-h-[150px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Frequently Asked Questions</CardTitle>
                        <Button 
                          type="button" 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            const current = form.getValues("editorial.faqs") || [];
                            form.setValue("editorial.faqs", [...current, { question: "", answer: "" }]);
                          }}
                        >
                          <Plus className="w-4 h-4 mr-2" /> Add FAQ
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {((form.watch("editorial.faqs") as any) || []).map((_: any, index: number) => (
                        <div key={index} className="border p-4 rounded-xl space-y-3 relative bg-slate-50/50">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => {
                              const current = form.getValues("editorial.faqs") || [];
                              form.setValue("editorial.faqs", current.filter((_, i) => i !== index));
                            }}
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                          <FormField
                            control={form.control as any}
                            name={`editorial.faqs.${index}.question`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-semibold">Question</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Is it free?" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control as any}
                            name={`editorial.faqs.${index}.answer`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-semibold">Answer</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Yes..." className="min-h-[70px]" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                      ))}
                      {(!form.watch("editorial.faqs") || form.watch("editorial.faqs")?.length === 0) && (
                        <p className="text-sm text-center py-6 text-muted-foreground border-2 border-dashed rounded-xl">No FAQs added yet.</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Classification Tab */}
                <TabsContent value="classification" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tags & Best For</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-bold">Tags List</FormLabel>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const current = form.getValues("tags") || [];
                              form.setValue("tags", [...current, ""]);
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" /> Add Tag
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {((form.watch("tags") as string[]) || []).map((_, index) => (
                            <div key={index} className="relative">
                              <FormField
                                control={form.control as any}
                                name={`tags.${index}`}
                                render={({ field }) => (
                                  <Input {...field} className="pr-8" placeholder="e.g. video-editing" />
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full text-red-500 hover:text-red-700"
                                onClick={() => {
                                  const current = form.getValues("tags") || [];
                                  form.setValue("tags", current.filter((_, i) => i !== index));
                                }}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 border-t pt-4">
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-bold">Best For List</FormLabel>
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const current = form.getValues("bestFor") || [];
                              form.setValue("bestFor", [...current, ""]);
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" /> Add Best For
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {((form.watch("bestFor") as string[]) || []).map((_, index) => (
                            <div key={index} className="relative">
                              <FormField
                                control={form.control as any}
                                name={`bestFor.${index}`}
                                render={({ field }) => (
                                  <Input {...field} className="pr-8" placeholder="e.g. Independent Creators" />
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full text-red-500 hover:text-red-700"
                                onClick={() => {
                                  const current = form.getValues("bestFor") || [];
                                  form.setValue("bestFor", current.filter((_, i) => i !== index));
                                }}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Collections & Workflows</CardTitle>
                      <CardDescription>Select which goals and workflows this tool belongs to.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <FormLabel className="font-bold">Related Goals</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {allGoals.map((goal) => (
                            <FormField
                              key={goal.slug}
                              control={form.control as any}
                              name="goals"
                              render={({ field }) => {
                                const current = field.value || [];
                                const isChecked = current.includes(goal.slug);
                                return (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-3">
                                    <FormControl>
                                      <Checkbox
                                        checked={isChecked}
                                        onCheckedChange={(checked) => {
                                          if (checked) {
                                            field.onChange([...current, goal.slug]);
                                          } else {
                                            field.onChange(current.filter((val: string) => val !== goal.slug));
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal text-sm cursor-pointer">{goal.title}</FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3 border-t pt-4">
                        <FormLabel className="font-bold">Related Workflows</FormLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {allWorkflows.map((workflow) => (
                            <FormField
                              key={workflow.slug}
                              control={form.control as any}
                              name="workflows"
                              render={({ field }) => {
                                const current = field.value || [];
                                const isChecked = current.includes(workflow.slug);
                                return (
                                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-3">
                                    <FormControl>
                                      <Checkbox
                                        checked={isChecked}
                                        onCheckedChange={(checked) => {
                                          if (checked) {
                                            field.onChange([...current, workflow.slug]);
                                          } else {
                                            field.onChange(current.filter((val: string) => val !== workflow.slug));
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal text-sm cursor-pointer">{workflow.title}</FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Sidebar Area */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Organization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control as any}
                  name="category_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control as any}
                  name="additionalCategories"
                  render={({ field }) => (
                    <FormItem className="pt-4 border-t mt-4">
                      <FormLabel>Additional Categories</FormLabel>
                      <FormDescription className="text-xs">Select other categories this tool belongs to (do not include the Primary Category).</FormDescription>
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 mt-2">
                        {categories.map((cat) => {
                          const isPrimary = form.watch("category_id") === cat.id;
                          return (
                            <div key={cat.id} className={`flex flex-row items-center space-x-3 space-y-0 rounded-md border p-2 ${isPrimary ? 'opacity-50 bg-slate-50' : ''}`}>
                              <Checkbox
                                checked={field.value?.includes(cat.id)}
                                disabled={isPrimary}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([...(field.value || []), cat.id]);
                                  } else {
                                    field.onChange((field.value || []).filter((val: string) => val !== cat.id));
                                  }
                                }}
                              />
                              <FormLabel className="font-normal text-sm cursor-pointer">{cat.name}{isPrimary ? " (Primary)" : ""}</FormLabel>
                            </div>
                          );
                        })}
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control as any}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="In Review">In Review</SelectItem>
                          <SelectItem value="Published">Published</SelectItem>
                          <SelectItem value="Unpublished">Unpublished</SelectItem>
                          <SelectItem value="Archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control as any}
                  name="isSponsored"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Premium Sponsored
                        </FormLabel>
                        <FormDescription>
                          Float this tool to the top of category pages.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
