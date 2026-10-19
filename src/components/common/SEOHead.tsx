import { useEffect } from 'react';
import { COMPANY_INFO } from '../../data/company';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'Organization' | 'Course' | 'FAQPage';
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export function SEOHead({
  title,
  description,
  canonicalPath = '',
  breadcrumbs
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title.includes(COMPANY_INFO.shortName)
      ? title
      : `${title} | ${COMPANY_INFO.brandName}`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update OG Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:url', `https://${COMPANY_INFO.website}${canonicalPath}`);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('content', `https://${COMPANY_INFO.website}${canonicalPath}`);

    // 5. Injected JSON-LD Structured Data
    const scriptId = 'globelink-json-ld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'EducationalOrganization',
          '@id': `https://${COMPANY_INFO.website}/#organization`,
          'name': COMPANY_INFO.brandName,
          'alternateName': COMPANY_INFO.shortName,
          'url': `https://${COMPANY_INFO.website}`,
          'logo': `https://${COMPANY_INFO.website}/logo.png`,
          'description': COMPANY_INFO.headline,
          'telephone': COMPANY_INFO.hotline,
          'email': COMPANY_INFO.primaryEmail,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'No. 33, Janadahara Shopping Complex, Horagolla',
            'addressLocality': 'Nittambuwa',
            'addressRegion': 'Western Province',
            'addressCountry': 'LK'
          },
          'sameAs': [
            COMPANY_INFO.socials.facebookLetsGoJapan,
            COMPANY_INFO.socials.facebookGlobeLink
          ]
        },
        breadcrumbs && breadcrumbs.length > 0
          ? {
              '@type': 'BreadcrumbList',
              '@id': `https://${COMPANY_INFO.website}${canonicalPath}/#breadcrumb`,
              'itemListElement': breadcrumbs.map((b, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': b.name,
                'item': `https://${COMPANY_INFO.website}${b.path}`
              }))
            }
          : null
      ].filter(Boolean)
    };

    scriptEl.textContent = JSON.stringify(structuredData, null, 2);

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath, breadcrumbs]);

  return null;
}
