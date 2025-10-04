import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Add your email sending logic here
    // Options:
    // 1. Send via Resend/SendGrid/etc
    // 2. Save to database
    // 3. Forward to Slack/Discord
    // 4. Integration with CRM

    // For now, just log it (replace with actual email sending)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      message,
      submittedAt: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      message: 'Message sent successfully',
      success: true,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
