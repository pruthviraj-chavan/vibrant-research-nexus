
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Globe, Bell, Shield, Mail, Palette } from "lucide-react";

export default function SettingsManager() {
  const [siteSettings, setSiteSettings] = useState({
    siteName: "VibrantResearch",
    siteDescription: "A modern platform for academic research and scientific discovery.",
    logoUrl: "/logo.png",
    primaryColor: "#0066CC",
    accentColor: "#6D28D9",
    maintenanceMode: false,
    allowRegistrations: true,
    requireEmailVerification: true,
    defaultPaperStatus: "pending",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setSiteSettings({
      ...siteSettings,
      [field]: value,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">Settings</h1>
        <Button className="rounded-full">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Site Information
                </CardTitle>
                <CardDescription>
                  Basic information about your research publication website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Site Name</label>
                    <Input
                      value={siteSettings.siteName}
                      onChange={(e) => handleChange("siteName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Logo URL</label>
                    <Input
                      value={siteSettings.logoUrl}
                      onChange={(e) => handleChange("logoUrl", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Site Description</label>
                  <Textarea
                    value={siteSettings.siteDescription}
                    onChange={(e) => handleChange("siteDescription", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Default Paper Status</label>
                    <Select 
                      value={siteSettings.defaultPaperStatus}
                      onValueChange={(value) => handleChange("defaultPaperStatus", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select default status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="under_review">Under Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appearance">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  Appearance Settings
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Primary Color</label>
                    <div className="flex space-x-3">
                      <Input
                        type="color"
                        value={siteSettings.primaryColor}
                        onChange={(e) => handleChange("primaryColor", e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input
                        value={siteSettings.primaryColor}
                        onChange={(e) => handleChange("primaryColor", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Accent Color</label>
                    <div className="flex space-x-3">
                      <Input
                        type="color"
                        value={siteSettings.accentColor}
                        onChange={(e) => handleChange("accentColor", e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input
                        value={siteSettings.accentColor}
                        onChange={(e) => handleChange("accentColor", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Configure system and email notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email notifications for new papers</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Send email notifications when new papers are submitted
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email notifications for comments</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Send email notifications when papers receive comments
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Conference reminders</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Send email reminders before upcoming conferences
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Configure security options for your site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Maintenance Mode</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Enable maintenance mode to temporarily disable the site
                      </p>
                    </div>
                    <Switch 
                      checked={siteSettings.maintenanceMode}
                      onCheckedChange={(checked) => handleChange("maintenanceMode", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Allow New Registrations</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Allow users to register new accounts
                      </p>
                    </div>
                    <Switch 
                      checked={siteSettings.allowRegistrations}
                      onCheckedChange={(checked) => handleChange("allowRegistrations", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Require Email Verification</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Require users to verify their email address when registering
                      </p>
                    </div>
                    <Switch 
                      checked={siteSettings.requireEmailVerification}
                      onCheckedChange={(checked) => handleChange("requireEmailVerification", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  SMTP Settings
                </CardTitle>
                <CardDescription>
                  Configure email delivery settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">SMTP Host</label>
                    <Input placeholder="smtp.example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">SMTP Port</label>
                    <Input placeholder="587" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">SMTP Username</label>
                    <Input placeholder="username@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">SMTP Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">From Email Address</label>
                  <Input placeholder="info@vibrantresearch.org" />
                </div>
                <Button className="mt-2">Test SMTP Connection</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
