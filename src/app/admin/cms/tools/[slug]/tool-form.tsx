"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Save, Eye, ArrowLeft, Clock, Copy, MoreVertical } from "lucide-react";
import Link from "next/link";
import { saveTool } from "@/lib/actions/tools";

interface ToolFormProps {
  initialData?: any; // To be fully typed later
  categories: { id: string; name: string }[];
}

export function ToolForm({ initialData, categories }: ToolFormProps) {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isAutosaving, setIsAutosaving] = useState(false);

  const form = useForm<ToolFormValues>({
    // @ts-ignore
    resolver: zodResolver(toolSchema),
    defaultValues: initialData || {
      name: "",
      slug: "",
      tagline: "",
      description: "",
      category_id: "",
      price_model: "Free",
      logo_url: "",
      image_url: "",
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
        <div className="flex items-center justify-between bg-white p-4 border rounded-lg sticky top-14 z-10 shadow-sm">
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
            <Button variant="outline" size="sm" type="button">
              <Eye className="w-4 h-4 mr-2" /> Preview
            </Button>
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
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
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
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Other tabs omitted for brevity during initial setup */}
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
