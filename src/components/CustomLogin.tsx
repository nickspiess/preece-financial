'use client'

import React from 'react'
import Image from 'next/image'

export const CustomLogin: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2C3E51 0%, #3a4f66 50%, #2C3E51 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(98, 112, 138, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(161, 181, 184, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />

      {/* Login Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '450px',
        margin: '0 1rem',
      }}>
        {/* Logo and Branding */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{
            display: 'inline-block',
            background: 'white',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}>
            <Image
              src="/pfp.png"
              alt="Preece Financial Services"
              width={80}
              height={80}
              style={{
                display: 'block',
              }}
            />
          </div>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 600,
            color: 'white',
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-larken), serif',
            letterSpacing: '-0.025em',
          }}>
            Preece Financial Services
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(161, 181, 184, 0.9)',
            fontWeight: 400,
          }}>
            Admin Portal
          </p>
        </div>

        {/* Card Container */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          {/* Welcome Text */}
          <div style={{
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#2C3E51',
              marginBottom: '0.5rem',
            }}>
              Welcome Back
            </h2>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280',
            }}>
              Sign in to manage your website
            </p>
          </div>

          {/* Decorative line */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, #62708A, transparent)',
            marginBottom: '2rem',
          }} />

          {/* The actual Payload login form will be injected here by Payload */}
          <div id="payload-login-form" />

          {/* Footer note */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e5e7eb',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.75rem',
              color: '#9ca3af',
            }}>
              Powered by Payload CMS
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(161, 181, 184, 0.8)',
            fontStyle: 'italic',
          }}>
            Helping your money make sense (and dollars)
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomLogin
