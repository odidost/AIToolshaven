"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Save, ArrowLeft, Loader2, Eye } from "lucide-react";
import Link from "next/link";

import { comparisonSchema, type ComparisonFormValues } from "@/lib/validations/comparisons";
import { saveComparison } from "@/lib/actions/comparisons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export function ComparisonForm({ initialData, comparisonSlug }: { initialData: any, comparisonSlug: string }) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<ComparisonFormValues>({
    // @ts-ignore
    resolver: zodResolver(comparisonSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      description: "",
      status: "Draft",
    },
  });

  const onSubmit = async (data: ComparisonFormValues) => {
    setIsSaving(true);
    toast.loading("Saving comparison...");
    try {
      const result = await saveComparison(comparisonSlug, data);
      toast.dismiss();
      if (result.success) {
        toast.success("Comparison saved successfully");
        if (comparisonSlug === "new") {
          router.push(`/admin/cms/comparisons/${result.slug}`);
        }
      } else {
        toast.error(result.error || "Failed to save comparison");
      }
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "An error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-8">
        
        {/* Top Header Actions */}
        <div className="flex items-center justify-between bg-white p-4 border rounded-lg sticky top-14 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <Link href="/admin/cms/comparisons">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">{initialData ? initialData.title : "New Comparison"}</h1>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant={form.watch("status") === "Published" ? "default" : "secondary"}>
                  {form.watch("status")}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {initialData && (
              <a href={`/compare-tools/${initialData.slug}`} target="_blank" rel="noreferrer">
                <Button variant="outline" type="button">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </a>
            )}
            <Button type="submit" disabled={isSaving}>
              {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save Changes
            </Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="publishing">Publishing</TabsTrigger>
          </TabsList>

          <div className="mt-6 bg-white p-6 rounded-lg border shadow-sm">
            {/* General Tab */}
            <TabsContent value="general" className="space-y-6 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control as any}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. ChatGPT vs Claude" {...field} />
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
                        <Input placeholder="chatgpt-vs-claude" {...field} />
                      </FormControl>
                      <FormDescription>URL friendly identifier</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control as any}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Detailed comparison description..." 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            {/* Publishing Tab */}
            <TabsContent value="publishing" className="space-y-6 mt-0">
              <FormField
                control={form.control as any}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
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
                    <FormDescription>
                      Controls the visibility of this comparison on the site.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
          </div>
        </Tabs>
      </form>
    </Form>
  );
}
