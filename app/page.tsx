import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Share2,
  PenTool,
  BarChart3,
  DollarSign,
  Users,
  Calendar,
  Award,
} from "lucide-react"
import { PostcardGallery } from "@/components/postcard-gallery"
import { PricingTable } from "@/components/pricing-table"
import { FaqAccordion } from "@/components/faq-accordion"
import { ContactForm } from "@/components/contact-form"
import { CampaignPackages } from "@/components/campaign-packages"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-charcoal text-off-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-charcoal/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/postcard-pattern.png')] opacity-20 z-0"></div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your <span className="text-accent-gold">Billboard</span> in a Mailbox
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Get Seen by 10,000+ Homes Across Colorado Springs With Our Stunning 9x12 Postcards
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Get a Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call (719) 210-5182
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="9x12 Postcard Example"
                  className="rounded-md shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg transform rotate-6">
                <p className="font-bold text-lg">Dominates the Mailbox!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Pikes Peak</span> Community Co-op
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "No Contracts",
                description: "Flexible marketing with no long-term commitments",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "No Competition in Your Category",
                description: "Exclusive placement for your business type",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Affordable Rates",
                description: "Reach 10,000+ Homes for a Nickel Each!",
              },
              {
                icon: <PenTool className="h-10 w-10 text-primary" />,
                title: "Hassle-Free Ad Design",
                description: "Professional design services included",
              },
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: "5,000 Bonus Flyers",
                description: "Included with select ad packages",
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "Local Business Experts",
                description: "Colorado Springs focused marketing",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Postcard Options */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Postcard Options</h2>
            <p className="text-xl max-w-2xl mx-auto">Choose the perfect size to make your business stand out</p>
          </div>

          <Tabs defaultValue="9x12" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
              <TabsTrigger
                value="9x12"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                9x12-Inch
              </TabsTrigger>
              <TabsTrigger
                value="6x11"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                6x11-Inch
              </TabsTrigger>
              <TabsTrigger
                value="15x12"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                15x12-Inch
              </TabsTrigger>
              <TabsTrigger
                value="11x17"
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-md"
              >
                11x17-Inch
              </TabsTrigger>
            </TabsList>

            <TabsContent value="9x12" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="9x12-Inch Postcard"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-primary px-4 py-2 rounded-md text-white font-bold mb-2">
                    FLAGSHIP PRODUCT
                  </div>
                  <h3 className="text-3xl font-bold">9x12-Inch Postcard</h3>
                  <p className="text-lg">
                    Our most popular size that dominates the mailbox. This eye-catching format ensures your message
                    won't be missed and provides ample space for compelling offers and stunning visuals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Maximum visibility in the mailbox</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Includes 5,000 bonus flyers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Premium glossy finish</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="6x11" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="6x11-Inch Postcard"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">6x11-Inch Postcard</h3>
                  <p className="text-lg">
                    Compact but bold, this size offers excellent visibility while maintaining a sleek profile. Perfect
                    for focused messaging and special promotions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Efficient size with strong presence</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Cost-effective option</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>High-quality glossy finish</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="15x12" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="15x12-Inch Tabloid"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-accent-gold px-4 py-2 rounded-md text-charcoal font-bold mb-2">
                    EXTRA IMPACT
                  </div>
                  <h3 className="text-3xl font-bold">15x12-Inch Tabloid</h3>
                  <p className="text-lg">
                    Make an oversized statement with our tabloid format. This premium size offers maximum visual impact
                    and space for detailed information, perfect for businesses wanting to showcase multiple services or
                    products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Oversized for maximum impact</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Ample space for detailed content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Premium quality and finish</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="11x17" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="11x17-Inch Directory"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block bg-charcoal/30 px-4 py-2 rounded-md text-white font-bold mb-2">
                    SEASONAL
                  </div>
                  <h3 className="text-3xl font-bold">11x17-Inch Directory</h3>
                  <p className="text-lg">
                    Our directory format is perfect for seasonal campaigns and special events. This versatile size
                    offers excellent visibility and impact for time-sensitive promotions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Ideal for seasonal promotions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Great for multi-page content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-gold mr-2" />
                      <span>Professional finish and quality</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Overview</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Affordable rates with no contracts. Pay only when you're ready to print.
            </p>
          </div>

          <PricingTable />

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-6">
              All 9x12 ads include 5,000 flyers delivered directly to you for further outreach.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Campaign Packages */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90 text-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign Packages</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Consistency builds visibility. Get long-term exposure with multi-card discounts.
            </p>
          </div>

          <CampaignPackages />
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Referral Program"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Share2 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Share and Save</h2>
              </div>
              <p className="text-xl">
                Refer a business and receive up to $100 credit on your next campaign. The more you refer, the more you
                save.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Refer a business that could benefit from our direct mail services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>When they sign up for their first campaign, you'll receive credit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Apply your credit to your next direct mail campaign</span>
                  </li>
                </ol>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white">Start Referring Today</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Design Tips */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design for Impact</h2>
            <p className="text-xl max-w-2xl mx-auto">Tips to make your direct mail campaign more effective</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eye-Catching Offers",
                description:
                  "Use bold promotions like BOGO, $500 off, or Free Service Calls to grab attention immediately.",
                icon: <Award className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Add QR Codes",
                description:
                  "Include QR codes that link to menus, coupons, or your website for easy digital engagement.",
                icon: <BarChart3 className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Color Considerations",
                description:
                  "Avoid dark blue as it tends to print purple! Stick to our recommended color palette for best results.",
                icon: <PenTool className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Clear Call to Action",
                description: "Every postcard should have a clear, compelling call to action that drives response.",
                icon: <ArrowRight className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Contact Information",
                description: "Make your phone number and website prominent and easy to find on your postcard.",
                icon: <Phone className="h-10 w-10 text-accent-gold" />,
              },
              {
                title: "Seasonal Timing",
                description: "Plan your campaigns to align with seasonal needs for your industry for maximum impact.",
                icon: <Calendar className="h-10 w-10 text-accent-gold" />,
              },
            ].map((tip, i) => (
              <Card
                key={i}
                className="bg-charcoal/50 border border-white/10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-4">{tip.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{tip.title}</h3>
                    <p className="text-white/80">{tip.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Examples of successful campaigns we've created for local businesses
            </p>
          </div>

          <PostcardGallery />
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl leading-relaxed">
              Pikes Peak Community Co-op is a Colorado Springs–based direct mail collective helping local businesses
              grow without competing for ad space. We believe in shared success, bold design, and maximum mailbox
              impact.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary/20 p-6 rounded-lg border border-primary/30">
                <h3 className="text-2xl font-bold mb-2">Reach 10,000+ Homes</h3>
                <p className="text-lg">for a Nickel Each!</p>
              </div>
              <div className="bg-primary/20 p-6 rounded-lg border border-primary/30">
                <h3 className="text-2xl font-bold mb-2">Dominates the Mailbox</h3>
                <p className="text-lg">Stand out from the competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl max-w-2xl mx-auto">Everything you need to know about our direct mail services</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90 text-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Your Business in 10,000+ Homes</h2>
              <p className="text-xl mb-8">
                Ready to dominate the mailbox? Contact us today to get started with your direct mail campaign.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call or Text</p>
                    <p className="text-lg font-bold">(719) 210-5182</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email Us</p>
                    <p className="text-lg font-bold">Ad.PPCC9x12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white text-charcoal">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Get a Quote</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
