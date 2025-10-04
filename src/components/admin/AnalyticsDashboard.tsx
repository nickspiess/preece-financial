'use client'

import React, { useState } from 'react'
import './analytics-dashboard.css'

const AnalyticsDashboard: React.FC = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const [timeRange, setTimeRange] = useState('7d')

  // Mock data - replace with real GA data when API is connected
  const mockData = {
    sessions: 2847,
    uniqueVisitors: 1923,
    pageViews: 8421,
    avgSessionDuration: '3m 42s',
    bounceRate: '42.3%',
    sessionsChange: '+12.5%',
    visitorsChange: '+8.3%',
    pageViewsChange: '+15.2%',
    topPages: [
      { page: '/home', views: 1234, sessions: 892, avgTime: '4m 12s' },
      { page: '/blog/financial-planning-tips', views: 987, sessions: 743, avgTime: '6m 23s' },
      { page: '/services', views: 765, sessions: 612, avgTime: '3m 45s' },
      { page: '/about', views: 543, sessions: 421, avgTime: '2m 18s' },
      { page: '/blog/tax-strategies-2024', views: 432, sessions: 334, avgTime: '5m 47s' },
    ],
    blogPosts: [
      { title: 'Financial Planning Tips for 2024', views: 987, uniqueViews: 743, avgTime: '6m 23s', engagement: '78%' },
      { title: 'Tax Strategies for Small Business', views: 432, uniqueViews: 334, avgTime: '5m 47s', engagement: '65%' },
      { title: 'Investment Portfolio Diversification', views: 321, uniqueViews: 256, avgTime: '4m 32s', engagement: '71%' },
      { title: 'Retirement Planning Essentials', views: 298, uniqueViews: 223, avgTime: '7m 12s', engagement: '82%' },
      { title: 'Understanding 401k vs IRA', views: 276, uniqueViews: 198, avgTime: '5m 28s', engagement: '68%' },
    ],
    hourlyViews: [
      { hour: '12am', views: 45 },
      { hour: '3am', views: 23 },
      { hour: '6am', views: 87 },
      { hour: '9am', views: 234 },
      { hour: '12pm', views: 421 },
      { hour: '3pm', views: 398 },
      { hour: '6pm', views: 312 },
      { hour: '9pm', views: 187 },
    ],
    dailySessions: [
      { day: 'Mon', sessions: 412 },
      { day: 'Tue', sessions: 389 },
      { day: 'Wed', sessions: 445 },
      { day: 'Thu', sessions: 398 },
      { day: 'Fri', sessions: 356 },
      { day: 'Sat', sessions: 298 },
      { day: 'Sun', sessions: 287 },
    ],
  }

  if (!GA_MEASUREMENT_ID) {
    return (
      <div className="analytics-dashboard">
        <div className="analytics-container">
          <div className="setup-card">
            <div className="setup-content">
              <svg className="setup-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="setup-title">Analytics Setup Required</h3>
                <p className="setup-description">
                  Enable powerful analytics tracking to monitor your site performance, blog engagement, and visitor behavior.
                </p>
                <div className="setup-steps">
                  <h4>Quick Setup (5 minutes):</h4>
                  <ol>
                    <li>
                      <span className="step-number">1</span>
                      <span>Create a Google Analytics 4 property at <a href="https://analytics.google.com" target="_blank">analytics.google.com</a></span>
                    </li>
                    <li>
                      <span className="step-number">2</span>
                      <span>Copy your Measurement ID (format: G-XXXXXXXXXX)</span>
                    </li>
                    <li>
                      <span className="step-number">3</span>
                      <span>Add to your <code>/.env</code> file:</span>
                    </li>
                  </ol>
                  <div className="setup-code">
                    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
                  </div>
                  <p className="setup-final-step">
                    <strong>4.</strong> Restart your development server
                  </p>
                </div>
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="analytics-btn"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Set Up Google Analytics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const maxSessionValue = Math.max(...mockData.dailySessions.map(d => d.sessions))
  const maxHourlyValue = Math.max(...mockData.hourlyViews.map(d => d.views))

  return (
    <div className="analytics-dashboard">
      <div className="analytics-container">
        {/* Header */}
        <div className="analytics-header">
          <div>
            <h1 className="analytics-title">Analytics Dashboard</h1>
            <p className="analytics-subtitle">Monitor your site performance and visitor behavior</p>
          </div>
          <div className="analytics-controls">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="analytics-select"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <a
              href="https://analytics.google.com/analytics/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="analytics-btn"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open GA4
            </a>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-icon" style={{ background: '#dbeafe' }}>
                <svg style={{ color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="metric-badge">{mockData.sessionsChange}</span>
            </div>
            <p className="metric-label">Site Sessions</p>
            <p className="metric-value">{mockData.sessions.toLocaleString()}</p>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-icon" style={{ background: '#f3e8ff' }}>
                <svg style={{ color: '#9333ea' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="metric-badge">{mockData.visitorsChange}</span>
            </div>
            <p className="metric-label">Unique Visitors</p>
            <p className="metric-value">{mockData.uniqueVisitors.toLocaleString()}</p>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-icon" style={{ background: '#d1fae5' }}>
                <svg style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="metric-badge">{mockData.pageViewsChange}</span>
            </div>
            <p className="metric-label">Page Views</p>
            <p className="metric-value">{mockData.pageViews.toLocaleString()}</p>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-icon" style={{ background: '#fed7aa' }}>
                <svg style={{ color: '#ea580c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="metric-label">Avg. Session</p>
            <p className="metric-value">{mockData.avgSessionDuration}</p>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <div className="metric-icon" style={{ background: '#fecaca' }}>
                <svg style={{ color: '#dc2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="metric-label">Bounce Rate</p>
            <p className="metric-value">{mockData.bounceRate}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-grid">
          {/* Sessions Over Time */}
          <div className="chart-card">
            <h3 className="chart-title">Sessions Over Time</h3>
            <div className="chart-bars">
              {mockData.dailySessions.map((item, index) => (
                <div key={index} className="chart-bar-wrapper">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${(item.sessions / maxSessionValue) * 100}%`,
                      background: 'linear-gradient(to top, #2563eb, #60a5fa)'
                    }}
                  >
                    <div className="chart-bar-tooltip">
                      {item.sessions} sessions
                    </div>
                  </div>
                  <p className="chart-label">{item.day}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Post Views by Time */}
          <div className="chart-card">
            <h3 className="chart-title">Post Views by Time of Day</h3>
            <div className="chart-bars">
              {mockData.hourlyViews.map((item, index) => (
                <div key={index} className="chart-bar-wrapper">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${(item.views / maxHourlyValue) * 100}%`,
                      background: 'linear-gradient(to top, #9333ea, #c084fc)'
                    }}
                  >
                    <div className="chart-bar-tooltip">
                      {item.views} views
                    </div>
                  </div>
                  <p className="chart-label">{item.hour}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Visited Pages */}
        <div className="table-card">
          <h3 className="chart-title">Most Visited Pages</h3>
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Sessions</th>
                <th>Avg. Time</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {mockData.topPages.map((page, index) => (
                <tr key={index}>
                  <td>
                    <span className="page-rank">{index + 1}</span>
                    <span style={{ fontWeight: 500 }}>{page.page}</span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 600 }}>{page.views.toLocaleString()}</td>
                  <td style={{ textAlign: 'right', color: '#6b7280' }}>{page.sessions.toLocaleString()}</td>
                  <td style={{ textAlign: 'right', color: '#6b7280' }}>{page.avgTime}</td>
                  <td style={{ textAlign: 'right' }}>
                    <div className="trend-chart">
                      {[45, 52, 48, 61, 58, 65, 63].map((height, i) => (
                        <div key={i} className="trend-bar" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Blog Performance */}
        <div className="blog-performance">
          <div className="blog-header">
            <h3 className="chart-title">Blog Performance</h3>
            <button className="view-all-btn">View All Posts →</button>
          </div>
          <div className="blog-list">
            {mockData.blogPosts.map((post, index) => {
              const engagementNum = parseInt(post.engagement)
              const badgeClass = engagementNum > 75 ? 'engagement-high' : engagementNum > 60 ? 'engagement-medium' : 'engagement-low'

              return (
                <div key={index} className="blog-item">
                  <div className="blog-item-header">
                    <h4 className="blog-title">{post.title}</h4>
                    <span className={`engagement-badge ${badgeClass}`}>
                      {post.engagement} engaged
                    </span>
                  </div>
                  <div className="blog-metrics">
                    <div>
                      <p className="blog-metric-label">Total Views</p>
                      <p className="blog-metric-value">{post.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="blog-metric-label">Unique Views</p>
                      <p className="blog-metric-value">{post.uniqueViews.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="blog-metric-label">Avg. Read Time</p>
                      <p className="blog-metric-value">{post.avgTime}</p>
                    </div>
                    <div>
                      <p className="blog-metric-label">Engagement</p>
                      <div className="engagement-bar-container">
                        <div className="engagement-bar-bg">
                          <div className="engagement-bar-fill" style={{ width: post.engagement }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
