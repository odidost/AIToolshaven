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
import { useRouter } from "next/navigation";

interface ToolFormProps {
  initialData?: any; // To be fully typed later
  categories: { id: string; name: string }[];
}

export function ToolForm({ initialData, categories }: ToolFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
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
      status: initialData.status || "Draft",
    } : {
      name: "",
      slug: "",
      tagline: "",
      description: "",
      category_id: "",
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
      status: "Draft",
    },
  });

  async function onSubmit(data: ToolFormValues) {
    setIsSaving(true);
    try {
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
      <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-8">
        
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
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Sidebar */}
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
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
