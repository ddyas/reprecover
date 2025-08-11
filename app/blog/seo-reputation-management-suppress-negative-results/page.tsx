import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SEOReputationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-sky hover:text-sky/80 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">SEO Strategy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            SEO for Reputation Management: Suppressing Negative Search Results
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Advanced SEO techniques to push down negative search results and promote positive content about your brand.
          </p>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Michael Rodriguez
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                December 20, 2023
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                15 min read
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800&text=SEO+Reputation+Management"
            alt="SEO Reputation Management"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Understanding Search Engine Reputation Management (SERM)</h2>
          <p>
            Search Engine Reputation Management (SERM) is the practice of monitoring and influencing your brand's search
            engine results to promote positive content and suppress negative content. Unlike traditional SEO, which
            focuses on driving traffic, SERM focuses on controlling the narrative around your brand.
          </p>

          <h2>The Importance of First Page Control</h2>
          <p>Research shows that:</p>
          <ul>
            <li>75% of users never scroll past the first page of search results</li>
            <li>The first 3 results receive 60% of all clicks</li>
            <li>Negative content on the first page can reduce business by up to 70%</li>
            <li>Most consumers form opinions based on the first 5-7 search results</li>
          </ul>

          <h2>SERM Strategy Framework</h2>

          <h3>Phase 1: Audit and Assessment</h3>
          <p>Before implementing any SERM strategy, conduct a comprehensive audit:</p>
          <ul>
            <li>Search for all variations of your brand name</li>
            <li>Include common misspellings and abbreviations</li>
            <li>Check results for key personnel names</li>
            <li>Analyze the first 3 pages of results</li>
            <li>Categorize results as positive, neutral, or negative</li>
            <li>Identify the source and authority of negative content</li>
          </ul>

          <h3>Phase 2: Content Creation Strategy</h3>
          <p>Create a diverse portfolio of positive content assets:</p>
          <ul>
            <li>
              <strong>Owned Media:</strong> Company website, blog, social profiles
            </li>
            <li>
              <strong>Earned Media:</strong> Press coverage, guest articles, interviews
            </li>
            <li>
              <strong>Third-Party Platforms:</strong> Industry directories, review sites, professional profiles
            </li>
          </ul>

          <h2>Advanced SERM Techniques</h2>

          <h3>1. Strategic Keyword Optimization</h3>
          <p>Target specific keyword combinations that include your brand name:</p>
          <ul>
            <li>[Brand Name] + "reviews"</li>
            <li>[Brand Name] + "complaints"</li>
            <li>[Brand Name] + "scam"</li>
            <li>[Brand Name] + "problems"</li>
            <li>[Brand Name] + industry terms</li>
          </ul>

          <h3>2. Content Multiplication Strategy</h3>
          <p>Create multiple pieces of content around the same topic:</p>
          <ul>
            <li>Blog post on your website</li>
            <li>Guest article on industry site</li>
            <li>Social media posts</li>
            <li>Video content on YouTube</li>
            <li>Podcast appearances</li>
            <li>Press release distribution</li>
          </ul>

          <h3>3. Authority Building</h3>
          <p>Build domain authority and topical authority:</p>
          <ul>
            <li>Consistent, high-quality content publishing</li>
            <li>Strategic internal linking</li>
            <li>Building high-quality backlinks</li>
            <li>Establishing thought leadership</li>
            <li>Industry partnerships and collaborations</li>
          </ul>

          <h2>Platform-Specific SERM Strategies</h2>

          <h3>Google My Business Optimization</h3>
          <ul>
            <li>Complete all profile sections</li>
            <li>Regular posting and updates</li>
            <li>Encourage and respond to reviews</li>
            <li>Use relevant keywords in descriptions</li>
            <li>Add high-quality photos and videos</li>
          </ul>

          <h3>Social Media Optimization</h3>
          <ul>
            <li>Optimize profiles for brand name searches</li>
            <li>Maintain consistent branding across platforms</li>
            <li>Regular, engaging content posting</li>
            <li>Use brand hashtags strategically</li>
            <li>Engage with followers and industry conversations</li>
          </ul>

          <h3>Wikipedia and Knowledge Panels</h3>
          <ul>
            <li>Create or improve Wikipedia entries (following guidelines)</li>
            <li>Optimize for Google Knowledge Panel inclusion</li>
            <li>Ensure accurate information across knowledge bases</li>
            <li>Monitor and correct misinformation</li>
          </ul>

          <h2>Technical SEO for SERM</h2>

          <h3>Website Optimization</h3>
          <ul>
            <li>Fast loading speeds (Core Web Vitals)</li>
            <li>Mobile-responsive design</li>
            <li>SSL certificates and security</li>
            <li>Structured data markup</li>
            <li>XML sitemaps and proper indexing</li>
          </ul>

          <h3>Content Architecture</h3>
          <ul>
            <li>Strategic URL structures</li>
            <li>Optimized title tags and meta descriptions</li>
            <li>Header tag hierarchy (H1, H2, H3)</li>
            <li>Internal linking strategies</li>
            <li>Image optimization and alt text</li>
          </ul>

          <h2>Link Building for SERM</h2>

          <h3>White Hat Link Building Strategies</h3>
          <ul>
            <li>Guest posting on relevant industry sites</li>
            <li>Digital PR and media outreach</li>
            <li>Industry directory submissions</li>
            <li>Partnership and collaboration links</li>
            <li>Resource page link building</li>
            <li>Broken link building</li>
          </ul>

          <h3>Link Quality Factors</h3>
          <ul>
            <li>Domain authority of linking sites</li>
            <li>Relevance to your industry</li>
            <li>Anchor text diversity</li>
            <li>Link placement and context</li>
            <li>Follow vs. nofollow ratio</li>
          </ul>

          <h2>Monitoring and Measurement</h2>

          <h3>Key Metrics to Track</h3>
          <ul>
            <li>Search result rankings for brand terms</li>
            <li>Positive vs. negative result ratios</li>
            <li>Click-through rates to positive content</li>
            <li>Brand mention sentiment</li>
            <li>Website traffic from brand searches</li>
          </ul>

          <h3>Tools for SERM Monitoring</h3>
          <ul>
            <li>Google Search Console</li>
            <li>Google Alerts</li>
            <li>SEMrush or Ahrefs</li>
            <li>Brand monitoring tools</li>
            <li>Social media monitoring platforms</li>
          </ul>

          <h2>Dealing with Persistent Negative Content</h2>

          <h3>When Content Won't Move</h3>
          <p>Sometimes negative content is too authoritative to suppress. In these cases:</p>
          <ul>
            <li>Create response content that provides context</li>
            <li>Focus on surrounding negative results with positive ones</li>
            <li>Consider legal options for defamatory content</li>
            <li>Implement crisis communication strategies</li>
          </ul>

          <h3>Long-term Reputation Building</h3>
          <ul>
            <li>Consistent positive content creation</li>
            <li>Community engagement and thought leadership</li>
            <li>Customer success story amplification</li>
            <li>Industry award and recognition pursuit</li>
            <li>Charitable and community involvement</li>
          </ul>

          <h2>SERM Best Practices</h2>

          <h3>Do's</h3>
          <ul>
            <li>Focus on creating genuinely valuable content</li>
            <li>Maintain consistency across all platforms</li>
            <li>Be patient - SERM results take time</li>
            <li>Monitor results regularly and adjust strategies</li>
            <li>Integrate SERM with overall marketing efforts</li>
          </ul>

          <h3>Don'ts</h3>
          <ul>
            <li>Use black hat SEO techniques</li>
            <li>Create fake or misleading content</li>
            <li>Ignore negative content hoping it will disappear</li>
            <li>Focus only on search engines - consider all platforms</li>
            <li>Expect overnight results</li>
          </ul>

          <h2>Future of SERM</h2>
          <p>SERM continues to evolve with search engine algorithms and user behavior:</p>
          <ul>
            <li>AI and machine learning impact on search results</li>
            <li>Voice search optimization</li>
            <li>Visual search considerations</li>
            <li>Local search importance</li>
            <li>Mobile-first indexing implications</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Effective SERM requires a comprehensive, long-term approach that combines traditional SEO techniques with
            reputation management strategies. Success depends on consistent effort, quality content creation, and
            strategic thinking about how search engines and users interact with your brand.
          </p>
          <p>
            Remember that SERM is not about hiding the truth, but about ensuring that accurate, positive information
            about your brand is easily discoverable and prominently displayed in search results.
          </p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Professional SERM Help?</h3>
          <p className="text-gray-600 mb-6">
            Our SEO and reputation management experts can help you dominate your brand's search results.
          </p>
          <Link href="/quote">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get SEO Analysis
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
