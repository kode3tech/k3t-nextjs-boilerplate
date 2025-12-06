# Security Policy

## 🔒 Security Features

This project implements comprehensive security measures to protect against common web vulnerabilities:

### HTTP Security Headers

All responses include the following security headers (configured in `next.config.ts`):

- **Strict-Transport-Security (HSTS)**: Forces HTTPS connections for 2 years with preload
- **X-Frame-Options**: Prevents clickjacking attacks (SAMEORIGIN)
- **X-Content-Type-Options**: Prevents MIME type sniffing (nosniff)
- **X-XSS-Protection**: Enables browser XSS filter
- **Referrer-Policy**: Controls referrer information (strict-origin-when-cross-origin)
- **Permissions-Policy**: Restricts browser features (camera, microphone, geolocation)
- **Content-Security-Policy (CSP)**: Strict content loading policies

### Middleware Protection

The middleware (`src/middleware.ts`) includes protection against:

- **CVE-2025-29927 Bypass**: Blocks malicious headers that could bypass authentication
- **Suspicious Headers**: Monitors and blocks requests with known attack patterns
- **Request Logging**: Logs suspicious activity for security monitoring

Blocked headers:

- `x-middleware-subrequest`
- `x-middleware-invoke`
- `x-invoke-path`
- `x-invoke-query`

### Docker Security

Production Docker images follow security best practices:

- **Non-root user**: Runs as `nextjs:nodejs` (UID/GID 1001)
- **Alpine Linux**: Minimal attack surface
- **Multi-stage builds**: Reduced image size and dependencies
- **No development dependencies**: Production image only includes runtime dependencies

## 🛡️ Supported Versions

We actively maintain security updates for the following versions:

| Version | Supported  | Status                           |
| ------- | ---------- | -------------------------------- |
| 1.4.x   | ✅ Yes     | Current - Security Hardened      |
| 1.3.x   | ⚠️ Limited | Update to 1.4.0+ recommended     |
| < 1.3   | ❌ No      | Critical vulnerabilities present |

## 🚨 Security Audit History

### v1.4.0 (December 2025)

**Vulnerabilities Fixed:**

- ✅ **CRITICAL**: Next.js RCE (CVE-2025-29927, CVSS 10.0)
- ✅ **HIGH**: Playwright SSL verification
- ✅ **HIGH**: glob command injection
- ✅ **MODERATE**: js-yaml prototype pollution
- ✅ **MODERATE**: Vite path traversal (multiple CVEs)

**Security Enhancements:**

- ✅ Comprehensive HTTP security headers
- ✅ Middleware authentication bypass protection
- ✅ Updated all dependencies to secure versions

**Audit Result:** 0 known vulnerabilities

## 📋 Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

### 1. **Do Not** Open a Public Issue

Please do not publicly disclose the vulnerability until we've had a chance to address it.

### 2. Report via Private Channels

Send details to: **security@kode3.tech**

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

### 3. What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 1 week
- **Fix Timeline**: Depends on severity
  - Critical: 24-48 hours
  - High: 1 week
  - Medium: 2 weeks
  - Low: 1 month

### 4. Disclosure Policy

- We will work with you to understand and resolve the issue
- We will credit you in the security advisory (unless you prefer anonymity)
- We follow coordinated disclosure practices

## 🔍 Security Best Practices for Users

### Regular Updates

```bash
# Check for vulnerabilities
npm audit

# Update dependencies
npm update

# Check outdated packages
npm outdated
```

### Environment Variables

- Never commit `.env` files
- Use `.env.local` for local development
- Store secrets in secure vaults (e.g., AWS Secrets Manager, Azure Key Vault)
- Rotate credentials regularly

### Docker Security

```bash
# Scan Docker images
docker scan k3t-nextjs-boilerplate:latest

# Run with read-only root filesystem
docker run --read-only k3t-nextjs-boilerplate:latest
```

### Production Deployment

- ✅ Always use HTTPS
- ✅ Enable HTTP/2
- ✅ Configure proper CORS policies
- ✅ Implement rate limiting
- ✅ Use a Web Application Firewall (WAF)
- ✅ Monitor logs for suspicious activity
- ✅ Keep dependencies updated

## 🛠️ Security Testing

### Automated Scans

```bash
# Run security audit
npm audit

# Run tests
npm test

# Build and verify
npm run build
```

### Manual Testing

- Test security headers: https://securityheaders.com
- Test SSL/TLS: https://www.ssllabs.com/ssltest/
- Test CSP: https://csp-evaluator.withgoogle.com/

## 📚 Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [npm Security Best Practices](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)
- [Docker Security](https://docs.docker.com/engine/security/)

## 🏆 Security Recognition

We appreciate security researchers who help keep our project safe. Contributors who report valid security issues will be:

- Credited in security advisories (with permission)
- Listed in our CONTRIBUTORS file
- Offered a letter of recommendation (upon request)

## 📅 Last Updated

This security policy was last updated on: **December 6, 2025**

Version 1.4.0 security audit completed on: **December 6, 2025**
