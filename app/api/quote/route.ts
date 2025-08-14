import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      industry,
      businessSize,
      website,
      currentIssues,
      urgency,
      platforms,
      issueDescription,
      budget,
      timeline,
    } = body

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "RepRecover Quote Form <noreply@reprecover.com>",
      to: ["help@reprecover.com"],
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company}</p>
        
        <h3>Business Details</h3>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Business Size:</strong> ${businessSize}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        <p><strong>Current Issues:</strong> ${currentIssues?.join(", ") || "None specified"}</p>
        <p><strong>Urgency:</strong> ${urgency}</p>
        
        <h3>Specific Requirements</h3>
        <p><strong>Platforms:</strong> ${platforms?.join(", ") || "None specified"}</p>
        <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
        
        <h3>Issue Description</h3>
        <p>${issueDescription || "No description provided"}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Quote form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
