import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CrisisManagementPage() {
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
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Crisis Management
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Crisis Management: What to Do When Your Reputation is Under Attack
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive crisis management playbook for businesses facing reputation threats and negative publicity.
          </p>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Emma Thompson
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                January 5, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                10 min read
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
            src="/placeholder.svg?height=400&width=800&text=Crisis+Management+Strategy"
            alt="Crisis Management Strategy"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Understanding Reputation Crises</h2>
          <p>
            A reputation crisis can strike any business at any time. Whether it's a viral negative review, a social
            media backlash, or a legitimate business mistake that's been amplified online, how you respond in the first
            24-48 hours can determine the long-term impact on your brand.
          </p>

          <h2>The Anatomy of a Reputation Crisis</h2>
          <p>Reputation crises typically follow a predictable pattern:</p>
          <ol>
            <li>
              <strong>Trigger Event:</strong> Something negative happens or is perceived to happen
            </li>
            <li>
              <strong>Initial Spread:</strong> The story begins circulating online
            </li>
            <li>
              <strong>Amplification:</strong> Social media and news outlets pick up the story
            </li>
            <li>
              <strong>Peak Impact:</strong> Maximum negative attention and damage
            </li>
            <li>
              <strong>Resolution:</strong> The crisis either resolves or becomes permanent damage
            </li>
          </ol>

          <h2>The First 24 Hours: Critical Response Steps</h2>

          <h3>Hour 1-2: Assess and Assemble</h3>
          <ul>
            <li>Gather all available facts about the situation</li>
            <li>Assemble your crisis management team</li>
            <li>Identify key stakeholders who need to be informed</li>
            <li>Monitor the spread of the story across all channels</li>
          </ul>

          <h3>Hour 2-6: Develop Your Response Strategy</h3>
          <ul>
            <li>Determine if the allegations are true or false</li>
            <li>Craft key messages for different audiences</li>
            <li>Decide on communication channels and timing</li>
            <li>Prepare holding statements for immediate use</li>
          </ul>

          <h3>Hour 6-24: Execute Your Response</h3>
          <ul>
            <li>Issue initial public statement</li>
            <li>Respond to media inquiries</li>
            <li>Address concerns on social media</li>
            <li>Communicate with employees and stakeholders</li>
          </ul>

          <h2>Crisis Response Strategies by Situation Type</h2>

          <h3>False Accusations or Misinformation</h3>
          <p>
            <strong>Strategy:</strong> Firm but respectful denial with evidence
          </p>
          <ul>
            <li>Provide clear, factual corrections</li>
            <li>Share supporting evidence or documentation</li>
            <li>Avoid emotional or defensive language</li>
            <li>Consider legal action for serious defamation</li>
          </ul>

          <h3>Legitimate Mistakes or Issues</h3>
          <p>
            <strong>Strategy:</strong> Acknowledge, apologize, and act
          </p>
          <ul>
            <li>Take full responsibility for the mistake</li>
            <li>Offer a sincere, specific apology</li>
            <li>Explain what went wrong and why</li>
            <li>Detail concrete steps to prevent recurrence</li>
          </ul>

          <h3>Employee or Partner Misconduct</h3>
          <p>
            <strong>Strategy:</strong> Distance and demonstrate values
          </p>
          <ul>
            <li>Clearly separate the company from the individual</li>
            <li>Take swift disciplinary action</li>
            <li>Reaffirm company values and policies</li>
            <li>Show commitment to preventing similar issues</li>
          </ul>

          <h2>Communication Best Practices During a Crisis</h2>

          <h3>The 3 C's of Crisis Communication</h3>
          <ol>
            <li>
              <strong>Clear:</strong> Use simple, direct language
            </li>
            <li>
              <strong>Consistent:</strong> Maintain the same message across all channels
            </li>
            <li>
              <strong>Compassionate:</strong> Show empathy and understanding
            </li>
          </ol>

          <h3>What TO Do:</h3>
          <ul>
            <li>Respond quickly but thoughtfully</li>
            <li>Be transparent about what you know and don't know</li>
            <li>Show genuine concern for those affected</li>
            <li>Provide regular updates as the situation develops</li>
            <li>Use multiple communication channels</li>
          </ul>

          <h3>What NOT to Do:</h3>
          <ul>
            <li>Ignore the situation hoping it will go away</li>
            <li>Make excuses or blame others</li>
            <li>Provide incomplete or misleading information</li>
            <li>Respond emotionally or defensively</li>
            <li>Make promises you can't keep</li>
          </ul>

          <h2>Digital Crisis Management Tactics</h2>

          <h3>Social Media Management</h3>
          <ul>
            <li>Monitor all social platforms for mentions</li>
            <li>Respond to comments and questions promptly</li>
            <li>Use social listening tools to track sentiment</li>
            <li>Consider temporarily limiting comments if necessary</li>
          </ul>

          <h3>Search Engine Management</h3>
          <ul>
            <li>Create positive content to push down negative results</li>
            <li>Optimize your official response for search engines</li>
            <li>Use press releases and news articles strategically</li>
            <li>Monitor search results for your brand terms</li>
          </ul>

          <h2>Building Your Crisis Management Team</h2>
          <p>Every business should have a pre-designated crisis management team:</p>
          <ul>
            <li>
              <strong>Crisis Leader:</strong> Senior executive with decision-making authority
            </li>
            <li>
              <strong>Communications Lead:</strong> PR or marketing professional
            </li>
            <li>
              <strong>Legal Counsel:</strong> Attorney familiar with your business
            </li>
            <li>
              <strong>Operations Manager:</strong> Someone who understands day-to-day operations
            </li>
            <li>
              <strong>Digital Specialist:</strong> Expert in online reputation management
            </li>
          </ul>

          <h2>Post-Crisis Recovery</h2>
          <p>Once the immediate crisis has passed, focus on long-term recovery:</p>
          <ul>
            <li>Conduct a thorough post-crisis analysis</li>
            <li>Implement promised changes and improvements</li>
            <li>Continue monitoring online sentiment</li>
            <li>Rebuild relationships with stakeholders</li>
            <li>Create positive content to improve search results</li>
          </ul>

          <h2>Prevention: The Best Crisis Management</h2>
          <p>The best crisis management is crisis prevention:</p>
          <ul>
            <li>Maintain high standards of business conduct</li>
            <li>Monitor your online reputation regularly</li>
            <li>Build strong relationships with customers and media</li>
            <li>Have crisis management plans and templates ready</li>
            <li>Train your team on crisis response procedures</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Reputation crises are inevitable in today's digital world, but they don't have to be business-ending events.
            With proper preparation, quick response, and genuine commitment to making things right, businesses can not
            only survive reputation crises but sometimes emerge stronger than before.
          </p>
          <p>Remember: it's not the crisis itself that defines your brand, but how you respond to it.</p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Facing a Reputation Crisis?</h3>
          <p className="text-gray-600 mb-6">
            Our crisis management experts are available 24/7 to help you navigate reputation emergencies.
          </p>
          <Link href="/contact">
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg">
              Get Emergency Help
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
